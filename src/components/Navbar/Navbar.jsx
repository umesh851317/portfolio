import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
       const [open, setOpen] = useState(false);

       return (
              <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black text-white">
                     <div className=" mx-auto flex max-w-7xl items-center justify-between px-6 py-4 max-lg:px-2 max-lg:py-2">
                            {/* Logo */}
                            <Link to="/" className="flex flex-col max-lg:gap-0"
                                   onClick={() => { open && setOpen(false)}}>
                                   <p className="text-xl font-bold max-lg:leading-6">Umesh Patidar</p>
                                   <p className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-lg text-transparent max-lg:leading-5">
                                          Portfolio
                                   </p>
                            </Link>

                            {/* Desktop Menu */}
                            <div className="hidden items-center gap-8 lg:flex">
                                   <Link to="/">Home</Link>
                                   <Link to="/Skills">Skills</Link>
                                   <Link to="/experience">Experience</Link>
                                   <Link to="/projects">Projects</Link>
                                   <Link to="/education">Education</Link>
                                   <Link to="/about">About</Link>

                                   <div className="rounded-xl bg-linear-to-r from-pink-500 to-purple-500 p-px">
                                          <Link
                                                 to="/contact"
                                                 className="block rounded-xl bg-black px-5 py-2"
                                          >
                                                 Contact Me
                                          </Link>
                                   </div>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                   className="lg:hidden"
                                   onClick={() => setOpen(!open)}
                            >
                                   {open ? <X size={28} /> : <Menu size={28} />}
                            </button>
                     </div>

                     {/* Mobile Menu */}
                     {open && (
                            <div className="flex flex-col gap-2 border-t border-gray-800 bg-black px-6 py-6 lg:hidden  max-lg:p-2">
                                   <Link to="/" onClick={() => setOpen(false)} >Home</Link>
                                   <Link to="/skills" onClick={() => setOpen(false)} >Skills</Link>
                                   <Link to="/experience" onClick={() => setOpen(false)} >Experience</Link>
                                   <Link to="/projects" onClick={() => setOpen(false)} >Projects</Link>
                                   <Link to="/education" onClick={() => setOpen(false)} >Education</Link>
                                   <Link to="/about" onClick={() => setOpen(false)}>About</Link>

                                   <div className="mt-2 rounded-xl bg-linear-to-r from-pink-500 to-purple-500 p-px">
                                          <Link
                                                 to="/contact"
                                                 className="block rounded-xl bg-black px-5 py-2 text-center"
                                                 onClick={() => setOpen(false)}
                                          >
                                                 Contact Me
                                          </Link>
                                   </div>
                            </div>
                     )}
              </nav>
       );
}