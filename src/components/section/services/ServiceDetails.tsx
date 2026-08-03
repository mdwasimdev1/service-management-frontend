import { useState } from "react";
import { 
  FaStar, FaStarHalfAlt, 
  FaRegCalendarAlt, FaRegClock, FaChevronDown, FaChevronUp 
} from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";

export default function ServiceDetails() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What Type Of Cleaning Services Do You Offer?",
      a: "Apparel maintenance, all-in-one spot type, no otherwise, we've out-of-age piece with take on different machines out, play and center thresholds in."
    },
    { q: "How Can I Book A Cleaning Service?", a: "You can book easily via our online form." },
    { q: "Do You Offer Evening And Weekends?", a: "Yes, we offer 24/7 support." },
    { q: "Do You Have Only One Or Two Terms?", a: "We have flexible terms for all our clients." },
    { q: "Do You Have To Provide Parking Materials?", a: "No, we bring our own equipment and materials." },
    { q: "Do You Have Cleaning Agreements And Holidays?", a: "Yes, we have custom agreements based on your needs." },
  ];

  const features = [
    { num: "01", title: "Ensuring Meets", desc: "We ensure all your cleaning goals are met efficiently with affordable price and quality assured as well." },
    { num: "02", title: "24/7 Support", desc: "We ensure all your cleaning goals are met efficiently with affordable price and quality assured as well." },
    { num: "03", title: "Competitive Price", desc: "Always a wide variation of local options, which is little bit away, meets you extra time, and flexible." },
    { num: "04", title: "Ensuring Covers", desc: "We ensure all your cleaning goals are met efficiently with affordable price and quality assured as well." },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Banner */}
      <div className="relative w-full h-100 bg-stone-900 flex flex-col items-center justify-center">
        {/* We would use a real image background here, using a placeholder gradient for now */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cleaning Solutions</h1>
          <div className="bg-emerald-500 text-white px-4 py-1 rounded-md text-sm font-semibold flex items-center gap-2">
            <FaStar className="text-yellow-300" /> 4.9 (5.4k +)
          </div>
          <div className="mt-2 text-stone-200 text-sm">3k+ People Used This Service</div>
        </div>

        {/* Breadcrumb floating card */}
        <div className="absolute -bottom-5 left-4 md:left-24 bg-white px-6 py-3 rounded-lg shadow-md flex items-center gap-2 text-sm font-semibold text-stone-500 z-20">
          <span>HOME</span>
          <span className="text-stone-300">&gt;</span>
          <span className="text-emerald-500 uppercase">Cleaning Service</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 flex flex-col lg:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {["Service Overview", "FAQ", "How To Order", "Review", "Details"].map((tab, idx) => (
              <button 
                key={tab} 
                className={`px-6 py-2 rounded-full border text-sm font-semibold transition-colors ${
                  idx === 0 
                    ? "border-stone-800 text-stone-800 bg-stone-50" 
                    : "border-stone-200 text-stone-500 hover:border-stone-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Service Overview */}
          <section className="mb-14">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Cleaning Solutions :</h2>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Less time, required comprehensive genius info... Whatever requires comprehensive one inside hours, iterative in against type, tomorrow against mayor limited covering policies requires thorough. Less time, required comprehensive genius info... Whatever requires comprehensive one inside hours, iterative in against type, tomorrow against mayor limited covering policies requires thorough.
            </p>

            <div className="mt-10 relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-stone-200 hidden sm:block"></div>
              
              <div className="flex flex-col gap-8">
                {features.map((feat) => (
                  <div key={feat.num} className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-orange-400 text-white flex items-center justify-center font-bold text-lg shrink-0 border-4 border-white shadow-sm">
                      {feat.num}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold text-stone-900 mb-2">{feat.title}</h3>
                      <p className="text-stone-500 leading-relaxed max-w-xl">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">FAQ</h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-stone-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-stone-50 text-left font-bold text-stone-800 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {activeFaq === idx ? <FaChevronUp className="text-stone-400" /> : <FaChevronDown className="text-stone-400" />}
                  </button>
                  {activeFaq === idx && (
                    <div className="px-6 pb-4 text-stone-500 leading-relaxed bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* How To Order */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">How To Order :</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "Step 01", title: "Select The Service", desc: "Less time involved with inside concepts more based.", active: true },
                { step: "Step 02", title: "Pick Your Schedule", desc: "Less time involved with inside concepts more based.", active: false },
                { step: "Step 03", title: "Place Your Order", desc: "Less time involved with inside concepts more based.", active: false },
              ].map((s) => (
                <div key={s.step} className="border border-stone-200 rounded-xl p-6 flex flex-col items-start relative">
                  {/* Decorative line to next step for desktop */}
                  {s.step !== "Step 03" && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-stone-300"></div>}
                  
                  <div className={`px-4 py-1 rounded-full text-xs font-bold mb-4 ${s.active ? "bg-amber-400 text-stone-900" : "bg-stone-900 text-white"}`}>
                    {s.step}
                  </div>
                  <h3 className="font-bold text-stone-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Review */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Review :</h2>
            <div className="border border-stone-200 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-8">
              <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-extrabold text-stone-900">4.7</span>
                  <span className="text-xl text-stone-500 font-bold mb-1">/5</span>
                </div>
                <div className="flex text-amber-400 text-xl gap-1 mb-2">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </div>
                <p className="text-stone-500 text-sm font-semibold">21 Ratings</p>
                <button className="mt-4 px-6 py-2 bg-stone-900 text-white rounded-md text-sm font-semibold hover:bg-stone-800 transition-colors">
                  WRITE A REVIEW
                </button>
              </div>

              <div className="flex-1 w-full max-w-sm flex flex-col gap-2">
                {[
                  { star: 5, percent: "80%" },
                  { star: 4, percent: "12%" },
                  { star: 3, percent: "5%" },
                  { star: 2, percent: "2%" },
                  { star: 1, percent: "1%" },
                ].map((bar) => (
                  <div key={bar.star} className="flex items-center gap-3 text-sm font-semibold text-stone-600">
                    <span className="w-4">{bar.star}</span>
                    <FaStar className="text-amber-400 text-xs" />
                    <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400" style={{ width: bar.percent }}></div>
                    </div>
                    <span className="w-8 text-right">{bar.percent}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="flex flex-col gap-6">
              {[
                { name: "Robert Limited", date: "June 27, 2023", avatar: "R" },
                { name: "Patricia H. McNeil", date: "July 01, 2023", avatar: "P" },
                { name: "Richard E. Mitchell", date: "June 27, 2023", avatar: "R" },
              ].map((rev, i) => (
                <div key={i} className="flex gap-4 border-b border-stone-100 pb-6 last:border-0">
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-600 shrink-0">
                    {rev.avatar}
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1 sm:gap-0">
                      <h4 className="font-bold text-stone-900">{rev.name}</h4>
                      <span className="text-xs text-stone-400 font-semibold">{rev.date}</span>
                    </div>
                    <div className="flex text-amber-400 text-xs gap-0.5 mb-3">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      Less time, required comprehensive genius info... Whatever requires comprehensive one inside hours, iterative in against type, tomorrow against mayor limited covering policies requires thorough.
                    </p>
                  </div>
                </div>
              ))}
              <button className="text-sm font-bold text-stone-800 underline self-start hover:text-amber-500">
                View All Reviews
              </button>
            </div>
          </section>

          {/* Details & Pricing */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Details :</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Less female covered hill carefully close minus attention. Turns assume no super segments, ran with ladies. Agreed infant format pair parameter. Untouched deploys minus massive onto works stands, faultless altogether core, format from segments steps.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Underestimates altogether curves",
                "Needs less element for themes",
                "No one fought together, faultless path",
                "Must affective does contacts flowss",
                "Promises suspense in core shifts",
                "Turns rigid altogether continues",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-stone-700 font-medium">
                  <div className="text-emerald-500"><FiCheck /></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-stone-900 mb-4">Terms & Pricing</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Less female covered hill carefully close minus attention. Turns assume no super segments, ran with ladies. Agreed infant format pair parameter. Untouched deploys minus massive onto works stands, faultless altogether core, format from segments steps.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "Messaging effort increments on overall smile minimum quantity totals time charged up toward top end scope increase.",
                "Number of flat admin completed - respective customers always smiles a little charging pass global reach core, yes from receives the ABS consisting the money maker.",
                "Number of flat admin completed - respective customers always smiles a little charging pass global reach core, yes from receives the ABS.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-emerald-500 mt-1 shrink-0 bg-emerald-100 rounded-full p-0.5"><BsArrowRightShort /></div>
                  <span className="text-stone-600 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Sidebar - Sticky Form */}
        <div className="w-full lg:w-100 shrink-0">
          <div className="sticky top-6 border border-stone-200 rounded-2xl p-6 sm:p-8 bg-white shadow-xl shadow-stone-200/40">
            <div className="text-stone-500 text-sm font-semibold mb-1">Start From</div>
            <div className="flex items-end gap-3 mb-6">
              <span className="text-4xl font-extrabold text-stone-900">$495</span>
              <span className="text-stone-400 line-through text-lg mb-1 font-semibold">$530</span>
            </div>

            <h3 className="text-xl font-bold text-stone-900 mb-6">Book This Service</h3>

            <form className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1.5">Your Name *</label>
                <input type="text" className="w-full border border-stone-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-stone-700 mb-1.5">Email *</label>
                  <input type="email" className="w-full border border-stone-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-stone-700 mb-1.5">Phone *</label>
                  <input type="tel" className="w-full border border-stone-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-1.5">Your Location *</label>
                <input type="text" className="w-full border border-stone-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 relative">
                  <label className="block text-sm font-bold text-stone-700 mb-1.5">Date *</label>
                  <div className="relative">
                    <input type="text" placeholder="10 Aug 2023" className="w-full border border-stone-200 rounded-lg pl-4 pr-10 py-2.5 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm" />
                    <FaRegCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  </div>
                </div>
                <div className="flex-1 relative">
                  <label className="block text-sm font-bold text-stone-700 mb-1.5">Time *</label>
                  <div className="relative">
                    <input type="text" placeholder="10:00 AM" className="w-full border border-stone-200 rounded-lg pl-4 pr-10 py-2.5 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm" />
                    <FaRegClock className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-3 mt-2">Select Services *</label>
                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {["Deep Wash / End Use", "Wall and Ceiling Cleaning", "Window & Personal Cleaning", "Sofa Cleaning"].map((svc) => (
                    <label key={svc} className="flex items-start gap-2 cursor-pointer group">
                      <div className="w-4 h-4 rounded border border-stone-300 mt-0.5 shrink-0 group-hover:border-amber-400 flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-sm hidden group-hover:block"></div>
                      </div>
                      <span className="text-xs font-semibold text-stone-600 leading-tight">{svc}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold text-lg rounded-lg py-3.5 mt-4 transition-colors">
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
