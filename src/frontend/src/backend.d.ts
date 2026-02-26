import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CheckIn {
    mood: MoodLabel;
    note?: string;
    timestamp: Time;
}
export interface UserPreferences {
    notificationsEnabled: boolean;
    displayName: string;
    preferredTranslation: BibleTranslation;
}
export type Time = bigint;
export interface BibleBookmark {
    bookName: string;
    verseNumber: bigint;
    chapterNumber: bigint;
    timestamp: Time;
    verseText: string;
}
export interface SavedPrayer {
    prayerId: string;
    prayerTitle: string;
    savedAt: Time;
    category: string;
}
export enum BibleTranslation {
    esv = "esv",
    kjv = "kjv",
    niv = "niv"
}
export enum MoodLabel {
    sad = "sad",
    hopeful = "hopeful",
    anxious = "anxious",
    grateful = "grateful",
    stressed = "stressed"
}
export enum Order {
    less = "less",
    equal = "equal",
    greater = "greater"
}
export interface backendInterface {
    addBookmark(bookName: string, chapterNumber: bigint, verseNumber: bigint, verseText: string): Promise<void>;
    addCheckIn(mood: MoodLabel, note: string | null): Promise<void>;
    compareByTime(a: bigint, b: bigint): Promise<Order>;
    compareText(a: string, b: string): Promise<Order>;
    compareTime(a: bigint, b: bigint): Promise<Order>;
    getBookmarks(): Promise<Array<BibleBookmark>>;
    getCheckInHistory(): Promise<Array<CheckIn>>;
    getLatestCheckIn(): Promise<CheckIn | null>;
    getPreferences(): Promise<UserPreferences>;
    getSavedPrayers(): Promise<Array<SavedPrayer>>;
    removeBookmark(bookName: string, chapterNumber: bigint, verseNumber: bigint): Promise<void>;
    removeSavedPrayer(prayerId: string): Promise<void>;
    savePrayer(prayerId: string, prayerTitle: string, category: string): Promise<void>;
    updatePreferences(preferredTranslation: BibleTranslation, notificationsEnabled: boolean, displayName: string): Promise<void>;
}
