import { MenuItem, Location } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Balde 21 Pedaços',
    description: 'O clássico para partilhar. 21 pedaços da nossa receita original secreta.',
    price: 1950,
    category: 'bucket',
    image: 'https://picsum.photos/seed/kfcbucket/500/500',
    popular: true
  },
  {
    id: '2',
    name: 'Zinger Burger',
    description: 'Filete de frango picante, alface fresca e maionese em pão com sésamo.',
    price: 350,
    category: 'burger',
    image: 'https://picsum.photos/seed/zinger/500/500',
    popular: true
  },
  {
    id: '3',
    name: 'Boxmaster',
    description: 'Frango, batata rosti, queijo, alface e molho especial num wrap tostado.',
    price: 420,
    category: 'box',
    image: 'https://picsum.photos/seed/boxmaster/500/500'
  },
  {
    id: '4',
    name: 'Batatas Fritas (L)',
    description: 'Crocantes e douradas.',
    price: 150,
    category: 'sides',
    image: 'https://picsum.photos/seed/fries/500/500'
  },
  {
    id: '5',
    name: 'Oreo Krusher',
    description: 'Batido gelado com pedaços de bolacha Oreo.',
    price: 200,
    category: 'drinks',
    image: 'https://picsum.photos/seed/krusher/500/500',
    popular: true
  },
  {
    id: '6',
    name: 'Streetwise 2',
    description: '2 Pedaços de frango e batatas pequenas. O favorito de Maputo.',
    price: 250,
    category: 'box',
    image: 'https://picsum.photos/seed/streetwise/500/500',
    popular: true
  },
  {
    id: '7',
    name: 'Asas Picantes (4 un)',
    description: 'Asas de frango marinadas em picante Zinger.',
    price: 220,
    category: 'bucket',
    image: 'https://picsum.photos/seed/wings/500/500'
  },
  {
    id: '8',
    name: 'Colonel Burger',
    description: 'Filete original, alface e molho coronel.',
    price: 320,
    category: 'burger',
    image: 'https://picsum.photos/seed/colonelburger/500/500'
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'l1',
    name: 'KFC 24 de Julho',
    address: 'Av. 24 de Julho, Maputo',
    hours: '09:00 - 23:00',
    coordinates: { lat: -25.969, lng: 32.573 }
  },
  {
    id: 'l2',
    name: 'KFC Baía Mall',
    address: 'Baía Mall, Av. Marginal',
    hours: '10:00 - 22:00',
    coordinates: { lat: -25.954, lng: 32.608 }
  },
  {
    id: 'l3',
    name: 'KFC Shopping 24',
    address: 'Shopping 24, Maputo',
    hours: '09:00 - 22:00',
    coordinates: { lat: -25.966, lng: 32.570 }
  },
  {
    id: 'l4',
    name: 'KFC Drive Thru Matola',
    address: 'EN4, Matola',
    hours: '08:00 - 00:00',
    coordinates: { lat: -25.960, lng: 32.480 }
  }
];
