import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RequestServicePage from "./pages/RequestServicePage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";

// Service pages
import AcRepairPage from "./pages/services/AcRepairPage";
import CleaningPage from "./pages/services/CleaningPage";
import BeautyPage from "./pages/services/BeautyPage";
import ShiftingPage from "./pages/services/ShiftingPage";
import ElectricPlumbingPage from "./pages/services/ElectricPlumbingPage";
import DriverServicePage from "./pages/services/DriverServicePage";
import CarMechanicPage from "./pages/services/CarMechanicPage";
import HealthCarePage from "./pages/services/HealthCarePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // ── Core pages ──────────────────────────────────────────────
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "request", element: <RequestServicePage /> },
      { path: "contact", element: <ContactPage /> },

      // ── Service category pages ───────────────────────────────────
      { path: "services/ac-repair", element: <AcRepairPage /> },
      { path: "services/cleaning", element: <CleaningPage /> },
      { path: "services/beauty", element: <BeautyPage /> },
      { path: "services/shifting", element: <ShiftingPage /> },
      { path: "services/electric-plumbing", element: <ElectricPlumbingPage /> },
      { path: "services/driver", element: <DriverServicePage /> },
      { path: "services/car-mechanic", element: <CarMechanicPage /> },
      { path: "services/health-care", element: <HealthCarePage /> },
    ],
  },

  // ── 404 – outside layout so full page ────────────────────────────
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
