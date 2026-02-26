import { useState } from "react";
import { Heart, HeartHandshake, X, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import {
  PRAYERS,
  PRAYER_CATEGORIES,
  type Prayer,
  type PrayerCategory,
} from "../data/prayersData";
import { useSavedPrayers, useSavePrayer, useRemoveSavedPrayer } from "../hooks/useQueries";

const CATEGORY_COLORS: Record<PrayerCategory, string> = {
  morning: "bg-amber-100 text-amber-800",
  evening: "bg-indigo-100 text-indigo-800",
  gratitude: "bg-emerald-100 text-emerald-800",
  healing: "bg-rose-100 text-rose-800",
  strength: "bg-orange-100 text-orange-800",
  protection: "bg-blue-100 text-blue-800",
  peace: "bg-teal-100 text-teal-800",
};

function PrayerCard({
  prayer,
  isSaved,
  onToggleSave,
  onOpen,
}: {
  prayer: Prayer;
  isSaved: boolean;
  onToggleSave: () => void;
  onOpen: () => void;
}) {
  const lines = prayer.text.split("\n")[0];
  const preview = lines.length > 120 ? lines.slice(0, 120) + "…" : lines;

  return (
    <div className="card-parchment card-parchment-hover rounded-2xl p-4 animate-fade-up">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex-1">
          <h3 className="font-display text-base font-semibold text-navy leading-snug mb-1.5">
            {prayer.title}
          </h3>
          <Badge className={`${CATEGORY_COLORS[prayer.category]} border-0 text-xs font-body capitalize`}>
            {prayer.category}
          </Badge>
        </div>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onToggleSave(); }}
          className={`shrink-0 mt-0.5 transition-all duration-200 hover:scale-110 ${
            isSaved ? "text-rose-500" : "text-navy/25 hover:text-rose-400"
          }`}
        >
          <Heart className={`w-5 h-5 ${isSaved ? "fill-rose-500" : ""}`} />
        </button>
      </div>
      <p className="font-body text-sm text-navy/65 leading-relaxed mb-3">{preview}</p>
      {prayer.scripture && (
        <div className="flex items-center gap-1.5 mb-3">
          <BookOpen className="w-3 h-3 text-gold" />
          <span className="font-body text-xs text-gold font-medium">{prayer.scripture}</span>
        </div>
      )}
      <button
        type="button"
        onClick={onOpen}
        className="w-full py-2 rounded-xl bg-navy/5 hover:bg-navy/10 text-navy font-body text-sm font-medium transition-colors duration-200"
      >
        Read Full Prayer
      </button>
    </div>
  );
}

