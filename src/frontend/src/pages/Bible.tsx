import { useState, useMemo } from "react";
import { BookOpen, Bookmark, Search, X, ChevronDown, BookmarkCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import {
  BIBLE_DATA,
  BIBLE_BOOKS,
  AVAILABLE_CHAPTERS,
  getBibleChapter,
  searchBible,
  type BibleVerse,
} from "../data/bibleData";
import { useBookmarks, useAddBookmark, useRemoveBookmark } from "../hooks/useQueries";

export default function Bible() {
  const [selectedBook, setSelectedBook] = useState("Psalms");
  const [selectedChapter, setSelectedChapter] = useState(23);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const { data: bookmarks = [], isLoading: bookmarksLoading } = useBookmarks();
  const addBookmark = useAddBookmark();
  const removeBookmark = useRemoveBookmark();

  const availableChapters = useMemo(
    () => AVAILABLE_CHAPTERS.filter((c) => c.book === selectedBook),
    [selectedBook]
  );

  const chapterData = useMemo(
    () => getBibleChapter(selectedBook, selectedChapter),
    [selectedBook, selectedChapter]
  );

  const searchResults = useMemo(() => searchBible(debouncedSearch), [debouncedSearch]);

  const isBookmarked = (verse: BibleVerse) =>
    bookmarks.some(
      (b) =>
        b.bookName === verse.book &&
        Number(b.chapterNumber) === verse.chapter &&
        Number(b.verseNumber) === verse.verse
    );

  const toggleBookmark = async (verse: BibleVerse) => {
    if (isBookmarked(verse)) {
      await removeBookmark.mutateAsync({
        bookName: verse.book,
        chapterNumber: BigInt(verse.chapter),
        verseNumber: BigInt(verse.verse),
      });
      toast.success("Bookmark removed");
    } else {
      await addBookmark.mutateAsync({
        bookName: verse.book,
        chapterNumber: BigInt(verse.chapter),
        verseNumber: BigInt(verse.verse),
        verseText: verse.text,
      });
      toast.success("Verse bookmarked!");
    }
  };

  const handleBookChange = (book: string) => {
    setSelectedBook(book);
    const chapters = AVAILABLE_CHAPTERS.filter((c) => c.book === book);
    setSelectedChapter(chapters[0]?.chapter ?? 1);
  };

  const handleSearch = (val: string) => {
    setSearchQuery(val);
    clearTimeout((window as unknown as { _searchTimer?: ReturnType<typeof setTimeout> })._searchTimer);
    (window as unknown as { _searchTimer?: ReturnType<typeof setTimeout> })._searchTimer = setTimeout(() => {
      setDebouncedSearch(val);
    }, 300);
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="page-header-navy sticky top-0 z-40 md:top-[52px]">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-gold" />
            <h1 className="font-display text-xl text-white font-semibold">Holy Bible</h1>
            <Badge className="ml-auto bg-gold/20 text-gold border-gold/30 text-xs font-body">KJV</Badge>
          </div>
          <div className="flex gap-2">
            <Select value={selectedBook} onValueChange={handleBookChange}>
              <SelectTrigger className="flex-1 bg-white/10 border-white/20 text-white text-sm font-body h-9">
                <SelectValue />
                <ChevronDown className="w-3 h-3 ml-auto" />
              </SelectTrigger>
              <SelectContent>
                {BIBLE_BOOKS.map((book) => (
                  <SelectItem key={book} value={book} className="font-body text-sm">
                    {book}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {availableChapters.length > 0 && (
              <Select
                value={String(selectedChapter)}
                onValueChange={(v) => setSelectedChapter(Number(v))}
              >
                <SelectTrigger className="w-24 bg-white/10 border-white/20 text-white text-sm font-body h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {availableChapters.map((c) => (
                    <SelectItem key={c.chapter} value={String(c.chapter)} className="font-body text-sm">
                      Ch. {c.chapter}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-md mx-auto">
        <Tabs defaultValue="read">
          <TabsList className="w-full rounded-none border-b border-warm-dark/20 bg-white h-10 px-4">
            <TabsTrigger value="read" className="flex-1 font-body text-sm data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none">
              Read
            </TabsTrigger>
            <TabsTrigger value="search" className="flex-1 font-body text-sm data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none">
              <Search className="w-3.5 h-3.5 mr-1" />
              Search
            </TabsTrigger>
            <TabsTrigger value="bookmarks" className="flex-1 font-body text-sm data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none">
              <Bookmark className="w-3.5 h-3.5 mr-1" />
              Saved ({bookmarks.length})
            </TabsTrigger>
          </TabsList>

          {/* READ TAB */}
          <TabsContent value="read" className="px-4 py-5">
            {chapterData ? (
              <>
                <h2 className="font-display text-2xl text-navy font-semibold mb-1">
                  {chapterData.book}
                </h2>
                <p className="font-body text-sm text-navy/50 mb-5">Chapter {chapterData.chapter}</p>
                <div className="space-y-4">
                  {chapterData.verses.map((verse) => {
                    const bookmarked = isBookmarked(verse);
                    return (
                      <div
                        key={verse.verse}
                        className="flex gap-3 group animate-fade-up"
                      >
                        <span className="font-body text-xs font-bold text-gold mt-1 min-w-[20px]">
                          {verse.verse}
                        </span>
                        <p className="font-body text-base text-navy leading-relaxed flex-1">
                          {verse.text}
                        </p>
                        <button
                          type="button"
                          onClick={() => toggleBookmark(verse)}
                          className={`shrink-0 mt-1 transition-all duration-200 ${
                            bookmarked ? "text-gold" : "text-navy/20 group-hover:text-navy/40"
                          }`}
                        >
                          {bookmarked ? (
                            <BookmarkCheck className="w-4 h-4 fill-gold" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-10 h-10 text-navy/20 mx-auto mb-3" />
                <p className="font-body text-navy/50">Select a book and chapter to read</p>
                <p className="font-body text-xs text-navy/35 mt-2">
                  Available: {BIBLE_DATA.map(c => `${c.book} ${c.chapter}`).join(", ")}
                </p>
              </div>
            )}
          </TabsContent>

          {/* SEARCH TAB */}
          <TabsContent value="search" className="px-4 py-5">
            <div className="relative mb-5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/40" />
              <Input
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search scripture…"
                className="pl-9 pr-8 font-body bg-white border-warm-dark/30 text-navy"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => { setSearchQuery(""); setDebouncedSearch(""); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/40 hover:text-navy"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {debouncedSearch && searchResults.length === 0 && (
              <p className="font-body text-sm text-navy/50 text-center py-8">No results found</p>
            )}
            <div className="space-y-3">
              {searchResults.map((verse) => {
                const bookmarked = isBookmarked(verse);
                return (
                  <div key={`${verse.book}-${verse.chapter}-${verse.verse}`} className="card-parchment card-parchment-hover rounded-xl p-4">
                    <div className="flex items-start justify-between gap-2">
                      <Badge className="bg-navy/10 text-navy border-0 font-body text-xs shrink-0">
                        {verse.book} {verse.chapter}:{verse.verse}
                      </Badge>
                      <button
                        type="button"
                        onClick={() => toggleBookmark(verse)}
                        className={`transition-colors ${bookmarked ? "text-gold" : "text-navy/30 hover:text-navy"}`}
                      >
                        {bookmarked ? <BookmarkCheck className="w-4 h-4 fill-gold" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="font-body text-sm text-navy mt-2 leading-relaxed">{verse.text}</p>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* BOOKMARKS TAB */}
          <TabsContent value="bookmarks" className="px-4 py-5">
            {bookmarksLoading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => <Skeleton key={i} className="h-20 rounded-xl" />)}
              </div>
            ) : bookmarks.length === 0 ? (
              <div className="text-center py-12">
                <Bookmark className="w-10 h-10 text-navy/20 mx-auto mb-3" />
                <p className="font-body text-navy/50 font-medium">No bookmarks yet</p>
                <p className="font-body text-xs text-navy/35 mt-1">Tap the bookmark icon on any verse to save it</p>
              </div>
            ) : (
              <div className="space-y-3">
                {bookmarks.map((bm) => (
                  <div
                    key={`${bm.bookName}-${bm.chapterNumber}-${bm.verseNumber}`}
                    className="card-parchment card-parchment-hover rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge className="bg-gold/15 text-gold-dark border-0 font-body text-xs">
                        {bm.bookName} {String(bm.chapterNumber)}:{String(bm.verseNumber)}
                      </Badge>
                      <button
                        type="button"
                        onClick={() =>
                          removeBookmark.mutateAsync({
                            bookName: bm.bookName,
                            chapterNumber: bm.chapterNumber,
                            verseNumber: bm.verseNumber,
                          }).then(() => toast.success("Bookmark removed"))
                        }
                        className="text-navy/30 hover:text-red-500 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="font-body text-sm text-navy leading-relaxed">{bm.verseText}</p>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
