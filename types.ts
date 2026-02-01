
export type Flavor = 'Veiny Surge Strawberry' | 'Ultimate Pump Punch';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  flavors: Flavor[];
  image: string;
}
