import { PiCaretRightThin } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const current = location.pathname.split("/")[1]; // e.g. 'shipping' or 'payment'

  const steps = ["information", "shipping", "payment"];

  return (
    <div className="flex items-center text-sm mb-6">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <Link
            to={`/${step}`}
            className={`${
              current === step
                ? "text-black font-medium"
                : "text-gray-400 hover:text-black"
            } capitalize`}
          >
            {step}
          </Link>
          {index < steps.length - 1 && (
            <PiCaretRightThin
              className={`mx-1 ${
                current === step ? "text-black" : "text-gray-400"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
