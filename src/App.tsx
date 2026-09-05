import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/animations/ScrollProgress";
import CaretSprite from "./components/ui/CaretSprite";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-bg text-text transition-colors duration-300">
        <ScrollProgress />
        <CaretSprite />
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
