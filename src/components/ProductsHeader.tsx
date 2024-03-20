import { ChevronRight } from 'lucide-react';

import { ProductsMaster } from '../types';

type Props = {
  productsMaster: ProductsMaster;
};

export const ProductsHeader = ({ productsMaster }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm font-bold sm:text-base">
          {productsMaster.keyword}
        </h3>
        <p className="text-xs text-secondary-text sm:text-sm">
          {productsMaster.category.name}
        </p>
      </div>
      <a
        href="/"
        className="flex items-center text-sm text-blue-500 hover:text-sky-500"
      >
        すべて見る
        <ChevronRight />
      </a>
    </div>
  );
};
