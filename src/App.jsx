import "./App.css";
import Navbar from "./components/Navbar";
import SkillsSphere from "./components/SkillsSphere";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <SkillsSphere /> */}
      <Experience />
    </>
  );
}
