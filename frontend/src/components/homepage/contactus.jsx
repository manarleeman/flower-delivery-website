import React from "react";
import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaTelegram,
} from "react-icons/fa";
import { MdOutlinePinDrop } from "react-icons/md";
import Kyiv from "../../assets/homepage/kyivluxe.png";

function ContactUs() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  border-t-0 border-secondary">
      <div className="flex flex-col gap-4  ">
        <div className="flex flex-col gap-2 px-4 md:px-10 md:py-20 py-10">
          <h2 className="text-2xl font-semibold text-[34px] md:text-[50px]">
            To Contact Us
          </h2>
          <p className="text-[18px]">We will call you back</p>
          <div className="flex flex-col gap-3  md:flex-row">
            <input
              type="number"
              placeholder="+380 XX XXX XX XX"
              className="border border-gray-400 px-4 py-2 h-10 md:h-14 w-full"
            />
            <button className="bg-black text-white px-4 py-2 w-full md:h-14  h-10 ">
              Book A Call
            </button>
          </div>
        </div>
        <div></div>
        <div className="grid grid-cols-1 md:grid-cols-2  border-t  border-secondary lg:h-full">
          <div className=" md:text-center  ">
            <h3 className="border-b border-secondary font-medium text-[26px] md:text-[38px] md:text-center p-4">
              Phone
            </h3>
            <div className="flex flex-col md:items-center gap-2 px-4 py-10 ">
              <p className="flex md:items-center gap-2">
                <FaPhoneAlt /> +380980099777
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +380980099111
              </p>
            </div>
          </div>

          <div className=" border-l border-t md:border-t-0 border-secondary md:text-center  ">
            <h3 className="border-b border-secondary font-medium  text-[26px] md:text-[38px] p-4 ">
              Address
            </h3>
            <div className=" flex flex-col md:items-center gap-3 px-4 py-10">
              <h4 className="text-[12px] md:text-sm">
                OPENING HOURS: 8 TO 11P.M.
              </h4>
              <div className="">
                <p className=" flex items-center gap-1 font-semibold text-sm md:text-[16px]">
                  <MdOutlinePinDrop className="text-[34px] " /> 15/4
                  Khreshchatyk Street, Kyiv
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" border border-secondary border-b-0 flex flex-col">
        <img src={Kyiv} alt="Kyiv LuxeBouquets" className="w-full" />
        <div className="flex flex-col md:flex-row md:items-center border-t border-secondary ">
          <div className="md:border-r border-secondary md:p-2">
            <h3 className="font-medium  md:text-center text-[26px] md:text-[38px] p-4">
              Follow us
            </h3>
          </div>
          <div className="flex gap-4 text-2xl justify-between md:items-center col-span-5 p-4">
            <FaFacebook className="cursor-pointer hover:text-blue-600" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaPinterest className="cursor-pointer hover:text-red-600" />
            <FaTelegram className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactUs;
