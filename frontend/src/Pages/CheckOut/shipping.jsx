import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { FiEdit2 } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { PiCaretRight, PiCaretRightThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import OrderSummary from "./orderSummary";
import Breadcrumb from "../../components/breadcrumbs";

function ShippingDetails() {
  const [unknownAddress, setUnknownAddress] = useState(false);
  const currentStep = "Shipping";

  return (
    <div className="flex flex-col-reverse lg:grid-cols-2 lg:grid">
      {" "}
      <div className="">
        <OrderSummary />
      </div>
      <div className=" p-6 bg-white rounded-md">
        {/* Breadcrumb */}
        {/* <div className="text-sm text-gray-500 mb-4">
        INFORMATION &gt; SHIPPING &gt; PAYMENT &gt;
      </div> */}
        <div className="flex items-center text-sm mb-4">
          <Breadcrumb />
        </div>

        {/* Contact Info Check */}
        <div className="flex items-center justify-between border-b pb-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-black text-xl">
              {" "}
              <IoMdCheckmark />
            </span>
            <p className="text-gray-800 font-medium">Contact information</p>
          </div>
          <button className="text-gray-500 hover:text-black text-lg">
            {" "}
            <FiEdit2 />
          </button>
        </div>

        {/* Shipping Details */}
        <h2 className="text-lg font-semibold mb-4">2 Shipping details</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Recipient's Name"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-black"
          />

          <input
            type="tel"
            placeholder="Recipient's Phone Number *"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-black"
          />

          {/* Date of Delivery */}
          <div className="relative">
            <input
              type="date"
              placeholder="Date of Delivery"
              className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-black"
            />
            {/* <SlCalender className="absolute right-3 top-3 " /> */}
          </div>

          {/* Delivery Time */}
          <select
            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-black text-gray-500"
            defaultValue=""
          >
            <option value="" disabled>
              Delivery Time
            </option>
            <option value="morning">Morning (9am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 4pm)</option>
            <option value="evening">Evening (4pm - 7pm)</option>
          </select>

          {/* Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Street"
              disabled={unknownAddress}
              className={`border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none ${
                unknownAddress
                  ? "bg-gray-100 cursor-not-allowed"
                  : "focus:border-black"
              }`}
            />
            <input
              type="text"
              placeholder="Apartment Number"
              disabled={unknownAddress}
              className={`border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none ${
                unknownAddress
                  ? "bg-gray-100 cursor-not-allowed"
                  : "focus:border-black"
              }`}
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={unknownAddress}
              onChange={(e) => setUnknownAddress(e.target.checked)}
              className="w-4 h-4 accent-black"
            />
            I don’t know the address, please call the recipient.
          </label>

          {/* Button */}
          <Link to="/payment">
            <button
              type="submit"
              className="mt-2 w-full bg-black text-white py-3 text-center text-sm font-medium hover:bg-gray-800 transition-all"
            >
              CONTINUE TO PAYMENT
            </button>
          </Link>
        </form>
        <div className="  mt-6 border-t border-gray-200 border-b py-4">
          <h2 className="text-lg text-gray-200 mb-4">3 Payment</h2>
        </div>
      </div>
    </div>
  );
}

export default ShippingDetails;
