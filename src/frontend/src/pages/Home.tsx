import { Link } from "@tanstack/react-router";
import {
  BookOpen, Heart, Smile, BookMarked, Church, CalendarCheck,
  Cross, Download, Star, ArrowRight
} from "lucide-react";

// FIX #2: All features use brand-unified treatment — no rainbow gradients
const FEATURES = [
  { to: "/bible",    icon: BookOpen,    label: "Bible",     description: "Read & explore" },
  { to: "/prayers",  icon: Heart,       label: "Prayers",   description: "Find your prayer" },
  { to: "/wellness", icon: Smile,       label: "Wellness",  description: "Peace of mind" },
  { to: "/sermons",  icon: BookMarked,  label: "Sermons",   description: "Be inspired" },
  { to: "/churches", icon: Church,      label: "Churches",  description: "Find community" },
  { to: "/checkin",  icon: CalendarCheck, label: "Check-In", description: "Daily devotion" },
];

const VERSE_OF_DAY = {
  text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
  reference: "Jeremiah 29:11"
};

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ============================================================
          FIX #1: Hero — greater scale, golden halo, grain atmosphere
          ============================================================ */}
      <section className="relative bg-hero-gradient hero-grain overflow-hidden">

        {/* Soft radial haze layers */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-white/4 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-gold/8 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-md mx-auto px-5 pt-12 pb-14 text-center">

          {/* Cross with golden halo — signature detail */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full icon-halo mb-6 animate-float">
            <Cross className="w-9 h-9 text-gold drop-shadow-[0_0_8px_rgba(201,168,76,0.6)]" />
          </div>

          {/* Eyebrow label */}
          <p className="font-body text-xs font-semibold text-gold/80 uppercase tracking-[0.2em] mb-3 animate-fade-up">
            Your Spiritual Companion
          </p>

          {/* FIX #1: Headline at text-5xl + italic sub-word for visual hierarchy */}
          <h1 className="font-display font-semibold leading-none mb-4 animate-fade-up animate-delay-100">
            <span className="block text-5xl text-white tracking-tight">Faith, Hope</span>
            <span className="block text-6xl text-gold-shimmer italic mt-1 tracking-tight">& Healing</span>
          </h1>

          <p className="font-body text-white/70 text-base leading-relaxed mb-8 animate-fade-up animate-delay-200 max-w-[280px] mx-auto">
            Your daily spiritual companion for peace, strength, and renewal.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 justify-center animate-fade-up animate-delay-300">
            <Link
              to="/checkin"
              className="flex items-center gap-2 bg-gold text-navy font-body font-bold text-sm px-6 py-3 rounded-full shadow-gold-glow transition-all duration-200 hover:scale-105 hover:shadow-[0_0_0_1px_oklch(var(--gold)/0.4),0_6px_28px_oklch(var(--gold)/0.45)]"
            >
              <Star className="w-4 h-4 fill-navy/30" />
              Daily Check-In
            </Link>
            <Link
              to="/bible"
              className="flex items-center gap-2 bg-white/12 backdrop-blur-sm text-white font-body font-medium text-sm px-6 py-3 rounded-full border border-white/20 transition-all duration-200 hover:bg-white/22 hover:border-white/35"
            >
              <BookOpen className="w-4 h-4" />
              Read Bible
            </Link>
          </div>
        </div>

        {/* Bottom wave fade into page */}
        <div className="h-8 bg-gradient-to-b from-transparent to-cream" />
      </section>

      {/* ============================================================
          FIX #1 + #3: Verse of the Day — bold gold top-border + deep shadow
          ============================================================ */}
      <section className="max-w-md mx-auto px-4 -mt-2 relative z-10">
        <div className="verse-card rounded-2xl p-6">
          <div className="flex items-center gap-2.5 mb-4">
            <Star className="w-4 h-4 text-gold fill-gold shrink-0" />
            <span className="font-body text-xs font-bold text-gold uppercase tracking-[0.15em]">
              Verse of the Day
            </span>
          </div>
          <blockquote className="font-display text-xl text-navy leading-snug italic mb-3">
            "{VERSE_OF_DAY.text}"
          </blockquote>
          <p className="font-body text-sm font-semibold text-gold">— {VERSE_OF_DAY.reference}</p>
        </div>
      </section>

      {/* ============================================================
          FIX #2: Feature grid — brand-unified tile system (navy + gold)
          ============================================================ */}
      <section className="max-w-md mx-auto px-4 pt-8 pb-4">
        <h2 className="font-display text-2xl text-navy font-semibold mb-1 px-1">Explore</h2>
        <p className="font-body text-xs text-navy/45 mb-4 px-1">Everything you need for your faith journey</p>
        <div className="grid grid-cols-3 gap-3">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <Link
                key={feat.to}
                to={feat.to}
                className="feature-tile rounded-2xl p-4 flex flex-col items-center text-center gap-2.5 animate-fade-up group"
                style={{ animationDelay: `${0.05 + i * 0.07}s` }}
              >
                <div className="feature-tile-icon w-11 h-11 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="feature-tile-label font-body text-xs font-bold text-navy transition-colors duration-200">
                    {feat.label}
                  </p>
                  <p className="feature-tile-desc font-body text-[10px] text-navy/45 leading-tight transition-colors duration-200">
                    {feat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          Quick links — mood + wellness
          ============================================================ */}
      <section className="max-w-md mx-auto px-4 pt-2 pb-4">
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/checkin"
            className="card-parchment card-parchment-hover rounded-xl p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gold/12 flex items-center justify-center shrink-0">
              <CalendarCheck className="w-5 h-5 text-gold" />
            </div>
            <div className="min-w-0">
              <p className="font-body text-sm font-semibold text-navy leading-snug">How are you feeling?</p>
              <p className="font-body text-xs text-navy/45 flex items-center gap-1 mt-0.5">
                Check in <ArrowRight className="w-3 h-3" />
              </p>
            </div>
          </Link>
          <Link
            to="/wellness"
            className="card-parchment card-parchment-hover rounded-xl p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
              <Smile className="w-5 h-5 text-teal-600" />
            </div>
            <div className="min-w-0">
              <p className="font-body text-sm font-semibold text-navy leading-snug">Wellness Hub</p>
              <p className="font-body text-xs text-navy/45 flex items-center gap-1 mt-0.5">
                Find peace <ArrowRight className="w-3 h-3" />
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ============================================================
          App Download
          ============================================================ */}
      <section className="max-w-md mx-auto px-4 py-4 mb-4">
        <div className="bg-navy-gradient rounded-2xl p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/4 rounded-full -translate-y-12 translate-x-12 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-8 w-24 h-24 bg-gold/8 rounded-full translate-y-8 blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-3">
              <Download className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display text-xl text-white font-semibold mb-1">Download the App</h3>
            <p className="font-body text-white/55 text-sm mb-5">Take your faith journey everywhere</p>
            <div className="flex flex-col gap-3 items-center">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black/80 border border-white/10 text-white font-body font-semibold text-sm px-6 py-3 rounded-xl w-full max-w-[220px] justify-center transition-all hover:bg-black hover:border-white/20"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" aria-hidden="true">
                  <title>Apple App Store</title>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-emerald-700/80 border border-emerald-600/30 text-white font-body font-semibold text-sm px-6 py-3 rounded-xl w-full max-w-[220px] justify-center transition-all hover:bg-emerald-700 hover:border-emerald-500/50"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" aria-hidden="true">
                  <title>Google Play Store</title>
                  <path d="M3.18 23.76a2 2 0 0 1-.79-1.69V1.93a2 2 0 0 1 .79-1.69l.1-.06 11.62 11.62v.27L3.28 23.82l-.1-.06zm15.07-8.22-3.08-3.08-.04-.04v-.27l3.12-3.12.07.04 3.64 2.07c1.04.59 1.04 1.56 0 2.15l-3.64 2.08-.07.17zm-3.08-3.12L3.58 24l-.39-.22 11.78-11.78.2.42zm0-7.08.2-.42L3.58 0l-.39.22L14.79 11.8l.38-.46z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-4 py-4 pb-24 md:pb-8 text-center">
        <p className="font-body text-xs text-navy/35">
          © 2026. Built with{" "}
          <Heart className="inline w-3 h-3 text-gold fill-gold" />{" "}
          using{" "}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </main>
  );
}
