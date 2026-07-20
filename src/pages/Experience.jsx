import React from "react";
import { CalendarDays, Award, Code2 } from "lucide-react";

const experience = [
  {
    id: 1,
    role: "Full Stack Web Development",
    company: "Self Learning & Personal Projects",
    duration: "Jan 2026 – Present",
    description: [
      "Completed a 6-month Full Stack Web Development certification.",
      "Built multiple MERN stack projects using React, Node.js, Express.js, and MongoDB.",
      "Developed responsive user interfaces with Tailwind CSS.",
      "Designed RESTful APIs and integrated MongoDB databases.",
      "Used Git & GitHub for version control and collaboration.",
      "Deployed applications using Vercel and Render.",
    ],
  },
];

const certifications = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Certification Program",
    icon: Award,
  },

];

const Experience = () => {
  return (
    <section className="max-w-7xl mx-auto py-5">
      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-5xl font-bold text-white">
          Professional Journey
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl">
          My learning journey through full-stack development, hands-on
          projects, and certifications.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Side */}
        <div className="lg:col-span-2">
          {experience.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-gray-800 bg-gray-900 p-8 hover:border-pink-500 transition-all duration-300"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-3xl font-semibold text-white">
                    {item.role}
                  </h3>

                  <p className="text-pink-400 mt-2">
                    {item.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <CalendarDays size={18} />
                  {item.duration}
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {item.description.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-gray-300 leading-7"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-pink-500"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert) => {
                const Icon = cert.icon;

                return (
                  <div
                    key={cert.id}
                    className="flex items-center gap-4 rounded-xl border border-gray-800 p-4 hover:border-pink-500 transition"
                  >
                    <div className="h-12 w-12 rounded-full bg-linear-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                      <Icon size={22} className="text-white" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        {cert.title}
                      </h4>

                      <p className="text-sm text-gray-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-xl bg-linear-to-r from-pink-500 to-purple-500 p-5 text-white">
              <h4 className="font-semibold text-lg">
                Project Highlights
              </h4>

              <p className="mt-2 text-sm">
                ✔ 4+ Full Stack Projects
                <br />
                ✔ MERN Stack
                <br />
                ✔ REST APIs
                <br />
                ✔ Responsive UI
                <br />
                ✔ Deployment on Vercel & Render
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;