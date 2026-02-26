import { useState } from "react";
import { Church, MapPin, Clock, Search, Navigation2, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CHURCHES, type Denomination } from "../data/churchesData";

const DENOMINATION_COLORS: Record<Denomination, string> = {
  Baptist: "bg-amber-100 text-amber-800",
  Methodist: "bg-blue-100 text-blue-800",
  Catholic: "bg-purple-100 text-purple-800",
  Pentecostal: "bg-orange-100 text-orange-800",
  "Non-denominational": "bg-teal-100 text-teal-800",
  Anglican: "bg-rose-100 text-rose-800",
  Presbyterian: "bg-indigo-100 text-indigo-800",
  Lutheran: "bg-green-100 text-green-800",
};

export default function Churches() {
  const [query, setQuery] = useState("");

  const filtered = CHURCHES.filter((c) => {
    if (!query.trim()) return true;
    const lower = query.toLowerCase();
    return (
      c.name.toLowerCase().includes(lower) ||
      c.denomination.toLowerCase().includes(lower) ||
      c.city.toLowerCase().includes(lower) ||
      c.address.toLowerCase().includes(lower)
    );
  });

  const getDirectionsUrl = (church: typeof CHURCHES[0]) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${church.name} ${church.address} ${church.city} ${church.state}`
    )}`;

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-700 to-indigo-900 border-b border-gold/20 sticky top-0 z-40 md:top-[52px]">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-3">
            <Church className="w-5 h-5 text-gold/80" />
            <h1 className="font-display text-xl text-white font-semibold">Church Finder</h1>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, city, or denomination…"
              className="pl-9 bg-white/15 border-white/20 text-white placeholder:text-white/50 font-body text-sm h-9"
            />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-5">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <Church className="w-10 h-10 text-navy/20 mx-auto mb-3" />
            <p className="font-body text-navy/50 font-medium">No churches found</p>
            <p className="font-body text-xs text-navy/35 mt-1">Try a different search term</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((church, i) => (
              <div
                key={church.id}
                className="card-parchment card-parchment-hover rounded-2xl p-5 animate-fade-up"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-navy font-semibold leading-snug mb-1.5">
                      {church.name}
                    </h3>
                    <Badge
                      className={`${DENOMINATION_COLORS[church.denomination]} border-0 text-xs font-body`}
                    >
                      {church.denomination}
                    </Badge>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center shrink-0">
                    <Church className="w-5 h-5 text-navy/40" />
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                  <p className="font-body text-sm text-navy/70">
                    {church.address}, {church.city}, {church.state}
                  </p>
                </div>

                {/* Service times */}
                <div className="flex items-start gap-2 mb-3">
                  <Clock className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                  <div>
                    {church.serviceTimes.map((time) => (
                      <span
                        key={time}
                        className="font-body text-xs text-navy/60 block"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-xs text-navy/55 leading-relaxed mb-4 line-clamp-3">
                  {church.description}
                </p>

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={getDirectionsUrl(church)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-navy text-white font-body text-xs font-semibold transition-opacity hover:opacity-90"
                  >
                    <Navigation2 className="w-3.5 h-3.5" />
                    Get Directions
                  </a>
                  {church.phone && (
                    <a
                      href={`tel:${church.phone}`}
                      className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-warm-dark/30 text-navy font-body text-xs font-semibold transition-colors hover:bg-warm-dark/50"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
