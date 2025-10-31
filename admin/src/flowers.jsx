import React from "react";
import { useEffect } from "react";
const serverUrl = import.meta.env.VITE_SERVER_URL;

function Flowers() {
  const [flowers, setFlowers] = React.useState([]);
  useEffect(() => {
    async function fetchFlowers() {
      try {
        const response = await fetch(`${serverUrl}/api/flowers`);
        const data = await response.json();
        console.log(data);
        setFlowers(data);
      } catch (error) {
        console.error("Error fetching flowers:", error);
      }
    }
    fetchFlowers();
  }, []);

  return (
    <div className="w-full  mx-auto mt-8 p-6 lg:p-4">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="flex flex-col md:flex-row items-start mb-8 border-b pb-6"
        >
          <div className="w-48 h-48  border border-secondary flex items-center justify-center text-gray-500 font-medium mb-4 md:mb-0 md:mr-6">
            <img
              src={flower.imageUrl}
              alt={flower.name}
              className="w-full min-w-full max-h-full object-fit"
            />
          </div>
          <div>
            <p className="font-semibold">
              <span className="text-black">Name:</span> {flower.name}
            </p>
            <p className="font-semibold">
              <span className="text-black">Category:</span> {flower.category}
            </p>
            <p className="font-semibold">
              <span className="text-black">Price:</span>{" "}
              <span className="text-red-600">${flower.price}</span>
            </p>
            <p className="font-semibold text-black">
              Description:{" "}
              <span className="font-normal text-gray-700">
                {flower.description}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Flowers;

