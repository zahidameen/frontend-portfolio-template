import React from 'react'

const experiences = [
  {
    year: "2011 – 2014",
    role: "UI Designer",
    company: "Google Corporation.",
  },
  {
    year: "2011 – 2014",
    role: "UI Designer",
    company: "Apple Product Co.",
  },
  {
    year: "2011 – 2014",
    role: "UI Designer",
    company: "Lead Designer Musicsoft",
  },
  {
    year: "2011 – 2014",
    role: "UI Designer",
    company: "Lbruno Mars As.",
  },
];

function ExperienceCards() {
  return (
    <section className="w-full bg-neutral-950 py-4 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 hover:border-green-500 transition"
            >
              <p className="text-sm text-neutral-400 font-medium mb-3">
                {item.year} ({item.role})
              </p>

              <h3 className="text-lg font-bold text-green-500 mb-4 uppercase">
                {item.company}
              </h3>

              <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
                <li>All You Need To Do Your Best</li>
                <li>Work Together In One Package</li>
                <li>Works Seamlessly Computer</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceCards