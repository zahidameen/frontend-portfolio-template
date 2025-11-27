import React from 'react'

const skills = [
  { label: "Branding Design",value: 60 },
  { label: "UI & UX Design", value: 70 },
  { label: "Web Design", value: 30 },
  { label: "Illustration", value: 90 },
];

const Skills = () => {
  return (
    <section className="w-full bg-black text-white py-16 pt-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circular Progress */}
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center relative"
              style={{
                background: `conic-gradient(#00ff70 ${skill.value * 3.6}deg, #ffffff 0deg)`
              }}
            >
              <div className="absolute w-28 h-28 rounded-full bg-black flex items-center justify-center">
                <span className="text-3xl font-bold">
                  {skill.value}%
                </span>
              </div>
            </div>

            {/* Label */}
            <p className="text-center mt-4 font-semibold tracking-wide uppercase">
              {skill.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills
