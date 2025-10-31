import React, { useState } from "react";
import roseDelight from "../assets/Rose-Delight.svg";
import ProductCard from "./ProductCard";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import oceanMist from "../assets/oceanMist.svg";
import cedarLavendar from "../assets/cedarLavendar.png";
import limeMatcha from "../assets/limeMatcha.png";
import rottenGrapefruit from "../assets/rottenGrape.png";
import { Link } from "react-router-dom";
function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  function incrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }
  function decrementQuantity() {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  }
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 border  border-secondary">
        <img
          src={roseDelight}
          alt=""
          className="w-full max-h-[420px] md:max-h-[670px] lg:max-h-[413px] object-cover"
        />
        <div className="mt-10 px-4 md:px-10 gap-2 flex flex-col">
          <h3 className="text-sm text-secondary text-left">
            FRESH FLOWERS{" "}
            <span className="text-tertiary ">/ ROSEY DELIGHT</span>
          </h3>
          <div className="flex flex-col gap-4 pt-6">
            <p className="font-semibold text-[16px] md:text-[36px] ">
              Rosy Delight - $100
            </p>
            <p className="text-sm md:text-[16px]">
              Large exceptional bouquet composed of a selection of David Austin
              roses, known for their beauty and subtle fragrance. The bouquet is
              accompanied by seasonal foliage which will enhance these sublime
              flowers even
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <span>Quantity</span>
            <div className="border border-secondary divide-x divide-secondary flex">
              <button onClick={decrementQuantity} className="px-2 py-1">
                <AiOutlineMinus />
              </button>
              <span className="px-3 py-1"> {quantity} </span>
              <button onClick={incrementQuantity} className="px-2 py-1">
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="md:pt-10 md:pb-10 pt-4 pb-4">
            <button className="bg-black text-white h-12 w-full">
              ADD TO BASKET
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[26px] p-[40px] md:text-[38px] font-semibold text-center md:p-[80px]">
          You may also like
        </h3>
        {/* <ProductCard productName="Rattan Grapefruit" productImage={} />  */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   ">
        <ProductCard
          productName="Rotten Grapefruit"
          productImage={rottenGrapefruit}
          productPrice={60}
        />
        <ProductCard
          productName="Lime & Matcha"
          productImage={limeMatcha}
          productPrice={55}
        />
        <ProductCard
          productName="Cedar & Lavender"
          productImage={cedarLavendar}
        />
        <ProductCard
          productName="Ocean Mist"
          productImage={oceanMist}
          productPrice={58}
        />
      </div>
    </div>
  );
}

export default ProductPage;
