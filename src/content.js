export const nav = [
  { label: "Problem", href: "#problem" },
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Earn", href: "#earn" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Launching soon on Android & iOS",
  lead:
    "SnatchMart watches prices across Flipkart, Amazon and more, tells you when a deal is actually real, keeps you inside your budget and pays you for every deal you share.",
  proof: "Free forever. No spam, one email when we launch.",
};

export const merchants = ["Flipkart", "Amazon", "Myntra", "Ajio", "Nykaa", "Croma", "Tata CLiQ", "Meesho"];

export const problems = [
  {
    icon: "scatter",
    title: "Deals are everywhere and nowhere",
    body: "The same phone is listed on five apps at five prices. Comparing them means ten tabs and a lot of guesswork.",
  },
  {
    icon: "tag",
    title: "\u201CSale\u201D doesn\u2019t mean cheap",
    body: "Prices are quietly raised before a sale so the discount looks bigger. Without history, you can\u2019t tell a deal from a trick.",
  },
  {
    icon: "wallet",
    title: "Budgets break in one tap",
    body: "Flash sales and countdown timers are designed to make you overspend. Nothing in your cart reminds you of your limit.",
  },
  {
    icon: "share",
    title: "You recommend, others earn",
    body: "You share product links with friends and family every week. Platforms earn commission on those sales. You get nothing.",
  },
];

export const idea = {
  statement: ["One app that", "watches prices", "for you, and", "pays you", "for sharing."],
  body:
    "SnatchMart pulls live deals from the stores you already use, remembers every price it has ever seen and only nudges you when something is genuinely worth buying. When you share a deal, the commission comes back to you.",
};

export const steps = [
  {
    n: "01",
    title: "Find it",
    body: "Browse a live feed of deals synced from Flipkart and Amazon every 30 minutes, or search across stores in one place.",
  },
  {
    n: "02",
    title: "Save it",
    body: "Add products to your wishlist and set a budget for the month or a target price for a single item.",
  },
  {
    n: "03",
    title: "Wait smart",
    body: "We track every price change. You get a notification only when it drops to a real low or hits your target.",
  },
  {
    n: "04",
    title: "Snatch or share",
    body: "Buy at the right moment, or turn the link into a profit link and earn when friends buy through it.",
  },
];

export const features = [
  {
    id: "feed",
    size: "wide",
    eyebrow: "Live deals",
    title: "A deals feed that refreshes itself",
    body: "Fresh offers from top stores, synced every 30 minutes and cleaned up the moment they expire.",
  },
  {
    id: "history",
    size: "tall",
    eyebrow: "Price history",
    title: "See the real price, not the sale sticker",
    body: "Every product carries its full price history, so you know when today\u2019s price is genuinely the lowest.",
  },
  {
    id: "budget",
    size: "normal",
    eyebrow: "Budgets",
    title: "Spend with a plan",
    body: "Set monthly or per-item budgets and watch them before you check out.",
  },
  {
    id: "alerts",
    size: "normal",
    eyebrow: "Smart alerts",
    title: "Only the pings that matter",
    body: "Price-drop and target-price notifications. No noise, no fake urgency.",
  },
  {
    id: "coupons",
    size: "normal",
    eyebrow: "Coupons",
    title: "Codes that actually work",
    body: "Verified coupons right next to the product, ready to copy.",
  },
  {
    id: "help",
    size: "normal",
    eyebrow: "Help assistant",
    title: "Answers without leaving the app",
    body: "A built-in assistant for wishlists, budgets, deals and your account.",
  },
];

export const earn = {
  eyebrow: "Make Link",
  title: ["Share a deal.", "Earn when they buy."],
  body:
    "Paste any product link from a supported store. SnatchMart turns it into your personal profit link that opens the exact same page. Share it anywhere, and when someone buys, the commission is credited to your SnatchMart wallet.",
  input: "https://www.flipkart.com/noise-buds-vs104/p/itm9a3f\u2026",
  output: "snatch.link/p/ravi-7KX2",
  points: [
    { k: "Any store link", v: "Flipkart, Amazon, Myntra and more" },
    { k: "Same product page", v: "Your friends see exactly what you shared" },
    { k: "Tracked to you", v: "Every sale is attributed to your account" },
    { k: "Withdraw anytime", v: "Move earnings from wallet to bank" },
  ],
};

export const underTheHood = [
  {
    stat: "30 min",
    label: "Deal sync",
    body: "Our servers pull fresh offers from partner stores every half hour and retire expired deals automatically.",
  },
  {
    stat: "Every",
    label: "Price recorded",
    body: "Each price change is snapshotted into a history, which is what powers honest price-drop alerts.",
  },
  {
    stat: "0",
    label: "Data sold",
    body: "Your wishlist and budgets are yours. We earn from store commissions, never from selling your data.",
  },
];

export const faqs = [
  {
    q: "What exactly is SnatchMart?",
    a: "SnatchMart is a free shopping companion app. It brings deals from stores like Flipkart and Amazon into one feed, tracks their prices over time, alerts you when something drops to a real low and lets you earn by sharing product links.",
  },
  {
    q: "Do I buy products on SnatchMart?",
    a: "No. You always buy on the original store, with their delivery, returns and warranty. SnatchMart helps you decide when and where to buy, then takes you straight to the product page.",
  },
  {
    q: "How does SnatchMart make money?",
    a: "Stores pay a small affiliate commission when someone buys through a SnatchMart link. It costs you nothing extra, and with Make Link, we share that commission with you.",
  },
  {
    q: "How do I earn with Make Link?",
    a: "Paste a product link, get your profit link and share it on WhatsApp, Instagram or anywhere else. When someone buys through it, the commission is credited to your SnatchMart wallet, which you can withdraw to your bank.",
  },
  {
    q: "When is the launch?",
    a: "We\u2019re polishing the app now. Join the waitlist and you\u2019ll get one email the day it goes live on the Play Store and App Store, plus early access before everyone else.",
  },
];
