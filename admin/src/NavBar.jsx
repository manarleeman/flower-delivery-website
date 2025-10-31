import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="flex flex-row justify-between ml-auto items-center  md:p-6 p-3 border-b border-gray-300">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Admin Panel</h1>

      <div className="flex gap-4">
        <Link to="/">
          <button
            onClick={() => setActiveTab("/")}
            className={`px-6 py-2 rounded-full border font-medium transition ${
              activeTab === "/"
                ? "bg-black text-white border-black"
                : "border-black text-black hover:bg-gray-100"
            }`}
          >
            Flowers
          </button>
        </Link>
        <Link to="/addFlower">
          <button
            onClick={() => setActiveTab("/addFlower")}
            className={`px-6 py-2 rounded-full border font-medium transition ${
              activeTab === "/addFlower"
                ? "bg-black text-white border-black"
                : "border-black text-black hover:bg-gray-100"
            }`}
          >
            Add Flowers
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
