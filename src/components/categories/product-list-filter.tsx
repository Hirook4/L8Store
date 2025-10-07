"use client";

import { useQueryString } from "@/hooks/use-querystring";
import { ChangeEvent, useState } from "react";
import { FilterGroup } from "./filter-group";
import { data } from "@/data";
import { ProductItem } from "../product-item";

export const ProductListFilter = () => {
  const [filterOpened, setFilterOpened] = useState(false);
  const queryString = useQueryString();
  const order = queryString.get("order") ?? "views";

  const handleSelectChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    queryString.set("order", e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 justify-between items-start md:items-center">
        <div className="text-3xl">
          <strong>{data.products.length} </strong>
          {data.products.length === 1 ? "Product" : "Products"}
        </div>
        <div className="flex flex-row w-full md:max-w-70 gap-5">
          <select
            defaultValue={order}
            onChange={handleSelectChanged}
            className="flex-1 flex items-center h-14 px-6 bg-white border border-gray-200 rounded-sm text-gray-500"
          >
            <option value="views">Popularity</option>
            <option value="price">Price</option>
            <option value="bestSellers">Best Sellers</option>
          </select>

          <div
            onClick={() => setFilterOpened(!filterOpened)}
            className="flex-1 flex md:hidden items-center h-14 px-6 bg-white border border-gray-200 rounded-sm text-gray-500"
          >
            Filter By
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8 md:flex-row gap-8">
        <div
          className={`flex-1 md:max-w-70 ${
            filterOpened ? "block" : "hidden"
          } md:block`}
        >
          <FilterGroup
            id="category"
            name="Category"
            items={[
              { id: "head", label: "Head" },
              { id: "chest", label: "Chest" },
              { id: "leg", label: "Legs" },
              { id: "hands", label: "Hands" },
              { id: "foot", label: "Foots" },
              { id: "back", label: "Back" },
            ]}
          />

          <FilterGroup
            id="class"
            name="Class"
            items={[
              { id: "fighter", label: "Fighter" },
              { id: "barbarian", label: "Barbarian" },
              { id: "rogue", label: "Rogue" },
              { id: "ranger", label: "Ranger" },
              { id: "wizard", label: "Wizard" },
              { id: "claric", label: "Claric" },
              { id: "bard", label: "Bard" },
              { id: "warlock", label: "Warlock" },
              { id: "druid", label: "Druid" },
              { id: "sorcerer", label: "Sorcerer" },
            ]}
          />
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.products.map((item) => (
            <ProductItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
