import Image from "next/image";
import { AppStoreButton } from "@/components/AppStoreButton";
import { site } from "@/lib/site";

const features = [
  {
    icon: "📰",
    title: "All your feeds, one place",
    body: "Subscribe to blogs, news, and podcasts. Saturn keeps everything organized and up to date.",
  },
  {
    icon: "☁️",
    title: "Synced across devices",
    body: "Start reading on iPhone, finish on Mac. Your subscriptions and read state stay in sync.",
  },
  {
    icon: "✨",
    title: "Calm by design",
    body: "A clean, distraction-free reading view that puts the words first — no clutter, no noise.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">RSS, reimagined</span>
          <Image
            className="app-icon"
            src="/Saturn-iOS-Default-1024x1024@1x.png"
            alt={`${site.name} app icon`}
            width={120}
            height={120}
            priority
          />
          <h1>{site.tagline}</h1>
          <p className="lead">{site.description}</p>
          <AppStoreButton />
          <p className="platforms">Designed for iPhone · iPad · Mac</p>
          <div className="planet-wrap">
            <PlanetArt />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-grid">
            {features.map((f) => (
              <div className="feature" key={f.title}>
                <div className="ico">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PlanetArt() {
  return (
    <svg
      width="320"
      height="220"
      viewBox="0 0 320 220"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="planet" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#ffe0a6" />
          <stop offset="55%" stopColor="#f0b35b" />
          <stop offset="100%" stopColor="#c97f38" />
        </radialGradient>
        <linearGradient id="ring" x1="20" y1="80" x2="300" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c98bff" />
          <stop offset="0.5" stopColor="#f0b35b" />
          <stop offset="1" stopColor="#7a5cff" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="110" r="62" fill="url(#planet)" />
      <ellipse cx="135" cy="88" rx="16" ry="11" fill="#ffffff" fillOpacity="0.18" />
      <ellipse
        cx="160"
        cy="110"
        rx="138"
        ry="44"
        transform="rotate(-20 160 110)"
        stroke="url(#ring)"
        strokeWidth="7"
        fill="none"
      />
      <circle cx="44" cy="40" r="1.6" fill="#fff" fillOpacity="0.7" />
      <circle cx="280" cy="60" r="1.4" fill="#fff" fillOpacity="0.6" />
      <circle cx="250" cy="180" r="1.8" fill="#fff" fillOpacity="0.7" />
      <circle cx="70" cy="170" r="1.3" fill="#fff" fillOpacity="0.6" />
    </svg>
  );
}
