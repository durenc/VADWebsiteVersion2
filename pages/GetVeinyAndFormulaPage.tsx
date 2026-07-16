
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { VAD_PRODUCT } from '../data/productData';
import PageMeta from '../components/PageMeta';

const getTimeLeft = (endTime: number) => {
  const difference = Math.max(endTime - Date.now(), 0);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const formatTime = (value: number) => String(value).padStart(2, '0');

const FEATURABLE_WIDGET_ID = 'featurable-f8fda964-a81a-4e42-ba42-dd6a84e8493f';
const FEATURABLE_SCRIPT_URL = 'https://cdn.featurable.com/widget/v2/embed.js';

const SALE_ACTIVE = true;
const SALE_TIMER_ENABLED = true;
const SALE_PRICE = 44.99;
const SALE_END_DATE = '2026-06-11T23:59:59-05:00';

const SupplementFacts: React.FC = () => (
  <div className="bg-white text-black p-4 md:p-8 font-sans border-2 md:border-4 border-black w-full max-w-2xl mx-auto shadow-[6px_6px_0px_#E31B23] md:shadow-[10px_10px_0px_#E31B23]">
    <h3 className="text-2xl md:text-4xl font-black border-b-4 md:border-b-8 border-black pb-1 mb-1 leading-none uppercase">
      Supplement Facts
    </h3>
    <div className="flex flex-col md:flex-row justify-between text-[10px] md:text-sm font-bold border-b border-black mb-1 pb-1">
      <div className="flex flex-col">
        <span>Serving Size: 1 Scoop / 2 Scoops</span>
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
      { name: 'Betaine Anhydrous (Trimethylglycine)', s1: '1,500 mg', s2: '3,000 mg', dv: '†' },
      { name: 'Taurine', s1: '1,000 mg', s2: '2,000 mg', dv: '†' },
      { name: 'Glycerol Monostearate', s1: '1,500 mg', s2: '3,000 mg', dv: '†' },
      { name: 'Agmatine Sulfate', s1: '1,000 mg', s2: '2,000 mg', dv: '†' },
      { name: 'Vitamin C (as Ascorbic Acid)', s1: '150 mg', s2: '300 mg', dv: '167%/334%' },
      { name: 'Sodium Chloride', s1: '500 mg', s2: '1,000 mg', dv: '22%/44%' },
      { name: 'Potassium Citrate', s1: '250 mg', s2: '500 mg', dv: '5%/10%' }
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

const GetVeinyAndFormulaPage: React.FC = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(VAD_PRODUCT.flavors[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showPreviewArrows, setShowPreviewArrows] = useState(false);
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<number, boolean>>({});
  const previewListRef = useRef<HTMLDivElement | null>(null);
  const saleEndTime = useMemo(() => new Date(SALE_END_DATE).getTime(), []);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(saleEndTime));

  const galleryImages = useMemo(() => {
    return (VAD_PRODUCT.images && VAD_PRODUCT.images.length > 0 ? VAD_PRODUCT.images : [VAD_PRODUCT.image]).filter(Boolean);
  }, []);

  const updatePreviewArrows = useCallback(() => {
    const container = previewListRef.current;

    if (!container) {
      setShowPreviewArrows(false);
      return;
    }

    const canScrollUp = container.scrollTop > 0;
    const canScrollDown = container.scrollTop + container.clientHeight < container.scrollHeight - 1;
    setShowPreviewArrows(canScrollUp || canScrollDown);
  }, []);

  const goToPreviousImage = () => {
    setActiveImageIndex((previousIndex) => (previousIndex === 0 ? galleryImages.length - 1 : previousIndex - 1));
  };

  const goToNextImage = () => {
    setActiveImageIndex((previousIndex) => (previousIndex === galleryImages.length - 1 ? 0 : previousIndex + 1));
  };

  const scrollPreviewList = (direction: 'up' | 'down') => {
    const container = previewListRef.current;

    if (!container) {
      return;
    }

    const scrollAmount = direction === 'down' ? 140 : -140;
    container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  };

  const handleImageError = (index: number) => {
    setImageLoadErrors((previousErrors) => ({ ...previousErrors, [index]: true }));
  };

  useEffect(() => {
    if (!SALE_ACTIVE || !SALE_TIMER_ENABLED) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      const nextTimeLeft = getTimeLeft(saleEndTime);
      setTimeLeft(nextTimeLeft);

      if (nextTimeLeft.days === 0 && nextTimeLeft.hours === 0 && nextTimeLeft.minutes === 0 && nextTimeLeft.seconds === 0) {
        window.clearInterval(timer);
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [saleEndTime]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const existingScript = document.querySelector(`script[src="${FEATURABLE_SCRIPT_URL}"]`);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = FEATURABLE_SCRIPT_URL;
      script.defer = true;
      script.charset = 'UTF-8';
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    updatePreviewArrows();
  }, [activeImageIndex, galleryImages.length, updatePreviewArrows]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleResize = () => updatePreviewArrows();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [updatePreviewArrows]);

  const saleIsActive = SALE_ACTIVE && Date.now() < saleEndTime;
  const flavorDescriptions: Record<string, string> = {
    'Bulging Berries': 'Flavor description placeholder for Bulging Berries.'
  };

  const formattedOriginalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(VAD_PRODUCT.price);

  const formattedSalePrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(SALE_PRICE);

  return (
    <>
      <PageMeta
        title="Veiny Ahh Formula | V.A.D. Supplements"
        description="Shop Veiny Ahh Dih Supplements' stimulant-free pump formula built to support pumps, performance, hydration, and vascularity. Get big, strong, and veiny."
        url="https://veinyahdihsupps.com/formula"
        image="https://veinyahdihsupps.com/images/VADBlankProduct.jpg"
      />
      <h1 className="sr-only">Get Veiny & Veiny Ahh Formula</h1>
      {/* Product & Purchase Section */}
      <section id="get-veiny" className="py-16 md:py-32 bg-black/40 relative border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
            <div className="relative">
              <div className="bg-zinc-900 border-2 border-white/5 flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_100px_rgba(227,27,35,0.2)] md:shadow-[inset_0_0_150px_rgba(227,27,35,0.2)]">
                <div className="absolute inset-0 bg-[url('/images/carbon-fibre.png')] opacity-30"></div>
                <div className="relative z-10 flex items-center gap-3 md:gap-4 w-full p-0">
                  <div className="hidden sm:flex flex-col items-center gap-2 shrink-0">
                    {showPreviewArrows && (
                      <button
                        type="button"
                        onClick={() => scrollPreviewList('up')}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-blood-red/80"
                        aria-label="Scroll preview images up"
                      >
                        <ChevronUp size={16} />
                      </button>
                    )}
                    <div
                      ref={previewListRef}
                      className="flex max-h-[240px] flex-col gap-3 overflow-y-auto overflow-x-hidden md:max-h-[420px]"
                    >
                      {galleryImages.map((image, index) => (
                        <button
                          key={`${image}-${index}`}
                          type="button"
                          onClick={() => setActiveImageIndex(index)}
                          className={`aspect-square w-16 shrink-0 overflow-hidden rounded border transition-all md:w-20 ${index === activeImageIndex ? 'border-blood-red shadow-[0_0_0_2px_rgba(227,27,35,0.5)]' : 'border-white/10 hover:border-white/40'}`}
                          aria-label={`View image ${index + 1}`}
                        >
                          <img
                            src={imageLoadErrors[index] ? '/images/ComingSoon.jpg' : image}
                            alt={`Preview image ${index + 1}`}
                            onError={() => handleImageError(index)}
                            className="h-full w-full object-contain bg-black/20"
                          />
                        </button>
                      ))}
                    </div>
                    {showPreviewArrows && (
                      <button
                        type="button"
                        onClick={() => scrollPreviewList('down')}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:bg-blood-red/80"
                        aria-label="Scroll preview images down"
                      >
                        <ChevronDown size={16} />
                      </button>
                    )}
                  </div>

                  <div className="relative flex-1 aspect-square min-h-[280px] overflow-hidden md:min-h-[560px]">
                    <img
                      src={imageLoadErrors[activeImageIndex] ? '/images/ComingSoon.jpg' : galleryImages[activeImageIndex]}
                      alt={selectedFlavor}
                      onError={() => handleImageError(activeImageIndex)}
                      className="h-full w-full object-contain bg-black/20 drop-shadow-[0_0_60px_rgba(227,27,35,0.6)] md:drop-shadow-[0_0_100px_rgba(227,27,35,0.8)]"
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-between px-2 sm:px-4">
                      <button
                        type="button"
                        onClick={goToPreviousImage}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-blood-red/80"
                        aria-label="View previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        type="button"
                        onClick={goToNextImage}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-blood-red/80"
                        aria-label="View next image"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-8 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-4xl md:text-8xl font-creepster text-white uppercase leading-[0.9] md:leading-none italic drop-shadow-[4px_4px_0px_#E31B23] md:drop-shadow-[8px_8px_0px_#E31B23]">
                  {VAD_PRODUCT.name}
                </h2>
                <div className="text-3xl md:text-7xl font-creepster text-white uppercase italic drop-shadow-[2px_2px_0px_#E31B23] md:drop-shadow-[6px_6px_0px_#E31B23] px-2 inline-block bg-blood-red/80 mt-2" style={{ WebkitTextStroke: '1px #E31B23', borderRadius: '0.25rem' }}>
                  Veiny Ahh Dih Stimulant free preworkout formula
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 md:gap-10">
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[10px] font-black uppercase text-white tracking-[0.4em] md:tracking-[0.6em] mb-1 md:mb-2">YOU CAN'T PUT A PRICE ON A PUMP LIKE THIS, BUT WE TRIED</span>
                  {saleIsActive ? (
                    <div className="space-y-2">
                      <div className="text-xl md:text-2xl font-black uppercase text-white/60 line-through tracking-[0.2em]">
                        {formattedOriginalPrice}
                      </div>
                      <div className="text-6xl sm:text-8xl md:text-9xl font-black italic tracking-tighter text-blood-red leading-none">
                        {formattedSalePrice}
                      </div>
                      {SALE_TIMER_ENABLED && (
                        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-blood-red bg-white/5 px-4 py-2 text-white text-xs md:text-sm uppercase tracking-[0.25em] font-black">
                          <span>Sale ends in</span>
                          <span className="font-bold text-blood-red">{formatTime(timeLeft.days)}d {formatTime(timeLeft.hours)}h {formatTime(timeLeft.minutes)}m {formatTime(timeLeft.seconds)}s</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-6xl sm:text-8xl md:text-9xl font-black italic tracking-tighter text-white leading-none">
                      {formattedOriginalPrice}
                    </span>
                  )}
                </div>
                <div className="sm:mb-4">
                  <span className="font-black text-[10px] md:text-sm uppercase tracking-widest bg-transparent border-2 border-blood-red text-white px-4 md:px-6 py-1 md:py-2 block">30 SERVINGS</span>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {VAD_PRODUCT.flavors.map((flavor) => {
                    const isSelected = selectedFlavor === flavor;
                    const description = flavorDescriptions[flavor] ?? 'Flavor description placeholder.';

                    return (
                      <button
                        key={flavor}
                        type="button"
                        onClick={() => setSelectedFlavor(flavor)}
                        title={description}
                        className={`min-w-[140px] border px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-white transition-all ${isSelected ? 'border-blood-red bg-black text-white' : 'border-blood-red/70 bg-black text-white hover:border-blood-red'}`}
                      >
                        {flavor}
                      </button>
                    );
                  })}
                </div>
              </div>
              <p className="text-white text-lg md:text-2xl font-medium leading-relaxed italic border-l-4 md:border-l-8 border-blood-red pl-6 md:pl-10 max-w-xl">
                {VAD_PRODUCT.description}
              </p>
              <div className="pt-4 md:pt-8 space-y-6 md:space-y-0 md:flex md:items-center md:gap-6">
                <a
                  id="square-checkout=button"
                  href="https://vadsupps.square.site/product/veiny-ahh-drink-stimulant-free-pre-workout-/ST3VK7MTM6Y246OLYUNSD6ER?cp=true&sa=false&sbp=false&q=false&category_id=FFBOPZA4NKZZT72H7QHFBHR6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-blood-red bg-blood-red px-8 py-4 text-base md:text-xl font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white md:w-auto"
                >
                  BUY NOW
                </a>
                <a
                  id="sample-checkout=button"
                  href="https://vadsupps.square.site/product/veiny-ahh-drink-sample-program/CVWSE54IFNU2OA2WFUC4X4VS?cp=true&sa=true&sbp=false&q=false"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-blood-red bg-blood-red px-8 py-4 text-base md:text-xl font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white md:w-auto"
                >
                  TRY A SAMPLE
                </a>
              </div>
              <div className="mt-6 md:mt-8 w-full max-w-xl">
                <div id={FEATURABLE_WIDGET_ID} data-featurable-async />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Breakdown Section */}
      <section id="formula" className="py-24 md:py-48 bg-black/80 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center mb-16 md:mb-32 text-center space-y-4 md:space-y-8">
            <span className="text-blood-red font-black text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.7em] uppercase">STIM-FREE POTENCY (2 SCOOPS)</span>
            <h2 className="relative text-5xl sm:text-7xl md:text-[11rem] font-creepster uppercase italic tracking-tighter leading-[0.9] md:leading-none text-center">
              <span className="absolute left-1 top-1 md:left-3 md:top-3 text-blood-red z-0 select-none pointer-events-none w-full">THE DOSAGE</span>
              <span className="relative text-white z-10 w-full">THE DOSAGE</span>
            </h2>
          </div>
          
          <div className="space-y-6 md:space-y-8 mb-24 md:mb-40">
  {[
    {
    icon: '💪',
    name: 'L-Citrulline',
    dose: '8,000 mg',
    headline: 'Skin-Splitting Pumps & Relentless Blood Flow',
    description:
      'L-Citrulline is a nitric oxide engine that triggers massive vasodilation. By flushing out toxins and surging oxygen-rich blood to your working muscles, it drastically increases endurance and delivers roadmap vascularity from the first rep to the last.'
  },
  {
    icon: '🏆',
    name: 'Betaine Anhydrous',
    dose: '3,000 mg',
    headline: 'Force Multiplication for Heavy Lifts',
    description:
      'Betaine hyper-hydrates your muscle cells and supports creatine synthesis to create an optimal environment for explosive strength. It delivers a noticeable spike in power output so you can grind out those heavy, muscle-building reps without compromising intensity.'
  },
  {
    icon: '💧',
    name: 'Taurine',
    dose: '2,000 mg',
    headline: 'Lock In Hydration, Lock Out Fatigue',
    description:
      'Taurine acts as a cellular sponge, drawing fluids into muscle cells and facilitating proper calcium signaling for flawless contractions. It works directly with electrolytes to keep your muscles highly resistant to cramping and fully primed during grueling, high-volume sessions.'
  },
  {
    icon: '🌊',
    name: 'Glycerol Monostearate',
    dose: '3,000 mg',
    headline: 'Hyper-Hydration & Skin-Tearing Fullness',
    description:
      'Glycerol aggressively pulls water into your bloodstream and forces it deep into your muscle tissue. When paired with proper hydration, it creates a ridiculously dense, full water pump that delays fatigue and maximizes intramuscular volume.'
  },
  {
    icon: '🔥',
    name: 'Agmatine Sulfate',
    dose: '2,000 mg',
    headline: 'Stay Big and Veiny For Hours',
    description:
      'Agmatine inhibits the enzymes that break down nitric oxide, effectively cutting the brake lines on your pump. It stacks flawlessly with L-Citrulline to ensure your muscles stay densely engorged for your entire workout and long after you leave the gym.'
  },
  {
    icon: '🛡️',
    name: 'Vitamin C',
    dose: '300 mg',
    headline: 'Preserve the Pump, Accelerate Recovery',
    description:
      'Vitamin C is a powerful antioxidant that neutralizes free radicals, which normally degrade your nitric oxide levels. It acts as a bodyguard for your pump while supporting normal collagen synthesis to keep your connective tissue healthy under heavy loads.'
  },
  {
    icon: '🧂',
    name: 'Sodium Chloride',
    dose: '1,000 mg',
    headline: 'The Ultimate Pump Catalyst',
    description:
      'Sodium is the undisputed king of fluid balance and the raw material needed to transport nutrients across cell membranes. A heavy dose ensures your blood volume stays peaked, delivering nasty, vascular pumps and completely optimized muscle contractions.'
  },
  {
    icon: '⚡',
    name: 'Potassium Citrate',
    dose: '500 mg',
    headline: 'Precision Fluid Balance & Cramp Eradication',
    description:
      'Potassium manages fluid inside the cell to work in tandem with sodium and create the electrical gradient required for perfect muscle contractions. This complete electrolyte optimization ensures smooth, powerful reps while eradicating mid-workout cramps.'
  },
  {
    icon: '❌',
    name: 'Stimulants',
    dose: '0',
    headline: 'Zero Stimulants Equals Maximum Flexibility, and Maximum Veins',
    description: 'V.A.D. is stimulant free, making it perfect for those late night gym sessions.  No stimulants also means we can maxmize the dosage of pump ingredients. (still want caffiene, simply mix a scoop of V.A.D. with your favorite stimu pre workout, giving you the best of both worlds).'
  },
  {
    icon: '❌',
    name: 'Fillers & Artificial Colors',
    dose: '0',
    headline: 'No Fillers, No Artificial Colors',
    description: 'We included everything you need, and left out the bullshit.  No fillers, no artificial colors, and no proprietary blends.  Just pure, clinical doses to get you big, strong, and veiny'
  }
  ].map((ingredient, index) => (
    <div
      key={ingredient.name}
      className="group relative overflow-hidden bg-zinc-950/90 border border-white/10 hover:border-blood-red transition-all duration-300 p-6 md:p-10 shadow-[8px_8px_0px_rgba(0,0,0,0.6)] md:shadow-[14px_14px_0px_rgba(0,0,0,0.6)]"
    >
      <div className="absolute -right-6 -bottom-10 text-[7rem] md:text-[12rem] font-creepster text-white/[0.03] group-hover:text-blood-red/[0.08] transition-all duration-300">
        {index + 1}
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 bg-white/5 border border-white/10 flex items-center justify-center text-3xl md:text-5xl group-hover:bg-blood-red/10 group-hover:border-blood-red/50 transition-all duration-300">
          <span role="img" aria-label={ingredient.name}>
            {ingredient.icon}
          </span>
        </div>

        <div className="flex-1">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-2 md:gap-4 mb-4">
            <div className="relative inline-block max-w-full w-full">
              <span className="absolute inset-0 z-0 translate-x-[2px] translate-y-[2px] text-blood-red select-none pointer-events-none text-2xl md:text-5xl font-creepster uppercase italic tracking-[0.03em] leading-none whitespace-normal break-words">
                {ingredient.name}
              </span>
              <h4 className={`relative z-10 text-2xl md:text-5xl font-creepster uppercase italic tracking-[0.03em] leading-none text-white whitespace-normal break-words ${ingredient.name === 'Stimulants' || ingredient.name === 'Fillers & Artificial Colors' ? 'line-through' : ''}`}>
                {ingredient.name}
              </h4>
            </div>
            <span className="text-blood-red text-3xl sm:text-3xl md:text-6xl font-creepster uppercase italic tracking-[0.03em] leading-none whitespace-nowrap">
              {ingredient.dose}
            </span>
          </div>

          <p className="text-white text-lg md:text-3xl font-creepster uppercase italic leading-tight tracking-[0.02em] mb-3 md:mb-5">
            {ingredient.headline}
          </p>

          <p className="text-white/75 text-sm md:text-lg font-bold leading-relaxed max-w-5xl">
            {ingredient.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
          <div id="dosage-facts" className="flex flex-col items-center pt-16 md:pt-32 border-t border-white/10">
            <div className="mb-12 md:mb-24 text-center space-y-4 md:space-y-8">
              <h3 className="relative text-3xl sm:text-5xl md:text-9xl font-creepster uppercase italic tracking-widest leading-[0.9] md:leading-none text-center">
                <span className="absolute left-1 top-1 md:left-3 md:top-3 text-blood-red z-0 select-none pointer-events-none w-full">CLINICAL <br /> TRANSPARENCY</span>
                <span className="relative text-white z-10 w-full">CLINICAL <br /> TRANSPARENCY</span>
              </h3>
              <p className="text-white font-black uppercase tracking-[0.4em] md:tracking-[1em] text-[10px] md:text-sm italic">FULL DUAL-COLUMN DISCLOSURE. ZERO SECRETS.</p>
            </div>
            <div className="w-full max-w-2xl mb-16 md:mb-32">
              <SupplementFacts />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetVeinyAndFormulaPage;
