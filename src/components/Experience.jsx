import React from 'react'

function Experience() {
  return (
    <section className="w-full bg-neutral-950 text-white py-14 px-4 md:px-8">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Title Section */}
        <div className="space-y-3">
          <span className="text-green-500 text-sm font-semibold tracking-wider uppercase">
            My Experience
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
            Experience and <span className="text-green-500">Skill</span>
          </h2>
        </div>

        {/* Right Description with Green Line */}
        <div className="relative pl-6">
          <span className="absolute left-0 top-1 w-1 h-12 bg-green-500 rounded-full"></span>

          <p className="text-neutral-300 text-sm md:text-base xl:text-lg leading-relaxed max-w-2xl">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione
            Reprehenderit, Error Qui Enim Sit Ex Provident
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience
