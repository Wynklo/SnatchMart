import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "../content.js";
import Logo from "./Logo.jsx";
import Icon from "./Icon.jsx";
import "./Nav.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <Logo />

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#waitlist" className="btn btn--sm nav-cta">
            Join waitlist
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="nav-sheet"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Mobile">
              {nav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                  <Icon name="arrow" size={18} />
                </a>
              ))}
            </nav>
            <a href="#waitlist" className="btn btn--yellow" onClick={() => setOpen(false)}>
              Join the waitlist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
