import Image from "next/image";

import navimage from "../../public/nav_logo.webp";

import Link from "next/link";
import About from "./about/page";
import Blogs from "./blogs/page";

export default function Home() {
  return (
    <main>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={navimage}
              alt="Logo"
              className="h-15 text-white"
              objectFit="cover"
            />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="https://makemyweb.ai/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  MakeMyWeb.
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Theme
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Section 1: Gradient Background with Button */}
      {/* Section 1: Video Background with Centered Content */}
      <section className="py-80 relative border border-gray-400" id="section-1">
        <div className="absolute inset-0 overflow-hidden h-200 flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-100 object-cover"
          >
            <source
              src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-white text-4xl font-bold mb-2">
              We are at the forefront of AI
            </h2>
            <h3 className="text-white text-2xl mb-2">
              From Conserving Wildlife to Automatically Generating Caricatures
            </h3>
            <h5 className="text-white mb-4 font-bold">– We Do It All</h5>
            <a
              href="/about"
              className="bg-trasparent hover:bg-white hover:px-7 text-black py-2 px-4 rounded-lg text-lg font-bold  border-2 border-white "
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: About Us */}
      <About />
      <section id="section-3 m-4">
        <div className="servicediv flex flex-col justify-center items-center">
          <div>
            <p className="font-bold mb-4">SERVICES</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">
              We provide Artificial Intelligence Services
            </h2>
          </div>
          <div className="servicelist">
            <div className="servicecontainer">
              {/* First pair */}
              <div className="flex justify-center p-8">
                <div className="service-item bg-gray-800 m-4 text-white rounded-lg overflow-hidden transition duration-300  hover:border-2 hover:bg-green-200 hover:border-green-500">
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-green-500">
                      01
                    </h2>
                    <h2 className="text-2xl font-bold tracking-tight text-green-500">
                      Customers also purchased
                    </h2>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      Academia-backed & In-house researched State-of-the-Art
                      Face, Fingerprint, and Iris Recognition SDKs. Enable
                      real-time automated Biometric applications on edge devices
                      even without an active internet connection.
                    </h2>
                  </div>
                </div>
                <div className="service-item bg-gray-800 m-4 text-white rounded-lg overflow-hidden transition duration-300  hover:border-2 hover:bg-blue-200 hover:border-blue-500">
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-blue-500">
                      02
                    </h2>
                    <h2 className="text-2xl font-bold tracking-tight text-blue-500">
                      Image Analysis
                    </h2>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      Outsource the overly complex image analysis work to our
                      intelligent machines that adaptively learn, so you can
                      focus on making the best decisions for your business.
                    </h2>
                  </div>
                </div>
              </div>

              {/* Second pair */}
              <div className="flex justify-center p-8">
                <div className="service-item bg-gray-800 m-4 text-white rounded-lg overflow-hidden transition duration-300  hover:border-2 hover:bg-pink-200 hover:border-pink-500">
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-pink-500">
                      03
                    </h2>
                    <h2 className="text-2xl font-bold tracking-tight text-pink-500">
                      Cross-Media Translation
                    </h2>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      Will something like Siri or Alexa enhance your business?
                      We can deliver text-to-speech, text-to-image,
                      speech-to-text, speech-to-image, speech-to-image,
                      image-to-text, and image-to-speech solutions for maximum
                      convenience.
                    </h2>
                  </div>
                </div>
                <div
                  className="service-item bg-gray-800 m-4 text-white rounded-lg overflow-hidden transition duration-300
                 hover:border-2 hover:bg-orange-200 hover:border-orange-500"
                >
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-orange-500">
                      04
                    </h2>
                    <h2 className="text-2xl font-bold tracking-tight text-orange-500">
                      3D Modelling and Design
                    </h2>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      We offer services for automated generation of 3D assets
                      with realistic shapes and textures. We animate the 3D
                      models with voice and videos with an aim to retarget voice
                      and/or expressions with pose from a single Image/video.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="meettrue-ai" id="section-4"></section>
      <section className="why-choose-plans mt-10" id="section-5">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center text-lg font-bold  text-white-500">
            <h5>WHY CHOOSE LENS</h5>
          </div>
          <div className="text-center text-2xl font-bold  mt-4">
            <h2>AI-driven solutions backed </h2>
            <h2>by science</h2>
          </div>
          <div className="text-center mt-10">
            <p className="max-w-lg font-bold text-gray-500">
              Every piece of AI technology shipped from LENS is thoroughly
              benchmarked via rigorous evaluations. With a global network of
              experts and academicians, we guarantee the most accurate and
              robust solutions in the market.
            </p>
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex flex-col mr-20">
              <div className="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  State-of-the-art solutions
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Fast & Efficient
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  No extra computation fee
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  No licensing fee
                </label>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox5"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox5"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Lifetime support & upgrades
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox5"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox5"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Plug-and-Play
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox5"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox5"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  24x7 Progress Monitoring
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox5"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox5"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Incremental Updates
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="4divcontainer" id="section-6">
        <div className="fourcard flex justify-between gap-5 p-8">
          <div className="card flex flex-col justify-between items-center bg-gray-800 hover:bg-green-200 p-6 rounded-lg transition duration-300 ease-in-out hover:border-2 border-green-500">
            <div className="text-center">
              <h2 className="text-white font-bold">Exclusive Rights</h2>
            </div>
            <div className="my-4">
              <Image
                width={100}
                height={100}
                src=""
                alt="Image"
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-500 font-bold">
                Our mission is to make an impact in empowering human society
                with AI. Hence, all Intellectual Property Rights belongs to you.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-between items-center bg-gray-800 hover:bg-blue-200 p-6 rounded-lg transition duration-300 ease-in-out hover:border-2 border-blue-500">
            <div className="text-center">
              <h2 className="text-white font-bold">Exclusive Rights</h2>
            </div>
            <div className="my-4">
              <Image
                width={100}
                height={100}
                src=""
                alt="Image"
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-500 font-bold">
                Our mission is to make an impact in empowering human society
                with AI. Hence, all Intellectual Property Rights belongs to you.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-between items-center bg-gray-800 hover:bg-red-200 p-6 rounded-lg transition duration-300 ease-in-out hover:border-2 border-red-500">
            <div className="text-center">
              <h2 className="text-white font-bold">Exclusive Rights</h2>
            </div>
            <div className="my-4">
              <Image
                width={100}
                height={100}
                src=""
                alt="Image"
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-500 font-bold">
                Our mission is to make an impact in empowering human society
                with AI. Hence, all Intellectual Property Rights belongs to you.
              </p>
            </div>
          </div>

          <div className="card flex flex-col justify-between items-center bg-gray-800 hover:bg-orange-200 p-6 rounded-lg transition duration-300 ease-in-out hover:border-2 border-orange-500 ">
            <div className="text-center">
              <h2 className="text-white font-bold">Exclusive Rights</h2>
            </div>
            <div className="my-4">
              <Image
                width={100}
                height={100}
                src=""
                alt="Image"
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-500 font-bold">
                Our mission is to make an impact in empowering human society
                with AI. Hence, all Intellectual Property Rights belongs to you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ourvision mt-20" id="section-7">
        <div className="flex flex-col items-center">
          <div className="font-bold text-lg mt-2">OUR VISION</div>
          <div className="font-bold text-3xl mt-2">AI for Social Good</div>
          <div className="max-w-3xl font-bold text-gray-500 mt-2 items-center">
            <p className="text-wrap">
              Explainable AI (XAI) is an emerging subject of machine learning
              research that refers to strategies that try to provide
              transparency to typically opaque AI models and their predictions.
            </p>
          </div>
        </div>

        <div className="stepper flex justify-center mt-20 ">
          {" "}
          <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <svg
                  className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <h3 className="font-bold text-xl text-white leading-tight">
                Diversity & Fairness
              </h3>
              <p className="text-sm">
                When training our AI models, <br />
                we consider ethical and social implications <br />
                of algorithm-based decision making.
                <br /> Our solutions use high-quality
                <br /> and fairly-represented data sets <br />
                to eliminate human cognitive biases.
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg
                  className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <h3 className="font-bold text-xl text-white leading-tight">
                Regulatory Compliance
              </h3>
              <p className="text-sm">
                Working with clients globally, <br />
                LENS acknowledges applicable data <br />
                privacy regulations, such as the GDPR,
                <br /> HIPAA and others, in all our <br />
                solutions handling sensitive data. <br />
                We also ensure our algorithms allow <br />
                for the required level of decision-making <br />
                transparency and explainability.
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg
                  className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <h3 className="font-bold text-xl text-white leading-tight">
                Code of Ethics
              </h3>
              <p className="text-sm ">
                LENS believes in a just, <br />
                non-violent world of equality and fairness.
                <br /> We prize democratic values, <br />
                civil liberties and open and informed debate.
                <br /> When used to further these values,
                <br /> algorithm-based decision-making models
                <br /> can continue to make the world a safer,
                <br /> better place for everyone.
              </p>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg
                  className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                </svg>
              </span>
              <h3 className="font-bold text-xl text-white leading-tight">
                Confirmation
              </h3>
              <p className="text-sm">Step details here</p>
            </li>
          </ol>
        </div>
      </section>
      <Blogs />

      <section className="weworkclient" id="section-8"></section>
      <section className="Bynumber" id="section-8"></section>
      <section className="gettoknow" id="section-8"></section>
      <section className="getintouch" id="section-8"></section>
      <footer className="footer">
        <footer className="bg-white rounded-lg shadow  dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-8 md:flex md:items-center md:justify-between ">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <a href="#" className="hover:underline">
                2023 LENS,
              </a>
              Inc. All rights reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 font-bold text-white"
                >
                  Code of conduct
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 font-bold text-white"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 font-bold text-white "
                >
                  Goals
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </footer>
    </main>
  );
}
