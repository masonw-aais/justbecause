export interface Flower {
  id: number;
  name: string;
  description: string;
  image: string;
  alt: string;
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
}
