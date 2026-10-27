import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
