import React, { useState } from "react";

import img1 from "./assets/image.png";
import img2 from "./assets/first rounded img75B2lTH3wkJtDXN0rX8hSPADB4.avif";
import img3 from "./assets/second rounded imgDV0YAY7XvcTB9ArkdzoGERypzck.svg";
import img4 from "./assets/hero7Je61fRcHvOmKjBn29OU8V7hsA.svg";
import img5 from "./assets/star imageoBSaxPOWCCAGTwlq1TnvsXotBpU.svg";
import img6 from "./assets/below star download.svg";
import img7 from "./assets/below star download.svg";
import img8 from "./assets/below star download.svg";
import img9 from "./assets/below star download.svg";
import img10 from "./assets/below star download.svg";
import img12 from "./assets/first aid box 1NxZ4WnSfomVl281aUAVqeAQ.svg";
import img13 from "./assets/cols1 B4Rc39GW0ZOgFFOeSapzyp5tF3o.avif";
import img15 from "./assets/sniple two .PNG";
import img16 from "./assets/snip three Capture.PNG";
import img17 from "./assets/snip four .PNG";
import img18 from "./assets/two doctors u5KDmsEaFhyj2ja56OHXOHoA424.avif";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-900 text-white"
          : "min-h-screen bg-white text-black"
      }
    >

      {/* ================= NAVBAR + HERO ================= */}

      <div className="relative min-h-screen bg-[url('./assets/pZWEUfZK7goYm8x4NLlezXMQ1FY.avif')] bg-cover bg-center">

        {/* Navbar */}
        <nav className="flex flex-col lg:flex-row justify-between items-center gap-6 px-6 sm:px-10 lg:px-20 py-6">

          <img src={img1} alt="Logo" className="w-32 sm:w-40" />

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white text-base sm:text-lg">
            <a href="#" className="hover:text-blue-300">Home</a>
            <a href="#" className="hover:text-blue-300">About</a>
            <a href="#" className="hover:text-blue-300">Department</a>
            <a href="#" className="hover:text-blue-300">Pricing</a>
            <a href="#" className="hover:text-blue-300">Blog</a>
          </div>

          <button className="relative overflow-hidden bg-blue-400 px-5 py-2 group rounded-2xl font-semibold text-lg shadow-md">
            <span className="relative z-10">Click Me ↗</span>
            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </button>

        </nav>


        {/* Hero */}
        <div className="pt-24 sm:pt-32 lg:pt-40 px-6 sm:px-12 lg:px-32">

          <div className="flex items-center gap-4">

            <div className="flex">
              <img src={img2} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
              <img src={img3} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full -ml-2" />
              <img src={img4} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full -ml-2" />
            </div>

            <p className="text-white text-sm sm:text-base">
              4.9/5 rating
              <br />
              2k Client in the World
            </p>

          </div>


          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold mt-8">
            Exceptional care
            <br />
            Better health
          </h1>

          <p className="text-white mt-6 text-sm sm:text-base lg:text-lg">
            Experience trusted healthcare delivered by skilled physicians,
            <br className="hidden sm:block" />
            advanced diagnostic technology.
          </p>

          <button className="relative overflow-hidden bg-blue-400 px-5 py-3 group rounded-2xl font-semibold text-base sm:text-lg mt-8">
            <span className="relative z-10">
              Book an Appointment ↗
            </span>

            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </button>

        </div>


        {/* Stars */}
        <div className="absolute bottom-10 left-6 sm:left-12 lg:left-32">

          <img src={img5} alt="" className="w-32 sm:w-40" />

          <div className="flex mt-3">
            <img src={img6} alt="" className="w-7 sm:w-9" />
            <img src={img7} alt="" className="w-7 sm:w-9" />
            <img src={img8} alt="" className="w-7 sm:w-9" />
            <img src={img9} alt="" className="w-7 sm:w-9" />
            <img src={img10} alt="" className="w-7 sm:w-9" />
          </div>

        </div>

      </div>


      {/* ================= ABOUT ================= */}

      <section className="py-16 px-6">

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 text-center lg:text-left">

          <button className="bg-blue-400 text-white px-5 py-2 rounded-lg">
            About us
          </button>

          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            We are committed to delivering
            <br className="hidden sm:block" />
            exceptional medical care through skilled
            <br className="hidden sm:block" />
            professionals and modern facilities.
          </p>

        </div>


        <button className="relative overflow-hidden bg-white px-5 py-3 group rounded-2xl font-semibold text-lg shadow-md block mx-auto mt-10 border">

          <span className="relative z-10 group-hover:text-white">
            About US ↗
          </span>

          <span className="absolute inset-0 bg-blue-400 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

        </button>

      </section>


      {/* ================= STATISTICS ================= */}

      <section className="py-10 px-6">

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">

          <div className="flex gap-2 justify-center">

            <img src={img3} alt="" className="w-40 sm:w-60 lg:w-72 rounded-2xl" />

            <img src={img2} alt="" className="w-32 sm:w-48 lg:w-60 rounded-2xl" />

          </div>


          <div className="text-center lg:text-left">

            <h1 className="text-4xl font-bold">
              200<span className="text-blue-500">+</span>
            </h1>

            <p className="text-2xl">Experienced doctors</p>

            <hr className="my-5" />

            <h1 className="text-4xl font-bold">
              98<span className="text-blue-500">%</span>
            </h1>

            <p className="text-2xl">Patient Satisfaction</p>

            <hr className="my-5" />

            <h1 className="text-4xl font-bold">
              24/7
            </h1>

            <p className="text-2xl">Emergency care</p>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="py-16 px-6">

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">

          {/* Left */}
          <div className="text-center lg:text-left">

            <button className="bg-blue-400 text-white px-5 py-2 rounded-lg">
              Our services
            </button>

            <p className="text-2xl sm:text-3xl font-bold mt-5">
              Excellence in every
              <br />
              medical service
            </p>

            <button className="bg-blue-400 text-white px-5 py-3 rounded-2xl font-semibold mt-6">
              Book an Appointment ↗
            </button>

          </div>


          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl">

            {[img13, img4, img2, img3].map((image, index) => (

              <div
                key={index}
                className="p-5 rounded-2xl shadow-xl border bg-white"
              >

                <div className="flex justify-between items-center">

                  <img src={img12} alt="" className="w-12" />

                  <img
                    src={image}
                    alt=""
                    className="w-20 sm:w-28 h-20 object-contain"
                  />

                </div>

                <h2 className="text-xl font-bold mt-5 text-black">
                  Emergency Care
                </h2>

                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Receive immediate medical attention 24/7
                  from our experienced emergency department.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= EXCELLENCE ================= */}

      <section className="py-16 px-6">

        <button className="bg-blue-400 text-white px-5 py-2 rounded-2xl block mx-auto">
          About US ↗
        </button>

        <h1 className="font-bold text-center text-3xl sm:text-4xl lg:text-5xl mt-6">
          Excellence in every
          <br />
          medical service
        </h1>


        {/* Four Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">

          {[img12, img15, img17, img16].map((image, index) => (

            <div
              key={index}
              className="flex justify-between items-center gap-4 border rounded-2xl p-5 shadow-md"
            >

              <p className="text-sm sm:text-base">
                <span className="font-bold text-lg">
                  Experienced specialists
                </span>

                <br />

                Receive expert care from highly qualified
                doctors and healthcare professionals.
              </p>

              <img
                src={image}
                alt=""
                className="w-16 sm:w-24 object-contain"
              />

            </div>

          ))}

        </div>


        {/* Big Image */}

        <div className="flex justify-center px-2 sm:px-6 mt-12">

          <img
            src={img18}
            alt=""
            className="w-full max-w-6xl shadow-2xl rounded-2xl"
          />

        </div>

      </section>


      {/* ================= APPOINTMENT ================= */}

      <section className="bg-black text-white py-12 sm:py-16 px-6">

        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
          Make an appointment today for a free dental checkup.
        </h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-10">

          <div>
            <h5 className="mb-2">Full name:</h5>

            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-500 rounded-lg p-3 w-full bg-transparent"
            />
          </div>


          <div>
            <h5 className="mb-2">Phone:</h5>

            <input
              type="text"
              placeholder="+93898908093"
              className="border border-gray-500 rounded-lg p-3 w-full bg-transparent"
            />
          </div>


          <div>
            <h5 className="mb-2">Department:</h5>

            <input
              type="text"
              placeholder="Enter department"
              className="border border-gray-500 rounded-lg p-3 w-full bg-transparent"
            />
          </div>


          <div>
            <h5 className="mb-2">Last name:</h5>

            <input
              type="text"
              placeholder="Enter your last name"
              className="border border-gray-500 rounded-lg p-3 w-full bg-transparent"
            />
          </div>

        </div>

      </section>

  



 {/* end of fourth section  */}
<section>
  <div className="min-h-screen bg-gray-100 py-16 px-6">
  <h1 className="text-4xl font-bold text-center mb-12">
    Choose Your Plan
  </h1>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Basic Card */}
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <h2 className="text-2xl font-bold">Basic</h2>

      <p className="text-gray-500 mt-2">
        For beginners
      </p>

      <h3 className="text-4xl font-bold mt-6">
        $9<span className="text-lg text-gray-500">/month</span>
      </h3>

      <ul className="text-left mt-8 space-y-4">
        <li>✓ 1 Website</li>
        <li>✓ 5 GB Storage</li>
        <li>✓ Basic Support</li>
        <li>✓ Free SSL</li>
      </ul>

      <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>


    {/* Pro Card */}
    <div className="bg-blue-600 text-white rounded-2xl shadow-2xl p-8 text-center scale-105">
      <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-bold">
        Most Popular
      </span>

      <h2 className="text-2xl font-bold mt-5">
        Pro
      </h2>

      <p className="text-blue-100 mt-2">
        For growing businesses
      </p>

      <h3 className="text-4xl font-bold mt-6">
        $19<span className="text-lg text-blue-100">/month</span>
      </h3>

      <ul className="text-left mt-8 space-y-4">
        <li>✓ 5 Websites</li>
        <li>✓ 50 GB Storage</li>
        <li>✓ Priority Support</li>
        <li>✓ Free SSL</li>
        <li>✓ Advanced Analytics</li>
      </ul>

      <button className="w-full mt-8 bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition font-bold">
        Get Started
      </button>
    </div>


    {/* Premium Card */}
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <h2 className="text-2xl font-bold">
        Premium
      </h2>

      <p className="text-gray-500 mt-2">
        For large businesses
      </p>

      <h3 className="text-4xl font-bold mt-6">
        $39<span className="text-lg text-gray-500">/month</span>
      </h3>

      <ul className="text-left mt-8 space-y-4">
        <li>✓ Unlimited Websites</li>
        <li>✓ 200 GB Storage</li>
        <li>✓ 24/7 Support</li>
        <li>✓ Free SSL</li>
        <li>✓ Advanced Analytics</li>
        <li>✓ Custom Domain</li>
      </ul>

      <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>

  </div>
</div>

</section>

{/* fifth section  */}


<section>
  <div className="py-16 px-6 bg-gray-50">
  <h2 className="text-4xl font-bold text-center">
    Meet Our Experienced Doctors
  </h2>

  <p className="text-center text-gray-500 mt-3 mb-10">
    Our professional doctors are here to provide the best care for you.
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={img2} className="w-full h-72 object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold">Dr. John Smith</h3>
        <p className="text-blue-600">Cardiologist</p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={img3} className="w-full h-72 object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold">Dr. Sarah Williams</h3>
        <p className="text-blue-600">Pediatrician</p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={img18} className="w-full h-72 object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold">Dr. Michael Brown</h3>
        <p className="text-blue-600">Surgeon</p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={img4} className="w-full h-72 object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold">Dr. Emily Davis</h3>
        <p className="text-blue-600">Dermatologist</p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={img2} className="w-full h-72 object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold">Dr. Robert Wilson</h3>
        <p className="text-blue-600">Neurologist</p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={img3} className="w-full h-72 object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold">Dr. Olivia Taylor</h3>
        <p className="text-blue-600">General Physician</p>
      </div>
    </div>

  </div>
</div>
</section>
<footer>
  <h1 className="text-3xl text-center">Created By Yousuf Mosazai </h1>
  <h2 className="text-2xl text-center">@copyright</h2>
</footer>



  </div>
  )
}

export default App

