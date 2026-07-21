import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-8xl font-extrabold text-amber-400 leading-none">404</p>
        <h1 className="mt-4 text-3xl font-bold text-stone-800">Page Not Found</h1>
        <p className="mt-3 text-stone-500 max-w-sm mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-stone-900 text-white font-semibold hover:bg-stone-700 transition-colors duration-150 no-underline"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
