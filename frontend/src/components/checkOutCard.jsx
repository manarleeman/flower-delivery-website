import React from "react";

function CheckOutCard({ productImg, productName, quantity, price }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 pr-[71px] pl-4">
      <div className="">
        <img
          src={productImg}
          alt=""
          className="w-[160px] h-[160px] border border-secondary"
        />
      </div>
      <div className="flex flex-row justify-between text-center py-[36px] px-">
        <div className="flex flex-col gap-2">
          <h3 className="text-left text-[18px] font-medium">{productName}</h3>
          <h4 className="text-left text-[16px]">Quantity ({quantity})</h4>
        </div>
        <div>
          <h5 className="ml-auto text-center">${price}</h5>
        </div>
      </div>
      {/* <div className="flex flex-row justify-between">
        <h5 className="text-[16px]">Subtotal</h5>
        <span className="text-[16px]">${subtotal}</span>
      </div> */}
    </div>
  );
}

export default CheckOutCard;
