import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Connect = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    // Implement your submit logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Clear the form after submission if needed
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col justify-center items-center text-white bg-black relative h-screen p-8">
      <div data-aos="zoom-in-up" className="absolute top-16">
        <h1 className="text-3xl">
          I am interested in opportunities - especially ambitious or large
          projects
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="4000"
        className="w-96 h-4/6 bg-black mt-12 text-white rounded-2xl shadow-[0_0px_25px_5px_rgba(0,0,0,0.3)] shadow-blue-900"
      >
        <div className="p-4">
          <div className="text-xl ml-8 p-2">Name</div>
          <div className="ml-6 p-1">
            <input
              value={name}
              onChange={handleNameChange}
              className="border bg-gray-200 text-black border-blue-500 rounded-full py-2 px-4 w-72 shadow-[0_0px_25px_5px_rgba(0,0,0,0.3)] hover:shadow-gray-900 transform transition-all duration-200"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="text-xl ml-8 p-2">Email</div>
          <div className="ml-6 p-1">
            <input
              value={email}
              onChange={handleEmailChange}
              className="border bg-gray-200 text-black border-blue-500 rounded-full py-2 px-4 w-72 shadow-[0_0px_25px_5px_rgba(0,0,0,0.3)] hover:shadow-gray-900 transform transition-all duration-200"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="text-xl ml-8 p-2">Message</div>
          <div className="ml-6 p-1">
            <textarea
              value={message}
              onChange={handleMessageChange}
              className="border bg-gray-200 text-black border-blue-500 rounded-lg py-2 px-4 w-72 h-28 shadow-[0_0px_25px_5px_rgba(0,0,0,0.3)] hover:shadow-gray-900 transform transition-all duration-200 resize-none"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="flex justify-center mt-2">
            <button
              onClick={handleSubmit}
              className="border-2 border-blue-700 text-blue-900 text-lg font-semibold bg-white rounded-full cursor-pointer transition-colors duration-300 hover:bg-blue-700 hover:text-white py-2 px-8 mb-4 hover:shadow-[0_0px_25px_5px_rgba(0,0,0,0.3)] hover:shadow-blue-900"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="absolute -right-5 font-bold text-6xl text-blue-500 transform rotate-90">
        <h1>Let's Connect</h1>
      </div>
      <div className="absolute left-1/2 bottom-8 text-gray-500">
        <FaAngleDown className="text-gray-500 inline-block text-3xl ml-2 animate-bounce" />
      </div>
    </div>
  );
};

export default Connect;
