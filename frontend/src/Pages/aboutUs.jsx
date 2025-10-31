import React from "react";
import Founder from "../assets/founder.svg";
import { AiOutlinePinterest } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";
import craftedBouquet from "../assets/craftedBouquet.svg";
import Ambiance from "../assets/ambiance.svg";
import SpecialDay from "../assets/specialday.svg";

function AboutUs() {
  return (
    <div>
      <section>
        <div className="divide-y divide-secondary">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
            <div className="flex flex-col gap-6 align-center p-3 text-center">
              <h2 className="md:text-[50px] font-semibold text-[30px]">
                Our Story
              </h2>
              <h3 className="italic md:text-[28px] text-[20px]">About</h3>
              <h4 className="text-[34px] md:text-[50px]">LuxeBouquets</h4>
              <div>
                <p className="text-center  text-[18px] p-3">
                  Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
                  Spread Joy with Our Online Flower Delivery Service
                </p>
              </div>
              <div className="flex flex-row justify-center gap-8 px-5">
                <CiInstagram className="text-[24px] text-secondary hover:text-primary transition duration-300 border rounded-full border-secondary" />
                <AiOutlinePinterest className="text-[24px] text-secondary hover:text-primary transition duration-300 border rounded-full border-secondary" />
                <FiFacebook className="text-[24px] text-secondary hover:text-primary transition duration-300 border rounded-full border-secondary" />
                <SlSocialTwitter className="text-[24px] text-secondary hover:text-primary transition duration-300 border rounded-full border-secondary" />
                <PiTelegramLogo className="text-[24px] text-secondary hover:text-primary transition duration-300 border rounded-full border-secondary" />
              </div>
            </div>
            <div className="divide-x divide-secondary">
              <img src={Founder} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="px-4 py-[40px] md:p-[80px]">
            <h3 className="text-center text-sm font-semibold ">OUR STORY</h3>
            <h4 className="text-[36px] md:text-[38px] font-semibold text-center">
              Our Founder's Passion{" "}
            </h4>
            <p className="text-[16px] text-center">
              Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the
              goal of bringing unique and exquisite bouquets to the people of
              Kyiv. Natalia has always had a passion for flowers and design, and
              his vision was to create a local floral studio that would
              specialize in the creation and delivery of fresh, beautiful, and
              distinctive bouquets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 ">
            <div className="">
              <img src={craftedBouquet} alt="" className="w-full h-auto" />
            </div>
            <div className="flex flex-col gap-4 justify-center py-[40px] px-4 md:p-[80px]">
              <h4 className="text-[26px] md:text-[38px] text-left">
                Expertly Crafted Bouquets
              </h4>
              <p className="text-[16px] text-left">
                At Kyiv LuxeBouquets, we take pride in our team of talented and
                experienced florists who carefully select each bloom, ensuring
                that only the freshest and most stunning flowers make it into
                our bouquets. We work directly with farms to source the highest
                quality flowers, and our skilled florists expertly craft each
                bouquet to perfection.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1  ">
            <div className="px-[16px] py-[40px] md:p-[80px]">
              <h3 className="text-[26px] md:text-[36px] text-left">
                Bouquets, Gifts & Ambiance
              </h3>
              <p className="text-[16px] text-left">
                At Kyiv LuxeBouquets, we take pride in our team of talented and
                experienced florists who carefully select each bloom, ensuring
                that only the freshest and most stunning flowers make it into
                our bouquets. We work directly with farms to source the highest
                quality flowers, and our skilled florists expertly craft each
                bouquet to perfection.
              </p>
            </div>
            <div className="divide-x divide-secondary">
              <img src={Ambiance} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="divide-x divide-secondary">
              <img src={SpecialDay} alt="" className="w-full h-auto" />
            </div>
            <div className="px-4 py-[40px] md:p-[80px]">
              <h3 className="text-[38px] md:text-[26px] text-left">
                Making Every Day Special
              </h3>
              <p className="text-[16px] text-left">
                Our mission is simple: to make every day special and memorable
                for our customers. We are dedicated to providing the highest
                quality flowers, exceptional customer service, and a seamless
                online experience that will make you feel confident and
                satisfied with your purchase.Thank you for choosing Kyiv
                LuxeBouquets. We look forward to bringing joy and happiness to
                your life with our beautiful bouquets and gifts.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-center">
            <h3 className="text-[34px] md:text-[50px] text-center">
              Discover Our Beautiful Bouquets
            </h3>
            <p className="text-[16px] text-center">
              Explore our collection of exquisite bouquets and surprise your
              loved ones with the perfect gift. Click the button below to start
              shopping
            </p>
            <div>
              <button className="border border-secondary bg-black text-white h-[56px] w-[270px]">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
