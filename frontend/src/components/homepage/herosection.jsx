import { PiTrademarkRegisteredLight } from "react-icons/pi";
import HeroImage from "../../assets/homepage/blacknwhiteimg.svg";
function HeroSection() {
  return (
    <div className="px-4 md:p-20 py-10 border-b md:border-b-0  border-secondary">
      <div className="space-y-4 border-b border-secondary pb-6 lg:pb-[54px]">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary">
          <p>Kyiv</p>
          <p>
            LuxeBouquets
            <sup>
              <PiTrademarkRegisteredLight className="inline text-black" />
            </sup>
          </p>
        </h1>
        <p className="text-sm md:text-lg">
          Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread
          Joy with Our Online Flower Delivery Service
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 divide-x divide-secondary gap-4 md:gap-6">
        <img src={HeroImage} alt="" className="w-full h-[180px] md:h-[256px]" />
        <div className="flex pl-4 md:pl-6">
          <p className="mt-auto text-xs md:text-sm ">
            Experience the joy of giving with our modern floral studio. Order
            online and send fresh flowers, plants and gifts today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
