import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    img: "project1.png",
  },
  {
    img: "project2.png",
  },
  {
    img: "project3.png",
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-6">

          {/* Left Title Block */}
          <div>
            <p className="text-green-500 font-semibold tracking-wider">
              WORKING PROCESS
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mt-2">
              Lastet Working <span className="text-green-500">Project</span>
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

        
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={project.img}
                alt="Project"
                className="rounded-lg w-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;