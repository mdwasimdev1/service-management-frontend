import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiLocationMarker, HiSearch } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { BsShieldCheck, BsClipboardCheck } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

// ── Popular search chips ───────────────────────────────────────────────────────
const popularTags = ["Ac Repair", "Cleaning", "Driver", "Car Mechanic", "Electric"];

// ── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
  { icon: <BsShieldCheck className="text-emerald-500 text-xl" />, label: "Verified Providers",  value: "215,292+" },
  { icon: <BsClipboardCheck className="text-amber-500 text-xl" />, label: "Services Completed", value: "90,000+"  },
  { icon: <AiOutlineStar className="text-orange-500 text-xl" />,   label: "Reviews Globally",   value: "2,390,968" },
];

// ── Location options ───────────────────────────────────────────────────────────
const locations = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barishal"];

// ─────────────────────────────────────────────────────────────────────────────
// PhoneMockup — simulates the Servic app UI inside a phone shell
// ─────────────────────────────────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className="relative w-[260px] sm:w-[290px] mx-auto select-none">
      {/* Phone shell */}
      <div
        className="relative rounded-[2.5rem] border-[10px] border-stone-800 bg-stone-800 shadow-[0_30px_80px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.2)] overflow-hidden"
        style={{ aspectRatio: "9/19" }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-stone-800 rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="bg-white h-full overflow-hidden flex flex-col">
          {/* Status bar */}
          <div className="flex justify-between items-center px-4 pt-7 pb-2 text-[9px] font-semibold text-stone-700">
            <span>9:41</span>
            <span className="flex gap-1 items-center">
              <span>●●●</span>
              <span>WiFi</span>
              <span>🔋</span>
            </span>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center text-white text-xs font-bold">S</div>
              <span className="text-[11px] font-bold text-stone-800">Servic</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-stone-100 overflow-hidden flex items-center justify-center text-stone-400 text-xs">👤</div>
          </div>

          {/* Greeting */}
          <div className="px-4 pb-2">
            <p className="text-[11px] font-bold text-stone-800">Good Morning, Sarah 👋</p>
            <p className="text-[9px] text-stone-400">Let's book something beautiful today</p>
          </div>

          {/* Search bar */}
          <div className="mx-3 mb-3 flex items-center gap-1.5 bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5">
            <HiSearch className="text-stone-400 text-xs flex-shrink-0" />
            <span className="text-[8px] text-stone-400">Search services or snap a photo…</span>
          </div>

          {/* Best Deals */}
          <div className="px-4 mb-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[9px] font-bold text-stone-800">Best Deals</span>
              <span className="text-[8px] text-amber-500 font-semibold">View All &rsaquo;</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { icon: "❄️", label: "AC Service" },
                { icon: "🧹", label: "Cleaning"  },
                { icon: "💆", label: "Wellness"  },
                { icon: "⏰", label: "Reminders" },
              ].map((item) => (
                <div key={item.label} className="bg-stone-50 rounded-lg p-2 flex flex-col items-center gap-1">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-[8px] font-medium text-stone-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Promo banner */}
          <div className="mx-3 mb-3 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-2.5 flex items-center gap-2 border border-amber-200">
            <span className="text-2xl">🧑‍🌾</span>
            <div className="flex-1">
              <p className="text-[8px] font-bold text-stone-800 leading-tight">Consult the Gardening Specialist</p>
              <p className="text-[7px] text-stone-500 mb-1">Get expert plant advice</p>
              <div className="inline-flex bg-amber-500 text-white text-[7px] font-bold rounded-md px-1.5 py-0.5">Ask the Expert</div>
            </div>
          </div>

          {/* Explore */}
          <div className="px-4">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[9px] font-bold text-stone-800">Explore Services</span>
              <span className="text-[8px] text-amber-500 font-semibold">View All &rsaquo;</span>
            </div>
            <div className="flex gap-1.5 overflow-x-hidden">
              {["🚗", "🔧", "🏥"].map((icon, i) => (
                <div key={i} className="flex-shrink-0 w-14 h-14 rounded-xl bg-stone-100 flex items-center justify-center text-xl">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reflection shine */}
      <div
        className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)" }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FloatingBadge — decorative emoji icon that bobs up and down
// ─────────────────────────────────────────────────────────────────────────────
function FloatingBadge({
  emoji,
  style,
  delay,
}: {
  emoji: string;
  style: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute z-10 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-2xl"
      style={style}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {emoji}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HeroSection — main export
// ─────────────────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [location, setLocation] = useState("Dhaka");
  const [locOpen, setLocOpen]   = useState(false);
  const [query, setQuery]       = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/request?q=${encodeURIComponent(query)}`);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f5f0e4 0%, #faf8f0 60%, #f0ebe0 100%)" }}
    >
      {/* Soft radial glow — top-right decoration */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f0d080 0%, transparent 70%)" }}
      />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

          {/* ── LEFT COLUMN ──────────────────────────────────────────────── */}
          <div className="flex-1 lg:pr-10 text-left">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.12] tracking-tight text-black"
            >
              All Your{" "}
              <span className="text-red-500">Services</span>,{" "}
              <br className="hidden sm:block" />
              One Smart Platform.
            </motion.h1>

            {/* Popular search chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              <span className="text-sm text-stone-500 font-medium mr-1">Popular Search:</span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1 rounded-full border border-stone-300 text-stone-600 text-xs font-medium hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50 transition-all duration-150 cursor-pointer bg-white"
                >
                  {tag}
                </button>
              ))}
            </motion.div>

            {/* Location + Search bar */}
            <motion.form
              onSubmit={handleSearch}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex items-stretch bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-stone-100 overflow-hidden"
            >
              {/* Location picker */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLocOpen((p) => !p)}
                  className="flex items-center gap-1 px-4 py-3.5 text-sm font-semibold text-stone-700 bg-transparent border-r border-stone-100 hover:bg-stone-50 transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  <HiLocationMarker className="text-amber-500 text-base flex-shrink-0" />
                  <span className="flex flex-col items-start leading-none">
                    <span className="text-[9px] text-stone-400 font-normal mb-0.5">Location</span>
                    <span className="text-[13px]">{location}</span>
                  </span>
                  <FiChevronDown
                    className={`text-stone-400 text-xs ml-0.5 transition-transform duration-150 ${
                      locOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Location dropdown */}
                {locOpen && (
                  <ul className="absolute top-full left-0 mt-1 w-40 bg-white border border-stone-200 rounded-xl shadow-xl z-50 py-1 list-none m-0 p-0 overflow-hidden">
                    {locations.map((loc) => (
                      <li key={loc}>
                        <button
                          type="button"
                          onClick={() => { setLocation(loc); setLocOpen(false); }}
                          className={`w-full text-left px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-100 bg-transparent ${
                            location === loc
                              ? "text-amber-600 bg-amber-50"
                              : "text-stone-600 hover:bg-stone-50"
                          }`}
                        >
                          {loc}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Service search input */}
              <div className="flex-1 flex items-center px-4 gap-2">
                <HiSearch className="text-stone-400 text-base flex-shrink-0" />
                <input
                  type="text"
                  id="hero-search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Find Your Service Here E.G. AC, Car, Facial"
                  className="flex-1 bg-transparent border-none outline-none text-sm text-stone-700 placeholder:text-stone-400 py-3.5 min-w-0"
                />
              </div>

              {/* Search CTA button */}
              <button
                type="submit"
                id="hero-search-btn"
                className="m-2 px-6 rounded-xl bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold text-sm transition-colors duration-150 whitespace-nowrap cursor-pointer flex-shrink-0"
              >
                Search
              </button>
            </motion.form>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="mt-8 flex flex-wrap gap-6 sm:gap-8"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <span className="flex-shrink-0">{s.icon}</span>
                  <div>
                    <p className="text-[11px] text-stone-400 leading-none mb-0.5">{s.label}</p>
                    <p className="text-[15px] font-extrabold text-stone-800 leading-none">{s.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Floating phone mockup ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className="relative flex-shrink-0 flex items-center justify-center w-full lg:w-auto"
          >
            {/* Decorative floating badges */}
            <FloatingBadge emoji="📦" style={{ top: "4%",   left:  "-8%" }} delay={0}   />
            <FloatingBadge emoji="🛒" style={{ bottom: "6%", left:  "-6%" }} delay={0.7} />
            <FloatingBadge emoji="🎁" style={{ top: "8%",   right: "-6%" }} delay={0.4} />
            <FloatingBadge emoji="🧴" style={{ bottom:"10%", right: "-8%" }} delay={1.1} />

            {/* Ambient amber glow */}
            <div
              className="absolute inset-x-10 inset-y-10 rounded-full blur-3xl opacity-40 pointer-events-none"
              style={{ background: "radial-gradient(circle, #f59e0b 0%, #fbbf24 40%, transparent 70%)" }}
            />

            {/* Ground shadow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full blur-2xl opacity-30 pointer-events-none"
              style={{ background: "#78350f" }}
            />

            {/* Phone gently bobs up and down */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
