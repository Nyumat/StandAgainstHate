import React from "react";

function Forum() {
  return (
    <div className="h-screen w-screen flex flex-col text-center">
      <header className="pt-3 mx-8 my-4 text-4xl text-left text-white-800">
        Stand Against Hate Community Forum
      </header>
      <div className="flex flex-center flex-col justify-center mb-4 pb-4 pl-6 pr-6 w-full">
        <p className="mt-2 mb-5 text-start text-white-800 whitespace-wrap w-full text-3xl border-2 border-blue-500 rounded-lg p-4 hover:bg-blue-500">
          My Experiences Going Through Hate Crime.
          <span className="float-right ">Posted By: Anon</span>
          <div className="flex flex-row justify-between w-full">
            <span className=" mt-2">Posted On: 12/7/2022</span>
          </div>
        </p>

        <p className="mt-2 mb-5 text-start text-white-800 whitespace-wrap w-full text-3xl border-2 border-blue-500 rounded-lg p-4 hover:bg-blue-500">
          Has Anyone Else Felt This Way?
          <span className="float-right ">Posted By: Tom</span>
          <div className="flex flex-row justify-between w-full">
            <span className=" mt-2">Posted On: 12/4/2022</span>
          </div>
        </p>

        <p className="mt-2 mb-5 text-start text-white-800 whitespace-wrap w-full text-3xl border-2 border-blue-500 rounded-lg p-4 hover:bg-blue-500">
          Today Marks 6 Weeks Since It Happened...
          <span className="float-right ">Posted By: John</span>
          <div className="flex flex-row justify-between w-full">
            <span className=" mt-2">Posted On: 12/1/2022</span>
          </div>
        </p>

        <p className="mt-2 mb-5 text-start text-white-800 whitespace-wrap w-full text-3xl border-2 border-blue-500 rounded-lg p-4 hover:bg-blue-500">
          How My Journey Post-Hate Crime Has Been...
          <span className="float-right ">Posted By: Anon</span>
          <div className="flex flex-row justify-between w-full">
            <span className=" mt-2">Posted On: 11/24/2022</span>
          </div>
        </p>

        <p className="mt-2 mb-5 text-start text-white-800 whitespace-wrap w-full text-3xl border-2 border-blue-500 rounded-lg p-4 hover:bg-blue-500">
          Guide For Hate Crime Victims
          <span className="float-right ">Posted By: Kaitlyn</span>
          <div className="flex flex-row justify-between w-full">
            <span className=" mt-2">Posted On: 11/5/2022</span>
          </div>
        </p>
      </div>

      <div className="flex flex-row justify-center items-center mb-10 pb-10 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create New Post
        </button>
      </div>
    </div>
  );
}

export default Forum;
