import { ProductsMaster } from '../types';

import earrings001 from '../assets/earrings001.jpg';
import earrings002 from '../assets/earrings002.jpg';
import earrings003 from '../assets/earrings003.jpg';
import earrings004 from '../assets/earrings004.jpg';
import earrings005 from '../assets/earrings005.jpg';
import earrings006 from '../assets/earrings006.jpg';
import earrings007 from '../assets/earrings007.jpg';
import earrings008 from '../assets/earrings008.jpg';
import earrings009 from '../assets/earrings009.jpg';
import earrings010 from '../assets/earrings010.jpg';

export const earringsProductsMaster: ProductsMaster = {
  keyword: 'イヤリング',
  category: {
    id: 11,
    name: 'レディース > イヤリング',
  },
  products: [
    {
      code: 'm000000011',
      name: 'チャームイヤリング',
      price: 8500,
      imageUrl: earrings001,
    },
    {
      code: 'm000000012',
      name: 'ロングイヤリング',
      price: 1800,
      imageUrl: earrings002,
    },
    {
      code: 'm000000013',
      name: 'ハンドメイド　パールイヤリング',
      price: 780,
      imageUrl: earrings003,
    },
    {
      code: 'm000000014',
      name: 'カラーストーンイヤリング',
      price: 4000,
      imageUrl: earrings004,
    },
    {
      code: 'm000000015',
      name: 'モチーフイヤリング',
      price: 4500,
      imageUrl: earrings005,
    },
    {
      code: 'm000000016',
      name: '【新品未使用】ネジバネ式イヤリング',
      price: 580,
      imageUrl: earrings006,
    },
    {
      code: 'm000000017',
      name: 'クリップ式イヤリング',
      price: 1530,
      imageUrl: earrings007,
    },
    {
      code: 'm000000018',
      name: 'フープイヤリング',
      price: 980,
      imageUrl: earrings008,
    },
    {
      code: 'm000000019',
      name: 'チャームイヤリング',
      price: 850,
      imageUrl: earrings009,
    },
    {
      code: 'm000000020',
      name: '【人気】ロングイヤリング',
      price: 2400,
      imageUrl: earrings010,
    },
  ],
};
