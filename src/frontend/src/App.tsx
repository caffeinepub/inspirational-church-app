import {
  createRouter,
  createRoute,
  createRootRoute,
  RouterProvider,
  Outlet,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import TopNav from "./components/layout/TopNav";
import BottomNav from "./components/layout/BottomNav";

import Home from "./pages/Home";
import Bible from "./pages/Bible";
import Prayers from "./pages/Prayers";
import Wellness from "./pages/Wellness";
import CheckIn from "./pages/CheckIn";
import Sermons from "./pages/Sermons";
import Churches from "./pages/Churches";
import SignIn from "./pages/SignIn";
import DownloadPage from "./pages/Download";

// Root layout route
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-cream pb-20 md:pb-0">
      <TopNav />
      <div>
        <Outlet />
      </div>
      <BottomNav />
      <Toaster richColors position="top-center" />
    </div>
  ),
});

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: "/", component: Home });
const bibleRoute = createRoute({ getParentRoute: () => rootRoute, path: "/bible", component: Bible });
const prayersRoute = createRoute({ getParentRoute: () => rootRoute, path: "/prayers", component: Prayers });
const wellnessRoute = createRoute({ getParentRoute: () => rootRoute, path: "/wellness", component: Wellness });
const checkinRoute = createRoute({ getParentRoute: () => rootRoute, path: "/checkin", component: CheckIn });
const sermonsRoute = createRoute({ getParentRoute: () => rootRoute, path: "/sermons", component: Sermons });
const churchesRoute = createRoute({ getParentRoute: () => rootRoute, path: "/churches", component: Churches });
const signinRoute = createRoute({ getParentRoute: () => rootRoute, path: "/signin", component: SignIn });
const downloadRoute = createRoute({ getParentRoute: () => rootRoute, path: "/download", component: DownloadPage });

const routeTree = rootRoute.addChildren([
  indexRoute,
  bibleRoute,
  prayersRoute,
  wellnessRoute,
  checkinRoute,
  sermonsRoute,
  churchesRoute,
  signinRoute,
  downloadRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
