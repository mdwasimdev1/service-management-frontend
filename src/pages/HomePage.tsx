import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  { label: "AC Repair Services", path: "/services/ac-repair", icon: "❄️", color: "from-sky-100 to-sky-50" },
  { label: "Cleaning Solution", path: "/services/cleaning", icon: "🧹", color: "from-emerald-100 to-emerald-50" },
  { label: "Beauty & Wellness", path: "/services/beauty", icon: "💆", color: "from-pink-100 to-pink-50" },
  { label: "Shifting", path: "/services/shifting", icon: "📦", color: "from-amber-100 to-amber-50" },
  { label: "Electric & Plumbing", path: "/services/electric-plumbing", icon: "⚡", color: "from-yellow-100 to-yellow-50" },
  { label: "Driver Service", path: "/services/driver", icon: "🚗", color: "from-blue-100 to-blue-50" },
  { label: "Car Mechanic", path: "/services/car-mechanic", icon: "🔧", color: "from-orange-100 to-orange-50" },
  { label: "Health & Care", path: "/services/health-care", icon: "🏥", color: "from-red-100 to-red-50" },
];

export default function HomePage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Hero ── */}
      <section className="py-16 sm:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-tight"
        >
          All Your Services,{" "}
          <span className="text-amber-500">One Platform.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-5 text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto"
        >
          Book trusted home &amp; lifestyle services in minutes. Professional
          experts at your doorstep.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/request"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-stone-900 text-white text-base font-semibold hover:bg-stone-700 hover:-translate-y-0.5 transition-all duration-150 no-underline shadow-lg"
          >
            Request A Service
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border-2 border-amber-500 text-stone-800 text-base font-semibold hover:bg-amber-50 transition-all duration-150 no-underline"
          >
            Login / Sign Up
          </Link>
        </motion.div>
      </section>

      {/* ── Service Grid ── */}
      <section className="pb-20">
        <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">
          Browse Services
        </h2>
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
