import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
const serverUrl = import.meta.env.VITE_SERVER_URL;

function Addflower() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  async function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    // Handle form submission logic here
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);

    try {
      const res = await fetch(`${serverUrl}/api/flowers`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        toast.success("flower added sucessfully");
        // Reset form
        setImage(null);
        setName("");
        setCategory("");
        setPrice("");
        setDescription("");
      } else {
        toast.error("Failed to add flower. Please try again.");
      }
    } catch (error) {
      console.log("Error submitting the form", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full  mx-auto mt-8 p-5  lg:p-4">
      <Toaster position="top-right" />
      <h2 className="text-xl font-semibold mb-6">Add Flower</h2>

      <form className="flex flex-col gap-4" onSubmit={submitHandler}>
        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1">Image</label>
          <div className="w-48 h-48 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <FiUploadCloud className="text-3xl mb-1" />
                <span>Upload</span>
              </>
            )}

            <input
              type="file"
              accept="image/*"
              className="absolute w-48 h-48 opacity-0 cursor-pointer"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Category and Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Fresh Flowers">Fresh Flowers</option>
              <option value="Dried Flowers">Dried Flowers</option>
              <option value="Live Plants">Live Plants</option>
              <option value="Aroma Candels">Aroma Candels</option>
              <option value="Fresheners">Fresheners</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            rows="4"
            className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-800 transition self-center mt-4"
        >
          {isLoading ? "Saving ..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
}

export default Addflower;
