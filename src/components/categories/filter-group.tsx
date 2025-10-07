"use client";

import { useState } from "react";
import { FilterItem } from "./filter-item";
import Image from "next/image";

type Props = {
  id: string;
  name: string;
  items: { id: string; label: string }[];
};

export const FilterGroup = ({ id, name, items }: Props) => {
  const [opened, setOpened] = useState(true);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div className="flex-1 font-bold text-xl">{name}</div>
        <div
          onClick={() => setOpened(!opened)}
          className="flex justify-center items-center cursor-pointer size-8"
        >
          <Image
            src={"/assets/ui/arrow-up-s-line.png"}
            alt=""
            width={24}
            height={24}
            className={`${opened ? "rotate-0" : "rotate-180"} transition-all`}
          />
        </div>
      </div>

      <div
        className={`overflow-y-hidden ${
          opened ? "max-h-[400px]" : "max-h-0"
        } transition-all`}
      >
        {items.map((item) => (
          <FilterItem key={item.id} groupId={id} item={item} />
        ))}
      </div>
    </div>
  );
};
