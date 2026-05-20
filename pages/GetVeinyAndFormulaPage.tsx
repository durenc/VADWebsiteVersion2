
import React, { useState } from 'react';
import { VAD_PRODUCT } from '../data/productData';
import PageMeta from '../components/PageMeta';

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

const KlaviyoWaitlist: React.FC = () => (
  <div id="klaviyo-waitlist" className="w-full">
    <div className="klaviyo-form-YtACB9"></div>
  </div>
);

const GetVeinyAndFormulaPage: React.FC = () => {
  const [selectedFlavor] = useState(VAD_PRODUCT.flavors[0]);
  return (
    <>
      <PageMeta
        title="Veiny Ahh Formula | V.A.D. Supplements"
        description="Shop V.A.D. Supplements' stimulant-free pump formula built to support pumps, performance, hydration, and vascularity. Get big, strong, and veiny."
        url="https://veinyahdihsupps.com/formula"
        image="https://veinyahdihsupps.com/images/VADBlankProduct.jpg"
      />
      <h1 className="sr-only">Get Veiny & Veiny Ahh Formula</h1>
      {/* Product & Purchase Section */}
      <section id="get-veiny" className="py-16 md:py-32 bg-black/40 relative border-b border-white/10">
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
                <h2 className="text-4xl md:text-8xl font-creepster text-white uppercase leading-[0.9] md:leading-none italic drop-shadow-[4px_4px_0px_#E31B23] md:drop-shadow-[8px_8px_0px_#E31B23]">
                  {VAD_PRODUCT.name}
                </h2>
                <div className="text-3xl md:text-7xl font-creepster text-white uppercase italic drop-shadow-[2px_2px_0px_#E31B23] md:drop-shadow-[6px_6px_0px_#E31B23] px-2 inline-block bg-blood-red/80 mt-2" style={{ WebkitTextStroke: '1px #E31B23', borderRadius: '0.25rem' }}>
                  V.A.D. Stimulant free preworkout formula
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 md:gap-10">
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[10px] font-black uppercase text-white tracking-[0.4em] md:tracking-[0.6em] mb-1 md:mb-2">YOU CAN'T PUT A PRICE ON A PUMP LIKE THIS, BUT WE TRIED</span>
                  <span className="text-6xl sm:text-8xl md:text-9xl font-black italic tracking-tighter text-white leading-none">${VAD_PRODUCT.price}</span>
                </div>
                <div className="sm:mb-4">
                  <span className="font-black text-[10px] md:text-sm uppercase tracking-widest bg-transparent border-2 border-blood-red text-white px-4 md:px-6 py-1 md:py-2 block">30 SERVINGS</span>
                </div>
              </div>
              <p className="text-white text-lg md:text-2xl font-medium leading-relaxed italic border-l-4 md:border-l-8 border-blood-red pl-6 md:pl-10 max-w-xl">
                {VAD_PRODUCT.description}
              </p>
              <div className="pt-4 md:pt-8 space-y-6 md:space-y-10">
                <div className="relative group">
                  <KlaviyoWaitlist />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Breakdown Section */}
      <section id="the-veiny-Ahh-formula" className="py-24 md:py-48 bg-black/80 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center mb-16 md:mb-32 text-center space-y-4 md:space-y-8">
            <span className="text-blood-red font-black text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.7em] uppercase">STIM-FREE POTENCY (2 SCOOPS)</span>
            <h2 className="relative text-5xl sm:text-7xl md:text-[11rem] font-creepster uppercase italic tracking-tighter leading-[0.9] md:leading-none text-center">
              <span className="absolute left-1 top-1 md:left-3 md:top-3 text-blood-red z-0 select-none pointer-events-none w-full">THE DOSAGE</span>
              <span className="relative text-white z-10 w-full">THE DOSAGE</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-24 md:mb-40">
            {/* Ingredient cards */}
            <div className="group p-8 md:p-14 bg-zinc-950/90 border border-white/5 hover:border-blood-red transition-all relative overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,0.6)] md:shadow-[20px_20px_0px_rgba(0,0,0,0.6)]">
              <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 text-[6rem] md:text-[12rem] font-creepster text-white/[0.04] transform -rotate-12 transition-all group-hover:text-blood-red/[0.1]">1</div>
              <div className="relative z-10 space-y-6 md:space-y-10">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blood-red/10 group-hover:border-blood-red/50 transition-all duration-500">
                  <span role="img" aria-label="activity">💪</span>
                </div>
                <h4 className="text-xl md:text-2xl font-black italic uppercase leading-tight md:leading-none">8,000mg L-Citrulline</h4>
                <p className="text-white text-base md:text-xl font-bold tracking-wide uppercase italic leading-relaxed">Nitric oxide precursor for massive, skin-tightening fullness.</p>
              </div>
            </div>
            <div className="group p-8 md:p-14 bg-zinc-950/90 border border-white/5 hover:border-blood-red transition-all relative overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,0.6)] md:shadow-[20px_20px_0px_rgba(0,0,0,0.6)]">
              <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 text-[6rem] md:text-[12rem] font-creepster text-white/[0.04] transform -rotate-12 transition-all group-hover:text-blood-red/[0.1]">2</div>
              <div className="relative z-10 space-y-6 md:space-y-10">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blood-red/10 group-hover:border-blood-red/50 transition-all duration-500">
                  <span role="img" aria-label="trophy">🏆</span>
                </div>
                <h4 className="text-xl md:text-2xl font-black italic uppercase leading-tight md:leading-none">3,000mg Betaine</h4>
                <p className="text-white text-base md:text-xl font-bold tracking-wide uppercase italic leading-relaxed">Power + performance support to push harder and stay strong.</p>
              </div>
            </div>
            <div className="group p-8 md:p-14 bg-zinc-950/90 border border-white/5 hover:border-blood-red transition-all relative overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,0.6)] md:shadow-[20px_20px_0px_rgba(0,0,0,0.6)]">
              <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 text-[6rem] md:text-[12rem] font-creepster text-white/[0.04] transform -rotate-12 transition-all group-hover:text-blood-red/[0.1]">3</div>
              <div className="relative z-10 space-y-6 md:space-y-10">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blood-red/10 group-hover:border-blood-red/50 transition-all duration-500">
                  <span role="img" aria-label="droplets">💧</span>
                </div>
                <h4 className="text-xl md:text-2xl font-black italic uppercase leading-tight md:leading-none">3,000mg Glycerol Monostearate</h4>
                <p className="text-white text-base md:text-xl font-bold tracking-wide uppercase italic leading-relaxed">Pulls water into the muscle for max volume and nasty pumps.</p>
              </div>
            </div>
            <div className="group p-8 md:p-14 bg-zinc-950/90 border border-white/5 hover:border-blood-red transition-all relative overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,0.6)] md:shadow-[20px_20px_0px_rgba(0,0,0,0.6)]">
              <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 text-[6rem] md:text-[12rem] font-creepster text-white/[0.04] transform -rotate-12 transition-all group-hover:text-blood-red/[0.1]">4</div>
              <div className="relative z-10 space-y-6 md:space-y-10">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blood-red/10 group-hover:border-blood-red/50 transition-all duration-500">
                  <span role="img" aria-label="zap">⚡</span>
                </div>
                <h4 className="text-xl md:text-2xl font-black italic uppercase leading-tight md:leading-none">2,000mg Agmatine Sulfate</h4>
                <p className="text-white text-base md:text-xl font-bold tracking-wide uppercase italic leading-relaxed">Keeps the pump alive and the veins turned on longer.</p>
              </div>
            </div>
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
