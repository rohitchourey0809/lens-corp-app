import Image from "next/image";

import navimage from "../../public/nav_logo.webp";

import Link from "next/link";
import About from "./about/page";

export default function Home() {
  return (
    <main>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
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
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
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
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="https://makemyweb.ai/"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  MakeMyWeb.
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Theme
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav>
        <header className="bg-gray-800 flex justify-around">
          <div className="container mx-auto flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  src={navimage}
                  alt="Logo"
                  className="h-15 text-white"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="https://makemyweb.ai/"
                className="text-white text-lg font-bold"
              >
                MakeMyWeb.
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300">
                Company
              </Link>
              <Link href="/blogs" className="text-white hover:text-gray-300">
                Blogs
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                Theme
              </Link>
            </div>
          </div>
        </header>
      </nav> */}
      {/* Section 1: Gradient Background with Button */}
      <section className="py-20 relative border border-gray-400" id="section-1">
        {/* Background image with button */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-blue-500 p-10 flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-2xl mb-2">
              We are at the forefront of AI
            </h2>
            <h3 className="text-white text-2xl mb-2">
              From Conserving Wildlife to Automatically Generating Caricatures
            </h3>
            <h5 className="text-white mb-4">– We Do It All</h5>
            <a
              href="/about"
              className="bg-red-500 text-white py-2 px-4 rounded-lg text-lg font-bold hover:bg-red-600"
            >
              Lear More
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
                <div className="service-item bg-gray-200 m-4 text-white rounded-lg overflow-hidden transition duration-300  hover:border-4 hover:bg-green-200 hover:border-green-500">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 class="text-2xl font-bold tracking-tight text-green-500">
                      01
                    </h2>
                    <h2 class="text-2xl font-bold tracking-tight text-green-500">
                      Customers also purchased
                    </h2>
                    <h2 class="text-2xl font-bold tracking-tight text-gray-900">
                      Academia-backed & In-house researched State-of-the-Art
                      Face, Fingerprint, and Iris Recognition SDKs. Enable
                      real-time automated Biometric applications on edge devices
                      even without an active internet connection.
                    </h2>
                  </div>
                </div>
                <div className="service-item bg-gray-200 m-4 text-white rounded-lg overflow-hidden transition duration-300  hover:border-4 hover:bg-blue-200 hover:border-blue-500">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 class="text-2xl font-bold tracking-tight text-blue-500">
                      02
                    </h2>
                    <h2 class="text-2xl font-bold tracking-tight text-blue-500">
                      Image Analysis
                    </h2>
                    <h2 class="text-2xl font-bold tracking-tight text-gray-900">
                      Outsource the overly complex image analysis work to our
                      intelligent machines that adaptively learn, so you can
                      focus on making the best decisions for your business.
                    </h2>
                  </div>
                </div>
              </div>

              {/* Second pair */}
              <div className="flex justify-center p-8">
                <div className="service-item bg-gray-200 m-4 text-white rounded-lg overflow-hidden transition duration-300  hover:border-4 hover:bg-pink-200 hover:border-pink-500">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 class="text-2xl font-bold tracking-tight text-pink-500">
                      03
                    </h2>
                    <h2 class="text-2xl font-bold tracking-tight text-pink-500">
                      Cross-Media Translation
                    </h2>
                    <h2 class="text-2xl font-bold tracking-tight text-gray-900">
                      Will something like Siri or Alexa enhance your business?
                      We can deliver text-to-speech, text-to-image,
                      speech-to-text, speech-to-image, speech-to-image,
                      image-to-text, and image-to-speech solutions for maximum
                      convenience.
                    </h2>
                  </div>
                </div>
                <div
                  className="service-item bg-gray-200 m-4 text-white rounded-lg overflow-hidden transition duration-300
                 hover:border-4 hover:bg-orange-200 hover:border-orange-500"
                >
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 class="text-2xl font-bold tracking-tight text-orange-500">
                      04
                    </h2>
                    <h2 class="text-2xl font-bold tracking-tight text-orange-500">
                      3D Modelling and Design
                    </h2>
                    <h2 class="text-2xl font-bold tracking-tight text-gray-900">
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
          <div class="flex justify-between mt-10">
            <div class="flex flex-col mr-20">
              <div class="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox1"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox1"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  State-of-the-art solutions
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox1"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox1"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Fast & Efficient
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox1"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox1"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  No extra computation fee
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox1"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox1"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  No licensing fee
                </label>
              </div>
              {/* <!-- Repeat this structure for the remaining checkboxes on the left side --> */}
            </div>

            <div class="flex flex-col">
              <div class="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox5"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox5"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Lifetime support & upgrades
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox5"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox5"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Plug-and-Play
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox5"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox5"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  24x7 Progress Monitoring
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  checked
                  id="checked-checkbox5"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox5"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Incremental Updates
                </label>
              </div>
              {/* <!-- Repeat this structure for the remaining checkboxes on the right side --> */}
            </div>
          </div>
        </div>
      </section>

      <section className="4divcontainer" id="section-6"></section>
      <section className="ourvision" id="section-7"></section>
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

      <section className="weworkclient" id="section-8"></section>
      <section className="Bynumber" id="section-8"></section>
      <section className="gettoknow" id="section-8"></section>
      <section className="getintouch" id="section-8"></section>
      <footer className="footer">
        <footer class="bg-white rounded-lg shadow  dark:bg-gray-800">
          <div class="w-full mx-auto max-w-screen-xl p-8 md:flex md:items-center md:justify-between ">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <a href="#" class="hover:underline">
                2023 LENS,
              </a>
              Inc. All rights reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a
                  href="#"
                  class="hover:underline me-4 md:me-6 font-bold text-white"
                >
                  Code of conduct
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:underline me-4 md:me-6 font-bold text-white"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:underline me-4 md:me-6 font-bold text-white "
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
