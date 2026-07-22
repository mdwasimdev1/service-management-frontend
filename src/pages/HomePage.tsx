import HeroSection from "../components/section/hero/HeroSection";
import ServiceCategorySection from "../components/section/service-category/ServiceCategorySection";
import Testimonials from "../components/section/testimonials/Testimonials";
import WhyChooseUs from "../components/section/why-choose-us/WhyChooseUs";
import PopularPicks from "../components/section/services/PopularPicks";

export default function HomePage() {
  return (
    <div>
      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Service Category Section ──────────────────────────────────────── */}
      <ServiceCategorySection />

      {/* ── Popular Picks Section ──────────────────────────────────────────── */}
      <PopularPicks />

      {/* ── Why Choose Us Section ─────────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── Testimonials Section ──────────────────────────────────────────── */}
      <Testimonials />
    </div>
  );
}
