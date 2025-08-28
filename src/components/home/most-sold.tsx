import { data } from "@/data";
import { ProductList } from "../product-list";

/* Requisição dos produtos */
export const MostSold = async () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl text-center md:text-left">Most Sold</h2>
      <p className="text-gray-500 text-center md:text-left">
        out best-sellers and popular products
      </p>
      <div className="mt-9">
        <ProductList list={data.products} />
      </div>
    </div>
  );
};
