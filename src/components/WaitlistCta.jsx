import Reveal from "./Reveal.jsx";
import WaitlistForm from "./WaitlistForm.jsx";
import Icon from "./Icon.jsx";
import "./WaitlistCta.css";

const stores = [
  { icon: "play", top: "Coming soon on", name: "Google Play" },
  { icon: "apple", top: "Coming soon on", name: "App Store" },
];

export default function WaitlistCta() {
  return (
    <section className="cta" id="waitlist" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-card">
          <Reveal className="cta-copy">
            <h2 id="cta-title" className="h2">
              Stop overpaying.
              <br />
              Start <span className="serif">snatching.</span>
            </h2>
            <p className="cta-lead">
              Join the waitlist for early access, launch-day perks and a head start on earning with Make Link.
            </p>
          </Reveal>
          <Reveal className="cta-actions" delay={0.1}>
            <WaitlistForm id="cta" tone="dark" buttonLabel="Join waitlist" />
            <ul className="cta-stores" aria-label="App stores">
              {stores.map((s) => (
                <li key={s.name} className="store-badge">
                  <Icon name={s.icon} size={22} />
                  <span>
                    <small>{s.top}</small>
                    <b>{s.name}</b>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
