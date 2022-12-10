import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="bg-gray-900 top-0 absolute w-full z-10">
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link to="/">Stand Against Hate</Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="font-semibold text-xl tracking-widest text-white-800 lg:flex-grow">
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
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
              <Link
                to="/takeaction"
                className="block ml-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
              >
                Take Action
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
