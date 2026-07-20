import { Flavor, Product } from '../types';

export const VAD_PRODUCT: Product = {
  id: 'vad-stim-free-original',
  name: 'THE VEINY AHH DRINK',
  tagline: 'GET BIG, GET STRONG, GET VEINY',
  price: 49.99,
  description: 'A veiny ahh drink for veiny ahh dudes. This is not just a preworkout; it is a vascular transformation. Formulated with clinical doses of L-Citrulline, Betaine, and Glycerol to force-feed your muscles and create skin-splitting pumps that defy logic.',
  flavors: ['Bulging Berries'],
  image: '/images/VADSquareProductImage.png',
  images: [
    '/images/VADSquareProductImage.png',
    '/images/VADSupplementFactsImage.png',
    '/images/VADBenefitsImage.png',
    '/images/VADIngredientsImage.png',
    '/images/DirectionsImage.png'
  ]
};

export const FAQ_ITEMS = [
  {
    q: 'Why is there no caffeine?',
    a: `V.A.D. is built around three priorities: getting big, getting strong, and getting veiny. While caffeine has its place, it also limits when and how a product can be used. Many people train at night, train after coffee, or want pure pump support without stimulants. By keeping V.A.D caffeine-free, we maximize flexibility. If you want stimulants, you can stack caffeine separately—without compromising the pump.`
  },
  {
    q: 'Can I take V.A.D. with other pre-workouts?',
    a: `Yes. V.A.D. is designed to stack cleanly with stimulant-based pre-workouts. If you train early or rely on stimulants, take 1 scoop of V.A.D alongside 1 scoop of your stim pre-workout. Always check both labels to ensure any overlapping ingredients stay within safe daily limits.`
  },
  {
    q: 'Should I take one scoop or two?', 
    a: `V.A.D. is formulated for flexible dosing. Start with 1 scoop to assess tolerance,this will deliver a strong pump. For maximum fullness and vascularity, 2 scoops can be used. Adjust based on your body weight, training intensity, and pump preference.`
  },
  {
    q: 'Why the name “Veiny Ahh Dih”?',
    a: `The supplement industry takes itself too seriously. We don’t. Training should be intense, effective, and fun. The name Veiny Ahh Dih reflects our no-filter, over-the-top approach to pump training and gym culture. It’s bold, it’s ridiculous, and it delivers exactly what it promises.`
  }
];
