import { data } from "@/data";
import { ProductList } from "../product-list";

/* Requisição dos produtos */
export const MostViewed = async () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl">Most Viewed</h2>
      <p className="text-gray-500">Most viewed and popular products</p>
      <div className="mt-9">
        <ProductList list={data.products} />
      </div>
    </div>
  );
};
