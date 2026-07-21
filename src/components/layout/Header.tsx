import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import CustomButton from "../ui/CustomButton";

// ─── Nav data ──────────────────────────────────────────────────────────────────
const navCategories = [
  {
    label: "AC Repair Services",
    sub: ["Split AC Service", "Window AC Repair", "AC Deep Cleaning", "Gas Refilling"],
  },
  {
    label: "Cleaning Solution",
    sub: [
      "Deep Cleaning Service",
      "Home Cleaning Solutions",
      "Office Cleaning Experts",
      "Premium Housekeeping",
      "Carpet & Sofa Cleaning",
    ],
  },
  {
    label: "Beauty & Wellness",
    sub: ["Bridal Makeup", "Hair Spa & Treatment", "Facial & Skin Care", "Manicure & Pedicure"],
  },
  {
    label: "Shifting",
    sub: ["Home Shifting", "Office Relocation", "Vehicle Transport", "Packers & Movers"],
  },
  {
    label: "Electric & Plumbing",
    sub: ["Electrical Repair", "Plumbing Fix", "Fan & Light Installation", "Pipe Leakage"],
  },
  {
    label: "Driver Service",
    sub: ["Daily Driver", "Outstation Driver", "Airport Transfer"],
  },
  {
    label: "Car Mechanic",
    sub: ["Car Service", "Battery Replacement", "Tyre Puncture", "Denting & Painting"],
  },
  {
    label: "Health & Care",
    sub: ["Doctor at Home", "Nurse at Home", "Lab Tests", "Physiotherapy"],
  },
];

// ─── Desktop Dropdown ──────────────────────────────────────────────────────────
function DesktopDropdown({ items, visible }: { items: string[]; visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.ul
          initial={{ opacity: 0, y: 6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.97 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          className="absolute top-full left-0 mt-1 min-w-[200px] bg-white border border-stone-200 rounded-xl shadow-xl z-50 py-1.5 list-none m-0 p-0"
        >
          {items.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block px-4 py-2.5 text-[13.5px] text-stone-600 font-medium hover:bg-amber-50 hover:text-amber-700 hover:pl-6 transition-all duration-150"
              >
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

// ─── Main Header ───────────────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveIdx(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onEnter = (i: number) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveIdx(i);
  };

  const onLeave = () => {
    leaveTimer.current = setTimeout(() => setActiveIdx(null), 140);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#faf9f5] shadow-[0_1px_0_#e8e4d9,0_2px_16px_rgba(0,0,0,0.06)] font-[Inter,system-ui,sans-serif]">
      {/* ── Top bar ─────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0" aria-label="Servic Home">
          {/* SVG logo mark */}
          <span className="flex items-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
              <rect width="30" height="30" rx="7" fill="#D4A017" />
              <path
                d="M7 15h4l3-7.5 4 15 3-7.5h2"
                stroke="#fff"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <strong className="text-[20px] font-extrabold tracking-tight text-amber-500">
              Servic
            </strong>
            <small className="hidden sm:block text-[9px] text-stone-700 font-normal tracking-wide whitespace-nowrap">
              One Thousand Services Bangladesh
            </small>
          </span>
        </a>

        {/* Desktop action buttons */}
        <div className="flex items-center gap-2.5">
          {/* Login – visible on tablet+ */}
          <div className="hidden sm:inline-flex">
            <CustomButton
              id="header-login-btn"
              href="/login"
              variant="outline"
              icon={<FiUser />}
            >
              Login
            </CustomButton>
          </div>

          {/* Request A Service CTA – visible on md+ */}
          <div className="hidden md:inline-flex">
            <CustomButton
              id="header-cta-btn"
              href="/request"
              variant="primary"
            >
              Request A Service
            </CustomButton>
          </div>

          {/* Hamburger – mobile only */}
          <button
            id="header-hamburger-btn"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border-[1.5px] border-stone-300 bg-transparent text-stone-800 hover:bg-stone-100 hover:border-stone-400 transition-all duration-150 cursor-pointer"
          >
            {mobileOpen ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* ── Desktop category nav bar ─────────────────────────────────────────── */}
      <nav
        ref={navRef}
        aria-label="Service categories"
        className="hidden lg:flex items-stretch border-t border-stone-200 overflow-x-auto scrollbar-none max-w-screen-xl mx-auto px-4"
      >
        {navCategories.map((cat, i) => (
          <div
            key={cat.label}
            className="relative flex-shrink-0"
            onMouseEnter={() => onEnter(i)}
            onMouseLeave={onLeave}
          >
            <button
              aria-haspopup="true"
              aria-expanded={activeIdx === i}
              className={`flex items-center gap-1.5 px-3.5 py-3 text-[13px] font-medium border-b-[3px] transition-all duration-150 cursor-pointer bg-transparent whitespace-nowrap font-[inherit]
                ${activeIdx === i
                  ? "text-stone-900 bg-amber-50 border-amber-500"
                  : "text-stone-500 border-transparent hover:text-stone-900 hover:bg-amber-50 hover:border-amber-400"
                }`}
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
            >
              {cat.label}
              <FaChevronDown
                size={9}
                className={`text-stone-400 flex-shrink-0 transition-transform duration-200 ${activeIdx === i ? "rotate-180" : ""}`}
              />
            </button>
            <DesktopDropdown items={cat.sub} visible={activeIdx === i} />
          </div>
        ))}
      </nav>

      {/* ── Mobile slide-down menu ───────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-stone-200 bg-[#faf9f5]"
          >
            <nav aria-label="Mobile service categories">
              {navCategories.map((cat, i) => (
                <div key={cat.label} className="border-b border-stone-100 last:border-0">
                  {/* Category toggle */}
                  <button
                    aria-expanded={mobileExpanded === i}
                    onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                    className="flex items-center justify-between w-full px-5 py-3.5 text-sm font-semibold text-stone-800 hover:bg-amber-50 transition-colors duration-150 cursor-pointer bg-transparent font-[inherit] text-left"
                  >
                    {cat.label}
                    <FaChevronDown
                      size={11}
                      className={`text-stone-400 flex-shrink-0 transition-transform duration-200 ${mobileExpanded === i ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Sub-items */}
                  <AnimatePresence>
                    {mobileExpanded === i && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden list-none m-0 p-0 bg-white"
                      >
                        {cat.sub.map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              onClick={() => setMobileOpen(false)}
                              className="block px-8 py-2.5 text-[13.5px] text-stone-500 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-150 no-underline"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTA row */}
              <div className="flex flex-col sm:flex-row gap-3 p-4">
                <CustomButton
                  href="/login"
                  variant="outline"
                  icon={<FiUser />}
                  className="flex-1"
                >
                  Login
                </CustomButton>
                <CustomButton
                  href="/request"
                  variant="primary"
                  className="flex-1"
                >
                  Request A Service
                </CustomButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
