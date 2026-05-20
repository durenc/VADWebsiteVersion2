
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/productData';
import PageMeta from '../components/PageMeta';

const StoryFaqConnectPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <PageMeta
        title="About V.A.D. Supplements | Our Story, FAQs, Connect"
        description="Learn the story behind V.A.D. Supplements, get answers to common FAQs, and connect with the brand built for stimulant-free pumps and vascularity."
        url="https://veinyahdihsupps.com/about"
        image="https://veinyahdihsupps.com/images/VAD Logo.jpg"
      />
      <h1 className="sr-only">V.A.D. Supplements story and FAQs</h1>
      {/* Our Story */}
      <section id="our-story" className="py-24 md:py-48 bg-black/70 relative border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-invert text-white font-['Inter'] text-lg md:text-2xl">
            <h2 className="relative text-5xl md:text-8xl font-creepster uppercase italic tracking-tighter mb-8 text-center">
              <span className="absolute left-1 top-1 md:left-3 md:top-3 text-blood-red z-0 select-none pointer-events-none w-full">Our Story</span>
              <span className="relative text-white z-10 w-full">Our Story</span>
            </h2>
            <p className="mb-4">I’ve always loved the gym. The lifts. The grind. The pursuit of getting better every single day.</p>
            <p className="mb-4">But more than anything, I love the pump. There’s nothing like finishing a session, catching your reflection, and seeing veins popping and muscles full.</p>
            <p className="mb-4">I tried countless pre-workouts, but stimulants came with tradeoffs—restricted training times, tolerance buildup, and the need to cycle off just to feel them work again. I wanted something different. A product I could take anytime. Something that supported getting bigger, stronger, and undeniably veiny—without compromise.</p>
            <p className="mb-4">That’s why I founded V.A.D. Supplements.</p>
            <p className="mb-4">Whether you run one scoop or two, take it solo or stack it with stimulants, V.A.D. is precision-dosed to deliver extreme pumps, vascularity, and performance—on your terms.</p>
            <p className="mb-0">Train anytime. Get stupid pumps. Stay veiny.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-24 md:py-48 bg-black/40 relative border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="relative text-5xl md:text-8xl font-creepster uppercase italic tracking-tighter text-center mb-8">
              <span className="absolute left-1 top-1 md:left-3 md:top-3 text-blood-red z-0 select-none pointer-events-none w-full">FAQs</span>
              <span className="relative text-white z-10 w-full">FAQs</span>
            </h2>
            <p className="text-white font-black uppercase tracking-[0.4em] md:tracking-[1em] text-[10px] md:text-sm italic">Common questions and answers</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 text-left text-white">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="border-b border-white/10">
                <button
                  className="w-full text-left flex justify-between items-center py-4"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-content-${idx}`}
                >
                  <span className="text-xl md:text-2xl font-black text-white">{item.q}</span>
                  <span className="text-blood-red font-black text-2xl ml-4">{openFaq === idx ? '−' : '+'}</span>
                </button>
                <div
                  id={`faq-content-${idx}`}
                  role="region"
                  aria-labelledby={`faq-header-${idx}`}
                  className={`text-white overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-[1000px] py-4' : 'max-h-0'}`}
                >
                  <p className="leading-relaxed font-['Inter']">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Connect Section */}
      <footer id="connect" className="bg-black pt-24 md:pt-48 pb-10 md:pb-20 border-t border-blood-red/50 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-16 md:gap-32 items-start">
            <div className="space-y-8 md:space-y-12 lg:w-1/2">
              <div className="flex items-center gap-3 md:gap-4 group cursor-pointer">
                <div className="relative">
                  <img src="/images/VAD Logo.jpg" alt="V.A.D Logo" className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 shadow-[3px_3px_0px_#fff] md:shadow-[4px_4px_0px_#fff]" />
                </div>
                <div className="flex flex-col -space-y-1">
                  <span className="font-black text-lg md:text-2xl tracking-tighter uppercase italic text-white leading-none">V.A.D. Supplements</span>
                  <span className="text-[7px] md:text-[9px] font-black text-white tracking-[0.2em] md:tracking-[0.4em] uppercase">Get Big, Get Strong, Get VEINY</span>
                </div>
              </div>
              <div className="flex gap-6 md:gap-10">
                 <a href="https://www.instagram.com/veinyAhhdihsupps" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-20 md:h-20 border-2 border-white/10 flex items-center justify-center text-white hover:bg-blood-red hover:text-white transition-all shadow-[6px_6px_0px_#fff] md:shadow-[10px_10px_0px_#fff] active:scale-95" aria-label="Instagram">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-9 md:h-9"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 2.25h9A5.25 5.25 0 0 1 21.75 7.5v9a5.25 5.25 0 0 1-5.25 5.25h-9A5.25 5.25 0 0 1 2.25 16.5v-9A5.25 5.25 0 0 1 7.5 2.25Zm0 0A5.25 5.25 0 0 0 2.25 7.5v9A5.25 5.25 0 0 0 7.5 21.75h9A5.25 5.25 0 0 0 21.75 16.5v-9A5.25 5.25 0 0 0 16.5 2.25Zm0 0h9M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm6.75.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
                 </a>
                 <a href="https://www.facebook.com/profile.php?id=61586189751842" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-20 md:h-20 border-2 border-white/10 flex items-center justify-center text-white hover:bg-blood-red hover:text-white transition-all shadow-[6px_6px_0px_#fff] md:shadow-[10px_10px_0px_#fff] active:scale-95" aria-label="Facebook">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-9 md:h-9"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                 </a>
                 <a href="https://www.youtube.com/@VeinyAhhDihSupps" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-20 md:h-20 border-2 border-white/10 flex items-center justify-center text-white hover:bg-blood-red hover:text-white transition-all shadow-[6px_6px_0px_#fff] md:shadow-[10px_10px_0px_#fff] active:scale-95" aria-label="YouTube">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-9 md:h-9"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                 </a>
                 <a href="https://www.tiktok.com/@veinyahhdihsupps" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-20 md:h-20 border-2 border-white/10 flex items-center justify-center text-white hover:bg-blood-red hover:text-white transition-all shadow-[6px_6px_0px_#fff] md:shadow-[10px_10px_0px_#fff] active:scale-95" aria-label="TikTok">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-9 md:h-9"><path d="M19.498 3.71v5.07a6.05 6.05 0 01-3.35-1.03v4.98a6.05 6.05 0 11-6.05-6.05c.2 0 .39.01.58.03V2.04c-.19-.02-.38-.04-.58-.04a9.06 9.06 0 10 18.12 0 9.06 9.06 0 00-9.06-9.06c-.2 0-.39.01-.58.03V3.71h.02z"/></svg>
                 </a>
              </div>
              <div className="space-y-2 md:space-y-3">
                <a href="mailto:veinyahdihsupps@gmail.com" className="flex items-center gap-3 text-white hover:text-blood-red transition-colors text-sm md:text-base font-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  veinyahdihsupps@gmail.com
                </a>
                <a href="tel:262-707-0153" className="flex items-center gap-3 text-white hover:text-blood-red transition-colors text-sm md:text-base font-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  262-707-0153
                </a>
              </div>
            </div>
          </div>
          <div className="mt-24 md:mt-48 pt-10 md:pt-16 border-t border-white/5 text-center">
            <p className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.6em] text-white italic">
               © 2026 V.A.D. SUPPLEMENTS LLC• GET BIG • GET STRONG• GET VEINY
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default StoryFaqConnectPage;
