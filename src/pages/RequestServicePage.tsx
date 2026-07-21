import { motion } from "framer-motion";
import { FiUser, FiPhone, FiMapPin, FiList } from "react-icons/fi";

export default function RequestServicePage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-stone-100 p-8"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-400 mb-3">
            <FiList className="text-white text-xl" />
          </div>
          <h1 className="text-2xl font-extrabold text-stone-900">Request A Service</h1>
          <p className="text-stone-500 text-sm mt-1">
            Tell us what you need — we'll connect you with an expert.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1.5">Full Name</label>
            <div className="relative">
              <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                id="request-name"
                type="text"
                placeholder="Your full name"
                className="w-full pl-10 pr-4 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1.5">Phone Number</label>
            <div className="relative">
              <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                id="request-phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-4 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1.5">Service Type</label>
            <select
              id="request-service-type"
              className="w-full px-4 py-2.5 border border-stone-200 rounded-lg text-sm text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-white"
            >
              <option value="">Select a service…</option>
              <option>AC Repair Services</option>
              <option>Cleaning Solution</option>
              <option>Beauty &amp; Wellness</option>
              <option>Shifting</option>
              <option>Electric &amp; Plumbing</option>
              <option>Driver Service</option>
              <option>Car Mechanic</option>
              <option>Health &amp; Care</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1.5">Address</label>
            <div className="relative">
              <FiMapPin className="absolute left-3.5 top-3.5 text-stone-400" />
              <textarea
                id="request-address"
                rows={3}
                placeholder="Enter your full address…"
                className="w-full pl-10 pr-4 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            id="request-submit-btn"
            className="w-full py-3 rounded-xl bg-stone-900 text-white font-semibold text-sm hover:bg-stone-700 transition-colors duration-150 mt-2"
          >
            Submit Request
          </button>
        </form>
      </motion.div>
    </div>
  );
}
