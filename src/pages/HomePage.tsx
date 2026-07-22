import HeroSection from "../components/section/hero/HeroSection";
import ServiceCategorySection from "../components/section/service-category/ServiceCategorySection";
import WhyChooseUs from "../components/section/why-choose-us/WhyChooseUs";

export default function HomePage() {
  return (
    <div>
      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Service Category Section ──────────────────────────────────────── */}
      <ServiceCategorySection />

      {/* ── Why Choose Us Section ─────────────────────────────────────────── */}
      <WhyChooseUs />
    </div>
  );
}
