"use client";

import { ProductComplete } from "@/types/products";
import Image from "next/image";

type Props = {
  product: ProductComplete;
};

export const ProductDetails = ({ product }: Props) => {
  const addToCart = async () => {};
  return (
    <div className="flex-1">
      <div className="text-xs text-gray-500 mb-2">Code {product.id}</div>
      <div className="font-bold text-3xl mb-6">{product.label}</div>
      <div className="font-bold text-4xl text-blue-600 mb-2">
        ${product.price.toFixed(2)}
      </div>
      <div className="text-xm text-gray-500 mb-6">up to 10x on the scroll</div>
      <div className="flex gap-4">
        <button
          onClick={addToCart}
          className="flex-1 max-w-xs py-4 px-8 bg-blue-600 text-white border-0 rounded-sm cursor-pointer hover:opacity-80"
        >
          Add to the wagon
        </button>
        <div className="cursor-pointer flex justify-center items-center size-14 border border-gray-200 rounded-sm ">
          <Image src={"/assets/ui/heart.png"} alt="" width={24} height={24} />
        </div>
        <div className="cursor-pointer flex justify-center items-center size-14 border border-gray-200 rounded-sm ">
          <Image
            src={"/assets/ui/share-line.png"}
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};
