import { motion } from "framer-motion";
import { problems } from "../content.js";
import Reveal, { stagger, rise } from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import "./Problem.css";

export default function Problem() {
  return (
    <section className="section problem" id="problem">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The problem</span>
          <h2 className="h2">
            Online shopping got easy.
            <br />
            Getting a <span className="serif">fair</span> deal didn&rsquo;t.
          </h2>
        </Reveal>

        <motion.ul
          className="problem-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        >
          {problems.map((p, i) => (
            <motion.li key={p.title} className="problem-card" variants={rise}>
              <div className="problem-top">
                <span className="problem-icon">
                  <Icon name={p.icon} size={22} />
                </span>
                <span className="problem-n" aria-hidden="true">{`0${i + 1}`}</span>
              </div>
              <h3 className="h3">{p.title}</h3>
              <p>{p.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
