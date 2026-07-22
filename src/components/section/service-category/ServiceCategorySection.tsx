import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// ── Category data ─────────────────────────────────────────────────────────────
const categories = [
  {
    id: 1,
    label: "AC Repair Services",
    path: "/services/ac-repair",
    count: 15,
    emoji: "❄️",
    image: "/images/categories/ac-repair.png",
  },
  {
    id: 2,
    label: "Cleaning Solutions",
    path: "/services/cleaning",
    count: 15,
    emoji: "🧹",
    image: "/images/categories/cleaning.png",
  },
  {
    id: 3,
    label: "Beauty & Wellness",
    path: "/services/beauty",
    count: 15,
    emoji: "💆",
    image: "/images/categories/beauty-wellness.png",
  },
  {
    id: 4,
    label: "Home Shifting",
    path: "/services/shifting",
    count: 15,
    emoji: "📦",
    image: "/images/categories/home-shifting.png",
  },
  {
    id: 5,
    label: "Electric & Plumbing",
    path: "/services/electric-plumbing",
    count: 15,
    emoji: "⚡",
    image: "/images/categories/electric-plumbing.png",
  },
  {
    id: 6,
    label: "Driver Service",
    path: "/services/driver",
    count: 15,
    emoji: "🚗",
    image: "/images/categories/driver-service.png",
  },
  {
    id: 7,
    label: "Car Mechanic",
    path: "/services/car-mechanic",
    count: 15,
    emoji: "🔧",
    image: "/images/categories/car-mechanic.png",
  },
  {
    id: 8,
    label: "Health & Care",
    path: "/services/health-care",
    count: 15,
    emoji: "🏥",
    image: "/images/categories/health-care.png",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function ServiceCategorySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Update arrow states based on scroll position
  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    updateArrows();
    return () => el.removeEventListener("scroll", updateArrows);
  }, []);

  // Scroll by one card width
  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.querySelector("[data-card]") as HTMLElement | null;
    const gap = 24; // px — matches gap-6
    const amount = firstCard ? firstCard.offsetWidth + gap : el.clientWidth / 4;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section title ─────────────────────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2
            className="uppercase inline-flex flex-col items-center gap-2 text-stone-900 pb-5"
            style={{
              fontSize: "1.875rem",       /* 30px — text-3xl */
              fontWeight: 800,            /* extrabold — overrides global h2 font-weight:500 */
              letterSpacing: "0.14em",    /* overrides global h2 letter-spacing:-0.24px */
              margin: 0,                  /* overrides global h2 margin */
              lineHeight: 1.2,
              color: "#1c1917",           /* stone-900 — overrides global color:var(--text) */
            }}
          >
            Service Category
            
          </h2>
        </motion.h2>


        {/* ── Carousel wrapper ──────────────────────────────────────────── */}
        <div className="relative flex items-center">

          {/* ── Prev button ───────────────────────────────────────────── */}
          <button
            id="service-cat-prev"
            aria-label="Previous categories"
            onClick={() => scroll("left")}
            disabled={!canPrev}
            className={`
              absolute -left-10 z-10 -translate-x-1/2
              w-10 h-10 rounded-full bg-white border
              flex items-center justify-center
              shadow-[0_2px_12px_rgba(0,0,0,0.12)]
              transition-all duration-200
              ${canPrev
                ? "border-stone-200 text-stone-600 hover:border-amber-400 hover:text-amber-500 cursor-pointer"
                : "border-stone-100 text-stone-300 cursor-not-allowed opacity-60"
              }
            `}
          >
            <FiChevronLeft size={18} />
          </button>

          {/* ── Scrollable track ─────────────────────────────────────── */}
          {/*
            overflow-hidden on this div + scrollable inner ref div:
            The outer div is overflow-visible so nothing clips the card shadows.
            The inner ref div scrolls but doesn't clip (it shows full shadow).
          */}
          <div className="w-full overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-3"
              style={{
                scrollSnapType: "x mandatory",
                /* Hide scrollbar cross-browser */
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  data-card
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  style={{
                    /* 4 visible on desktop, 2 on tablet, 1.2 on mobile */
                    flex: "0 0 calc(25% - 18px)",
                    minWidth: "220px",
                    scrollSnapAlign: "start",
                  }}
                >
                  <Link
                    to={cat.path}
                    className="group block rounded-xl overflow-hidden h-40 bg-black no-underline"
                  >
                    {/* ── Card image ─────────────────────────────────── */}
                    <div className="relative h-full overflow-hidden bg-stone-100">
                      <img
                        src={cat.image}
                        alt={cat.label}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Subtle dark gradient at bottom for text contrast */}
                      <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* ── Card footer ─────────────────────────────────── */}
                    <div className="mx-10 rounded-md relative inset-x-0 bottom-20 flex items-center gap-3 px-2 py-2 bg-amber-50 hover:bg-amber-100 border-t border-stone-100">
                      {/* Emoji icon badge */}
                      <span
                        className="shrink-0 w-10 h-10 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-xl
                          group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors duration-200"
                      >
                        {cat.emoji}
                      </span>

                      {/* Label + count */}
                      <div className="min-w-0">
                        <h3 className="text-[13.5px] font-bold text-stone-800 leading-snug truncate">
                          {cat.label}
                        </h3>
                        <p className="text-[11.5px] text-stone-400 mt-0.5">
                          {cat.count} Services
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Next button ───────────────────────────────────────────── */}
          <button
            id="service-cat-next"
            aria-label="Next categories"
            onClick={() => scroll("right")}
            disabled={!canNext}
            className={`
              absolute -right-10 z-10 translate-x-1/2
              w-10 h-10 rounded-full bg-white border
              flex items-center justify-center
              shadow-[0_2px_12px_rgba(0,0,0,0.12)]
              transition-all duration-200
              ${canNext
                ? "border-stone-200 text-stone-600 hover:border-amber-400 hover:text-amber-500 cursor-pointer"
                : "border-stone-100 text-stone-300 cursor-not-allowed opacity-60"
              }
            `}
          >
            <FiChevronRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}
