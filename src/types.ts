export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'entradas' | 'principais' | 'sobremesas' | 'bebidas';
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number;
  role: string;
}

export interface ReservationData {
  name: string;
  guests: number;
  date: string;
  time: string;
  phone: string;
}
