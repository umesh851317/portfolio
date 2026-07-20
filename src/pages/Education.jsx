import React from "react";
import { education } from "../utils/education";
import { uiColors } from "../utils/uiColors";
import {
       School,
       CalendarDays,
       Award,
       MapPin,
} from "lucide-react";

const Education = () => {
       return (
              <section className="max-w-6xl mx-auto py-10 px-6 max-md:px-2 max-md:py-4 ">
                     {/* Heading */}
                     <div className="text-start mb-12 max-md:mb-8">
                            <h2 className="text-5xl font-bold text-white">
                                   Education
                            </h2>

                            <p className="text-gray-400 mt-4 text-lg">
                                   My academic journey and learning milestones.
                            </p>
                     </div>

                     <div className="relative">
                            {/* Timeline */}
                            <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-700"></div>

                            <div className="space-y-12">
                                   {education.map((item) => {
                                          const Icon = item.icon;

                                          return (
                                                 <div key={item.id} className="relative flex gap-8 max-md:gap-5 group">
                                                        {/* Timeline Dot */}
                                                        <div className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-pink-400 bg-gray-950 transition-all duration-300 group-hover:scale-110`}>
                                                               <Icon size={18} className={`text-pink-400`} />
                                                        </div>

                                                        {/* Card */}
                                                        <div className="flex-1 rounded-2xl border border-gray-800 bg-gray-900 p-6 max-md:p-4 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10">
                                                               <h3 className="text-2xl font-semibold text-white">
                                                                      {item.degree}
                                                               </h3>

                                                               <p className={`mt-2 ${uiColors.textGradiant} font-medium`}>
                                                                      {item.branch}
                                                               </p>

                                                               <div className="mt-5 flex flex-col gap-3 text-gray-400">

                                                                      <div className="flex items-center gap-3">
                                                                             <School size={18} />
                                                                             <span>{item.college}</span>
                                                                      </div>

                                                                      <div className="flex items-center gap-3">
                                                                             <MapPin size={18} />
                                                                             <span>{item.location}</span>
                                                                      </div>

                                                                      <div className="flex items-center gap-3">
                                                                             <CalendarDays size={18} />
                                                                             <span>{item.duration}</span>
                                                                      </div>

                                                                      {item.score && (
                                                                             <div className="flex items-center gap-3">
                                                                                    <Award size={18} />
                                                                                    <span>{item.score}</span>
                                                                             </div>
                                                                      )}
                                                               </div>
                                                        </div>
                                                 </div>
                                          );
                                   })}
                            </div>
                     </div>
              </section>
       );
};

export default Education;