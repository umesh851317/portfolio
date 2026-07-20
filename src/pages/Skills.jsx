import { ArrowBigRight, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
const techStack = ["Frontend", "Backend", "Database", "Tools", "Deployment"];

const workStack = {
       Frontend: [
              "React",
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Redux",
       ],
       Backend: [
              "Node.js",
              "Express.js",
              "REST APIs",
       ],
       Database: [
              "MongoDB",
              "Mongoose",
       ],
       Tools: [
              "Git",
              "GitHub",
              "Postman",
              "VS Code",
       ],
       Deployment: [
              "Vercel",
              "Render",
       ],
};


const Skills = () => {
       const [hoveredCategory, setHoveredCategory] = useState(null);
       return (
              <div className=" w-full h-full my-8 border-b-4 pb-8">
                     <div className='  text-4xl font-bold italic leading-10'>
                            My Skills....
                     </div>
                     <div className=' mt-10 grid grid-cols-1 gap-12 md:mt-12 md:grid-cols-[1fr_2fr] font-serif'>
                            <div className='flex flex-col leading-12'>
                                   <p className='text-2xl font-bold  '>Building modern, scalable web applications.</p>
                                   <p className='text-lg font-extralight italic '>Design. Develop. Deploy.</p>
                            </div>
                            <div className='font-medium text-lg text-gray-300'>
                                   I specialize in developing responsive and user-friendly full-stack web applications using the MERN stack. From designing intuitive interfaces with React and Tailwind CSS to building secure backend APIs with Node.js, Express.js, and MongoDB, I enjoy turning ideas into practical solutions.
                            </div>
                     </div>
                     <div className=' mt-10 grid grid-cols-1 gap-12  max-md:gap-4 md:mt-12 md:grid-cols-[1fr_2fr] font-serif'>
                            <div className='flex gap-4 items-start text-2xl'>
                                   <p className='font-bold'>skills</p>
                                   <ArrowRight size={35} className='' />
                            </div>
                            <div className='font-medium text-lg text-gray-300 grid grid-cols-5 gap-6 max-md:gap-4 max-md:flex max-md:flex-wrap'>
                                   {techStack.map((item) => (
                                          <span
                                                 key={item}
                                                 onMouseEnter={() => setHoveredCategory(item)}
                                                 onMouseLeave={() => setHoveredCategory(null)}
                                                 className="px-3 py-2 rounded-2xl text-center bg-slate-800 border border-slate-700
               hover:bg-cyan-500 hover:text-white cursor-pointer transition"
                                          >
                                                 {item}
                                          </span>
                                   ))}
                            </div>
                     </div>
                     <div className=' mt-6 max-md:mt-10 grid grid-cols-1 gap-12  max-md:gap-4 md:mt-12 md:grid-cols-[1fr_2fr] font-serif'>
                            <div className='flex gap-4 items-start text-2xl'>
                                   <p className='font-bold'>Work stack</p>
                                   <ArrowRight size={35} className='' />
                            </div>
                            <div className="grid grid-cols-5 gap-4 max-md:gap-2 max-md:grid max-md:grid-cols-3">
                                   {Object.entries(workStack).flatMap(([category, skills]) =>
                                          skills.map((skill) => (
                                                 <span
                                                        key={skill}
                                                        className={`text-lg transition-all duration-300 ${hoveredCategory === category
                                                                      ? "underline decoration-cyan-400 decoration-2 text-cyan-400"
                                                                      : "text-gray-300"
                                                               }`}
                                                 >
                                                        {skill}
                                                 </span>
                                          ))
                                   )}
                            </div>
                     </div>
              </div>

       )
}

export default Skills
