import { Link } from 'react-router-dom';
import BlogCardPage from '../components/section/blog/BlogCardPage';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#fcfaf5] py-24 text-center relative overflow-hidden border-b border-[#f4f0e6]">
        <h1 className="text-4xl md:text-[44px] font-extrabold text-gray-900 mb-6 tracking-tight">
          Blog Grid
        </h1>
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
          <Link to="/" className="hover:text-gray-900 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4 mb-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            HOME
          </Link>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mx-1"></span>
          <span className="text-[#ffc107]">BLOG GRID</span>
        </div>
      </section>

      {/* Main Blog Content */}
      <BlogCardPage />
    </div>
  );
}
