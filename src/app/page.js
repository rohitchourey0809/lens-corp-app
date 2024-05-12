import Image from "next/image";

import navimage from "../../public/nav_logo.webp";
import green from "../../public/green.webp";
import blue from "../../public/blue.webp";
import red from "../../public/red.webp";
import orange from "../../public/yellow.webp";

import Link from "next/link";
import About from "./about/page";
import Blogs from "./blogs/page";
import FaqlensCorp from "./components/FaqlensCorp";

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

      <section className="relative">
        <div className="overflow-hidden">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source
              src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
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
              className="bg-transparent hover:bg-white hover:px-7 text-black py-2 px-4 rounded-lg text-lg font-bold border-2 border-white block w-full md:inline-block md:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <About />
      <section id="section-3 m-8">
        <div className="servicediv flex flex-col justify-center items-center">
          <div>
            <p className="font-bold mb-4">SERVICES</p>
          </div>
          <div >
            <h2 className="text-3xl font-bold mb-4 max-w-md text-center">
              We provide Artificial Intelligence Services
            </h2>
          </div>

          <div className="servicelist">
            <div className="servicecontainer">
              {/* First pair */}
              <div className="flex justify-center p-8 flex-col sm:flex-row">
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
              <div className="flex justify-center p-8 flex-col sm:flex-row">
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
                <div className="service-item bg-gray-800 m-4 text-white rounded-lg overflow-hidden transition duration-300 hover:border-2 hover:bg-orange-200 hover:border-orange-500">
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
                  htmlFor="checked-checkbox1"
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
                  htmlFor="checked-checkbox1"
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
                  htmlFor="checked-checkbox1"
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
                  htmlFor="checked-checkbox1"
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
                  htmlFor="checked-checkbox5"
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
                  htmlFor="checked-checkbox5"
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
                  htmlFor="checked-checkbox5"
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
                  htmlFor="checked-checkbox5"
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
        <div className="fourcard flex flex-col sm:flex-row justify-center gap-5 p-8">
          <div className="card-container flex flex-wrap justify-center p-8 flex-col sm:flex-col">
            <div className="card bg-gray-800 hover:bg-green-200 p-6 rounded-lg transition duration-300 ease-in-out hover:border-2 border-green-500">
              <div className="text-center">
                <h2 className="text-white font-bold">Exclusive Rights</h2>
              </div>
              <div className="my-4">
                <Image
                  width={100}
                  height={100}
                  src={green}
                  alt="Image"
                  className="w-32 h-32 rounded-full mx-auto"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-500 font-bold">
                  Our mission is to make an impact in empowering human society
                  with AI. Hence, all Intellectual Property Rights belong to
                  you.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container flex flex-wrap justify-center p-8 flex-col sm:flex-col">
            <div className="card bg-gray-800 hover:bg-blue-200 p-6 rounded-lg transition duration-300 ease-in-out hover:border-2 border-blue-500">
              <div className="text-center">
                <h2 className="text-white font-bold">Exclusive Rights</h2>
              </div>
              <div className="my-4">
                <Image
                  width={100}
                  height={100}
                  src={blue}
                  alt="Image"
                  className="w-32 h-32 rounded-full mx-auto"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-500 font-bold">
                  Our mission is to make an impact in empowering human society
                  with AI. Hence, all Intellectual Property Rights belong to
                  you.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container flex flex-wrap justify-center p-8 flex-col sm:flex-col">
            {" "}
            <div className="card bg-gray-800 hover:bg-red-200 p-6 rounded-lg transition duration-300 ease-in-out hover:border-2 border-red-500">
              <div className="text-center">
                <h2 className="text-white font-bold">Exclusive Rights</h2>
              </div>
              <div className="my-4">
                <Image
                  width={100}
                  height={100}
                  src={red}
                  alt="Image"
                  className="w-32 h-32 rounded-full mx-auto"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-500 font-bold">
                  Our mission is to make an impact in empowering human society
                  with AI. Hence, all Intellectual Property Rights belong to
                  you.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container flex flex-wrap justify-center p-8 flex-col sm:flex-col">
            {" "}
            <div className="card bg-gray-800 hover:bg-orange-200 p-6 rounded-lg transition duration-300 ease-in-out hover:border-2 border-orange-500">
              <div className="text-center">
                <h2 className="text-white font-bold">Exclusive Rights</h2>
              </div>
              <div className="my-4">
                <Image
                  width={100}
                  height={100}
                  src={orange}
                  alt="Image"
                  className="w-32 h-32 rounded-full mx-auto"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-500 font-bold">
                  Our mission is to make an impact in empowering human society
                  with AI. Hence, all Intellectual Property Rights belong to
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourvision" id="section-7">
        <div className="flex flex-col items-center">
          <div className="font-bold text-lg mt-2">OUR VISION</div>
          <div className="font-bold text-3xl mt-2">AI for Social Good</div>
          <div className="max-w-3xl mx-auto font-bold text-gray-500 text-center">
            Explainable AI (XAI) is an emerging subject of machine learning
            research that refers to strategies that try to provide transparency
            to typically opaque AI models and their predictions.
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="relative wrap overflow-hidden">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800  w-12 h-12 rounded-full shadow-xl border-4 border-gray-300 ">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="w-9 h-8  text-gray-500 dark:text-gray-400 "
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.32 13.01c.96.02 1.85.5 2.45 1.34A3.961 3.961 0 0 0 12 16c1.29 0 2.5-.62 3.23-1.66c.6-.84 1.49-1.32 2.45-1.34c-.72-1.22-3.6-2-5.68-2c-2.07 0-4.96.78-5.68 2.01M4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3s1.34 3 3 3m16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3m-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3"
                    />
                    <path
                      fill="currentColor"
                      d="M21 14h-3.27c-.77 0-1.35.45-1.68.92c-.04.06-1.36 2.08-4.05 2.08c-1.43 0-3.03-.64-4.05-2.08c-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2"
                    />
                  </svg>
                </h1>
              </div>
              <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ">
                <h3 className="mb-3 font-bold text-white  text-xl">
                  Diversity & Fairness
                </h3>
                <p className="text-gray-700 leading-tight">
                  When training our AI models, we consider ethical and social
                  implications of algorithm-based decision making. Our solutions
                  use high-quality and fairly-represented data sets to eliminate
                  human cognitive biases.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800  w-12 h-12 rounded-full border-4 border-gray-300">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="w-10 h-8 text-gray-500 dark:text-gray-400"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M20 18v6.5c0 1.9 1.1 3.7 2.9 4.5l2.1 1l2.1-1c1.7-.8 2.9-2.6 2.9-4.5V18zm8 6.5c0 1.2-.7 2.2-1.7 2.7l-1.3.6l-1.3-.6c-1-.5-1.7-1.6-1.7-2.7V20h6zM16 20c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4h-2c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M16 25c-5 0-9-4-9-9s4-9 9-9s9 4 9 9h-2c0-3.9-3.1-7-7-7s-7 3.1-7 7s3.1 7 7 7z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M16 30C8.3 30 2 23.7 2 16S8.3 2 16 2s14 6.3 14 14h-2c0-6.6-5.4-12-12-12S4 9.4 4 16s5.4 12 12 12z"
                    ></path>
                  </svg>
                </h1>
              </div>
              <div className="order-1 rounded-lg  w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-whitetext-xl">
                  Regulatory Compliance
                </h3>
                <p className="text-gray-700 leading-tight">
                  Working with clients globally, LENS acknowledges applicable
                  data privacy regulations, such as the GDPR, HIPAA and others,
                  in all our solutions handling sensitive data. We also ensure
                  our algorithms allow for the required level of decision-making
                  transparency and explainability.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800  w-12 h-12 rounded-full border-4 shadow-xl border-gray-300">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="w-10 h-8 text-gray-500 dark:text-gray-400"
                    width="40"
                    height="32"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="currentColor"
                      d="M39.5 34.813c0 6.213 5.037 11.25 11.25 11.25S62 41.025 62 34.813h-1.675L53.02 16.216a3.725 3.725 0 0 0 1.48-2.966c0-2.07-1.68-3.75-3.75-3.75c-.548 0-1.064.124-1.533.334a161.58 161.58 0 0 1-2.289-.911c-2.868-1.176-6.205-2.53-9.68-3.31A5.624 5.624 0 0 0 32 2a5.624 5.624 0 0 0-5.248 3.614c-3.476.779-6.813 2.133-9.681 3.31c-.653.268-1.572.63-2.289.911A3.72 3.72 0 0 0 13.25 9.5a3.75 3.75 0 0 0-3.75 3.75a3.73 3.73 0 0 0 1.479 2.966L3.674 34.813H2c0 6.213 5.037 11.25 11.25 11.25s11.25-5.037 11.25-11.25h-1.675L15.52 16.217A3.732 3.732 0 0 0 17 13.25c0-.087-.021-.169-.026-.255l.935-.379c2.631-1.081 5.678-2.324 8.805-3.083a5.628 5.628 0 0 0 3.412 3.391v5.732h-1.15v18.032h-1.25v8.829C21.523 46.668 17 50.252 17 54.5h-1.875v3.75h-3.75V62h41.25v-3.75h-3.75V54.5H47c0-4.248-4.525-7.832-10.725-8.983v-8.829h-1.25V18.655h-1.15v-5.732a5.629 5.629 0 0 0 3.411-3.391c3.128.759 6.173 2.002 8.806 3.083c.32.132.622.253.934.38c-.006.086-.026.168-.026.255a3.73 3.73 0 0 0 1.479 2.966l-7.305 18.596zM13.25 11.375a1.876 1.876 0 1 1-.001 3.751a1.876 1.876 0 0 1 .001-3.751m7.639 23.438H5.608l7.022-17.875c.203.034.408.062.62.062s.416-.028.618-.063zM50.75 11.375a1.876 1.876 0 1 1-.001 3.751a1.876 1.876 0 0 1 .001-3.751m-.619 5.563a3.7 3.7 0 0 0 .619.062c.211 0 .416-.028.618-.063l7.021 17.875H43.107z"
                    ></path>
                  </svg>
                </h1>
              </div>
              <div className="order-1   w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">
                  Code of Ethics
                </h3>
                <p className="text-gray-700 leading-tight">
                  LENS believes in a just, non-violent world of equality and
                  fairness. We prize democratic values, civil liberties and open
                  and informed debate. When used to further these values,
                  algorithm-based decision-making models can continue to make
                  the world a safer, better place for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blogs />

      <section className="weworkclient" id="section-8"></section>
      <section className="Bynumber" id="section-8"></section>
      <section className="gettoknow" id="section-8">
        <FaqlensCorp />
      </section>
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
