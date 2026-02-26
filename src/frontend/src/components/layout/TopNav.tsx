import { Link, useRouterState } from "@tanstack/react-router";
import { Cross } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/bible", label: "Bible" },
  { to: "/prayers", label: "Prayers" },
  { to: "/wellness", label: "Wellness" },
  { to: "/sermons", label: "Sermons" },
  { to: "/churches", label: "Churches" },
  { to: "/checkin", label: "Check-In" },
  { to: "/signin", label: "Sign In" },
] as const;

export default function TopNav() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <nav className="hidden md:flex items-center justify-between px-6 py-3 bg-navy sticky top-0 z-50 shadow-lg">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
          <Cross className="w-4 h-4 text-gold" />
        </div>
        <span className="font-display text-xl font-semibold text-gold tracking-wide">
          GracePoint
        </span>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-1">
        {NAV_LINKS.map((link) => {
          const isActive = currentPath === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 rounded-md text-sm font-body font-medium transition-all duration-200 ${
                isActive
                  ? "text-gold bg-white/10"
                  : "text-white/80 hover:text-gold hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
