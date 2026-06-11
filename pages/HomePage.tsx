import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';


const HomePage: React.FC = () => (
  <>
    <PageMeta
      title="Get Veiny | V.A.D. Supplements"
      description="V.A.D. (Veiny Ahh Dih) Supplements delivers stimulant-free performance and insane vascularity. Get VEINY with premium formula and athlete gear built for strength and pumps."
      url="https://veinyahdihsupps.com/"
      image="https://veinyahdihsupps.com/images/VeinsBackground.png"
    />
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent z-10" />
        <img 
          src="/images/VeinsBackground.png" 
          alt="Veins Background" 
          className="w-full h-full object-cover brightness-[0.4] contrast-125 scale-105"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center">
      <div className="space-y-4 md:space-y-6 max-w-5xl">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-creepster leading-[0.9] md:leading-[0.85] text-white uppercase drop-shadow-[5px_5px_0px_#E31B23] md:drop-shadow-[10px_10px_0px_#E31B23] text-center">
          GET BIG<br />GET STRONG<br />
          <span className="glitch-text text-white block mt-2 md:mt-4 md:inline" data-text="GET VEINY">GET VEINY</span>
        </h1>

        <p className="text-white font-black text-xs sm:text-base md:text-xl uppercase italic tracking-tight max-w-2xl mx-auto py-6 md:py-10 border-y border-white/10">
          No stims, just crazy strength, skin tearing pumps, and ultimate veinyness
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mt-8 md:mt-12">
          <Link 
            to="/#get-veiny"
            className="group relative bg-blood-red text-white px-8 md:px-16 py-4 md:py-8 text-lg md:text-2xl font-black tracking-widest uppercase transition-all flex items-center justify-center gap-3 md:gap-4 shadow-[8px_8px_0px_#fff] md:shadow-[15px_15px_0px_#fff] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_#fff] md:hover:shadow-[20px_20px_0px_#fff] active:translate-y-2 active:shadow-none"
          >
            SECURE THE BAG
          </Link>
          <Link 
            to="/#formula"
            className="group relative bg-transparent border-2 md:border-4 border-white text-white px-8 md:px-16 py-4 md:py-8 text-lg md:text-2xl font-black tracking-widest uppercase transition-all flex items-center justify-center hover:bg-white hover:text-black italic"
          >
            OUR VEINY Ahh FORMULA
          </Link>
        </div>
      </div>
    </div>
  </section>
  </>
);

export default HomePage;
