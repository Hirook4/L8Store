import { Banners } from "@/components/home/banners";
import { data } from "@/data";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Banners list={data.banners} />
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-12">

        <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <Image
              src={"/assets/ui/chariot.png"}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="flex-1 pl-8">
            <div className="font-bold text-xl">Free Shipping</div>
            <div className="text-gray-500">across the kingdom</div>
          </div>

        </div><div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <Image
              src={"/assets/ui/money.png"}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="flex-1 pl-8">
            <div className="font-bold text-xl">Best Prices</div>
            <div className="text-gray-500">fair prices</div>
          </div>

        </div><div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <Image
              src={"/assets/ui/exchange.png"}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="flex-1 pl-8">
            <div className="font-bold text-xl">Free Exchange</div>
            <div className="text-gray-500">easy exchange</div>
          </div>

        </div>
      </div>
    </div>
  );
}