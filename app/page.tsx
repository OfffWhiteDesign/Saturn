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
          <div className="product-shot">
            <Image
              src="/Mac-7.png"
              alt={`${site.name} running on Mac, iPad, and iPhone, synced with iCloud`}
              width={2880}
              height={1800}
              sizes="(max-width: 980px) 100vw, 980px"
              priority
            />
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
