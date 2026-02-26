import { useState } from "react";
import { BookMarked, Play, Book, ChevronDown, CalendarDays, User2, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { SERMONS, SERMON_TOPICS, type Sermon, type SermonTopic } from "../data/sermonsData";

const TOPIC_COLORS: Record<SermonTopic, string> = {
  faith: "bg-blue-100 text-blue-800",
  hope: "bg-purple-100 text-purple-800",
  healing: "bg-teal-100 text-teal-800",
  prayer: "bg-amber-100 text-amber-800",
  family: "bg-rose-100 text-rose-800",
  purpose: "bg-emerald-100 text-emerald-800",
};

function SermonCard({
  sermon,
  onOpen,
}: {
  sermon: Sermon;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className="card-parchment card-parchment-hover rounded-2xl overflow-hidden w-full text-left cursor-pointer group animate-fade-up"
      onClick={onOpen}
    >
      {/* Thumbnail gradient header */}
      <div className={`bg-gradient-to-br ${sermon.thumbnail} h-24 flex items-end p-3`}>
        <Badge className={`${TOPIC_COLORS[sermon.topic]} border-0 text-xs font-body capitalize`}>
          {sermon.topic}
        </Badge>
      </div>

      <div className="p-4">
        <h3 className="font-display text-base font-semibold text-navy leading-snug mb-2">
          {sermon.title}
        </h3>

        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1 text-navy/50">
            <User2 className="w-3 h-3" />
            <span className="font-body text-xs">{sermon.speaker}</span>
          </div>
          <div className="flex items-center gap-1 text-navy/50">
            <CalendarDays className="w-3 h-3" />
            <span className="font-body text-xs">{sermon.date}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <Book className="w-3 h-3 text-gold" />
          <span className="font-body text-xs text-gold font-medium">{sermon.scripture}</span>
        </div>

        <p className="font-body text-xs text-navy/60 leading-relaxed mb-3 line-clamp-2">
          {sermon.description}
        </p>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onOpen(); }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-navy text-white font-body text-xs font-semibold transition-colors hover:bg-navy/90"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            Listen
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onOpen(); }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-warm-dark/30 text-navy font-body text-xs font-semibold transition-colors hover:bg-warm-dark/50"
          >
            <Book className="w-3.5 h-3.5" />
            Read
          </button>
        </div>
      </div>
    </button>
  );
}

function SermonSheet({
  sermon,
  onClose,
}: {
  sermon: Sermon | null;
  onClose: () => void;
}) {
  if (!sermon) return null;
  return (
    <Sheet open={!!sermon} onOpenChange={(o) => !o && onClose()}>
      <SheetContent side="bottom" className="rounded-t-3xl bg-cream border-0 max-h-[85vh] overflow-y-auto">
        <SheetHeader className="mb-4">
          <div className={`bg-gradient-to-br ${sermon.thumbnail} rounded-xl h-20 flex items-end p-3 -mx-4 -mt-2 mb-4`}>
            <Badge className={`${TOPIC_COLORS[sermon.topic]} border-0 text-xs font-body capitalize`}>
              {sermon.topic}
            </Badge>
          </div>
          <SheetTitle className="font-display text-2xl text-navy font-semibold text-left leading-snug">
            {sermon.title}
          </SheetTitle>
          <div className="flex items-center gap-3 text-navy/50 flex-wrap">
            <div className="flex items-center gap-1">
              <User2 className="w-3.5 h-3.5" />
              <span className="font-body text-sm">{sermon.speaker}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-3.5 h-3.5" />
              <span className="font-body text-sm">{sermon.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <ChevronDown className="w-3.5 h-3.5" />
              <span className="font-body text-sm">{sermon.duration}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Book className="w-3.5 h-3.5 text-gold" />
            <span className="font-body text-sm text-gold font-medium">{sermon.scripture}</span>
          </div>
        </SheetHeader>

        <div className="mb-6">
          <h4 className="font-body text-xs font-bold text-navy/50 uppercase tracking-widest mb-3">About This Message</h4>
          <p className="font-body text-sm text-navy/80 leading-relaxed">{sermon.description}</p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-navy text-white font-body font-semibold text-sm transition-colors hover:bg-navy/90"
          >
            <Play className="w-4 h-4 fill-white" />
            Listen Now
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-warm-dark/30 text-navy font-body font-semibold text-sm transition-colors hover:bg-warm-dark/50"
          >
            <Book className="w-4 h-4" />
            Read Transcript
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-3 rounded-xl bg-warm-dark/20 text-navy transition-colors hover:bg-warm-dark/40"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function Sermons() {
  const [activeTopic, setActiveTopic] = useState<SermonTopic | "all">("all");
  const [openSermon, setOpenSermon] = useState<Sermon | null>(null);

  const filtered = SERMONS.filter(
    (s) => activeTopic === "all" || s.topic === activeTopic
  );

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-700 to-slate-900 border-b border-gold/20 sticky top-0 z-40 md:top-[52px]">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-1">
            <BookMarked className="w-5 h-5 text-gold/80" />
            <h1 className="font-display text-xl text-white font-semibold">Sermon Library</h1>
          </div>
          <p className="font-body text-xs text-white/60">{SERMONS.length} messages to inspire your faith</p>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        {/* Topic filter chips */}
        <div className="px-4 py-3 flex gap-2 overflow-x-auto border-b border-warm-dark/15">
          {SERMON_TOPICS.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setActiveTopic(t.value as SermonTopic | "all")}
              className={`shrink-0 px-3.5 py-1.5 rounded-full font-body text-xs font-semibold transition-all duration-200 ${
                activeTopic === t.value
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white/80 text-navy/60 hover:bg-white border border-warm-dark/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="px-4 py-4 grid grid-cols-1 gap-4">
          {filtered.map((sermon) => (
            <SermonCard
              key={sermon.id}
              sermon={sermon}
              onOpen={() => setOpenSermon(sermon)}
            />
          ))}
        </div>
      </div>

      <SermonSheet sermon={openSermon} onClose={() => setOpenSermon(null)} />
    </main>
  );
}
