import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";
import { MoodLabel } from "../backend";

// ============ Bible Bookmarks ============

export function useBookmarks() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["bookmarks"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBookmarks();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddBookmark() {
  const queryClient = useQueryClient();
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (args: {
      bookName: string;
      chapterNumber: bigint;
      verseNumber: bigint;
      verseText: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.addBookmark(
        args.bookName,
        args.chapterNumber,
        args.verseNumber,
        args.verseText
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });
}

export function useRemoveBookmark() {
  const queryClient = useQueryClient();
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (args: {
      bookName: string;
      chapterNumber: bigint;
      verseNumber: bigint;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.removeBookmark(args.bookName, args.chapterNumber, args.verseNumber);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });
}

// ============ Saved Prayers ============

export function useSavedPrayers() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["savedPrayers"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSavedPrayers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSavePrayer() {
  const queryClient = useQueryClient();
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (args: { prayerId: string; prayerTitle: string; category: string }) => {
      if (!actor) throw new Error("Not connected");
      await actor.savePrayer(args.prayerId, args.prayerTitle, args.category);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedPrayers"] });
    },
  });
}

export function useRemoveSavedPrayer() {
  const queryClient = useQueryClient();
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (prayerId: string) => {
      if (!actor) throw new Error("Not connected");
      await actor.removeSavedPrayer(prayerId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedPrayers"] });
    },
  });
}

// ============ Check-Ins ============

export function useLatestCheckIn() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["latestCheckIn"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getLatestCheckIn();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCheckInHistory() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["checkInHistory"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCheckInHistory();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddCheckIn() {
  const queryClient = useQueryClient();
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (args: { mood: MoodLabel; note: string | null }) => {
      if (!actor) throw new Error("Not connected");
      await actor.addCheckIn(args.mood, args.note);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["latestCheckIn"] });
      queryClient.invalidateQueries({ queryKey: ["checkInHistory"] });
    },
  });
}
