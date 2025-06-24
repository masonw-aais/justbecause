export interface Flower {
  id: number;
  name: string;
  description: string;
  image: string;
  alt: string;
  category: string;
  price: number;
  inStock: boolean;
}

export interface FlowerCategory {
  id: string;
  name: string;
  description: string;
  flowers: Flower[];
  image: string;
}

export interface IndividualFlower {
  id: string;
  name: string;
  scientificName: string;
  color: string;
  season: string;
  meaning: string;
  image: string;
  pricePerStem: number;
  inStock: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface OrderForm extends ContactForm {
  flowerType?: string;
  quantity?: number;
  deliveryDate?: string;
  selectedFlowers?: IndividualFlower[];
  customArrangement?: boolean;
  specialInstructions?: string;
  budget?: number;
}

export interface OrderDetails {
  selectedCategory?: FlowerCategory;
  selectedFlower?: Flower;
  customFlowers: IndividualFlower[];
  quantity: number;
  deliveryDate: string;
  specialInstructions: string;
  budget: number;
}
