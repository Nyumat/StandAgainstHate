import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="mt-12 pt-10 h-max w-screen text-center flex flex-col justify-center items-center gap-4">
      <header className=" text-6xl text-center text-white-800">Contact</header>

      <p className="mt-2 mb-5 text-center text-white-800 whitespace-wrap w-fit text-3xl border-2 border-blue-500 rounded-lg p-4">
        <span>Oregon:</span>
        <br></br>
        <span className="text-blue-500">Coalition Against Hate Crimes</span>
        <br></br>
        P: (918) 583-1361 or (918) 583-1367
        <br></br>
        <br></br>
        <span className="text-blue-500">Portland United Against Hate</span>
        <br></br>
        <span className="break-all">portlandunitedagainsthate@gmail.com</span>
        <br></br>
        <br></br>
        <span className="text-blue-500">
          Oregon Department of Justice Statewide Bias Response Hotline
        </span>
        <br></br>
        P: (844) 924-BIAS (2427) or 711
      </p>

      <p className="mt-2 mb-5 text-center text-white-800 whitespace-wrap w-fit text-3xl border-2 border-blue-500 rounded-lg p-4">
        <span>Any Other States:</span>
        <br></br>
        <a
          className="text-blue-500"
          href="https://www.hatecrimebook.com/who-to-contact-by-state-mw"
        >
          Click This Link
        </a>
      </p>

      <div className="flex flex-col justify-center items-center pb-8 mb-8">
        <Link to="/forum">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Chat Anonymously With Others
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
