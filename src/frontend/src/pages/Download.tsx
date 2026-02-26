import { Download, Star, Shield, Bell, BookOpen, Heart, Smile } from "lucide-react";

const FEATURES = [
  { icon: BookOpen, text: "Full Bible with bookmarks" },
  { icon: Heart, text: "Prayer library & favorites" },
  { icon: Smile, text: "Mental wellness resources" },
  { icon: Bell, text: "Daily verse notifications" },
  { icon: Shield, text: "Private & secure" },
  { icon: Star, text: "Free forever" },
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col">
      {/* Hero */}
      <div className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-white/5 blur-xl" />
        <div className="absolute bottom-8 left-4 w-24 h-24 rounded-full bg-gold/10 blur-xl" />
        <div className="max-w-md mx-auto px-5 py-12 text-center relative">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 backdrop-blur-sm mb-5 animate-float">
            <Download className="w-8 h-8 text-gold" />
          </div>
          <h1 className="font-display text-4xl font-bold text-white leading-tight mb-3">
            GracePoint App
          </h1>
          <p className="font-body text-white/70 text-base leading-relaxed mb-8 max-w-xs mx-auto">
            Carry your faith in your pocket. Available for iOS and Android.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col gap-3 items-center">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white font-body font-semibold text-sm px-8 py-4 rounded-2xl w-full max-w-[260px] justify-center transition-transform hover:scale-105 shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                <title>Apple App Store</title>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-white/70 leading-none">Download on the</p>
                <p className="text-base font-bold leading-tight">App Store</p>
              </div>
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-emerald-700 text-white font-body font-semibold text-sm px-8 py-4 rounded-2xl w-full max-w-[260px] justify-center transition-transform hover:scale-105 shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                <title>Google Play Store</title>
                <path d="M3.18 23.76a2 2 0 0 1-.79-1.69V1.93a2 2 0 0 1 .79-1.69l.1-.06 11.62 11.62v.27L3.28 23.82l-.1-.06zm15.07-8.22-3.08-3.08-.04-.04v-.27l3.12-3.12.07.04 3.64 2.07c1.04.59 1.04 1.56 0 2.15l-3.64 2.08-.07.17zm-3.08-3.12L3.58 24l-.39-.22 11.78-11.78.2.42zm0-7.08.2-.42L3.58 0l-.39.22L14.79 11.8l.38-.46z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-white/70 leading-none">Get it on</p>
                <p className="text-base font-bold leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-md mx-auto px-4 py-8 flex-1">
        <h2 className="font-display text-2xl text-navy font-semibold mb-2 text-center">
          Everything you need
        </h2>
        <p className="font-body text-sm text-navy/55 text-center mb-6">
          A complete spiritual wellness companion in your hands
        </p>
        <div className="grid grid-cols-2 gap-3">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div key={feat.text} className="card-parchment rounded-xl p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5 text-gold" />
                </div>
                <p className="font-body text-xs font-semibold text-navy leading-snug">{feat.text}</p>
              </div>
            );
          })}
        </div>

        {/* Rating */}
        <div className="card-parchment rounded-2xl p-5 mt-5 text-center">
          <div className="flex justify-center gap-1 mb-2">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>
          <p className="font-display text-2xl font-bold text-navy mb-1">4.9 / 5</p>
          <p className="font-body text-xs text-navy/50">Based on 12,000+ reviews</p>
        </div>
      </div>
    </main>
  );
}
