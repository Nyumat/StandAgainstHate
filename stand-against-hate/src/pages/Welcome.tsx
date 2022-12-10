import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Welcome() {
  const words: Array<String> = [
    "Hate",
    "Discrimination",
    "Bias",
    "Bigotry",
    "Prejudice",
    "Racism",
  ];
  const getRandomFrom = (array: Array<String>): String => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  };

  const [word, setWord] = useState<String>(getRandomFrom(words));
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    setWord(getRandomFrom(words));
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setWord(getRandomFrom(words));
        setShow(true);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen text-center flex flex-col justify-center items-center gap-4 -translate-y-10">
      <h1 className=" text-6xl text-center text-white-800">
        Stand Up Against
        <div className="mt-3">
          <span className="text-blue-500 font-bold">
            <Transition
              show={show}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100 duration-1000"
              leave="transition-opacity duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {word}
            </Transition>
          </span>
        </div>
      </h1>
      <p className="mt-2 mb-5 text-center text-white-800 whitespace-wrap w-1/2 text-3xl border-2 border-blue-500 rounded-lg p-4">
        Stand Against Hate is a website that aims to help people who are
        experiencing hate crimes or discrimination. We provide resources and
        information to help you take action against hate.
      </p>

      <p className="mt-2 mb-5 text-center text-white-800 whitespace-wrap w-1/2 text-3xl border-2 border-blue-500 rounded-lg p-4">
        This website was developed by:{"  "}
        <a href="https://github.com/nyumat" className="text-blue-500">
          Tom Nyuma
        </a>
      </p>

      <div className="flex flex-col justify-center items-center">
        <Link to="/home">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
