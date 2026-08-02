import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/animations/ScrollProgress";
import InteractiveParticleBackground from "./components/ui/InteractiveParticleBackground";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text relative">
      {/* Global Interactive Background Canvas (Tracks Mouse Cursor) */}
      <InteractiveParticleBackground />

      <ScrollProgress />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
