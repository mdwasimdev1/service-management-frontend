import Navbar from "../components/layout/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#faf9f5]">
      <Navbar />
      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
