import React from 'react'

function About() {
  return (
    <section className="w-full bg-neutral-950 text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image Section */}
        <div className="relative w-full flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/about.png"
              alt="About"
              className="w-full max-w-md object-cover"
            />

            {/* Play Button Overlay */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-105 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-7 h-7 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>

        {/* Right Content Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
            FAILURE IS THE CONDIMENT THAT <br />
            GIVES <span className="text-green-500">SUCCESS</span>
          </h2>

          <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-xl">
            Spend more time focusing on the important aspects of your business.
            Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an
            advanced virtual HR company, we are offering online HR systems that
            can be customized depending on your business needs.
          </p>

          <div>
            <button className="inline-flex cursor-pointer items-center gap-3 bg-green-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-green-400 transition">
              Download CV
              <span className="bg-white w-8 h-8 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About