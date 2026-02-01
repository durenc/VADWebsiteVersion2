
import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Facebook,
  Skull,
  Flame,
  ArrowRight,
  Activity,
  Trophy,
  ZapOff,
  Dumbbell,
  Droplets,
  CreditCard
} from 'lucide-react';
import { Flavor, Product } from './types.ts';

const VAD_PRODUCT: Product = {
  id: 'vad-stim-free-original',
  name: 'V.A.D. STIMULANT FREE PREWORKOUT FORMULA',
  tagline: 'GET BIG, GET STRONG, GET VEINY',
  price: 49.99,
  description: 'Unleash absolute anarchy in your bloodstream. This isnt just a preworkout; its a vascular transformation. Formulated with clinical doses of L-Citrulline, Betaine Nitrate, and Glycerol to force-feed your muscles and create skin-splitting pumps that defy logic.',
  flavors: ['Veiny Surge Strawberry', 'Ultimate Pump Punch'],
  image: '/images/VADBlankBackgroundProductImage.jpg'
};

const FAQ_ITEMS = [
  {
    q: 'Why is there no caffeine?',
    a: `V.A.D is built around three priorities: getting big, getting strong, and getting veiny. While caffeine has its place, it also limits when and how a product can be used. Many people train at night, train after coffee, or want pure pump support without stimulants. By keeping V.A.D caffeine-free, we maximize flexibility. If you want stimulants, you can stack caffeine separately—without compromising the pump.`
  },
  {
    q: 'Can I take V.A.D with other pre-workouts?',
    a: `Yes. V.A.D is designed to stack cleanly with stimulant-based pre-workouts. If you train early or rely on stimulants, take 1 scoop of V.A.D alongside 1 scoop of your stim pre-workout. Always check both labels to ensure any overlapping ingredients stay within safe daily limits.`
  },
  {
    q: 'Should I take one scoop or two?', 
    a: `V.A.D is formulated for flexible dosing. Start with 1 scoop to assess tolerance—this will deliver a strong pump. For maximum fullness and vascularity, 2 scoops can be used. Adjust based on your body weight, training intensity, and pump preference.`
  },
  {
    q: 'Why the name “Veiny Ah Dih”?',
    a: `The supplement industry takes itself too seriously. We don’t. Training should be intense, effective, and fun. The name Veiny Ah Dih reflects our no-filter, over-the-top approach to pump training and gym culture. It’s bold, it’s ridiculous, and it delivers exactly what it promises.`
  }
];

