import React from "react";

const NewsletterFooter = () => {
  return (
    <footer className="w-full text-white py-20 px-4 bg-black">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Small Title */}
        <p className="text-green-400 tracking-widest text-sm font-semibold mb-3">
          NEWSLETTER
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold leading-snug mb-10">
          STAY UP TO DATE, SUBSCRIBE
          <br />
          TO THE FREE <span className="text-green-500">NEWSLETTER !</span>
        </h2>

        {/* Email Input + Button */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
          <input
            type="email"
            placeholder="Enter Your Email..."
            className="w-full md:w-96 px-4 py-3 rounded-lg bg-white/10 border border-gray-500 
                       text-white placeholder-gray-300 focus:outline-none 
                       focus:border-green-500 transition"
          />

          <button
            className="flex items-center cursor-pointer gap-2 bg-green-500 text-black font-semibold 
                       px-8 py-3 rounded-lg hover:bg-green-600 transition"
          >
            SUBSCRIBE <span className="text-xl">📩</span>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Footer Navigation */}
          <ul className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm md:text-base">
            <li>
              <a href="/" className="hover:text-green-500 transition">HOME</a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-500 transition">ABOUT</a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-500 transition">SERVICES</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-green-500 transition">PROJECTS</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-500 transition">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default NewsletterFooter;