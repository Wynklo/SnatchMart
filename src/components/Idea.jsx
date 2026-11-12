import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { idea } from "../content.js";
import Reveal from "./Reveal.jsx";
import "./Idea.css";

function Word({ children, progress, range, accent }) {
  const reduce = useReducedMotion();
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span className={accent ? "idea-accent" : undefined} style={{ opacity: reduce ? 1 : opacity }}>
      {children}{" "}
    </motion.span>
  );
}

export default function Idea() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const n = idea.statement.length;

  return (
    <section className="section idea" ref={ref} aria-labelledby="idea-title">
      <div className="container idea-inner">
        <Reveal>
          <span className="eyebrow">The idea</span>
        </Reveal>
        <h2 id="idea-title" className="idea-statement">
          {idea.statement.map((chunk, i) => (
            <Word
              key={chunk}
              progress={scrollYProgress}
              range={[i / n, (i + 1) / n]}
              accent={i === 1 || i === 3}
            >
              {chunk}
            </Word>
          ))}
        </h2>
        <Reveal as="p" className="lead idea-body" delay={0.1}>
          {idea.body}
        </Reveal>
      </div>
    </section>
  );
}
