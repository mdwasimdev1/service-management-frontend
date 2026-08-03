import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RequestServicePage from "./pages/RequestServicePage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./components/section/blog/BlogDetailsPage";

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
      { path: "blog", element: <BlogPage /> },
      { path: "blog/:id", element: <BlogDetailsPage /> },
      { path: "service/:id", element: <ServiceDetailsPage /> },
    ],
  },

  // ── 404 – outside layout so full page ────────────────────────────
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
