import { merchants } from "../content.js";
import "./Marquee.css";

export default function Marquee() {
  const row = [...merchants, ...merchants];
  return (
    <section className="marquee" aria-label="Stores SnatchMart tracks">
      <p className="marquee-label">Tracking prices across the stores you already love</p>
      <div className="marquee-track">
        <ul className="marquee-row">
          {row.map((name, i) => (
            <li key={i} aria-hidden={i >= merchants.length}>
              {name}
              <span className="marquee-dot" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
