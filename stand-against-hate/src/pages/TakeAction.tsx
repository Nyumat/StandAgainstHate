import React from "react";

function TakeAction() {
  return (
    <div className="h-screen w-screen text-center flex flex-col justify-center items-center gap-4 pb-16">
      <header className=" text-6xl text-center text-white-800">
        Your Voice Matters!
      </header>

      <p className="mt-2 mb-5 text-center text-white-800 whitespace-wrap w-1/2 text-3xl border-2 border-blue-500 rounded-lg p-4">
        Take Action, even if it's just a small step, it's a step in the right
        direction. By taking action, you are helping to make the world a better
        place by intervening against hate. Click the button below to rise up and
        join the fight against hate.
      </p>

      <div className="flex flex-col justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            alert("Coming Soon");
          }}
        >
          Join The Fight.
        </button>
      </div>
    </div>
  );
}

export default TakeAction;
