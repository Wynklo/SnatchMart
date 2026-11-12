# SnatchMart launch site

Launch / waitlist website for the SnatchMart app. React + Vite with plain CSS, Framer Motion and Lenis.

```
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

- All copy lives in `src/content.js`.
- Design tokens live in `src/styles/tokens.css`; each section has its own component + CSS file in `src/components/`.

## Waitlist

Set `VITE_WAITLIST_URL` (e.g. in `.env.local`) to an endpoint that accepts `POST { email, source }` as JSON
(Formspree, Google Apps Script, or a future `/api/v1/waitlist` on the SnatchMart backend).
Without it, emails are stored in the browser's `localStorage` under `snatchmart-waitlist`, which is only useful for local testing.
