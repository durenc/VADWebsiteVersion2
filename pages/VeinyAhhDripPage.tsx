
import React, { useState } from 'react';
import PageMeta from '../components/PageMeta';

const merchImages = [
  '/images/VADShirtCloseFront.jpeg',
  '/images/VADShirtBackClose.jpeg',
  '/images/VADShirtFrontFar.jpeg'
];

const VeinyAhhDripPage: React.FC = () => {
  const [currentMerchImage, setCurrentMerchImage] = useState(0);
  return (
    <>
      <PageMeta
        title="Veiny Ahh Drip | V.A.D. Supplements"
        description="Shop V.A.D. Supplement's signature Veiny Ahh Drip apparel: performance-ready tees built for strength, size, and vascularity."
        url="https://veinyahdihsupps.com/drip"
        image="https://veinyahdihsupps.com/images/VADShirtFrontFar.jpeg"
      />
      <h1 className="sr-only">Veiny Ahh Drip apparel</h1>
      <section id="veiny-Ahh-merch" className="py-24 md:py-48 bg-black/40 relative border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16 md:mb-32 text-center">
          <h2 className="relative text-5xl sm:text-7xl md:text-[11rem] font-creepster uppercase italic tracking-tighter leading-[0.9] md:leading-none text-center">
            <span className="absolute left-2 top-2 md:left-8 md:top-8 text-blood-red z-0 select-none pointer-events-none w-full">VEINY AHH DRIP</span>
            <span className="relative text-white z-10 w-full">VEINY AHH DRIP</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Merch Image Carousel */}
          <div className="relative group order-1 lg:order-1">
            <div className="bg-zinc-900 p-8 md:p-16 border-2 border-white/5 flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_100px_rgba(227,27,35,0.2)] md:shadow-[inset_0_0_150px_rgba(227,27,35,0.2)]">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/carbon-fibre.png')] opacity-30"></div>
              <div className="relative z-10 w-full flex flex-col items-center">
                <img
                  src={merchImages[currentMerchImage]}
                  alt="V.A.D. Athlete Shirt"
                  className="max-h-[300px] md:max-h-[600px] object-contain drop-shadow-[0_0_60px_rgba(227,27,35,0.6)] md:drop-shadow-[0_0_100px_rgba(227,27,35,0.8)] transition-all duration-500"
                />
                <div className="flex items-center gap-4 mt-6 flex-wrap justify-center">
                  <button
                    onClick={() =>
                      setCurrentMerchImage((prev) =>
                        prev === 0 ? merchImages.length - 1 : prev - 1
                      )
                    }
                    className="bg-transparent border-2 border-white text-white px-4 py-2 text-xs md:text-sm font-black tracking-widest uppercase transition-all hover:bg-white hover:text-black italic"
                  >
                    Prev
                  </button>
                  <div className="flex gap-3">
                    {merchImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentMerchImage(i)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          i === currentMerchImage ? 'bg-blood-red' : 'bg-white/30'
                        }`}
                        aria-label={`View merch image ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      setCurrentMerchImage((prev) =>
                        prev === merchImages.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="bg-transparent border-2 border-white text-white px-4 py-2 text-xs md:text-sm font-black tracking-widest uppercase transition-all hover:bg-white hover:text-black italic"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Merch Details */}
          <div className="flex flex-col justify-center space-y-8 md:space-y-12 order-2 lg:order-2">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-4xl md:text-8xl font-creepster text-white uppercase leading-[0.9] md:leading-none italic drop-shadow-[4px_4px_0px_#E31B23] md:drop-shadow-[8px_8px_0px_#E31B23] text-left lg:text-left">
                V.A.D. ATHLETE SHIRT
              </h2>
              <div className="flex flex-col">
                <span className="text-[8px] md:text-[10px] font-black uppercase text-white tracking-[0.4em] md:tracking-[0.6em] mb-1 md:mb-2">THE BIGGEST, STRONGEST, AND VEINIEST SHIRT EVER DESIGNED</span>
                <span className="text-6xl sm:text-8xl md:text-9xl font-black italic tracking-tighter text-white leading-none">$14.99</span>
              </div>
            </div>
            <p className="text-white text-lg md:text-2xl font-medium leading-relaxed italic border-l-4 md:border-l-8 border-blood-red pl-6 md:pl-10 max-w-xl">
              We know you’re big and veiny.  We also know that you wear clothes.  That's why you need clothes that show people just how big and veiny you are, whether you’re inside or outside the gym.  Our V.A.D. athlete performance tee signals that you’re big, you’re strong, you’re veiny, and you don’t care who knows it.
            </p>
            <div className="pt-4 md:pt-8 space-y-6 md:space-y-10">
              <div className="relative group flex flex-col items-start">
                <a
                  href="https://square.link/u/smNyHqrI?src=embed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-blood-red text-white px-8 md:px-16 py-4 md:py-8 text-lg md:text-2xl font-creepster tracking-widest uppercase transition-all flex items-center justify-center gap-3 md:gap-4 shadow-[8px_8px_0px_#fff] md:shadow-[15px_15px_0px_#fff] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_#fff] md:hover:shadow-[20px_20px_0px_#fff] active:translate-y-2 active:shadow-none"
                >
                  BUY NOW
                </a>
                <div className="mt-4 flex items-center gap-3 text-white font-black italic uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-sm">
                  POWERED BY
                  <span className="text-white tracking-widest flex items-center gap-1 md:gap-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 border md:border-2 border-white/30 flex items-center justify-center font-black text-[7px] md:text-[10px]">
                      S
                    </div>
                    SQUARE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default VeinyAhhDripPage;
