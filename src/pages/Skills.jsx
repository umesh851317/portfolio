import { ArrowBigRight, ArrowRight } from 'lucide-react'
import React from 'react'
let techStack = ["Frontend", "Backend", "Database", "Tools", "Deployment"];
let workStack = ["React", "JavaScript (ES6+)","TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "Git", "GitHub", "Postman", " VS Code", "Vercel", "Render"];

const Skills = () => {
       return (
              <div className=" w-full h-full">
                     <div className=' mt-5 text-4xl font-bold italic leading-10'>
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
                     <div className=' mt-10 grid grid-cols-1 gap-12 md:mt-12 md:grid-cols-[1fr_2fr] font-serif'>
                            <div className='flex gap-4 items-start text-2xl'>
                                   <p className='font-bold'>skills</p>
                                   <ArrowRight size={35} className='' />
                            </div>
                            <div className='font-medium text-lg text-gray-300 grid grid-cols-5 gap-6'>
                                   {techStack.map((item) => (
                                          <span
                                                 key={item}
                                                 className="px-3 py-2 text-center rounded-full bg-slate-800 border border-slate-700 text-gray-300 text-lg font-medium transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:-translate-y-1"
                                          >
                                                 {item}
                                          </span>
                                   ))}
                            </div>
                     </div>
                     <div className=' mt-6 grid grid-cols-1 gap-12 md:mt-12 md:grid-cols-[1fr_2fr] font-serif'>
                            <div className='flex gap-4 items-start text-2xl'>
                                   <p className='font-bold'>Work stack</p>
                                   <ArrowRight size={35} className='' />
                            </div>
                            <div className='font-medium text-lg text-gray-300 flex flex-wrap gap-6'>
                                   {
                                          workStack.map((item) => (
                                                 <span
                                                        key={item}
                                                        className="px-5 py-2 rounded-full bg-slate-800 border border-slate-700 text-gray-300 text-lg font-medium transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:-translate-y-1"
                                                 >
                                                        {item}
                                                 </span>
                                          ))}
                            </div>
                     </div>
              </div>

       )
}

export default Skills
