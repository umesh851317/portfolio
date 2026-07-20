import { uiColors } from "../utils/uiColors";
const Home = () => {
       return (
              <section className="border-b-4 flex w-full min-h-[80vh] items-center">
                     <div className=" max-lg:mx-2 my-8 grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
                            {/* Left */}
                            <div className=" flex flex-col gap-5 max-lg:order-2">
                                   <p className={`text-lg font-medium tracking-widest uppercase ${uiColors.textGradiant}`}>
                                          Full Stack MERN Developer
                                   </p>

                                   <div className="flex flex-col gap-5">
                                          <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-5xl">
                                                 Hi, I'm{" "}
                                                 <span className={`text-5xl text-transparent max-lg:leading-5 ${uiColors.textGradiant}`}>
                                                        Umesh Patidar
                                                 </span>
                                          </h1>

                                          <h2 className="max-w-2xl text-2xl font-medium leading-10 text-gray-300 md:text-3xl">
                                                 I build modern, scalable, and high-performance web applications
                                                 using the MERN Stack.
                                          </h2>
                                   </div>

                                   <p className="max-w-xl text-lg leading-8 text-gray-400">
                                          Passionate about creating responsive user interfaces and powerful
                                          backend systems with React, Node.js, Express.js, MongoDB, and
                                          Tailwind CSS. I enjoy turning ideas into fast, reliable, and
                                          user-friendly digital products.
                                   </p>

                                   {/* Tech Stack */}
                                   <div className="flex flex-wrap gap-3">
                                          {[
                                                 "React",
                                                 "Node.js",
                                                 "Express",
                                                 "MongoDB",
                                                 "Tailwind CSS",
                                          ].map((tech) => (
                                                 <span
                                                        key={tech}
                                                        className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300"
                                                 >
                                                        {tech}
                                                 </span>
                                          ))}
                                   </div>

                                   {/* Buttons */}
                                   <div className="flex  gap-2 pt-4">
                                          <button className={`rounded-xl px-5 py-3 max-lg:py-1 font-semibold transition ${uiColors.bgGradiant}`}>
                                                 View Projects
                                          </button>

                                          <button className="rounded-xl border border-gray-500 px-5 py-3 max-lg:py-1 font-semibold transition hover:border-white hover:bg-white hover:text-black">
                                                 Download Resume
                                          </button>
                                   </div>
                            </div>

                            {/* Right */}
                            <div className=" flex justify-center lg:justify-center">
                                   <div className="flex h-80 w-80 items-center justify-center rounded-full border border-gray-700 bg-neutral-900">
                                          <span className="text-lg text-gray-500">
                                                 Your Photo / Illustration
                                          </span>
                                   </div>
                            </div>
                     </div>
              </section>
       );
};
export default Home
