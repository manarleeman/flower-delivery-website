import React from "react";
import {
  FaInstagram,
  FaPinterest,
  FaFacebook,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="   ">
      <div className=" h-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  border-black border">
        <div className="border border-black border-r-0 border-t-0 border-b-0 px-4 py-10 flex flex-col gap-6 ">
          <p className="text-[16px] ">
            Remember to offer beautiful flowers from Kyiv LuxeBouquets
            Valentines Day, Mothers Day, Christmas... Reminds you 7 days before.
            No spam or sharing your address
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300  px-4 py--2 w-full"
          />
          <button className="bg-black text-white px-4 py-2 w-full">
            REMIND
          </button>
        </div>

        {/* Contact Us */}
        <div className="border border-black md:border-t-0 border-r-0 px-4 md:px-10 py-10 flex flex-col gap-6">
          <h3 className="font-semibold text-xl text-gray-400 text-[21px]">
            Contact Us
          </h3>
          <div>
            <p className="text-sm text-gray-400">Address</p>
            <p className="text-[16px]">15/4 Khreshchatyk Street, Kyiv</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Phone</p>
            <span className="text-[16px]">+38098009977</span>
          </div>
          <div>
            <p className="text-sm text-gray-400">General Enquiry</p>
            <p className="text-[16px]">Luxe.Florist.Studio@gmail.com</p>
          </div>
          <div>
            <p className="text-xl text-gray-400">Follow Us</p>
            <div className="flex gap-2 text-xl justify-between col-span-5 p-2 ">
              <FaInstagram className="cursor-pointer hover:text-pink-500 bg-white" />
              <FaPinterest className="cursor-pointer hover:text-red-600 bg-white" />
              <FaFacebook className="cursor-pointer hover:text-blue-600 bg-white" />
              <FaTwitter className="cursor-pointer hover:text-blue-400 bg-white" />
              <FaTelegram className="cursor-pointer hover:text-blue-500 " />
            </div>
          </div>
        </div>

        {/* Shop */}
        <div className="border border-black border-r-0   flex flex-col gap-6 px-4 md:px-10 py-10">
          <h3 className="font-semibold text-gray-400 text-[21px]">Shop</h3>
          <div className="flex gap-2">
            <ul className="space-y-2 text-[16px]">
              <li>All Products</li>
              <li>Fresh Flowers</li>
              <li>Dried Flowers</li>
              <li>Live Plants</li>
              <li>Designer Vases</li>
              <li>Aroma Candles</li>
              <li>Freshener Diffuser</li>
            </ul>
          </div>
          <h3 className="font-semibold text-gray-600 text-[21px]">Service</h3>
          <div className="flex gap-2">
            <ul className="space-y-2 text-[16px]">
              <li>Flower Subscription</li>
              <li>Wedding & Event Decor</li>
            </ul>
          </div>
        </div>
        {/* About Us */}
        <div className="border border-black border-t-0 px-4 md:px-10 py-10 flex flex-col gap-6 ">
          <h3 className="font-semibold text-gray-400 text-[21px] ">About Us</h3>
          <ul className="space-y-1 text-[16px] gap-2 flex flex-col">
            <li>Our Story</li>
            <li>Blog</li>
          </ul>
          <ul className="gap-2 flex flex-col text-[16px]">
            <li>Shipping & returns</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
