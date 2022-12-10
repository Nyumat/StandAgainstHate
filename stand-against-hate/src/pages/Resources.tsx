import React from "react";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <div className="h-max mt-4 w-screen pb-10 mb-10 text-center flex flex-col justify-center items-center gap-4">
      <header className="pt-10 mt-10 text-6xl text-center text-white-800">
        Stand Against Hate Resources
      </header>

      <p className="mt-5 mb-5 text-center text-white-800 whitespace-wrap w-fit text-3xl border-2 border-gray-500 rounded-lg p-4">
        <h2 className="text-4xl text-blue-500 mt-2 mb-5">
          Hate Crime General Resources
        </h2>
        <ul className="flex flex-col justify-center items-center gap-3">
          <li>
            <a href="https://www.fbi.gov/tips">FBI Tips</a>
          </li>
          <li>
            <a href="https://pflag.org/resource/hate-crimes-prevention-toolkit">
              Hate Crime Prevention Toolkit
            </a>
          </li>
          <li>
            <a href="https://www.fbi.gov/how-we-can-help-you/need-an-fbi-service-or-more-information/ucr/hate-crime">
              Hate Crime Statistics
            </a>
          </li>
        </ul>
        <h2 className="text-4xl text-blue-500 mt-5 mb-5">
          Anti-Bullying Resouces
        </h2>
        <ul className="flex flex-col justify-center items-center gap-3">
          <li>
            <a href="https://www.stopbullying.gov/">Stop Bullying</a>
          </li>
          <li>
            <a href="https://www.ncab.org.au/bullying-advice/bullying-for-parents/types-of-bullying/">
              Types of Bullying
            </a>
          </li>
          <li>
            <a href="https://anti-bullyingalliance.org.uk/tools-information/all-about-bullying/bullying-and-law/hate-crime-and-bullying">
              Hate Crime and Bullying
            </a>
          </li>
        </ul>
        <h2 className="text-4xl text-blue-500 mt-5 mb-5">
          Anti-Hate Crime Organizations
        </h2>
        <ul className="flex flex-col justify-center items-center gap-3">
          <li>
            <a href="https://www.adl.org/">Anti-Defamation League</a>
          </li>
          <li>
            <a href="https://www.splcenter.org/">Southern Poverty Law Center</a>
          </li>
          <li>
            <a href="https://www.hrc.org/">Human Rights Campaign</a>
          </li>
          <li>
            <a href="https://www.naacp.org/">NAACP</a>
          </li>
          <li>
            <a href="https://victimsofcrime.org/">
              National Center for Victims of Crime
            </a>
          </li>
        </ul>
      </p>

      <Link to="/contact">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact
        </button>
      </Link>
    </div>
  );
}

export default Resources;
