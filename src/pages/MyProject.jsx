import React from "react";
import { ExternalLink, GitBranchPlus } from "lucide-react";
import projects from '../utils/projects'

const MyProject = () => {
  return (
    <section className="max-w-7xl mx-auto py-4">
      {/* Heading */}
      <div className="text-start mb-16">
        <h2 className="text-5xl font-bold text-white mt-3">
          My Projects
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl ">
          I've built all project using the MERN stack and modern web
          technologies.
        </p>
      </div>

      <div className="space-y-10 ">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`border-b-4 pb-5 grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
          >
            {/* Project Image */}
            <div className="group overflow-hidden rounded-3xl border border-gray-800">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5 ">
              <h3 className="text-4xl font-bold text-white">
                {project.title}
              </h3>

              <p className="text-gray-400  leading-8">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 ">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full text-sm bg-gray-900 border border-gray-700 text-gray-300 hover:border-pink-500 hover:text-pink-400 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 text-white hover:border-pink-500 transition"
                >
                  <GitBranchPlus size={18} />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-700 transition"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProject


