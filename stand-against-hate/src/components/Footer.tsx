import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-2 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <Link
                to="/about"
                className="text-base text-gray-500 hover:text-gray-900"
                referrerPolicy="no-referrer"
              >
                About
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/resources"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Resources
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/forum"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Forum
              </Link>
            </div>
          </nav>

          <p className="mt-5 text-center text-base text-gray-400">
            &copy; 2022 Stand Against Hate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
