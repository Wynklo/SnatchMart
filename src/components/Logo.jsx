export default function Logo({ className = "" }) {
  return (
    <a href="#top" className={`logo ${className}`} aria-label="SnatchMart home">
      <img src="/brand/mark.png" alt="" width="36" height="29" />
      <span>
        Snatch<b>Mart</b>
      </span>
    </a>
  );
}
