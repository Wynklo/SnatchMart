import "./PhoneMockup.css";

const deals = [
  { name: "Noise Buds VS104", store: "Flipkart", price: "\u20B9899", off: "55%", tint: "#dbe7ff", img: "earbuds" },
  { name: "Puma Smash v2", store: "Amazon", price: "\u20B91,749", off: "50%", tint: "#fff4b8", img: "sneaker" },
  { name: "Prestige Kettle 1.5L", store: "Flipkart", price: "\u20B9649", off: "46%", tint: "#e4f3e9", img: "kettle" },
];

export default function PhoneMockup() {
  return (
    <div className="phone" role="img" aria-label="SnatchMart app home screen showing a price-tracked deal and a live deals feed">
      <div className="phone-screen" aria-hidden="true">
        <div className="phone-status">
          <span>9:41</span>
          <span className="phone-island" />
          <span className="phone-status-icons">
            <i />
            <i />
            <i />
          </span>
        </div>

        <div className="phone-head">
          <div>
            <small>Good evening</small>
            <strong>Ravi</strong>
          </div>
          <span className="phone-avatar">R</span>
        </div>

        <div className="phone-search">Search deals across stores</div>

        <div className="phone-cats">
          <span className="is-active">For you</span>
          <span>Electronics</span>
          <span>Fashion</span>
          <span>Home</span>
        </div>

        <div className="phone-hero-card">
          <div className="phone-hero-top">
            <div>
              <small>Price dropped</small>
              <strong>Sony WH-1000XM5</strong>
            </div>
            <span className="phone-badge">Lowest in 90d</span>
          </div>
          <svg className="phone-chart" viewBox="0 0 220 64" preserveAspectRatio="none">
            <defs>
              <linearGradient id="phoneChartFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2874f0" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#2874f0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 22 L24 18 L48 24 L72 14 L96 20 L120 12 L144 26 L168 30 L192 42 L220 52 L220 64 L0 64 Z"
              fill="url(#phoneChartFill)"
            />
            <polyline
              points="0,22 24,18 48,24 72,14 96,20 120,12 144,26 168,30 192,42 220,52"
              fill="none"
              stroke="#2874f0"
              strokeWidth="2.2"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx="220" cy="52" r="3.5" fill="#2874f0" />
          </svg>
          <div className="phone-hero-price">
            <strong>{"\u20B9"}22,990</strong>
            <s>{"\u20B9"}29,990</s>
            <span>-23%</span>
          </div>
        </div>

        <div className="phone-list-head">
          <strong>Live deals</strong>
          <small>Synced 4 min ago</small>
        </div>

        <ul className="phone-list">
          {deals.map((d) => (
            <li key={d.name}>
              <span className="phone-thumb" style={{ background: d.tint }}>
                <img src={`/products/${d.img}.jpg`} alt="" width="34" height="34" />
              </span>
              <span className="phone-item">
                <b>{d.name}</b>
                <small>{d.store}</small>
              </span>
              <span className="phone-price">
                <b>{d.price}</b>
                <small>{d.off} off</small>
              </span>
            </li>
          ))}
        </ul>

        <div className="phone-tabbar">
          <span className="is-active" />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
