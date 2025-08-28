"use client";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: Product;
};

export const ProductItem = ({ data }: Props) => {
  const link = `/product/${data.id}`;
  return (
    <div className="bg-white border border-gray-200 rounded-sm p-6">
      <div className=""></div>
      <div className="">
        <Link href={link}>
          <Image
            src={data.image}
            alt={data.label}
            width={200}
            height={200}
            className="max-w-full h-48"
          />
        </Link>
      </div>
      <div className="mt-9 text-lg font-bold">
        <Link href={link}>{data.label}</Link>
      </div>
      <div className="mt-3 text-2xl text-blue-600 font-bold">
        <Link href={link}>R$ {data.price.toFixed(2)}</Link>
      </div>
      <div className="mt-5 text-gray-400">up to 10x on the scroll</div>
    </div>
  );
};
