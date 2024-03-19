import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import TextDisplay from "./TextDisplay";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-white bg-black relative h-screen p-8">
      <div data-aos="zoom-in-up" className="absolute top-16">
        <TextDisplay />
      </div>
      <div className="flex flex-row space-x-24 justify-center items-center mt-12">
        <div
          data-aos="fade-up-right"
          className="bg-black text-white text-start p-8 mr-8 max-w-lg max-h-6xl rounded-2xl shadow-[0_0px_25px_5px_rgba(0,0,0,0.3)] shadow-blue-900 hover:translate hover:scale-110 transform transition-all duration-200"
        >
          <p className="text-justify">
            I'm a Computer Science Undergrad student at Jaypee Institute of
            Information Technology, Noida. I'm a very ambitious Full Stack
            developer. I love creating apps. Also experienced with Machine
            Learning.
          </p>
          <p></p> <br></br>
          <p className="text-justify">
            I have gained extensive experience in developing applications using
            React Native and Expo CLI, leveraging the power of cross-platform
            development to create robust and user-friendly mobile apps. In
            parallel, I have been delving into the exciting realm of Machine
            Learning, undertaking various projects that involve data analysis,
            model development, and deployment.
          </p>{" "}
          <br></br>
          <p className="text-center">
            If I need to define myself in one sentence that would be a Car
            Lover, and tech-obsessed!!!
          </p>
        </div>
        <div> 
          <div data-aos="fade-up-left" className="rounded-full overflow-hidden ml-8 shadow-[0_0px_15px_5px_rgba(0,0,0,0.3)] shadow-gray-700">
            <img
              src="images/photo.jpg"
              alt="My Photo"
              className="w-80 h-80 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute left-0 font-bold text-6xl text-blue-500 transform -rotate-90">
        <h1>About</h1>
      </div>
      <div className="absolute left-1/2 bottom-8 text-gray-500">
        <FaAngleDown className="text-gray-500 inline-block text-3xl ml-2 animate-bounce" />
      </div>
    </div>
  );
};

export default About;
