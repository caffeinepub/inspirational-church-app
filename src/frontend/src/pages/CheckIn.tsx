import { useState } from "react";
import { CalendarCheck, Star, Loader2, CheckCircle2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { MoodLabel } from "../backend";
import { useLatestCheckIn, useAddCheckIn } from "../hooks/useQueries";
import { DAILY_MOOD_DEVOTIONALS } from "../data/wellnessData";

type MoodOption = {
  label: MoodLabel;
  display: string;
  emoji: string;
  color: string;
  bg: string;
};

const MOODS: MoodOption[] = [
  { label: MoodLabel.hopeful, display: "Hopeful", emoji: "🌟", color: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
  { label: MoodLabel.grateful, display: "Grateful", emoji: "🙏", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
  { label: MoodLabel.anxious, display: "Anxious", emoji: "😰", color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
  { label: MoodLabel.sad, display: "Sad", emoji: "😢", color: "text-rose-700", bg: "bg-rose-50 border-rose-200" },
  { label: MoodLabel.stressed, display: "Stressed", emoji: "😤", color: "text-orange-700", bg: "bg-orange-50 border-orange-200" },
];

const MOOD_DISPLAY: Record<MoodLabel, string> = {
  [MoodLabel.hopeful]: "Hopeful 🌟",
  [MoodLabel.grateful]: "Grateful 🙏",
  [MoodLabel.anxious]: "Anxious 😰",
  [MoodLabel.sad]: "Sad 😢",
  [MoodLabel.stressed]: "Stressed 😤",
};

export default function CheckIn() {
  const [selectedMood, setSelectedMood] = useState<MoodLabel | null>(null);
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { data: latestCheckIn, isLoading } = useLatestCheckIn();
  const addCheckIn = useAddCheckIn();

  const devotional = selectedMood ? DAILY_MOOD_DEVOTIONALS[selectedMood] : null;

  const handleSubmit = async () => {
    if (!selectedMood) return;
    try {
      await addCheckIn.mutateAsync({ mood: selectedMood, note: note || null });
      setSubmitted(true);
      toast.success("Check-in saved! ✨");
    } catch {
      toast.error("Failed to save check-in");
    }
  };

  const isCheckedInToday = latestCheckIn && (() => {
    const ts = Number(latestCheckIn.timestamp);
    const date = new Date(ts / 1_000_000);
    const today = new Date();
    return date.toDateString() === today.toDateString();
  })();

  if (submitted || isCheckedInToday) {
    const mood = submitted ? selectedMood! : latestCheckIn!.mood;
    const dev = DAILY_MOOD_DEVOTIONALS[mood];
    return (
      <main className="min-h-screen bg-cream">
        <div className="bg-gradient-to-br from-amber-600 to-orange-800 border-b border-gold/20 sticky top-0 z-40 md:top-[52px]">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-gold/80" />
              <h1 className="font-display text-xl text-white font-semibold">Daily Check-In</h1>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto px-4 py-6 space-y-5">
          <div className="card-parchment rounded-2xl p-5 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
            <h2 className="font-display text-2xl text-navy font-semibold mb-1">
              {submitted ? "Check-in complete!" : "You've already checked in today"}
            </h2>
            <p className="font-body text-sm text-navy/60">
              Feeling: <strong>{MOOD_DISPLAY[mood]}</strong>
            </p>
          </div>

          {/* Verse of the day */}
          <div className="card-parchment rounded-2xl p-5 border-l-4 border-gold">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="font-body text-xs font-bold text-gold uppercase tracking-widest">
                Your Verse for Today
              </span>
            </div>
            <blockquote className="font-display text-lg italic text-navy leading-snug mb-2">
              "{dev.verse}"
            </blockquote>
            <p className="font-body text-sm font-semibold text-gold">— {dev.reference}</p>
          </div>

          {/* Personalized encouragement */}
          <div className="card-parchment rounded-2xl p-5">
            <h3 className="font-display text-base font-semibold text-navy mb-3">A word for you today</h3>
            <p className="font-body text-sm text-navy/75 leading-relaxed">{dev.encouragement}</p>
          </div>

          {/* Reset button for demo */}
          {submitted && (
            <button
              type="button"
              onClick={() => { setSubmitted(false); setSelectedMood(null); setNote(""); }}
              className="w-full py-3 rounded-xl bg-navy/5 text-navy/50 font-body text-sm font-medium hover:bg-navy/10 transition-colors"
            >
              Check in again
            </button>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-600 to-orange-800 border-b border-gold/20 sticky top-0 z-40 md:top-[52px]">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-1">
            <CalendarCheck className="w-5 h-5 text-gold/80" />
            <h1 className="font-display text-xl text-white font-semibold">Daily Check-In</h1>
          </div>
          <p className="font-body text-xs text-white/60">Begin your day with intention</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {isLoading ? (
          <div className="space-y-3">
            <Skeleton className="h-12 rounded-xl" />
            <Skeleton className="h-40 rounded-2xl" />
          </div>
        ) : (
          <>
            {/* Mood selector */}
            <div>
              <h2 className="font-display text-2xl text-navy font-semibold mb-1">
                How are you feeling?
              </h2>
              <p className="font-body text-sm text-navy/55 mb-4">
                Be honest — God meets you where you are.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {MOODS.map((mood) => {
                  const isSelected = selectedMood === mood.label;
                  return (
                    <button
                      key={mood.label}
                      type="button"
                      onClick={() => setSelectedMood(mood.label)}
                      className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border-2 transition-all duration-200 ${
                        isSelected
                          ? `${mood.bg} border-current ${mood.color} scale-105 shadow-md`
                          : "bg-white/70 border-warm-dark/20 text-navy/60 hover:border-warm-dark/40"
                      }`}
                    >
                      <span className="text-2xl">{mood.emoji}</span>
                      <span className={`font-body text-xs font-semibold ${isSelected ? mood.color : ""}`}>
                        {mood.display}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Devotional reveal */}
            {selectedMood && devotional && (
              <div className="animate-fade-up space-y-4">
                <div className="card-parchment rounded-2xl p-5 border-l-4 border-gold">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-gold fill-gold" />
                    <span className="font-body text-xs font-bold text-gold uppercase tracking-widest">
                      Verse of the Day
                    </span>
                  </div>
                  <blockquote className="font-display text-lg italic text-navy leading-snug mb-2">
                    "{devotional.verse}"
                  </blockquote>
                  <p className="font-body text-sm font-semibold text-gold">— {devotional.reference}</p>
                </div>

                <div className="card-parchment rounded-2xl p-5">
                  <h3 className="font-display text-base font-semibold text-navy mb-2">Encouragement for you</h3>
                  <p className="font-body text-sm text-navy/75 leading-relaxed">{devotional.encouragement}</p>
                </div>
              </div>
            )}

            {/* Optional note */}
            <div>
              <label htmlFor="check-in-note" className="font-body text-sm font-semibold text-navy/70 block mb-2">
                Optional: Write a short prayer or note
              </label>
              <Textarea
                id="check-in-note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Lord, today I am feeling..."
                className="font-body text-sm bg-white border-warm-dark/30 text-navy resize-none min-h-[90px]"
              />
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!selectedMood || addCheckIn.isPending}
              className="w-full py-3.5 rounded-xl bg-navy text-white font-body font-semibold text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-navy/90 active:scale-95"
            >
              {addCheckIn.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <CalendarCheck className="w-4 h-4" />
                  Complete Check-In
                </>
              )}
            </button>
          </>
        )}
      </div>
    </main>
  );
}
