import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#faf9f5]">
      <Navbar />
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
