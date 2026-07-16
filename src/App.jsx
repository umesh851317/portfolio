import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;