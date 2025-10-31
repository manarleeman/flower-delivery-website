import React from "react";
import googleLogo from "../../assets/homepage/google_logo.svg";

function Review() {
  return (
    <div
      className="flex flex-col gap-6 justify-center items-center px-4 py-10 md:p-20"
      id="reviews"
    >
      <div className="flex flex-col justify-center items-center ">
        <img src={googleLogo} alt="Google Logo" className="w-32 h-auto my-2" />
        <h3 className="text-sm text-center">REVIEW</h3>
      </div>

      <div className="bg-white  text-center ">
        <h2 className="text-3xl font-semibold ">Our Clients say</h2>
        <p className="italic text-lg max-w-2xl mx-auto mb-4">
          “Ordered flowers online and they were the best bouquet! Impressed
          everyone around. Highly recommend this flower shop!”
        </p>
        <p className="text-gray-600 mb-6">– Ronald Richards</p>
        <button className=" text-secondary px-6 py-2 r border border-secondary">
          READ REVIEWS
        </button>
      </div>
    </div>
  );
}

export default Review;
