import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex justify-center items-center px-4 py-16">
      <div className="w-full max-w-3xl text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-300 text-sm md:text-base mb-10">
          Sample text. Click to select the text box. Click again or double click to start editing the text.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-6">
          
          {/* Email + Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full px-4 py-3 bg-[#333] border border-white text-white 
                         placeholder-gray-300 focus:outline-none focus:border-green-500"
            />

            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full px-4 py-3 bg-[#333] border border-white text-white 
                         placeholder-gray-300 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Date */}
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            className="w-full px-4 py-3 bg-[#333] border border-white text-white 
                       placeholder-gray-300 focus:outline-none focus:border-green-500"
          />

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Enter your message"
            className="w-full px-4 py-3 bg-[#333] border border-white text-white 
                       placeholder-gray-300 focus:outline-none focus:border-green-500 resize-none"
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-3 cursor-pointer border border-white text-white 
                         hover:bg-white hover:text-black transition font-medium"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;