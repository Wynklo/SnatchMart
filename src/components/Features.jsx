import { motion } from "framer-motion";
import { features } from "../content.js";
import Reveal, { stagger, rise } from "./Reveal.jsx";
import Icon from "./Icon.jsx";
import "./Features.css";

function FeedVisual() {
  const items = [
    ["Boat Airdopes 141", "\u20B9999", "60%", "#dbe7ff", "earbuds"],
    ["Levi\u2019s 511 Slim", "\u20B91,439", "52%", "#fff4b8", "jeans"],
    ["Philips Trimmer", "\u20B91,149", "38%", "#e4f3e9", "trimmer"],
    ["Mi Power Bank", "\u20B91,099", "45%", "#f7e3dc", "powerbank"],
  ];
  return (
    <div className="fv-feed">
      {items.map(([name, price, off, tint, img]) => (
        <div key={name} className="fv-deal">
          <span className="fv-deal-img" style={{ background: tint }}>
            <img src={`/products/${img}.jpg`} alt="" width="240" height="240" loading="lazy" />
            <span className="fv-off">-{off}</span>
          </span>
          <b>{name}</b>
          <span>{price}</span>
        </div>
      ))}
    </div>
  );
}

function HistoryVisual() {
  const pts = [38, 30, 34, 22, 28, 18, 40, 44, 36, 52, 60, 78];
  const w = 300;
  const h = 150;
  const step = w / (pts.length - 1);
  const line = pts.map((p, i) => `${i * step},${h - p * 1.6}`).join(" ");
  const last = pts.length - 1;
  return (
    <div className="fv-history">
      <div className="fv-history-head">
        <span>
          <small>Today</small>
          <b>{"\u20B9"}22,990</b>
        </span>
        <span className="fv-pill fv-pill--green">Lowest in 90 days</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="fv-history-chart">
        <defs>
          <linearGradient id="fvHistFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2874f0" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#2874f0" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((y) => (
          <line key={y} x1="0" x2={w} y1={h * y} y2={h * y} className="fv-grid" vectorEffect="non-scaling-stroke" />
        ))}
        <polygon points={`0,${h} ${line} ${w},${h}`} fill="url(#fvHistFill)" />
        <motion.polyline
          points={line}
          fill="none"
          stroke="#2874f0"
          strokeWidth="2.4"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <circle cx={last * step} cy={h - pts[last] * 1.6} r="4.5" fill="#2874f0" />
      </svg>
      <div className="fv-history-axis">
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
      </div>
      <div className="fv-history-note">
        <span>
          <small>&ldquo;Sale&rdquo; price last week</small>
          <s>{"\u20B9"}27,490</s>
        </span>
        <span>
          <small>Usual price</small>
          <b>{"\u20B9"}26,990</b>
        </span>
      </div>
    </div>
  );
}

function BudgetVisual() {
  return (
    <div className="fv-budget">
      <div className="fv-budget-row">
        <span>Gadgets</span>
        <b>{"\u20B9"}4,200 / 5,000</b>
      </div>
      <div className="fv-bar">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "84%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <div className="fv-budget-row">
        <span>Fashion</span>
        <b>{"\u20B9"}1,300 / 4,000</b>
      </div>
      <div className="fv-bar fv-bar--blue">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "33%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

function AlertsVisual() {
  return (
    <div className="fv-alerts">
      <div className="fv-alert">
        <span className="fv-alert-dot" />
        <span>
          <b>Price drop</b> Puma Smash v2 is now {"\u20B9"}1,749
        </span>
      </div>
      <div className="fv-alert fv-alert--back">
        <span className="fv-alert-dot fv-alert-dot--blue" />
        <span>
          <b>Target hit</b> Kindle Paperwhite
        </span>
      </div>
    </div>
  );
}

function CouponsVisual() {
  return (
    <div className="fv-coupon">
      <span>
        <small>Extra 10% off</small>
        <b>SNATCH10</b>
      </span>
      <span className="fv-coupon-copy">Copy</span>
    </div>
  );
}

function HelpVisual() {
  return (
    <div className="fv-chat">
      <span className="fv-bubble fv-bubble--me">How do I set a budget?</span>
      <span className="fv-bubble">Profile &rarr; Budgets &rarr; tap &ldquo;New budget&rdquo;. Want me to take you there?</span>
    </div>
  );
}

const visuals = {
  feed: FeedVisual,
  history: HistoryVisual,
  budget: BudgetVisual,
  alerts: AlertsVisual,
  coupons: CouponsVisual,
  help: HelpVisual,
};

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The solution</span>
          <h2 className="h2">
            Everything a smart shopper does, <span className="serif">done for you.</span>
          </h2>
        </Reveal>

        <motion.div
          className="bento"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        >
          {features.map((f) => {
            const Visual = visuals[f.id];
            return (
              <motion.article key={f.id} className={`bento-card bento-card--${f.id}`} variants={rise}>
                <div className="bento-copy">
                  <span className="bento-eyebrow">{f.eyebrow}</span>
                  <h3 className="h3">{f.title}</h3>
                  <p>{f.body}</p>
                </div>
                <div className="bento-visual" aria-hidden="true">
                  <Visual />
                </div>
              </motion.article>
            );
          })}
          <motion.a href="#earn" className="bento-card bento-card--more" variants={rise}>
            <span className="bento-eyebrow">Make Link</span>
            <h3 className="h3">And you get paid for sharing.</h3>
            <span className="bento-more-arrow">
              <Icon name="arrowUpRight" size={22} />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