const SupplementFacts: React.FC = () => (
  <div className="bg-white text-black p-4 md:p-8 font-sans border-2 md:border-4 border-black w-full max-w-2xl mx-auto shadow-[6px_6px_0px_#E31B23] md:shadow-[10px_10px_0px_#E31B23]">
    <h3 className="text-2xl md:text-4xl font-black border-b-4 md:border-b-8 border-black pb-1 mb-1 leading-none uppercase">Supplement Facts</h3>
    <div className="flex flex-col md:flex-row justify-between text-[10px] md:text-sm font-bold border-b border-black mb-1 pb-1">
      <div className="flex flex-col">
        <span>Serving Size: 1 Scoop (10.4 g) / 2 Scoops (20.8 g)</span>
        <span>Servings Per Container: 30 / 15</span>
      </div>
    </div>
    
    <div className="grid grid-cols-12 text-[9px] md:text-xs font-black border-b-2 md:border-b-4 border-black mb-1 py-1 uppercase italic">
      <div className="col-span-6">Amount Per Serving</div>
      <div className="col-span-3 text-center">1 Scoop</div>
      <div className="col-span-3 text-center">2 Scoops</div>
    </div>

    {[
      { name: 'L-Citrulline', s1: '4,000 mg', s2: '8,000 mg', dv: '†' },
      { name: 'Betaine Anhydrous', s1: '1,500 mg', s2: '3,000 mg', dv: '†' },
      { name: 'Taurine', s1: '1,000 mg', s2: '2,000 mg', dv: '†' },
      { name: 'Glycerol Monostearate', s1: '1,500 mg', s2: '3,000 mg', dv: '†' },
      { name: 'Agmatine Sulfate', s1: '500 mg', s2: '1,000 mg', dv: '†' },
      { name: 'Betaine Nitrate', s1: '1,000 mg', s2: '2,000 mg', dv: '†' },
      { name: 'Vitamin C (as Ascorbic Acid)', s1: '150 mg', s2: '300 mg', dv: '167%/334%' },
      { name: 'Sodium (as Sodium Chloride)', s1: '200 mg', s2: '400 mg', dv: '9%/18%' },
      { name: 'Potassium (as Potassium Citrate)', s1: '95 mg', s2: '190 mg', dv: '2%/4%' },
      { name: 'Magnesium (as Citrate Anhydrous)', s1: '30 mg', s2: '60 mg', dv: '7%/14%' },
    ].map((item, idx) => (
      <div key={idx} className="grid grid-cols-12 border-b border-black text-[8px] md:text-xs py-1 font-bold items-center">
        <div className="col-span-6">{item.name}</div>
        <div className="col-span-3 text-center border-l border-black/10">{item.s1}</div>
        <div className="col-span-3 text-center border-l border-black/10">{item.s2}</div>
      </div>
    ))}

    <div className="text-[8px] md:text-[10px] py-1 border-b border-black font-bold italic">
      † Daily Value (DV) not established. Percent Daily Values are based on a 2,000 calorie diet.
    </div>
    
    <div className="text-[8px] md:text-[10px] mt-2 font-bold leading-tight">
      <span className="uppercase">Other Ingredients:</span> Natural and artificial flavors, silicon dioxide, sucralose.
    </div>

    <div className="text-[8px] md:text-[10px] mt-2 font-bold leading-tight">
      <span className="uppercase">Directions:</span> Mix 1-2 scoops with 12–20 oz of water. Consume 20–30 minutes before training.
    </div>

    <div className="border border-black p-1 mt-4 text-[7px] md:text-[9px] font-black leading-tight uppercase">
      These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
    </div>
  </div>
);

