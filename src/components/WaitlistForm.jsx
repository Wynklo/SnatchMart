import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon.jsx";
import "./WaitlistForm.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const STORAGE_KEY = "snatchmart-waitlist";
const ENDPOINT = import.meta.env.VITE_WAITLIST_URL;

async function submitEmail(email) {
  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email, source: "launch-site" }),
    });
    if (!res.ok) throw new Error("Request failed");
    return;
  }
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  if (!saved.includes(email)) saved.push(email);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
}

export default function WaitlistForm({ id, tone = "light", buttonLabel = "Join waitlist" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const value = email.trim().toLowerCase();
    if (!EMAIL_RE.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      await submitEmail(value);
      setStatus("done");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  };

  const inputId = `${id}-email`;
  const errorId = `${id}-error`;

  return (
    <div className={`waitlist waitlist--${tone}`}>
      <AnimatePresence mode="wait" initial={false}>
        {status === "done" ? (
          <motion.div
            key="done"
            className="waitlist-done"
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <span className="waitlist-check">
              <Icon name="check" size={18} strokeWidth={2.4} />
            </span>
            <span>
              <b>You&rsquo;re on the list.</b> We&rsquo;ll email you the day SnatchMart goes live.
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className="waitlist-form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <label htmlFor={inputId} className="sr-only">
              Email address
            </label>
            <input
              id={inputId}
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? errorId : undefined}
            />
            <button type="submit" className="btn btn--yellow" disabled={status === "loading"}>
              {status === "loading" ? "Joining\u2026" : buttonLabel}
              <Icon name="arrow" size={18} className="btn-arrow" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      {error && (
        <p id={errorId} className="waitlist-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
