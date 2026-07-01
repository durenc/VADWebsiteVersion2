import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Skull, ChevronDown, ChevronUp } from 'lucide-react';

const PROMO_BANNER = {
  enabled: true, // set to false to disable the top promo banner site-wide
  text: 'NOW WITH FREE SHIPPING FOR A LIMITED TIME',
  hoverText: 'CLICK TO SHOP THE FREE SHIPPING DEAL',
  scrollDurationMs: 42000,
  repeatCount: 5,
  secondLineEnabled: false, // set to false to hide the second summary line
  secondLineText: 'SHOP NOW FOR A LIMITED TIME OFFER',
  buttonEnabled: false, // set to false to hide the CTA button on the optional second line
  buttonText: 'Shop the Deal Now',
  buttonHref: 'https://vadsupps.square.site/product/veiny-ahh-drink-stimulant-free-pre-workout-/ST3VK7MTM6Y246OLYUNSD6ER?cp=true&sa=false&sbp=false&q=false&category_id=FFBOPZA4NKZZT72H7QHFBHR6',
  linkHref: 'https://vadsupps.square.site/product/veiny-ahh-drink-stimulant-free-pre-workout-/ST3VK7MTM6Y246OLYUNSD6ER?cp=true&sa=false&sbp=false&q=false&category_id=FFBOPZA4NKZZT72H7QHFBHR6'
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [bannerCollapsed, setBannerCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('vadPromoBannerCollapsed');
      setBannerCollapsed(stored === 'true');
    } catch {
      // ignore if localStorage is unavailable
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem('vadPromoBannerCollapsed', String(bannerCollapsed));
    } catch {
      // ignore if localStorage is unavailable
    }
  }, [bannerCollapsed]);

  const navLinks = [
    { label: 'Get VEINY', to: '/' },
    { label: 'The Veiny Ahh Formula', to: '/#formula' },
    { label: 'Veiny Ahh Drip', to: '/drip' },
    { label: 'Our Story', to: '/about#our-story' },
    { label: 'FAQs', to: '/about#faqs' },
    { label: 'Connect', to: '/about#connect' }
  ];

  const promoTrack = Array(PROMO_BANNER.repeatCount).fill(PROMO_BANNER.text).join('    •    ');

  return (
    <div className="fixed top-0 w-full z-[70]">
      <style>{`
        @keyframes promoTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-blood-red/40 py-2' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="relative">
              <img src="/images/VAD Logo.jpg" alt="V.A.D Logo" className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 shadow-[3px_3px_0px_#fff] md:shadow-[4px_4px_0px_#fff]" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-black text-lg md:text-2xl tracking-tighter uppercase italic text-white leading-none">V.A.D. Supplements</span>
              <span className="text-[7px] md:text-[9px] font-black text-white tracking-[0.2em] md:tracking-[0.4em] uppercase">Get Big, Get Strong, Get VEINY</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8 md:space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-[10px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.25em] uppercase hover:text-blood-red transition-all italic text-white"
              onClick={() => {
                setMobileNavOpen(false);
                if (link.to === '/' && location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
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
              onClick={() => {
                setMobileNavOpen(false);
                if (link.to === '/' && location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>

    {PROMO_BANNER.enabled && (
      <div
        role="link"
        tabIndex={0}
        onClick={() => window.open(PROMO_BANNER.linkHref, '_blank', 'noopener noreferrer')}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            window.open(PROMO_BANNER.linkHref, '_blank', 'noopener noreferrer');
          }
        }}
        className={`group block cursor-pointer bg-blood-red border-t border-blood-red/90 transition-all duration-500 overflow-hidden ${bannerCollapsed ? 'h-9' : 'h-auto'} hover:bg-white focus:outline-none focus:ring-2 focus:ring-white`}
      >
        <div className={`container mx-auto px-4 md:px-6 flex flex-col ${bannerCollapsed ? 'py-0.5' : 'py-2'} gap-2`}>
          <div className="flex items-center justify-between">
            {!bannerCollapsed ? (
              <div className="relative overflow-hidden flex-1">
                <div
                    className="inline-flex min-w-[200%] items-center whitespace-nowrap text-white group-hover:text-blood-red uppercase tracking-[0.35em] font-creepster text-base md:text-xl transition-opacity duration-300 opacity-100 group-hover:opacity-0 border-b border-white/15 group-hover:border-blood-red"
                    style={{
                        animation: `promoTicker ${PROMO_BANNER.scrollDurationMs}ms linear infinite`
                    }}
                  >
                    <span className="pr-8 transition-colors duration-300 group-hover:text-blood-red">{promoTrack}</span>
                    <span className="pr-8 transition-colors duration-300 group-hover:text-blood-red">{promoTrack}</span>
                  </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-blood-red uppercase tracking-[0.35em] font-creepster text-base md:text-xl text-center">
                    {PROMO_BANNER.hoverText}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex-1" />
            )}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setBannerCollapsed((prev) => !prev);
              }}
              className="ml-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white transition hover:bg-black/20"
              aria-label={bannerCollapsed ? 'Open promo banner' : 'Collapse promo banner'}
            >
              {bannerCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
            </button>
          </div>

          {!bannerCollapsed && PROMO_BANNER.secondLineEnabled && (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-white uppercase tracking-[0.25em] font-black text-[10px] md:text-sm">
                {PROMO_BANNER.secondLineText}
              </div>
              {PROMO_BANNER.buttonEnabled && (
                <a
                  href={PROMO_BANNER.buttonHref}
                  className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-black transition hover:bg-black hover:text-white"
                >
                  {PROMO_BANNER.buttonText}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    )}
  </div>
  );
};

export default Navbar;
