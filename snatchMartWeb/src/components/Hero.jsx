import { motion } from "framer-motion";
import { hero } from "../content.js";
import PhoneMockup from "./PhoneMockup.jsx";
import WaitlistForm from "./WaitlistForm.jsx";
import Icon from "./Icon.jsx";
import "./Hero.css";

const ease = [0.16, 1, 0.3, 1];

const line = {
  hidden: { y: "105%" },
  show: (i) => ({ y: "0%", transition: { duration: 1.1, ease, delay: 0.1 + i * 0.09 } }),
};

const fade = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

export default function Hero() {
  const lines = [
    <>Snatch the</>,
    <>
      <span className="serif">right</span> price,
    </>,
    <>every time.</>,
  ];

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.span className="eyebrow" {...fade(0)}>
            {hero.eyebrow}
          </motion.span>

          <h1 className="display hero-title">
            {lines.map((content, i) => (
              <span className="hero-line" key={i}>
                <motion.span custom={i} variants={line} initial="hidden" animate="show">
                  {content}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className="lead" {...fade(0.45)}>
            {hero.lead}
          </motion.p>

          <motion.div className="hero-form" {...fade(0.6)}>
            <WaitlistForm id="hero" buttonLabel="Get early access" />
            <p className="hero-proof">{hero.proof}</p>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div
            className="hero-phone"
            initial={{ opacity: 0, y: 60, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 1.3, ease, delay: 0.25 }}
          >
            <div className="hero-float">
              <PhoneMockup />
            </div>
          </motion.div>

          <motion.div className="hero-card hero-card--alert" {...fade(0.9)} aria-hidden="true">
            <span className="hero-card-icon hero-card-icon--blue">
              <Icon name="bell" size={18} />
            </span>
            <span>
              <small>Price drop alert</small>
              <b>Sony XM5 hit your target</b>
            </span>
          </motion.div>

          <motion.div className="hero-card hero-card--earn" {...fade(1.05)} aria-hidden="true">
            <span className="hero-card-icon hero-card-icon--yellow">
              <Icon name="link" size={18} />
            </span>
            <span>
              <small>Earned from your link</small>
              <b>+{"\u20B9"}184.50</b>
            </span>
          </motion.div>

          <motion.div className="hero-card hero-card--budget" {...fade(1.2)} aria-hidden="true">
            <svg viewBox="0 0 36 36" className="hero-ring">
              <circle cx="18" cy="18" r="15" />
              <circle cx="18" cy="18" r="15" pathLength="100" strokeDasharray="68 100" />
            </svg>
            <span>
              <small>November budget</small>
              <b>{"\u20B9"}6,800 / {"\u20B9"}10k</b>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
