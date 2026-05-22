import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import SectionDivider from "./components/SectionDivider";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#080810] min-h-screen relative">
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Education />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Contact />
          <WhatsAppButton />
        </div>
      </div>
    </LanguageProvider>
  );
}
