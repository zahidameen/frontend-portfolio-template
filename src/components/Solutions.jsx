import React from "react";

const solutions = [
  {
    title: "Design Principales",
    text: "Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant To Answer Questions",
    icon: "solution1.svg",
  },
  {
    title: "Unique Values",
    text: "Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant To Answer Questions",
    icon: "solution2.svg",
  },
  {
    title: "Style Components",
    text: "Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant To Answer Questions",
    icon: "solution3.svg",
  },
];

const Solutions = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center lg:text-left mb-16">
          <p className="text-green-500 font-semibold tracking-wider">
            WHAT WE DO
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-3">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
              Services and Solutions
            </h2>

            <div className="relative pl-6">
              <span className="absolute left-0 top-1 w-1 h-12 bg-green-500 rounded-full"></span>

              <p className="text-neutral-300 text-sm md:text-base xl:text-lg leading-relaxed max-w-2xl">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione
                Reprehenderit, Error Qui Enim Sit Ex Provident
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <div
              key={i}
              className={`p-10 text-center rounded-lg transition-all duration-300
              ${
                item.highlight
                  ? "bg-green-500"
                  : "bg-neutral-900 hover:bg-neutral-800"
              }`}
            >
              {/* Icon (replace with your SVG or component) */}
              <div className="flex justify-center mb-6">
                <img src={item.icon} alt="icon" className="w-16 h-16" />
              </div>

              <h3
                className={`text-xl font-extrabold uppercase mb-4 ${
                  item.highlight ? "text-white" : "text-green-400"
                }`}
              >
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;