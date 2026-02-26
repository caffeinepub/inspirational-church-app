import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { House, BookOpen, Heart, Smile, Menu, BookMarked, Church, CalendarCheck, Download, LogIn, Cross } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const PRIMARY_TABS = [
  { to: "/", label: "Home", icon: House },
  { to: "/bible", label: "Bible", icon: BookOpen },
  { to: "/prayers", label: "Prayers", icon: Heart },
  { to: "/wellness", label: "Wellness", icon: Smile },
] as const;

const MORE_LINKS = [
  { to: "/sermons", label: "Sermon Library", icon: BookMarked },
  { to: "/churches", label: "Church Finder", icon: Church },
  { to: "/checkin", label: "Daily Check-In", icon: CalendarCheck },
  { to: "/download", label: "Download App", icon: Download },
  { to: "/signin", label: "Sign In", icon: LogIn },
] as const;

export default function BottomNav() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [moreOpen, setMoreOpen] = useState(false);

  const isMoreActive = MORE_LINKS.some((l) => currentPath === l.to);

  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-warm-dark/20 shadow-[0_-2px_16px_rgba(27,43,94,0.08)]">
        <div className="flex items-stretch h-16">
          {PRIMARY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentPath === tab.to;
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-all duration-200 ${
                  isActive ? "text-gold" : "text-navy/40 hover:text-navy/70"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5px]" : "stroke-[1.5px]"}`} />
                <span className={`text-[10px] font-body font-medium tracking-wide ${isActive ? "font-semibold" : ""}`}>
                  {tab.label}
                </span>
              </Link>
            );
          })}
          {/* More button */}
          <button
            type="button"
            onClick={() => setMoreOpen(true)}
            className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-all duration-200 ${
              isMoreActive ? "text-gold" : "text-navy/40 hover:text-navy/70"
            }`}
          >
            <Menu className={`w-5 h-5 ${isMoreActive ? "stroke-[2.5px]" : "stroke-[1.5px]"}`} />
            <span className={`text-[10px] font-body font-medium tracking-wide ${isMoreActive ? "font-semibold" : ""}`}>
              More
            </span>
          </button>
        </div>
      </nav>

      {/* More Sheet */}
      <Sheet open={moreOpen} onOpenChange={setMoreOpen}>
        <SheetContent side="bottom" className="rounded-t-2xl bg-cream border-0 pb-8">
          <SheetHeader className="mb-4">
            <SheetTitle className="font-display text-xl text-navy flex items-center gap-2">
              <Cross className="w-4 h-4 text-gold" />
              More
            </SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-3 gap-3">
            {MORE_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = currentPath === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMoreOpen(false)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-navy text-white"
                      : "bg-white/70 text-navy hover:bg-navy/5"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-body font-medium text-center leading-tight">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
