import { Link } from 'react-router-dom';
import { FiClock as FiClockIcon, FiUser as FiUserIcon, FiMessageSquare as FiMessageSquareIcon, FiSearch as FiSearchIcon, FiCheckCircle as FiCheckCircleIcon } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function BlogDetailsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#fcfaf5] py-24 text-center relative overflow-hidden border-b border-[#f4f0e6]">
        <h1 className="text-4xl md:text-[44px] font-extrabold text-gray-900 mb-6 tracking-tight">
          Blog Details
        </h1>
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
          <Link to="/" className="hover:text-gray-900 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4 mb-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            HOME
          </Link>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mx-1"></span>
          <Link to="/blog" className="hover:text-gray-900 transition-colors">BLOG</Link>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mx-1"></span>
          <span className="text-[#ffc107]">DETAILS</span>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* ── LEFT COLUMN: MAIN CONTENT ─────────────────────────── */}
            <div className="lg:col-span-2">
              
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop" 
                  alt="Blog Cover" 
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium mb-4">
                <div className="flex items-center gap-2">
                  <FiClockIcon className="text-[#ffc107]" />
                  <span>15 AUG, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUserIcon className="text-[#ffc107]" />
                  <span>BY ADMIN</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMessageSquareIcon className="text-[#ffc107]" />
                  <span>2 COMMENTS</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Our Begin Now To Beingon! What Are Yourmoi Will Be Own.
              </h1>

              {/* Author Small */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center text-white font-bold overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Author" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-sm text-[#00b074]">By, Tomas Jaios</span>
              </div>

              {/* Content Paragraphs */}
              <div className="prose max-w-none text-gray-600 space-y-6 mb-10">
                <p>
                  As a prominent cleaning service provider, we understand the importance of a clean and hygienic environment for your home or business. Our dedicated team of professionals is committed to delivering exceptional results, leaving your space spotless and fresh.
                </p>
                <p>
                  From standard house cleaning to specialized commercial janitorial services, we tailor our solutions to meet your specific needs. Our comprehensive cleaning checklists ensure no detail is overlooked, from dusting and vacuuming to sanitizing bathrooms and kitchens. We utilize eco-friendly products and advanced cleaning techniques to provide a safe and healthy environment for your family or employees. Trust us to maintain the cleanliness and appearance of your property.
                </p>
                <p>
                  A clean environment is essential for productivity and well-being. Our reliable and efficient cleaning services are designed to save you time and effort. Let us handle the dirty work while you focus on what matters most. Whether you need a one-time deep clean or recurring maintenance, we've got you covered. Experience the difference a professional cleaning service can make.
                </p>
              </div>

              {/* Middle Image */}
              <div className="rounded-2xl overflow-hidden mb-10">
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop" 
                  alt="Cleaning detail" 
                  className="w-full h-[300px] object-cover"
                />
              </div>

              {/* Subheading */}
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                Our Begin Now To Beingon!.
              </h2>
              <p className="text-gray-600 mb-6">
                Maintaining a clean and organized space is not just about aesthetics; it's about creating a healthy and productive environment. Regular cleaning helps reduce the spread of germs and allergens, promoting overall well-being.
              </p>

              {/* Checkmark List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <FiCheckCircleIcon className="text-[#00b074] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Safe products and eco-friendly</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircleIcon className="text-[#00b074] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Trusted and vetted professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircleIcon className="text-[#00b074] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Transparent pricing, no hidden fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircleIcon className="text-[#00b074] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Flexible scheduling to fit your needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircleIcon className="text-[#00b074] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">100% satisfaction guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircleIcon className="text-[#00b074] w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Prompt and reliable customer service</span>
                </div>
              </div>

              {/* Construction Results */}
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                Construction Results
              </h2>
              <p className="text-gray-600 mb-10 pb-10 border-b border-gray-100">
                After a construction project, the resulting mess can be overwhelming. Our post-construction cleaning services are designed to tackle the dust, debris, and leftover materials, leaving your newly renovated or built space pristine and ready for occupancy. We carefully clean all surfaces, ensuring a safe and sparkling finish.
              </p>

              {/* Share & Tags */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-16">
                <div className="text-sm font-bold text-gray-900 uppercase">
                  TAGS: <span className="text-gray-500 font-medium normal-case ml-2">Cleaning, Service, House</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-900 uppercase mr-2">SHARE IT:</span>
                  <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#ffc107] hover:border-[#ffc107] transition-colors"><FaFacebookF size={14} /></a>
                  <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#ffc107] hover:border-[#ffc107] transition-colors"><FaTwitter size={14} /></a>
                  <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#ffc107] hover:border-[#ffc107] transition-colors"><FaLinkedinIn size={14} /></a>
                  <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#ffc107] hover:border-[#ffc107] transition-colors"><FaInstagram size={14} /></a>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-8 pb-4 border-b-2 border-black inline-block">
                  Comments
                </h3>
                
                <div className="space-y-8">
                  {/* Comment 1 */}
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3 mb-2">
                        <h4 className="font-extrabold text-gray-900 text-lg">Robert Cordel,</h4>
                        <span className="text-sm text-gray-500 font-medium">July 21, 2023</span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        This service is incredibly helpful! It saved me so much time and hassle. I highly recommend it to anyone looking for a reliable and efficient solution. The attention to detail is truly impressive.
                      </p>
                      <button className="text-[#ff5e14] border border-[#ff5e14] rounded-full px-5 py-1.5 text-xs font-bold uppercase hover:bg-[#ff5e14] hover:text-white transition-colors">
                        Reply →
                      </button>
                    </div>
                  </div>

                  {/* Comment 2 */}
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3 mb-2">
                        <h4 className="font-extrabold text-gray-900 text-lg">Jasmine Jura,</h4>
                        <span className="text-sm text-gray-500 font-medium">July 22, 2023</span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        I've used several similar services in the past, but this one stands out. The professionalism and quality of work are unmatched. I'll definitely be a returning customer. Thank you for the great experience!
                      </p>
                      <button className="text-[#ff5e14] border border-[#ff5e14] rounded-full px-5 py-1.5 text-xs font-bold uppercase hover:bg-[#ff5e14] hover:text-white transition-colors">
                        Reply →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leave a Comment Form */}
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-8 pb-4 border-b-2 border-black inline-block">
                  Leave A Comment
                </h3>
                
                <div className="bg-[#fcfaf5] p-8 rounded-2xl">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#2d3322]">Full Name *</label>
                        <input type="text" className="w-full border border-gray-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#2d3322]">Email *</label>
                        <input type="email" className="w-full border border-gray-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#2d3322]">Website *</label>
                      <input type="url" className="w-full border border-gray-200 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#2d3322]">Message *</label>
                      <textarea className="w-full border border-gray-200 bg-white rounded-md px-4 py-3 h-32 resize-none focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"></textarea>
                    </div>

                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="save-info" className="w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500 cursor-pointer" />
                      <label htmlFor="save-info" className="text-xs text-gray-500 font-medium cursor-pointer">
                        Save my name, email, and website in this browser for the next time I comment.
                      </label>
                    </div>

                    <button type="button" className="bg-[#2d3322] hover:bg-black text-white px-8 py-3.5 rounded-md font-bold transition-colors">
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>

            </div>

            {/* ── RIGHT COLUMN: SIDEBAR ────────────────────────────── */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Search */}
              <div className="bg-[#f2f7ec] p-6 rounded-2xl">
                <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wider">Search Here</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full bg-white border border-transparent rounded-l-md px-4 py-3 text-sm focus:outline-none focus:border-gray-200"
                  />
                  <button className="bg-[#ffc107] text-gray-900 px-4 rounded-r-md flex items-center justify-center hover:bg-yellow-500 transition-colors">
                    <FiSearchIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Category */}
              <div className="bg-[#f2f7ec] p-6 rounded-2xl">
                <h3 className="text-sm font-bold text-gray-900 uppercase mb-4 tracking-wider">Category</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Architecture', count: '02' },
                    { name: 'Construction', count: '06' },
                    { name: 'Electrician', count: '04' },
                    { name: 'House Maintenance', count: '04' },
                    { name: 'Plumbing Service', count: '08' },
                    { name: 'Interior Design', count: '05' },
                  ].map((cat, i) => (
                    <li key={i}>
                      <Link to="#" className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
                        <span>{cat.name}</span>
                        <span>({cat.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Post */}
              <div className="bg-[#f2f7ec] p-6 rounded-2xl">
                <h3 className="text-sm font-bold text-gray-900 uppercase mb-5 tracking-wider">Popular Post</h3>
                <div className="space-y-5">
                  {[
                    { title: 'Protect your workplace and the effective solutions.', date: '15 Aug, 2023', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=150&auto=format&fit=crop' },
                    { title: 'How an AI Powering the Future of On Demand.', date: '16 Aug, 2023', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=150&auto=format&fit=crop' },
                    { title: 'Everything You Should Know About Driver Service.', date: '17 Aug, 2023', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=150&auto=format&fit=crop' },
                  ].map((post, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-xs text-[#00b074] font-bold mb-1 block">{post.date}</span>
                        <Link to="#" className="text-sm font-extrabold text-gray-900 hover:text-[#00b074] transition-colors leading-tight line-clamp-2">
                          {post.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Blog */}
              <div className="bg-[#f2f7ec] p-6 rounded-2xl">
                <h3 className="text-sm font-bold text-gray-900 uppercase mb-5 tracking-wider">Tag Blog</h3>
                <div className="flex flex-wrap gap-2">
                  {['CLEANING', 'AC REPAIR', 'HOME FIX', 'PLUMBING', 'HOME SERVICE', 'GARDENING', 'MAINTENANCE', 'PAINTING', 'RENOVATION'].map((tag, i) => (
                    <Link 
                      key={i} 
                      to="#" 
                      className="bg-white px-3 py-1.5 rounded text-xs font-bold text-gray-500 hover:text-white hover:bg-[#00b074] transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
