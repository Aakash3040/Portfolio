import { useEffect, useState } from "react";
import Topbar from "./components/Topbar";
import MobileNav from "./components/MobileNav";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import useActiveSection from "./hooks/useActiveSection";
import Hero from "./sections/Hero";
import ImpactCounters from "./sections/ImpactCounters";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";

function useTheme() {
  const KEY = "aakash_portfolio_theme";
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem(KEY) === "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isLight) {
      root.dataset.theme = "light";
      localStorage.setItem(KEY, "light");
    } else {
      delete root.dataset.theme;
      localStorage.removeItem(KEY);
    }
  }, [isLight]);

  return { isLight, toggle: () => setIsLight((v) => !v) };
}

export default function App() {
  const { isLight, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <div className="app-wrapper">
      <ScrollProgress />
      <Topbar
        isLight={isLight}
        onToggleTheme={toggle}
        onOpenMenu={() => setMenuOpen(true)}
        activeSection={activeSection}
      />
      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />

      <main>
        <Hero />
        <ImpactCounters />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
