import { useState, useEffect, useRef, useCallback } from "react";
import { Smile, Wind, Book, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { WELLNESS_DATA, type WellnessTopic } from "../data/wellnessData";

type BreathPhase = "idle" | "inhale" | "hold" | "exhale" | "holdout";

const TOPIC_ICONS: Record<WellnessTopic, { emoji: string; color: string; bg: string }> = {
  anxiety: { emoji: "🌊", color: "text-blue-700", bg: "bg-blue-50 border-blue-100" },
  depression: { emoji: "🌅", color: "text-rose-700", bg: "bg-rose-50 border-rose-100" },
  stress: { emoji: "🌿", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-100" },
};

function BreathingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [phase, setPhase] = useState<BreathPhase>("idle");
  const [count, setCount] = useState(0);
  const [cycles, setCycles] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const PHASE_LABELS: Record<BreathPhase, string> = {
    idle: "Press Start",
    inhale: "Breathe In...",
    hold: "Hold...",
    exhale: "Breathe Out...",
    holdout: "Hold...",
  };

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const stopBreathing = useCallback(() => {
    clearTimers();
    setPhase("idle");
    setCount(0);
    setCycles(0);
  }, [clearTimers]);

  const startBreathing = useCallback(() => {
    const phases: BreathPhase[] = ["inhale", "hold", "exhale", "holdout"];
    const duration = 4;
    let phaseIndex = 0;
    setCycles(0);
    const runPhase = () => {
      const currentPhase = phases[phaseIndex % phases.length];
      setPhase(currentPhase);
      setCount(duration);
      intervalRef.current = setInterval(() => {
        setCount((c) => c - 1);
      }, 1000);
      timerRef.current = setTimeout(() => {
        clearInterval(intervalRef.current!);
        phaseIndex++;
        if (phaseIndex % phases.length === 0) {
          setCycles((c) => c + 1);
        }
        runPhase();
      }, duration * 1000);
    };
    runPhase();
  }, []);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  useEffect(() => {
    if (!open) stopBreathing();
  }, [open, stopBreathing]);

  const circleClass = () => {
    if (phase === "inhale") return "scale-150";
    if (phase === "exhale") return "scale-75";
    return "scale-100";
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-sm mx-auto rounded-3xl bg-cream border-warm-dark/20 text-center">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-navy font-semibold text-center">
            Box Breathing
          </DialogTitle>
        </DialogHeader>
        <p className="font-body text-sm text-navy/60 -mt-2 mb-2">
          4-4-4-4 breathing • Calms the nervous system
        </p>

        {/* Breathing circle */}
        <div className="flex items-center justify-center py-8">
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Outer ring */}
            <div
              className={`absolute inset-0 rounded-full border-4 border-gold/40 transition-transform duration-[4000ms] ease-in-out ${circleClass()}`}
            />
            {/* Middle ring */}
            <div
              className={`absolute inset-4 rounded-full bg-gold/10 transition-transform duration-[4000ms] ease-in-out ${circleClass()}`}
            />
            {/* Inner circle */}
            <div
              className={`absolute inset-8 rounded-full bg-gold/30 transition-transform duration-[4000ms] ease-in-out ${circleClass()}`}
            />
            {/* Center */}
            <div className="relative z-10 text-center">
              {phase !== "idle" && (
                <p className="font-body text-2xl font-bold text-navy">{count}</p>
              )}
            </div>
          </div>
        </div>

        <p className="font-display text-xl text-navy font-semibold mb-1">
          {PHASE_LABELS[phase]}
        </p>
        {cycles > 0 && (
          <p className="font-body text-xs text-navy/50">Cycle {cycles} complete</p>
        )}

        <div className="flex gap-3 mt-4">
          {phase === "idle" ? (
            <button
              type="button"
              onClick={startBreathing}
              className="flex-1 py-3 rounded-xl bg-navy text-white font-body font-semibold text-sm transition-colors hover:bg-navy/90"
            >
              <Wind className="w-4 h-4 inline mr-2" />
              Start Breathing
            </button>
          ) : (
            <button
              type="button"
              onClick={stopBreathing}
              className="flex-1 py-3 rounded-xl bg-warm-dark/40 text-navy font-body font-semibold text-sm transition-colors hover:bg-warm-dark/60"
            >
              Stop
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ScriptureCard({ reference, text, context }: { reference: string; text: string; context: string }) {
  return (
    <div className="card-parchment rounded-2xl p-4 border-l-4 border-gold">
      <Badge className="mb-2 bg-gold/15 text-gold-dark border-0 font-body text-xs">{reference}</Badge>
      <blockquote className="font-display text-base italic text-navy leading-snug mb-2">
        "{text}"
      </blockquote>
      <p className="font-body text-xs text-navy/55 leading-relaxed">{context}</p>
    </div>
  );
}

// Inline Badge since we're not importing from shadcn in this scope
function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}

function WellnessSectionContent({ topic }: { topic: WellnessTopic }) {
  const [breathingOpen, setBreathingOpen] = useState(false);
  const section = WELLNESS_DATA.find((s) => s.topic === topic)!;
  const style = TOPIC_ICONS[topic];

  return (
    <div className="space-y-5 px-4 py-5">
      {/* Intro card */}
      <div className={`rounded-2xl p-4 border ${style.bg}`}>
        <span className="text-2xl mb-2 block">{style.emoji}</span>
        <h3 className="font-display text-xl text-navy font-semibold mb-1">{section.heading}</h3>
        <p className="font-body text-sm text-navy/65">{section.intro}</p>
      </div>

      {/* Scripture cards */}
      <div>
        <h4 className="font-body text-xs font-bold text-navy/50 uppercase tracking-widest mb-3">
          Scripture Encouragement
        </h4>
        <div className="space-y-3">
          {section.scriptures.map((s) => (
            <ScriptureCard key={s.reference} {...s} />
          ))}
        </div>
      </div>

      {/* Devotional */}
      <div className="card-parchment rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Book className="w-4 h-4 text-gold" />
          <span className="font-body text-xs font-bold text-gold uppercase tracking-widest">Devotional</span>
        </div>
        {section.devotional.split("\n\n").map((para) => (
          <p key={para.slice(0, 20)} className="font-body text-sm text-navy leading-relaxed mb-3 last:mb-0">
            {para}
          </p>
        ))}
      </div>

      {/* Breathing Exercise */}
      <button
        type="button"
        onClick={() => setBreathingOpen(true)}
        className="w-full flex items-center justify-between bg-gradient-to-r from-teal-600 to-emerald-700 text-white rounded-2xl p-4 transition-opacity hover:opacity-90"
      >
        <div className="flex items-center gap-3">
          <Wind className="w-6 h-6" />
          <div className="text-left">
            <p className="font-body font-semibold text-sm">Breathing Exercise</p>
            <p className="font-body text-xs text-white/70">4-4-4-4 box breathing • ~5 min</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5" />
      </button>

      <BreathingModal open={breathingOpen} onClose={() => setBreathingOpen(false)} />
    </div>
  );
}

export default function Wellness() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-700 to-emerald-900 border-b border-gold/20 sticky top-0 z-40 md:top-[52px]">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-1">
            <Smile className="w-5 h-5 text-gold/80" />
            <h1 className="font-display text-xl text-white font-semibold">Mental Wellness Hub</h1>
          </div>
          <p className="font-body text-xs text-white/60">You are not alone. God is near.</p>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        {/* Mood prompt card */}
        <div className="px-4 py-4">
          <Link
            to="/checkin"
            className="flex items-center justify-between card-parchment rounded-2xl p-4 border-l-4 border-gold"
          >
            <div>
              <p className="font-body text-sm font-semibold text-navy">How are you feeling today?</p>
              <p className="font-body text-xs text-navy/50">Take a moment for your daily check-in</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gold" />
          </Link>
        </div>

        {/* Topics tabs */}
        <Tabs defaultValue="anxiety">
          <TabsList className="w-full rounded-none border-b border-warm-dark/20 bg-white h-10 px-2">
            {(["anxiety", "depression", "stress"] as WellnessTopic[]).map((topic) => (
              <TabsTrigger
                key={topic}
                value={topic}
                className="flex-1 font-body text-sm capitalize data-[state=active]:text-gold rounded-none"
              >
                {TOPIC_ICONS[topic].emoji} {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          {(["anxiety", "depression", "stress"] as WellnessTopic[]).map((topic) => (
            <TabsContent key={topic} value={topic}>
              <WellnessSectionContent topic={topic} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
}
