import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiLocationMarker, HiSearch } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { BsShieldCheck, BsClipboardCheck } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import CustomButton from "../../ui/CustomButton";

//Popular search chips
const popularTags = [
  "Ac Repair",
  "Cleaning",
  "Driver",
  "Car Mechanic",
  "Electric",
];

//Stats
const stats = [
  {
    icon: <BsShieldCheck className="text-emerald-500 text-3xl" />,
    label: "Verified Providers",
    value: "215,292+",
  },
  {
    icon: <BsClipboardCheck className="text-amber-500 text-3xl" />,
    label: "Services Completed",
    value: "90,000+",
  },
  {
    icon: <AiOutlineStar className="text-orange-500 text-3xl" />,
    label: "Reviews Globally",
    value: "2,390,968",
  },
];

// ── Location options
const locations = [
  "Dhaka",
  "Chittagong",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Barishal",
];
export default function HeroSection() {
  const [location, setLocation] = useState("Dhaka");
  const [locOpen, setLocOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/request?q=${encodeURIComponent(query)}`);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f5f0e4 0%, #faf8f0 60%, #f0ebe0 100%)",
      }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* ── LEFT COLUMN */}
          <div className="flex-1 lg:pr-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-tight tracking-tight text-black"
            >
              All Your <span className="text-red-500">Services</span>, One{" "}
              <br className="hidden sm:block" />
              Smart Platform.
            </motion.h1>

            {/* Popular search chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <span className="text-stone-500 font-semibold mr-1">
                Popular Search:
              </span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1 rounded-md border border-stone-300 text-stone-600 text-sm font-semibold hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50 transition-all duration-150 cursor-pointer bg-white"
                >
                  {tag}
                </button>
              ))}
            </motion.div>

            <motion.form
              onSubmit={handleSearch}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col md:flex-row items-stretch md:items-center bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] border-4 border-red-500 w-full max-w-2xl mt-6 relative z-10"
            >
              {/* Location picker */}
              <div className="relative border-b md:border-b-0 md:border-r border-stone-200 w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => setLocOpen((p) => !p)}
                  className="flex w-full items-center justify-between md:justify-start gap-2 px-4 py-3 md:py-2 text-base font-semibold text-stone-700 bg-transparent hover:bg-stone-50 transition-colors duration-150 cursor-pointer whitespace-nowrap rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                >
                  <HiLocationMarker className="text-amber-500 text-base shrink-0" />
                  <span className="flex flex-col items-start">
                    <span className="text-sm text-stone-400 font-semibold">
                      Location
                    </span>
                    <span className="text-base">{location}</span>
                  </span>
                  <FiChevronDown
                    className={`text-stone-400 transition-transform duration-150 ${
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
                          onClick={() => {
                            setLocation(loc);
                            setLocOpen(false);
                          }}
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
              <div className="flex-1 flex items-center px-4 py-3 md:py-0 gap-2 w-full md:w-auto">
                <HiSearch className="text-stone-400 text-base shrink-0" />
                <input
                  type="text"
                  id="hero-search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Find Your Service Here ..."
                  className="flex-1 bg-transparent border-none text-stone-700 placeholder:text-stone-400 py-2 min-w-0 focus:outline-none focus:ring-0"
                />
              </div>

              {/* Search CTA button */}
              <div className="px-4 pb-4 md:p-0 md:pr-2 shrink-0 flex w-full md:w-auto">
                <CustomButton
                  type="submit"
                  id="hero-search-btn"
                  className="w-full md:w-auto py-3 md:py-2 m-0 md:m-2"
                >
                  Search
                </CustomButton>
              </div>
            </motion.form>

            {/* Location + Search bar */}

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <span className="shrink-0">{s.icon}</span>
                  <div>
                    <p className="text-stone-400 font-semibold">{s.label}</p>
                    <p className=" font-extrabold text-stone-800">{s.value}</p>
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
            className="relative shrink-0 flex items-center justify-center w-full lg:w-auto"
          >
            {/* Image gently bobs up and down (Replaced PhoneMockup) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative top-10 z-10"
            >
              <img
                src="/home-banner.png"
                alt="Hero Showcase"
                className="w-72 md:w-80 h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
