export type ProductsMaster = {
  keyword: string;
  category: {
    id: number;
    name: string;
  };
  products: {
    code: string;
    name: string;
    price: number;
    imageUrl: string;
  }[];
};
