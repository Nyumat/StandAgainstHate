import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const viewWidth = window.innerWidth;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, [viewWidth]);

  return (
    <nav className="lg:flex items-center justify-between sm:flex-wrap bg-gray-900 lg:p-6 sm:p-4">
      <span className="font-semibold text-3xl">
        <Link to="/">Stand Against Hate</Link>
      </span>

      <div className="font-semibold text-3xl tracking-widest text-white-800 lg:flex-grow gap-5 flex flex-col lg:flex-row align-middle justify-center content-center">
        <Link
          to="/home"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          About
        </Link>
        <Link
          to="/resources"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          Resources
        </Link>
        <Link
          to="/contact"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          Contact
        </Link>
        <Link
          to="/forum"
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          Forum
        </Link>
      </div>
      {isCollapsed ? (
        <div className="flex gap-4 mt-16 pb-6"></div>
      ) : (
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 text-xl rounded">
            <Link
              to="/takeaction"
              className="block ml-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Take Action
            </Link>
          </button>
        </div>
      )}
    </nav>
  );
}
