import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "../content.js";
import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import "./Faq.css";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="container faq-inner">
        <Reveal className="section-head faq-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2">
            Questions,
            <br />
            <span className="serif">answered.</span>
          </h2>
        </Reveal>

        <Reveal className="faq-list" delay={0.05}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <div key={f.q} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <span className="faq-icon">
                      <Icon name="plus" size={18} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className="faq-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
