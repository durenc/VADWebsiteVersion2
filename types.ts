
export type Flavor = 'Bulging Berries';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  flavors: Flavor[];
  image: string;
}
