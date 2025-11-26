export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bucket' | 'burger' | 'sides' | 'drinks' | 'box';
  image: string;
  popular?: boolean;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  hours: string;
  coordinates: { lat: number; lng: number };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
