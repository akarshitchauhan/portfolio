import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillCloud from "./SkillCloud";

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-white bg-black relative h-screen p-8">
      <div className="flex flex-row space-x-4 justify-center items-center mr-32">
        <div data-aos="zoom-in-right" className="max-w-md">
          <h1 className="text-4xl">
            I love to keep a variety of tools in my tech stack
          </h1>
        </div>
        <div data-aos="zoom-in-left">
          <SkillCloud className="tagcloud-wrap" />
          <style jsx>{`
            .tagcloud {
              color: #1565c0;
              font-family: "Poppins", sans-serif;
              font-size: 20px;
              font-weight: 650;
              margin: 1% auto;
            }

            .tagcloud--item:hover {
              color: #2196f3;
            }
          `}</style>
        </div>
      </div>

      <div className="absolute right-0 font-bold text-6xl text-blue-500 transform rotate-90">
        <h1>TechStack</h1>
      </div>
      <div className="absolute left-1/2 bottom-8 text-gray-500">
        <FaAngleDown className="text-gray-500 inline-block text-3xl ml-2 animate-bounce" />
      </div>
    </div>
  );
};

export default TechStack;
