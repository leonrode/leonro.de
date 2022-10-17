import { useState, useRef, useEffect } from "react";
import { FiArrowDown } from "react-icons/fi";
const Me = () => {
  return (
    <>
      <h3 className="fadeIn4 text-sub text-xl">i&apos;m</h3>
      <h1 className="fadeIn font-serif text-white text-8xl my-2 md:my-4">
        Leon Rode
      </h1>
      <h3 className="text-sub fadeIn2 text-xl my-2 md:my-4">
        <span className="text-primary">student</span> &&{" "}
        <span className="text-primary">software developer</span>
      </h3>
      <p className="fadeIn3 text-sub mt-2 md:mt-4">
        I design and develop modern experiences{" "}
        <br className="hidden md:block" />
        using a variety of technologies.
      </p>
      <a href="#header">
        <h3 className="fadeIn4 text-primary flex items-center mt-8 md:mt-12">
          learn more about me <FiArrowDown size={24} className="ml-2" />
        </h3>
      </a>
    </>
  );
};

export default Me;
