import React from "react";

function TakeAction() {
  return (
    <div className="h-screen w-screen text-center flex flex-col justify-center items-center gap-4 pb-16">
      <header className=" text-6xl text-center text-white-800">
        Your Voice Matters!
      </header>

      <p className="mt-2 mb-5 text-center text-white-800 whitespace-wrap w-fit text-3xl border-2 border-blue-500 rounded-lg p-4">
        Take Action Page Content
      </p>

      <div className="flex flex-col justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join The Fight.
        </button>
      </div>
    </div>
  );
}

export default TakeAction;
