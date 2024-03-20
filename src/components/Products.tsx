import { ProductItem, ProductsHeader } from './';

import { ProductsMaster } from '../types';

type Props = {
  productsMaster: ProductsMaster;
  favoriteCodes: string[];
  changeFavorite: (productId: string) => void;
};

export const Products = ({
  productsMaster,
  favoriteCodes,
  changeFavorite,
}: Props) => {
  return (
    <section className="space-y-6 border-t border-secondary-border py-6">
      <ProductsHeader productsMaster={productsMaster} />
      <ul
        // ウィンドウの横幅によって列数を変える
        className="grid grid-cols-[repeat(3,1fr)] gap-1 sm:grid-cols-[repeat(4,1fr)] lg:grid-cols-[repeat(5,1fr)] lg:gap-6"
      >
        {productsMaster.products.map((product) => (
          <li
            key={product.code}
            // ウィンドウの横幅によって列数が変わるため、2行になるように表示する商品数を変える
            className="hidden lg:[&:nth-child(-n+10)]:block [&:nth-child(-n+6)]:block sm:[&:nth-child(-n+8)]:block"
          >
            <ProductItem
              product={product}
              favoriteCodes={favoriteCodes}
              changeFavorite={changeFavorite}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
