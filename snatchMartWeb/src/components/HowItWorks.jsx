import { motion } from "framer-motion";
import { steps } from "../content.js";
import Reveal, { stagger, rise } from "./Reveal.jsx";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="container how-inner">
        <Reveal className="section-head how-head">
          <span className="eyebrow">How it works</span>
          <h2 className="h2">
            Four steps from
            <br />
            <span className="serif">&ldquo;I want this&rdquo;</span> to
            <br />
            <span className="mark">best price.</span>
          </h2>
          <p className="lead">
            No spreadsheets, no refreshing ten tabs. SnatchMart does the watching so you only act when it&rsquo;s
            worth it.
          </p>
        </Reveal>

        <motion.ol
          className="how-steps"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        >
          {steps.map((s) => (
            <motion.li key={s.n} className="how-step" variants={rise}>
              <span className="how-n">{s.n}</span>
              <div>
                <h3 className="h3">{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
