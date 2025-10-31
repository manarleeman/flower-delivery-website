import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CategoryCard({ title, imageUrl, link, position }) {
  return (
    <div
      className={`grid grid-cols-2 border-l border-secondary h-[200px] md:h-[360px] `}
    >
      <div
        className={`flex flex-col px-2 md:px-6 py-3 md:py-6 text-center border-secondary ${
          position === "right" ? "order-2 border-l" : "order-1 border-r"
        }`}
      >
        <h3 className="text-2xl md:text-4xl font-semibold mt-auto">{title}</h3>
        <Link to={link} className="mt-auto">
          Shop Now <FaArrowRightLong className="inline" />
        </Link>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className={`w-full h-[200px] md:h-[360px] object-fit object-center ${
          position === "right" ? "order-1" : "order-2"
        }`}
      />
    </div>
  );
}

export default CategoryCard;
