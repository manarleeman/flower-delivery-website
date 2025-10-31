import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import productImage from "../../assets/snowfall.svg";
import productImage2 from "../../assets/Fresh/Blue Harmony.png";
import CheckOutCard from "../../components/checkOutCard";
import { TiLockClosedOutline } from "react-icons/ti";

function OrderSummary() {
  const orders = [
    {
      id: 1,
      productImg: productImage,
      productName: "SnowFall",
      quantity: 1,
      price: 100,
    },
    // {
    //   id: 2,
    //   productImg: productImage2,
    //   productName: "Banana",
    //   quantity: 1,
    //   price: 100,
    // },
  ];
  const [showDetails, setShowDetails] = useState(false);
  function toggleDetails() {
    setShowDetails((prev) => !prev);
  }
  return (
    <div>
      <div className="flex flex-col gap-6 p-6 bg-gray-200">
        <div>{/* <CheckOutCard></CheckOutCard> */}</div>
        <div className="hidden lg:block px-5">
          <h3 className="text-sm">ORDER SUMMARY</h3>
          {/* {orders.map((order) => (
            <CheckOutCard
              key={order.id}
              price={order.price}
              productName={order.productName}
              productImg={order.productImg}
              quantity={order.quantity}
            />
          ))} */}
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <IoCartOutline />
          <span>Show order summary</span>
          <button onClick={toggleDetails}>
            {showDetails ? <PiCaretUp /> : <PiCaretDown />}
          </button>
        </div>
        {showDetails && (
          <div className="">
            {orders.map((order) => (
              <CheckOutCard
                key={order.id}
                price={order.price}
                productName={order.productName}
                productImg={order.productImg}
                quantity={order.quantity}
              />
            ))}
          </div>
        )}

        <div className="flex flex-col  gap-4 mt-4 border-b border-tertiary py-6">
          <h3 className="text-[16px]">
            If you have our gift card, enter the code to get discounts
          </h3>
          <div className="flex flex-row gap-3 md:gap-4">
            <input
              type="text"
              placeholder=" Gift card"
              className="bg-white border-grey-200 border h-14 w-64"
            />
            <button className="text-white bg-black h-14 w-64">Apply</button>
          </div>
        </div>
        <div className=" flex flex-col gap-4 py-6 border-b border-tertiary">
          <div className="flex flex-row justify-between">
            <h3 className="text-[16px]">Subtotal</h3>
            <span className="text-[16px] ml auto">$100.00 </span>
          </div>
          <div className="flex flex-row justify-between">
            <h3> Shipping</h3>
            <span className="ml auto">Calculated at checkout</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between text-[18px]">
            <h3 className="text-[18px]">Total</h3>
            <span className="ml auto">$100.00 </span>
          </div>
          <div>
            <div>
              <button className="flex items-center justify-center mx-auto mt-4 text-sm">
                Secure Checkout{" "}
                <TiLockClosedOutline className="mr-2 text-base text-[24px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <ShippingDetails />
      </div> */}
    </div>
  );
}

export default OrderSummary;
