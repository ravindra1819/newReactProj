import { useState } from "react";
import Widgets from "./Widgets";

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r">
        <ul className="flex flex-col">
          {["First Button", "Second Button", "Third Button", "Fourth Button"].map(
            (item, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left px-6 py-3 transition-colors
                    ${
                      activeIndex === index
                        ? "bg-blue-500 text-white font-medium"
                        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                    }`}
                >
                  {item}
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Stack Area */}
      <div className="flex-1 relative p-10">
        <Widgets activeIndex={activeIndex} />
      </div>

    </div>
  );
}
