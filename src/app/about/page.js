import Image from "next/image";
import React from "react";
import cardimgeImage from "../../../public/aboutLatest.webp";

const About = () => {
  return (
    <section className="py-6 relative w-full" id="section-2">
      <div className="aboutdiv text-white flex flex-col justify-center items-center w-full md:w-auto ">
        <p className="text-3xl font-bold mb-4">About Us</p>
        <div className="carddiv flex flex-col md:flex-row items-center p-20 border-2 space-x-0 gap-80 rounded-lg shadow-md  bg-gray-900 justify-around">
          {/* Left side content */}
          <div className="leftcarddiv mb-4 md:mb-0 md:mr-8">
            <h1 className="text-6xl font-bold mb-2">Welcome To LENS</h1>
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
          <div className="rightcarddiv flex justify-center items-center  border-2">
            <Image
              src={cardimgeImage}
              alt="Image"
              width={200}
              height={200}
              objectFit="contain"
              className="hover:opacity-75 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
