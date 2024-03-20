import { Heart } from 'lucide-react';

import { ProductsMaster } from '../types';

type Props = {
  product: ProductsMaster['products'][number];
};

export const ProductItem = ({ product }: Props) => {
  return (
    <a href="/" className="group flex h-full flex-col gap-2">
      <div className="relative">
        <img
          src={product.imageUrl}
          // aタグのホバーで画像の不透明度を変更
          className="block aspect-square w-full rounded-sm object-cover group-hover:opacity-60"
        />
        <div className="absolute bottom-2 left-0 rounded-r-full bg-[#0006] px-2 py-1 lg:bottom-2">
          <p className="text-sm font-bold text-white sm:text-lg">
            &yen;{product.price.toLocaleString()}
          </p>
        </div>
        <button
          type="button"
          // aタグのホバーでボタンを表示
          className="invisible absolute bottom-2 right-2 flex items-center justify-center rounded-full bg-white p-2 lg:group-hover:visible"
        >
          <Heart className="size-[20px] stroke-2" />
        </button>
      </div>
      <span className="hidden text-sm lg:line-clamp-2">{product.name}</span>
    </a>
  );
};
