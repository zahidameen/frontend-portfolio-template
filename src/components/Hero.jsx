function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT TEXT CONTENT */}
        <div className="flex flex-col justify-center text-white space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-green-500">IMAGINATION</span> IS MORE <br />
            IMPORTANT THAN <br />
            KNOWLEDGE
          </h1>

          <p className="text-gray-200 max-w-md text-lg">
            Together we the people achieve more than any single person
            could ever do alone.
          </p>

          <button className="bg-green-500 text-white cursor-pointer font-semibold px-6 py-3 rounded-md flex items-center space-x-3 hover:bg-green-600 transition w-fit">
            <span>GETTING STARTED</span>
            <span className="bg-white text-green-500 font-bold px-2 py-1 rounded">→</span>
          </button>
        </div>

        {/* RIGHT PERSON IMAGE */}
        <div className="flex justify-center lg:justify-end items-end">
          <img
            src="/hero-person.png"
            alt="hero person"
            className="w-[300px] sm:w-[380px] lg:w-[480px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default HeroSection