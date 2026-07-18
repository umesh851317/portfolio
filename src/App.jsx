import "./index.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./Ui/animation/Loader";

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Skills = lazy(() => import("./pages/Skills"))

// import Skills from "./pages/Skills";
// import About from "./pages/About";
// import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <main className="border-b min-h-150 pt-22 max-lg:pt-16  text-amber-50 mx-auto  max-w-7xl px-6 max-lg:px-2 max-lg:py-16">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;