const KlaviyoWaitlist: React.FC = () => {
  return (
    <div id="klaviyo-waitlist" className="w-full">
      <div className="klaviyo-form-YtACB9"></div>
    </div>
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor>(VAD_PRODUCT.flavors[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blood-red selection:text-white font-['Inter'] overflow-x-hidden">
      <div className="fixed inset-0 z-[-1]" style={{ backgroundImage: `url('/images/VeinsBackground.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', filter: 'brightness(0.9)' }}></div>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[70] transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-blood-red/40 py-2' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative">
              <img src="/images/VAD Logo.jpg" alt="V.A.D Logo" className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 shadow-[3px_3px_0px_#fff] md:shadow-[4px_4px_0px_#fff]" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-black text-lg md:text-2xl tracking-tighter uppercase italic text-white leading-none">V.A.D. Supplements</span>
              <span className="text-[7px] md:text-[9px] font-black text-white/40 tracking-[0.2em] md:tracking-[0.4em] uppercase">Get Big, Get Strong, Get VEINY</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8 md:space-x-10">
            {['Home', 'The Formula', 'Facts', 'Our Story', 'FAQs', 'Connect'].map((link) => (
              <button 
                key={link} 
                onClick={() => {
                  if (link === 'Facts') return scrollToSection('dosage-facts');
                  if (link === 'The Formula') return scrollToSection('the-formula');
                  if (link === 'Our Story') return scrollToSection('our-story');
                  if (link === 'FAQs') return scrollToSection('faqs');
                  return scrollToSection(link.toLowerCase().replace(' ', '-'))
                }}
                className="text-[10px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.25em] uppercase hover:text-blood-red transition-all italic text-white"
              >
                {link}
              </button>
            ))}
          </div> 
          <button className="lg:hidden p-2 text-white bg-white/5 border border-white/10" onClick={() => scrollToSection('connect')} aria-label="Menu">
            <Skull size={20} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent z-10" />
          <img 
            src="/images/VADInGymImage.jpg" 
            alt="Intense Gym" 
            className="w-full h-full object-cover brightness-[0.65] contrast-125 scale-105"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center">
          <div className="space-y-4 md:space-y-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-2 md:space-y-4 mb-4 md:mb-8">
               <span className="text-blood-red font-black text-sm md:text-3xl tracking-[0.2em] md:tracking-[0.4em] uppercase italic drop-shadow-[0_0_10px_#E31B23] animate-pulse">
                {VAD_PRODUCT.tagline}
              </span>
              <div className="h-0.5 md:h-1 w-24 md:w-48 bg-blood-red shadow-[0_0_15px_#E31B23]"></div>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-creepster leading-[0.9] md:leading-[0.85] text-white uppercase drop-shadow-[5px_5px_0px_#E31B23] md:drop-shadow-[10px_10px_0px_#E31B23]">
              GET READY TO <br /> <span className="glitch-text text-white block mt-2 md:mt-4 md:inline" data-text="GET VEINY">GET VEINY</span>
            </h1>

            <p className="text-white font-black text-xs sm:text-base md:text-xl uppercase italic tracking-tight max-w-2xl mx-auto py-6 md:py-10 border-y border-white/10">
              No stims, just crazy strength, skin tearing pumps, and ultimate veinyness
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mt-8 md:mt-12">
              <button 
                onClick={() => scrollToSection('product')}
                className="group relative bg-blood-red text-white px-8 md:px-16 py-4 md:py-8 text-lg md:text-2xl font-black tracking-widest uppercase transition-all flex items-center justify-center gap-3 md:gap-4 shadow-[8px_8px_0px_#fff] md:shadow-[15px_15px_0px_#fff] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_#fff] md:hover:shadow-[20px_20px_0px_#fff] active:translate-y-2 active:shadow-none"
              >
                SECURE THE BAG <ArrowRight className="w-[22px] h-[22px] md:w-7 md:h-7" />
              </button>
              <button 
                onClick={() => scrollToSection('the-formula')}
                className="group relative bg-transparent border-2 md:border-4 border-white text-white px-8 md:px-16 py-4 md:py-8 text-lg md:text-2xl font-black tracking-widest uppercase transition-all flex items-center justify-center hover:bg-white hover:text-black italic"
              >
                THE SCIENCE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Slogan */}
      <div className="bg-blood-red py-4 md:py-6 overflow-hidden whitespace-nowrap border-y-2 md:border-y-4 border-white/30 md:rotate-1 relative z-30 shadow-[0_0_50px_rgba(227,27,35,0.7)]">
        <div className="inline-block animate-marquee text-white font-black italic text-xl md:text-5xl uppercase tracking-tighter">
          {Array(10).fill(`${VAD_PRODUCT.tagline} • `).join("")}
        </div>
      </div>

      {/* Lifestyle / "Trench" Photo Section */}
      <section className="relative py-24 md:py-48 overflow-hidden bg-black/60 border-b-4 md:border-b-8 border-blood-red">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1 group">
             <div className="absolute -inset-3 md:-inset-6 border-2 md:border-4 border-blood-red rotate-3 z-0 transition-transform group-hover:rotate-0" />
             <div className="relative bg-zinc-900 overflow-hidden shadow-[15px_15px_0px_#E31B23] md:shadow-[25px_25px_0px_#E31B23] transform -rotate-1">
                <img 
                  src="/images/VADInGymImage.jpg" 
                  alt="V.A.D. in the trenches" 
                  className="w-full brightness-[0.9] contrast-110 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-blood-red/90 p-4 md:p-10">
                   <p className="text-white font-black italic uppercase tracking-widest text-lg md:text-3xl">PROVEN IN THE IRON PIT</p>
                </div>
             </div>
          </div>
          <div className="space-y-6 md:space-y-10 order-1 lg:order-2">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-creepster text-white uppercase italic leading-[0.9] md:leading-[0.8] tracking-tighter">
               VASCULARITY <br /> <span className="text-blood-red">DEMANDED.</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-2xl font-black italic tracking-tight leading-relaxed border-l-4 md:border-l-8 border-blood-red pl-4 md:pl-10">
              WE DON'T DO "CASUAL GYM SESSIONS", BUT IF YOU WANT TO BE BIG, STRONG, AND VEINY, YOU'RE IN THE RIGHT PLACE.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
               <div className="p-6 md:p-10 bg-zinc-950/50 border border-white/10 flex flex-col items-center text-center group hover:border-blood-red transition-all">
                 <Dumbbell className="text-blood-red mb-3 md:mb-6 group-hover:scale-110 md:group-hover:scale-125 transition-transform w-8 h-8 md:w-12 md:h-12" />
                 <span className="text-white font-black uppercase italic tracking-widest text-[8px] md:text-xs">ELITE STRENGTH</span>
               </div>
               <div className="p-6 md:p-10 bg-zinc-950/50 border border-white/10 flex flex-col items-center text-center group hover:border-blood-red transition-all">
                 <Activity className="text-blood-red mb-3 md:mb-6 group-hover:scale-110 md:group-hover:scale-125 transition-transform w-8 h-8 md:w-12 md:h-12" />
                 <span className="text-white font-black uppercase italic tracking-widest text-[8px] md:text-xs">MAX VASCULARITY</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product & Purchase Section */}
      <section id="product" className="py-16 md:py-32 bg-black/40 relative border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
            <div className="relative group">
              <div className="bg-zinc-900 p-8 md:p-16 border-2 border-white/5 flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_100px_rgba(227,27,35,0.2)] md:shadow-[inset_0_0_150px_rgba(227,27,35,0.2)]">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/carbon-fibre.png')] opacity-30"></div>
                <img src={VAD_PRODUCT.image} alt="VAD Product" className="max-h-[300px] md:max-h-[600px] object-contain drop-shadow-[0_0_60px_rgba(227,27,35,0.6)] md:drop-shadow-[0_0_100px_rgba(227,27,35,0.8)] transform group-hover:rotate-6 transition-transform duration-700 relative z-10" />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-8 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 text-blood-red font-black text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em] italic">
                   <Flame fill="currentColor" className="w-4 h-4 md:w-5 md:h-5" /> FREAK TIER ANARCHY
                </div>
                <h2 className="text-4xl md:text-8xl font-creepster text-white uppercase leading-[0.9] md:leading-none italic drop-shadow-[4px_4px_0px_#E31B23] md:drop-shadow-[8px_8px_0px_#E31B23]">
                  {VAD_PRODUCT.name}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 md:gap-10">
                 <div className="flex flex-col">
                   <span className="text-[8px] md:text-[10px] font-black uppercase text-white/40 tracking-[0.4em] md:tracking-[0.6em] mb-1 md:mb-2">YOU CAN'T PUT A PRICE ON A PUMP LIKE THIS, BUT WE TRIED</span>
                   <span className="text-6xl sm:text-8xl md:text-9xl font-black italic tracking-tighter text-white leading-none">${VAD_PRODUCT.price}</span>
                 </div>
                 <div className="sm:mb-4">
                   <span className="text-blood-red font-black text-[10px] md:text-sm uppercase tracking-widest bg-blood-red/10 border border-blood-red/30 px-4 md:px-6 py-1 md:py-2 block">30 SERVINGS</span>
                 </div>
              </div>

              <p className="text-slate-400 text-lg md:text-2xl font-medium leading-relaxed italic border-l-4 md:border-l-8 border-blood-red pl-6 md:pl-10 max-w-xl">
                {VAD_PRODUCT.description}
              </p>

              <div className="space-y-8 md:space-y-12">
                {/*
                <div>
                   <h4 className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.6em] text-white/40 mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
                     CHOOSE YOUR POISON <div className="h-[1px] flex-grow bg-white/10"></div>
                   </h4>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      {VAD_PRODUCT.flavors.map(f => (
                        <button key={f} onClick={() => setSelectedFlavor(f)}
                          className={`py-4 md:py-6 text-[9px] md:text-[11px] font-black uppercase tracking-widest border-2 transition-all italic shadow-[4px_4px_0px_#000] md:shadow-[6px_6px_0px_#000] ${selectedFlavor === f ? 'bg-blood-red border-blood-red text-white translate-x-1 translate-y-1 shadow-none' : 'border-white/10 text-slate-500 hover:border-white/40 hover:text-white'}`}>
                          {f}
                        </button>
                      ))}
                   </div>
                </div>
                */} 

                <div className="pt-4 md:pt-8 space-y-6 md:space-y-10">
                  <div className="relative group">
                    <KlaviyoWaitlist />
                  </div>

                  {/* <div className="flex flex-col items-center gap-4 py-6 md:py-10 border-y border-white/5">
                    <div className="flex items-center gap-3 text-white/30 font-black italic uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-sm">
                      POWERED BY <span className="text-white tracking-widest flex items-center gap-1 md:gap-2"><div className="w-4 h-4 md:w-6 md:h-6 border md:border-2 border-white/30 flex items-center justify-center font-black text-[7px] md:text-[10px]">S</div> SQUARE</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Breakdown Section */}
      <section id="the-formula" className="py-24 md:py-48 bg-black/80 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center mb-16 md:mb-32 text-center space-y-4 md:space-y-8">
            <div className="flex justify-center mb-4 md:mb-6">
              <img src="/images/VAD Logo.jpg" alt="V.A.D Logo" className="w-[11rem] h-auto object-contain rounded" />
            </div>
            <span className="text-blood-red font-black text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.7em] uppercase">STIM-FREE POTENCY (2 SCOOPS)</span>
            <h2 className="text-5xl sm:text-7xl md:text-[11rem] font-creepster text-white uppercase italic tracking-tighter leading-[0.9] md:leading-none drop-shadow-[10px_10px_0px_rgba(227,27,35,0.3)] md:drop-shadow-[20px_20px_0px_rgba(227,27,35,0.3)]">THE DOSAGE</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-24 md:mb-40">
             {[
               { title: "8,000mg L-Citrulline", desc: "Pure Nitric Oxide precursor for massive, skin-tightening fullness. (Max Dose)", icon: <Activity className="text-blood-red w-8 h-8 md:w-11 md:h-11" /> },
               { title: "3,000mg Glycerol", desc: "Monostearate goodness to hyper-hydrate your muscle fibers for peak volume.", icon: <Droplets className="text-blood-red w-8 h-8 md:w-11 md:h-11" /> },
               { title: "2,000mg Betaine Nitrate", desc: "Explosive vasodilation through the nitrate pathway for long-lasting pumps.", icon: <ZapOff className="text-blood-red w-8 h-8 md:w-11 md:h-11" /> },
               { title: "1,000mg Agmatine Sulfate", desc: "The 'Super Arginine' that keeps the pump alive for hours after training.", icon: <Trophy className="text-blood-red w-8 h-8 md:w-11 md:h-11" /> }
             ].map((ing, i) => (
               <div key={i} className="group p-8 md:p-14 bg-zinc-950/90 border border-white/5 hover:border-blood-red transition-all relative overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,0.6)] md:shadow-[20px_20px_0px_rgba(0,0,0,0.6)]">
                  <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 text-[6rem] md:text-[12rem] font-creepster text-white/[0.04] transform -rotate-12 transition-all group-hover:text-blood-red/[0.1]">{i+1}</div>
                  <div className="relative z-10 space-y-6 md:space-y-10">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blood-red/10 group-hover:border-blood-red/50 transition-all duration-500">
                      {ing.icon}
                    </div>
                    <h4 className="text-2xl md:text-4xl font-black italic uppercase leading-tight md:leading-none">{ing.title}</h4>
                    <p className="text-slate-500 text-base md:text-xl font-bold tracking-wide uppercase italic leading-relaxed">{ing.desc}</p>
                  </div>
               </div>
             ))}
          </div>

          <div id="dosage-facts" className="flex flex-col items-center pt-16 md:pt-32 border-t border-white/10">
            <div className="mb-12 md:mb-24 text-center space-y-4 md:space-y-8">
               <h3 className="text-3xl sm:text-5xl md:text-9xl font-black uppercase italic tracking-widest text-white leading-[0.9] md:leading-none">CLINICAL <br /> <span className="text-blood-red">TRANSPARENCY</span></h3>
               <p className="text-slate-500 font-black uppercase tracking-[0.4em] md:tracking-[1em] text-[10px] md:text-sm italic">FULL DUAL-COLUMN DISCLOSURE. ZERO SECRETS.</p>
            </div>
            <div className="w-full max-w-2xl mb-16 md:mb-32">
              <SupplementFacts />
            </div>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section id="our-story" className="py-24 md:py-48 bg-black/70 relative border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-invert text-white font-['Inter']">
            <h2 className="text-4xl md:text-6xl font-creepster text-white uppercase italic tracking-tighter mb-4">Our Story</h2>
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
            <h2 className="text-4xl md:text-6xl font-creepster text-white uppercase italic tracking-tighter">FAQs</h2>
            <p className="text-slate-500 font-black uppercase tracking-[0.4em] md:tracking-[1em] text-[10px] md:text-sm italic">Common questions and answers</p>
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

      {/* Footer */}
      <footer id="connect" className="bg-black pt-24 md:pt-48 pb-10 md:pb-20 border-t border-blood-red/50 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-16 md:gap-32 items-start">
            <div className="space-y-8 md:space-y-12 lg:w-1/2">
              <div className="flex items-center gap-6 md:gap-10">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-blood-red flex items-center justify-center shadow-[5px_5px_0px_#fff] md:shadow-[10px_10px_0px_#fff]">
                  <img src="/images/VAD Logo.jpg" alt="V.A.D Logo" className="w-full h-full object-contain rounded" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl md:text-5xl tracking-tighter uppercase italic text-white leading-none">V.A.D SUPPS</span>
                  <span className="text-[8px] md:text-xs font-black text-blood-red tracking-[0.3em] md:tracking-[0.7em] uppercase italic">BUILT FOR FREAKS</span>
                </div>
              </div>
              <h4 className="font-creepster text-3xl md:text-6xl text-white uppercase italic tracking-tighter max-w-lg leading-none">
                {VAD_PRODUCT.tagline}
              </h4>
              <div className="flex gap-6 md:gap-10">
                 <a href="https://www.instagram.com/veinyahdihsupps" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-20 md:h-20 border-2 border-white/10 flex items-center justify-center text-white hover:bg-blood-red hover:text-white transition-all shadow-[6px_6px_0px_#fff] md:shadow-[10px_10px_0px_#fff] active:scale-95">
                   <Instagram className="w-6 h-6 md:w-9 md:h-9" />
                 </a>
                 <a href="https://www.facebook.com/VeinyAhDihSupps" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-20 md:h-20 border-2 border-white/10 flex items-center justify-center text-white hover:bg-blood-red hover:text-white transition-all shadow-[6px_6px_0px_#fff] md:shadow-[10px_10px_0px_#fff] active:scale-95">
                   <Facebook className="w-6 h-6 md:w-9 md:h-9" />
                 </a>
              </div>
            </div>

            {/* <div className="lg:w-1/2 w-full">
               <div className="space-y-6 md:space-y-12">
                  <h5 className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-white">NEWSLETTER</h5>
                  <div className="relative group w-full">
                    <input type="email" placeholder="YOUR@UNIT.COM" className="w-full bg-zinc-900 border-2 border-white/10 px-6 md:px-8 py-5 md:py-8 text-[11px] md:text-[13px] font-black uppercase tracking-widest focus:outline-none focus:border-blood-red italic placeholder:text-zinc-800 text-white" />
                    <button className="absolute right-2 top-2 bottom-2 px-6 md:px-10 bg-blood-red text-white font-black italic text-xs md:text-sm hover:bg-white hover:text-black transition-all">JOIN</button>
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-white/20 font-black italic uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
                    POWERED BY <span className="text-white flex items-center gap-1"><div className="w-3 h-3 md:w-4 md:h-4 border border-white/30 flex items-center justify-center font-black text-[7px] md:text-[8px]">S</div> SQUARE</span>
                  </div>
               </div>
            </div> */}
          </div>
          
          <div className="mt-24 md:mt-48 pt-10 md:pt-16 border-t border-white/5 text-center">
            <p className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.6em] text-zinc-900 italic">
               © 2026 V.A.D. SUPPLEMENTS LLC• GET BIG • GET STRONG• GET VEINY
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
