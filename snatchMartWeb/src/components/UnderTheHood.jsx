import { motion } from "framer-motion";
import { underTheHood } from "../content.js";
import Reveal, { stagger, rise } from "./Reveal.jsx";
import "./UnderTheHood.css";

export default function UnderTheHood() {
  return (
    <section className="section hood" aria-labelledby="hood-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Under the hood</span>
          <h2 id="hood-title" className="h2">
            Built to be <span className="serif">honest</span> about prices.
          </h2>
        </Reveal>

        <motion.ul
          className="hood-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        >
          {underTheHood.map((item) => (
            <motion.li key={item.label} className="hood-item" variants={rise}>
              <span className="hood-stat">{item.stat}</span>
              <h3 className="h3">{item.label}</h3>
              <p>{item.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
