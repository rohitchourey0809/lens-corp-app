import React from "react";

const Blogs = () => {
  return (
    <section className="ourblogs" id="section-8">
      <div className="flex justify-between gap-8 p-8">
        <div className="bg-gray-600 p-10 rounded-lg hover:border-2 hover:border-green-500">
          <div>
            <h2 className="text-red-500">New!</h2>
          </div>
          <div>
            <h1 className="font-bold">Generative AI</h1>
          </div>
          <div>
            <p className="text-black">
              In todays data-driven marketing world, keeping up with content
              creation demands can be a challenge. Read our latest blog to
              explore the power of Generative AI and its potential to reshape
              the marketing landscape....
            </p>
          </div>
        </div>
        <div className="bg-gray-600 p-10 rounded-lg hover:border-2 hover:border-green-500">
          <div>
            <h2 className="text-red-500">New!</h2>
          </div>
          <div>
            <h1 className="font-bold">Generative AI</h1>
          </div>
          <div>
            <p className="text-black">
              In todays data-driven marketing world, keeping up with content
              creation demands can be a challenge. Read our latest blog to
              explore the power of Generative AI and its potential to reshape
              the marketing landscape....
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
