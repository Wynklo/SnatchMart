import { nav } from "../content.js";
import Logo from "./Logo.jsx";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>Snatch the right price, every time. Made in India for smarter shoppers.</p>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <h3>Explore</h3>
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer-col">
            <h3>Contact</h3>
            <a href="mailto:hello@snatchmart.in">hello@snatchmart.in</a>
            <a href="#waitlist">Join the waitlist</a>
          </div>
        </div>

        <div className="footer-word" aria-hidden="true">
          Snatch<span>Mart</span>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} SnatchMart. All rights reserved.</span>
          <span>
            SnatchMart earns affiliate commission on qualifying purchases at no extra cost to you.
          </span>
        </div>
      </div>
    </footer>
  );
}
