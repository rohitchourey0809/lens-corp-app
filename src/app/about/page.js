import Image from "next/image";
import React from "react";
import cardimgeImage from "../../../public/aboutLatest.webp";

const About = () => {
  return (
    <section className="w-full m-auto p-auto" id="section-2">
      <div className="aboutdiv text-white flex flex-col justify-between items-center w-full md:w-auto p-0 hover:p-4">
        <p className="text-3xl font-bold mb-4">About Us</p>
        <div className="carddiv flex flex-col md:flex-row justify-between items-center p-8 md:p-16  gap-8 rounded-lg shadow-md bg-gray-900">
          {/* Left side content */}
          <div className="leftcarddiv md:w-1/2 mb-8 md:mb-0 md:mr-8">
            <h1 className="text-4xl font-bold mb-2">Welcome To LENS</h1>
            <div className="text-lg mb-4">
              <p>
                We put our hearts, souls and sweat into designing <br />
                and developing custom AI - powered solutions
                <br /> for your business so you do not have to.
              </p>
            </div>
            <button className="bg-transparent border-2 rounded-xl border-cyan-200 font-bold p-3 hover:border-green-500">
              Learn More
            </button>
          </div>
          {/* Right side image */}
          <div className="rightcarddiv ">
            <div className="h-80 w-80">
              <Image
                src={cardimgeImage}
                alt="Image"
                width={400}
                height={600}
                objectFit="cover"
                className="w-full h-full hover:opacity-75 transition-opacity duration-300 p-2 rounded-lg hover:p-0  hover: bg-white hover:rounded lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
