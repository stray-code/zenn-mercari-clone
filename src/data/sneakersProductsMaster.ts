import { ProductsMaster } from '../types';

import sneakers001 from '../assets/sneakers001.jpg';
import sneakers002 from '../assets/sneakers002.jpg';
import sneakers003 from '../assets/sneakers003.jpg';
import sneakers004 from '../assets/sneakers004.jpg';
import sneakers005 from '../assets/sneakers005.jpg';
import sneakers006 from '../assets/sneakers006.jpg';
import sneakers007 from '../assets/sneakers007.jpg';
import sneakers008 from '../assets/sneakers008.jpg';
import sneakers009 from '../assets/sneakers009.jpg';
import sneakers010 from '../assets/sneakers010.jpg';

export const sneakersProductsMaster: ProductsMaster = {
  keyword: 'メンズスニーカー',
  category: {
    id: 1,
    name: 'メンズ > スニーカー',
  },
  products: [
    {
      code: 'm000000001',
      name: 'Lightspeed XN-842 スニーカー 26cm',
      price: 15800,
      imageUrl: sneakers001,
    },
    {
      code: 'm000000002',
      name: 'Dream Illusion Q-915 スニーカー 24.5cm',
      price: 4500,
      imageUrl: sneakers002,
    },
    {
      code: 'm000000003',
      name: '【新品未使用】Beyond Time and Space GV-201 スニーカー 27cm',
      price: 8500,
      imageUrl: sneakers003,
    },
    {
      code: 'm000000004',
      name: 'Infinite Possibilities WL-6453 スニーカー 26cm',
      price: 6600,
      imageUrl: sneakers004,
    },
    {
      code: 'm000000005',
      name: '値下げ Deep Sea Mystery MZ-527 スニーカー 26.5cm',
      price: 5580,
      imageUrl: sneakers005,
    },
    {
      code: 'm000000006',
      name: 'Celestial Castle F-91 スニーカー 25cm',
      price: 3400,
      imageUrl: sneakers006,
    },
    {
      code: 'm000000007',
      name: '新品 Nebula Traveler UR-1284 スニーカー 25.5cm',
      price: 10800,
      imageUrl: sneakers007,
    },
    {
      code: 'm000000008',
      name: '即日配送 Solar Radiance HT-76 スニーカー 28cm',
      price: 6200,
      imageUrl: sneakers008,
    },
    {
      code: 'm000000009',
      name: 'Lunar Tranquility P-4002 スニーカー 26cm',
      price: 3400,
      imageUrl: sneakers009,
    },
    {
      code: 'm000000010',
      name: 'Wings of the Heart YS-356 スニーカー 26cm',
      price: 10000,
      imageUrl: sneakers010,
    },
  ],
};
