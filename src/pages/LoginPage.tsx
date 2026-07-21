import { motion } from "framer-motion";
import { FiUser, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import CustomButton from "../components/ui/CustomButton";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-stone-100 p-8"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-400 mb-3">
            <FiUser className="text-white text-xl" />
          </div>
          <h1 className="text-2xl font-extrabold text-stone-900">Welcome Back</h1>
          <p className="text-stone-500 text-sm mt-1">Sign in to your Servic account</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="email"
                id="login-email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="password"
                id="login-password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
              />
            </div>
          </div>

          <CustomButton
            type="submit"
            id="login-submit-btn"
            variant="primary"
            fullWidth
          >
            Sign In
          </CustomButton>
        </form>

        <p className="text-center text-sm text-stone-500 mt-6">
          Don't have an account?{" "}
          <Link to="/request" className="text-amber-600 font-semibold hover:underline">
            Get started
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
