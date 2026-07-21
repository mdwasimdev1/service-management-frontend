import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServicePageProps {
  icon: string;
  title: string;
  description: string;
  color: string;     // Tailwind bg gradient class
  services: string[];
}

export default function ServicePage({
  icon,
  title,
  description,
  color,
  services,
}: ServicePageProps) {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`rounded-3xl bg-gradient-to-br ${color} p-8 sm:p-12 mb-10 flex flex-col sm:flex-row items-center gap-6`}
      >
        <span className="text-7xl flex-shrink-0">{icon}</span>
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-stone-600 text-base max-w-xl">{description}</p>
          <Link
            to="/request"
            className="mt-5 inline-flex items-center px-6 py-2.5 rounded-xl bg-stone-900 text-white text-sm font-semibold hover:bg-stone-700 hover:-translate-y-0.5 transition-all duration-150 no-underline"
          >
            Book Now
          </Link>
        </div>
      </motion.div>

      {/* Service cards */}
      <h2 className="text-xl font-bold text-stone-800 mb-6">Available Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((svc, i) => (
          <motion.div
            key={svc}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
          >
            <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
              {icon}
            </span>
            <div>
              <p className="font-semibold text-stone-800 text-sm">{svc}</p>
              <p className="text-xs text-stone-400 mt-0.5">Starting from ₹299</p>
            </div>
            <Link
              to="/request"
              className="ml-auto flex-shrink-0 px-3 py-1.5 rounded-lg bg-amber-400 text-stone-900 text-xs font-semibold hover:bg-amber-500 transition-colors no-underline"
            >
              Book
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
