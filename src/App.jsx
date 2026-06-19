import CanvasParticles from "./components/CanvasParticles";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Certifications from "./sections/Certifications";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen bg-bg-darker text-gray-100 overflow-x-hidden selection:bg-purple-600/30 selection:text-cyan-300">
      {/* Interactive Background Particles */}
      <CanvasParticles />

      {/* Cursor Radial Gradient Tracking Glow */}
      <CursorGlow />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
