import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/section/hero/HeroSection";

// ── Services grid data ─────────────────────────────────────────────────────────
const services = [
  { label: "AC Repair Services",  path: "/services/ac-repair",         icon: "❄️", color: "from-sky-100 to-sky-50"      },
  { label: "Cleaning Solution",   path: "/services/cleaning",          icon: "🧹", color: "from-emerald-100 to-emerald-50" },
  { label: "Beauty & Wellness",   path: "/services/beauty",            icon: "💆", color: "from-pink-100 to-pink-50"    },
  { label: "Shifting",            path: "/services/shifting",          icon: "📦", color: "from-amber-100 to-amber-50"  },
  { label: "Electric & Plumbing", path: "/services/electric-plumbing", icon: "⚡", color: "from-yellow-100 to-yellow-50" },
  { label: "Driver Service",      path: "/services/driver",            icon: "🚗", color: "from-blue-100 to-blue-50"    },
  { label: "Car Mechanic",        path: "/services/car-mechanic",      icon: "🔧", color: "from-orange-100 to-orange-50" },
  { label: "Health & Care",       path: "/services/health-care",       icon: "🏥", color: "from-red-100 to-red-50"      },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero Section ───────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Service Grid ───────────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">Browse Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={svc.path}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${svc.color} border border-white hover:shadow-md hover:-translate-y-1 transition-all duration-200 no-underline group`}
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-200">
                  {svc.icon}
                </span>
                <span className="text-sm font-semibold text-stone-700 text-center leading-snug">
                  {svc.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
