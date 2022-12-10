import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mt-16 pt-10 h-max w-screen text-center flex flex-col justify-center items-center gap-4">
      <header className=" text-6xl text-center text-white-800">Home</header>

      <p className="mt-2 mb-5 text-center text-white-800 whitespace-wrap w-7/12 text-3xl border-2 border-blue-500 rounded-lg p-4">
        I created this website to provide resouces and awareness on how we can
        combat hate in our communities, together. The resources on this website
        are provided to help you understand what you can do to help yourself or
        others. If you or someone you know is being targeted by hate crimes,
        please contact the police.
      </p>

      <p className="mt-2 mb-5 text-center text-white-800 whitespace-wrap w-7/12 text-3xl border-2 border-blue-500 rounded-lg p-4">
        There's a lot of information on this website, so please take your time
        to read through it. If you have any questions, please feel free to
        contact me. I'm always happy to help. There's also an anonomyous forum
        where you can share your story and get support from others who have been
        through similar experiences. I hope you find this website helpful! Stand
        Against Hate!
      </p>

      <div className="flex flex-col justify-center items-center mb-16">
        <Link to="/about">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            About
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
