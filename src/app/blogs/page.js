import React from "react";

const Blogs = () => {
  return (
    <section className="ourblogs" id="section-8">
      <div className="flex justify-between gap-8 p-8">
        <div className="card bg-gray-600 p-10 rounded-lg relative overflow-hidden transition-all duration-300 transform hover:scale-105">
          <div className="hover:bg-gray-700">
            <h2 className="text-red-500 font-bold">New!</h2>
            <h1 className="font-bold">Generative AI</h1>
            <p className="text-black">
              In todays data-driven marketing world, keeping up with content
              creation demands can be a challenge. Read our latest blog to
              explore the power of Generative AI and its potential to reshape
              the marketing landscape...
            </p>
            <div className="absolute bottom-0 left-0 bg-gray-700 hover:bg-red-600 transition-colors duration-300 opacity-0 hover:opacity-100">
              <a
                href="#"
                className="block text-red-500 py-2 px-4 font-bold hover:text-white"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-gray-600 p-10 rounded-lg relative overflow-hidden transition-all duration-300 transform hover:scale-105">
          <div className="hover:bg-gray-700">
            <h2 className="text-red-500 font-bold">New!</h2>
            <h1 className="font-bold">Generative AI</h1>
            <p className="text-black">
              In todays data-driven marketing world, keeping up with content
              creation demands can be a challenge. Read our latest blog to
              explore the power of Generative AI and its potential to reshape
              the marketing landscape...
            </p>
            <div className="absolute bottom-0 left-0 bg-gray-700 hover:bg-red-600 transition-colors duration-300 opacity-0 hover:opacity-100">
              <a
                href="#"
                className="block text-red-500 font-bold hover:text-white"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
