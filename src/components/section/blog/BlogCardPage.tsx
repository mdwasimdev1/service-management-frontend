import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop',
    date: '15 AUG, 2023',
    category: 'INDUSTRY',
    title: 'Why On-Demand Services Are The Future Of Daily Living',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop',
    date: '16 AUG, 2023',
    category: 'INDUSTRY',
    title: 'How On-Demand Services Are Changing Lives',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512496015851-a1cbf5c5601d?q=80&w=600&auto=format&fit=crop',
    date: '16 AUG, 2023',
    category: 'INDUSTRY',
    title: 'From Click To Doorstep The Rise Of On-Demand Solutions',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    date: '16 AUG, 2023',
    category: 'INDUSTRY',
    title: 'On-Demand Shifting Services Make Moving Stress-Free',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop',
    date: '16 AUG, 2023',
    category: 'INDUSTRY',
    title: 'Why On-Demand Services Are The Future Of Daily Living',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1585241936939-f9c47087850e?q=80&w=600&auto=format&fit=crop',
    date: '16 AUG, 2023',
    category: 'INDUSTRY',
    title: 'Why On-Demand Services Are The Future Of Daily Living',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop',
    date: '16 AUG, 2023',
    category: 'INDUSTRY',
    title: 'How On-Demand Mechanics Save You Time & Money',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop',
    date: '16 AUG, 2023',
    category: 'INDUSTRY',
    title: 'The Ultimate Guide On Demand Car Maintenance Services',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop',
    date: '16 AUG, 2023',
    category: 'INDUSTRY',
    title: 'How AI Is Powering The Future Of On-Demand Services',
  },
];

export default function BlogCardPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-[20px] border border-gray-100 overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full">
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                {/* Date/Category Badge */}
                <div className="absolute bottom-0 left-0 bg-white px-4 py-2.5 text-[11px] font-bold text-gray-500 uppercase tracking-widest rounded-tr-[20px] flex items-center gap-2">
                  <span className="text-gray-900">{post.date}</span> 
                  <span className="text-gray-300">|</span> 
                  <span>{post.category}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-7 flex flex-col grow justify-between">
                <h3 className="text-[19px] font-extrabold text-gray-900 mb-6 leading-[1.4]">
                  {post.title}
                </h3>
                <div>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-gray-900 uppercase tracking-widest transition-colors">
                    READ MORE <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ffc107] text-gray-900 font-bold transition-colors">
            01
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 font-semibold transition-colors border border-transparent hover:border-gray-200">
            02
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 font-semibold transition-colors border border-transparent hover:border-gray-200">
            03
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
