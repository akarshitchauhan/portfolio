import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Info = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center text-white bg-black relative h-screen p-8">
      <video
        className="absolute top-0 left-0 object-cover w-full h-full z-0"
        autoPlay
        loop
        muted
      >
        <source src="images/bg.mp4" type="video/mp4" />
        {/* Add additional video sources for compatibility */}
      </video>

      <div data-aos="zoom-in" className="text-center mb-4">
        <h1 className="tracking-wide text-6xl font-bold inline-block mb-16">
          Hello!
        </h1>{" "}
        <br></br>
        <h1 className="tracking-wide text-6xl font-bold inline-block mr-4">
          I'm{" "}
        </h1>
        <h1 className="tracking-wide text-6xl font-bold inline-block text-blue-500 mb-8">
          Akarshit Chauhan
        </h1>{" "}
        <br></br>
      </div>
      <div data-aos="zoom-in-up">
        <h1 className="tracking-wide text-3xl font-bold inline-block mb-8">
          an aspiring Software Engineer
        </h1>
      </div>
      <div className="absolute left-1/2 right-0 bottom-8 text-gray-500">
        <FaAngleDown className="text-gray-500 inline-block text-3xl ml-2 animate-bounce" />
      </div>
    </div>
  );
};

export default Info;
