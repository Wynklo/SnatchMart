import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Problem from "./components/Problem.jsx";
import Idea from "./components/Idea.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Features from "./components/Features.jsx";
import Earn from "./components/Earn.jsx";
import UnderTheHood from "./components/UnderTheHood.jsx";
import Faq from "./components/Faq.jsx";
import WaitlistCta from "./components/WaitlistCta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.1, anchors: { offset: -72 } });
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Problem />
        <Idea />
        <HowItWorks />
        <Features />
        <Earn />
        <UnderTheHood />
        <Faq />
        <WaitlistCta />
      </main>
      <Footer />
    </MotionConfig>
  );
}
