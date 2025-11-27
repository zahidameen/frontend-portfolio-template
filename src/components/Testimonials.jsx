import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    name: "John Parker",
    location: "NYC, USA",
    image: "testimonial.jpg", // replace with your image
    quote:
      "Gilroy is a great and super-professional service provider, which brought new technologies, new methodology, and a fresh perspective to our project.",
  },
  {
    name: "Johnson Smith",
    location: "London, UK",
    image: "testimonial.jpg",
    quote:
      "Working with this team was an amazing experience. They exceeded all expectations and delivered exceptional results with great communication.",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const t = testimonials[index];

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-14">
          <div>
            <p className="text-green-500 tracking-wider font-semibold">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mt-2">
              Happy Clients To <span className="text-green-500">Says</span>
            </h2>
          </div>

          <div className="flex flex-col lg:items-end gap-4">
            <div className="relative pl-6">
              <span className="absolute left-0 top-1 w-1 h-12 bg-green-500 rounded-full"></span>

              <p className="text-neutral-300 text-sm md:text-base xl:text-lg leading-relaxed max-w-2xl">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione
                Reprehenderit, Error Qui Enim Sit Ex Provident
              </p>
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={previous}
                className="p-3 border border-green-500 rounded-md hover:bg-green-600 transition"
              >
                <FiArrowLeft />
              </button>

              <button
                onClick={next}
                className="p-3 border border-green-500 rounded-md hover:bg-green-600 transition"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col md:flex-row items-start gap-6">

          {/* Quote Icon */}
          <div className="text-green-500 text-6xl font-bold select-none">“</div>

          {/* Content Right */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={t.image}
                alt="user"
                className="w-20 h-20 rounded-full object-cover border-2 border-green-500"
              />
              <div>
                <p className="font-bold text-lg">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.location}</p>
              </div>
            </div>

            <p className="text-xl md:text-2xl font-bold leading-normal max-w-3xl">
              {t.quote}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonial;