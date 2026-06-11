import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/animations/ScrollProgress";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import CloudDevOps from "./components/sections/CloudDevOps";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <CloudDevOps />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
