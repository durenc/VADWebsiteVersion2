import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Skull } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Get VEINY', to: '/get-veiny' },
    { label: 'The Veiny Ahh Formula', to: '/get-veiny#the-veiny-Ahh-formula' },
    { label: 'Veiny Ahh Drip', to: '/veiny-drip' },
    { label: 'Our Story', to: '/story-faqs#our-story' },
    { label: 'FAQs', to: '/story-faqs#faqs' },
    { label: 'Connect', to: '/story-faqs#connect' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[70] transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-blood-red/40 py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative">
            <img src="/images/VAD Logo.jpg" alt="V.A.D Logo" className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 shadow-[3px_3px_0px_#fff] md:shadow-[4px_4px_0px_#fff]" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-black text-lg md:text-2xl tracking-tighter uppercase italic text-white leading-none">V.A.D. Supplements</span>
            <span className="text-[7px] md:text-[9px] font-black text-white tracking-[0.2em] md:tracking-[0.4em] uppercase">Get Big, Get Strong, Get VEINY</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-8 md:space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-[10px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.25em] uppercase hover:text-blood-red transition-all italic text-white"
              onClick={() => setMobileNavOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="lg:hidden p-2 text-white bg-white/5 border border-white/10" onClick={() => setMobileNavOpen((v) => !v)} aria-label="Menu">
          <Skull size={20} />
        </button>
      </div>

      {mobileNavOpen && (
        <div className="flex flex-col items-center gap-2 py-4 bg-black/95 border-t border-blood-red/40 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="w-full text-center text-[14px] font-black tracking-[0.2em] uppercase hover:text-blood-red transition-all italic text-white py-2"
              onClick={() => setMobileNavOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
