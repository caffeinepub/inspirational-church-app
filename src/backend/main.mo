import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type BibleBookmark = {
    bookName : Text;
    chapterNumber : Nat;
    verseNumber : Nat;
    verseText : Text;
    timestamp : Time.Time;
  };

  type SavedPrayer = {
    prayerId : Text;
    prayerTitle : Text;
    category : Text;
    savedAt : Time.Time;
  };

  type MoodLabel = {
    #anxious;
    #grateful;
    #sad;
    #hopeful;
    #stressed;
  };

  type CheckIn = {
    mood : MoodLabel;
    note : ?Text;
    timestamp : Time.Time;
  };

  type BibleTranslation = {
    #kjv;
    #niv;
    #esv;
  };

  type UserPreferences = {
    preferredTranslation : BibleTranslation;
    notificationsEnabled : Bool;
    displayName : Text;
  };

  type UserData = {
    bookmarks : List.List<BibleBookmark>;
    savedPrayers : List.List<SavedPrayer>;
    checkIns : List.List<CheckIn>;
    preferences : UserPreferences;
  };

  module CheckIn {
    public func compareByTimestamp(checkIn1 : CheckIn, checkIn2 : CheckIn) : Order.Order {
      Int.compare(checkIn2.timestamp, checkIn1.timestamp);
    };
  };

  let users = Map.empty<Principal, UserData>();

  // Helper function to get or create user data
  func getUserData(caller : Principal) : UserData {
    switch (users.get(caller)) {
      case (?userData) { userData };
      case (null) {
        let newUserData : UserData = {
          bookmarks = List.empty<BibleBookmark>();
          savedPrayers = List.empty<SavedPrayer>();
          checkIns = List.empty<CheckIn>();
          preferences = {
            preferredTranslation = #kjv;
            notificationsEnabled = true;
            displayName = "Anonymous";
          };
        };
        users.add(caller, newUserData);
        newUserData;
      };
    };
  };

  // Bible Bookmarks CRUD
  public shared ({ caller }) func addBookmark(bookName : Text, chapterNumber : Nat, verseNumber : Nat, verseText : Text) : async () {
    let userData = getUserData(caller);
    let bookmark : BibleBookmark = {
      bookName;
      chapterNumber;
      verseNumber;
      verseText;
      timestamp = Time.now();
    };
    userData.bookmarks.add(bookmark);
    users.add(caller, userData);
  };

  public query ({ caller }) func getBookmarks() : async [BibleBookmark] {
    let userData = getUserData(caller);
    userData.bookmarks.toArray();
  };

  public shared ({ caller }) func removeBookmark(bookName : Text, chapterNumber : Nat, verseNumber : Nat) : async () {
    let userData = getUserData(caller);
    let filtered = userData.bookmarks.filter(
      func(b) {
        not (b.bookName == bookName and b.chapterNumber == chapterNumber and b.verseNumber == verseNumber);
      }
    );
    userData.bookmarks.clear();
    userData.bookmarks.addAll(filtered.values());
    users.add(caller, userData);
  };

  // Saved Prayers CRUD
  public shared ({ caller }) func savePrayer(prayerId : Text, prayerTitle : Text, category : Text) : async () {
    let userData = getUserData(caller);
    let savedPrayer : SavedPrayer = {
      prayerId;
      prayerTitle;
      category;
      savedAt = Time.now();
    };
    userData.savedPrayers.add(savedPrayer);
    users.add(caller, userData);
  };

  public query ({ caller }) func getSavedPrayers() : async [SavedPrayer] {
    let userData = getUserData(caller);
    userData.savedPrayers.toArray();
  };

  public shared ({ caller }) func removeSavedPrayer(prayerId : Text) : async () {
    let userData = getUserData(caller);
    let filtered = userData.savedPrayers.filter(
      func(p) {
        not (p.prayerId == prayerId);
      }
    );
    userData.savedPrayers.clear();
    userData.savedPrayers.addAll(filtered.values());
    users.add(caller, userData);
  };

  // Daily Check-In
  public shared ({ caller }) func addCheckIn(mood : MoodLabel, note : ?Text) : async () {
    let userData = getUserData(caller);
    let checkIn : CheckIn = {
      mood;
      note;
      timestamp = Time.now();
    };

    userData.checkIns.add(checkIn);

    // Keep only the latest 30 check-ins
    while (userData.checkIns.size() > 30) {
      ignore userData.checkIns.removeLast();
    };

    users.add(caller, userData);
  };

  public query ({ caller }) func getLatestCheckIn() : async ?CheckIn {
    let userData = getUserData(caller);
    userData.checkIns.first();
  };

  public query ({ caller }) func getCheckInHistory() : async [CheckIn] {
    let userData = getUserData(caller);
    let checkInsArray = userData.checkIns.toArray();
    checkInsArray.sort(CheckIn.compareByTimestamp);
  };

  // User Preferences
  public query ({ caller }) func getPreferences() : async UserPreferences {
    let userData = getUserData(caller);
    userData.preferences;
  };

  public shared ({ caller }) func updatePreferences(preferredTranslation : BibleTranslation, notificationsEnabled : Bool, displayName : Text) : async () {
    let userData = getUserData(caller);
    let updatedUserData : UserData = {
      bookmarks = userData.bookmarks;
      savedPrayers = userData.savedPrayers;
      checkIns = userData.checkIns;
      preferences = {
        preferredTranslation;
        notificationsEnabled;
        displayName;
      };
    };
    users.add(caller, updatedUserData);
  };

  // Helper functions for external processing
  public query ({ caller }) func compareText(a : Text, b : Text) : async Order.Order {
    Text.compare(a, b);
  };

  public query ({ caller }) func compareTime(a : Int, b : Int) : async Order.Order {
    Int.compare(a, b);
  };

  public query ({ caller }) func compareByTime(a : Int, b : Int) : async Order.Order {
    Int.compare(b, a);
  };
};
