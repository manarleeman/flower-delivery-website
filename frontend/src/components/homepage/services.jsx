import React from "react";
import ForYou from "../../assets/homepage/foryou.png";

function Services() {
  return (
    <div className="" id="services">
      <h2 className="font-semibold text-2xl text-center border border-secondary p-4">
        OUR SERVICES
      </h2>
      <div className="grid grid-col-1 md:grid-cols-2">
        <img src={ForYou} alt="" srcset="" className="" />
        <div className="flex flex-col justify-center text-center gap-4 py-10 px-4">
          <h3>Service</h3>
          <h4 className="font-semibold text-xl">Flower Subscription </h4>
          <p>
            Experience the convenience and savings of regular flower deliveries
            with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </p>
          <div className="">
            <button className="border border-secondary md:w-32  w-full h-10 m-1">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </div>
      <div className=" text-white flex flex-col gap-3 justify-center text-center w-full h-screen bg-[url('/src/assets/homepage/weddingdecor.png')] bg-no-repeat bg-cover ">
        <h4 className="text-sm">Services</h4>
        <div></div>
        <div className="flex flex-col gap-4 p-4">
          <h3 className="font-semibold text-2xl">Wedding & Event Decor</h3>
          <p className="">
            Let our team of expert florists and designers create stunning,
            on-trend floral décor for your special day. Trust us to bring your
            vision to life.
          </p>

          <div>
            <button className="border border-white w-32 h-10 m-1 text-sm">
              INQUIRE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
