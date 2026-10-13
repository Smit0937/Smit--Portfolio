import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import StatStrip from "./components/StatStrip.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

const SECTION_IDS = ["about", "skills", "projects", "education", "resume", "contact"];

export default function App() {
  const [theme, setTheme] = useState(null); // null = follow system, "light", "dark"
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [active, setActive] = useState("projects");

  useEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
    else document.documentElement.removeAttribute("data-theme");
  }, [theme]);

  function cycleTheme() {
    setTheme((t) => (t === null ? "light" : t === "light" ? "dark" : null));
  }

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
      setShowTop(scrolled > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header active={active} theme={theme} onToggleTheme={cycleTheme} progress={progress} />
      <main id="top">
        <Hero />
        <StatStrip />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop show={showTop} />
    </>
  );
}
