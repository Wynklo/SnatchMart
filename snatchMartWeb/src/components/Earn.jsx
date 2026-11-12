import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { earn } from "../content.js";
import Reveal from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import "./Earn.css";

function LinkDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const [stage, setStage] = useState("idle");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setStage("converting"), 700);
    const t2 = setTimeout(() => setStage("done"), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [inView]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${earn.output}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="link-demo" ref={ref}>
      <div className="link-demo-bar">
        <span />
        <span />
        <span />
        <small>Make Link</small>
      </div>

      <label className="link-field">
        <small>Paste a product link</small>
        <span className="link-input">
          <Icon name="link" size={18} />
          <span className="link-url">{earn.input}</span>
        </span>
      </label>

      <div className={`link-convert ${stage !== "idle" ? "is-active" : ""}`}>
        {stage === "converting" ? "Creating your profit link\u2026" : "Make profit link"}
      </div>

      <AnimatePresence>
        {stage === "done" && (
          <motion.div
            className="link-result"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="link-result-head">
              <small>Your profit link</small>
              <span className="link-rate">Up to 8% back</span>
            </div>
            <div className="link-output">
              <b>{earn.output}</b>
              <button type="button" onClick={copy} className="link-copy" aria-live="polite">
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="link-share">
              {["WhatsApp", "Instagram", "Telegram", "X"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage === "done" && (
          <motion.div
            className="link-earned"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            <span className="link-earned-icon">{"\u20B9"}</span>
            <span>
              <small>Priya bought via your link</small>
              <b>+{"\u20B9"}71.92 to wallet</b>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Earn() {
  return (
    <section className="section earn theme-dark" id="earn">
      <div className="container earn-inner">
        <div className="earn-copy">
          <Reveal>
            <span className="eyebrow">{earn.eyebrow}</span>
          </Reveal>
          <Reveal as="h2" className="h2" delay={0.05}>
            {earn.title[0]}
            <br />
            <span className="serif earn-accent">{earn.title[1]}</span>
          </Reveal>
          <Reveal as="p" className="lead" delay={0.1}>
            {earn.body}
          </Reveal>
          <Reveal as="dl" className="earn-points" delay={0.15}>
            {earn.points.map((p) => (
              <div key={p.k}>
                <dt>
                  <Icon name="check" size={16} strokeWidth={2.4} />
                  {p.k}
                </dt>
                <dd>{p.v}</dd>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="earn-visual" delay={0.1}>
          <LinkDemo />
        </Reveal>
      </div>
    </section>
  );
}