function PrayerModal({
  prayer,
  isSaved,
  onToggleSave,
  onClose,
}: {
  prayer: Prayer | null;
  isSaved: boolean;
  onToggleSave: () => void;
  onClose: () => void;
}) {
  if (!prayer) return null;
  return (
    <Dialog open={!!prayer} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-sm mx-auto rounded-3xl bg-cream border-warm-dark/20 max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-2 mt-2">
            <div className="flex-1">
              <Badge className={`${CATEGORY_COLORS[prayer.category]} border-0 text-xs font-body capitalize mb-2`}>
                {prayer.category}
              </Badge>
              <DialogTitle className="font-display text-xl text-navy font-semibold leading-snug text-left">
                {prayer.title}
              </DialogTitle>
            </div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onToggleSave(); }}
              className={`shrink-0 transition-all duration-200 hover:scale-110 ${
                isSaved ? "text-rose-500" : "text-navy/30 hover:text-rose-400"
              }`}
            >
              <Heart className={`w-5 h-5 ${isSaved ? "fill-rose-500" : ""}`} />
            </button>
          </div>
          {prayer.scripture && (
            <div className="flex items-center gap-1.5 pt-1">
              <BookOpen className="w-3.5 h-3.5 text-gold" />
              <span className="font-body text-sm text-gold font-medium">{prayer.scripture}</span>
            </div>
          )}
        </DialogHeader>
        <div className="space-y-3 mt-2">
          {prayer.text.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 20)} className="font-body text-sm text-navy leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          <button
            type="button"
            onClick={onToggleSave}
            className={`flex-1 py-2.5 rounded-xl font-body text-sm font-semibold transition-all duration-200 ${
              isSaved
                ? "bg-rose-50 text-rose-600 border border-rose-200"
                : "bg-navy text-white hover:bg-navy/90"
            }`}
          >
            {isSaved ? "Remove from Favorites" : "Save to Favorites"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-warm-dark/30 text-navy font-body text-sm font-medium hover:bg-warm-dark/50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Prayers() {
  const [activeCategory, setActiveCategory] = useState<PrayerCategory | "all">("all");
  const [openPrayer, setOpenPrayer] = useState<Prayer | null>(null);

  const { data: savedPrayers = [], isLoading } = useSavedPrayers();
  const savePrayer = useSavePrayer();
  const removeSavedPrayer = useRemoveSavedPrayer();

  const filteredPrayers = PRAYERS.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const isSaved = (prayer: Prayer) => savedPrayers.some((sp) => sp.prayerId === prayer.id);

  const toggleSave = async (prayer: Prayer) => {
    if (isSaved(prayer)) {
      await removeSavedPrayer.mutateAsync(prayer.id);
      toast.success("Removed from favorites");
    } else {
      await savePrayer.mutateAsync({
        prayerId: prayer.id,
        prayerTitle: prayer.title,
        category: prayer.category,
      });
      toast.success("Saved to favorites!");
    }
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="page-header-navy sticky top-0 z-40 md:top-[52px]">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-gold" />
            <h1 className="font-display text-xl text-white font-semibold">Inspirational Prayers</h1>
          </div>
          <p className="font-body text-xs text-white/55 mt-1">A treasury of prayers for every season</p>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <Tabs defaultValue="all">
          <TabsList className="w-full rounded-none border-b border-warm-dark/20 bg-white h-10 px-4">
            <TabsTrigger value="all" className="flex-1 font-body text-sm data-[state=active]:text-gold rounded-none">
              Browse
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex-1 font-body text-sm data-[state=active]:text-gold rounded-none">
              <HeartHandshake className="w-3.5 h-3.5 mr-1" />
              Favorites ({savedPrayers.length})
            </TabsTrigger>
          </TabsList>

          {/* BROWSE TAB */}
          <TabsContent value="all" className="px-4 py-4">
            {/* Category filter chips */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
              {PRAYER_CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveCategory(cat.value as PrayerCategory | "all")}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full font-body text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat.value
                      ? "bg-navy text-white shadow-sm"
                      : "bg-white/80 text-navy/60 hover:bg-white border border-warm-dark/30"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {filteredPrayers.map((prayer) => (
                <PrayerCard
                  key={prayer.id}
                  prayer={prayer}
                  isSaved={isSaved(prayer)}
                  onToggleSave={() => toggleSave(prayer)}
                  onOpen={() => setOpenPrayer(prayer)}
                />
              ))}
            </div>
          </TabsContent>

          {/* FAVORITES TAB */}
          <TabsContent value="favorites" className="px-4 py-4">
            {isLoading ? (
              <div className="space-y-3">
                {[1, 2].map((i) => <Skeleton key={i} className="h-28 rounded-2xl" />)}
              </div>
            ) : savedPrayers.length === 0 ? (
              <div className="text-center py-12">
                <HeartHandshake className="w-10 h-10 text-navy/20 mx-auto mb-3" />
                <p className="font-body text-navy/50 font-medium">No favorites yet</p>
                <p className="font-body text-xs text-navy/35 mt-1">Tap the heart icon on any prayer to save it</p>
              </div>
            ) : (
              <div className="space-y-3">
                {savedPrayers.map((sp) => {
                  const fullPrayer = PRAYERS.find((p) => p.id === sp.prayerId);
                  if (!fullPrayer) {
                    return (
                      <div key={sp.prayerId} className="card-parchment rounded-2xl p-4">
                        <h3 className="font-display text-base font-semibold text-navy">{sp.prayerTitle}</h3>
                        <Badge className={`${CATEGORY_COLORS[sp.category as PrayerCategory] || ""} border-0 text-xs font-body capitalize mt-1`}>
                          {sp.category}
                        </Badge>
                      </div>
                    );
                  }
                  return (
                    <PrayerCard
                      key={sp.prayerId}
                      prayer={fullPrayer}
                      isSaved={true}
                      onToggleSave={() => toggleSave(fullPrayer)}
                      onOpen={() => setOpenPrayer(fullPrayer)}
                    />
                  );
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal */}
      <PrayerModal
        prayer={openPrayer}
        isSaved={openPrayer ? isSaved(openPrayer) : false}
        onToggleSave={() => openPrayer && toggleSave(openPrayer)}
        onClose={() => setOpenPrayer(null)}
      />
    </main>
  );
}
