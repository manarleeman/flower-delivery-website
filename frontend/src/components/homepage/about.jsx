import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border lg:border-b-0 border-secondary ">
      <h1
        className="  text-4xl font-bold leading-tight md:w-1/2 text-center p-[16px] md:p-10"
        id="about"
      >
        About Us
      </h1>
      <div className="  md: flex flex-col gap-6 border-l border-t lg:border-t-0 border-secondary align-center p-3">
        <h2 className="text-sm text-black  ">OUR STORY</h2>
        <h4 className="text-lg font-semibold">Kyiv LuxeBouquets</h4>
        <p>
          We are a modern local floral studio, which specializes in the design
          and delivery of unique bouquets. We have the best florists who
          carefully select each look, our studio cooperates directly with farms
          for growing different flowers, so we always have fresh flowers, which
          are collected by our florists in exquisite bouquets. We have a
          collection of fresh bouquets, collections of dried bouquets, house
          plants, as well as fragrant candles from luxury brands to create the
          perfect atmosphere. Make someone's day amazing by sending flowers,
          plants and gifts the same or next day. Ordering flowers online has
          never been easier.
        </p>
        <button className="bg-white text-black py-2 px-4 rounded-sm h-10 w-40 border-black border  hover:bg-black hover:text-white">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default About;
