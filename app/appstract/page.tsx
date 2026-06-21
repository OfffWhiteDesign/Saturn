import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { appstract } from "@/lib/site";

export const metadata: Metadata = {
  title: `${appstract.name} — App Store Asset Downloader & Design Explorer`,
  description: appstract.description,
  openGraph: {
    title: `${appstract.name} — ${appstract.tagline}`,
    description: appstract.description,
    type: "website",
  },
};

const features = [
  {
    icon: "🎨",
    title: "Premium App Icon Exporter",
    body: "Download icons in high resolution as transparent .png files, each masked with a perfect continuous iOS squircle (22.37% corner radius) — ready for mockups instantly.",
  },
  {
    icon: "🖼️",
    title: "Bulk Screenshot Downloader",
    body: "Save every screenshot from any listing in a single tap. Parallel downloading for speed, plus a built-in fallback scraper when the search API comes back empty.",
  },
  {
    icon: "👆",
    title: "Fluid Swipe Gestures",
    body: "Swipe left on any app card to save its icon, or swipe right to add it to Favorites — with satisfying, tactile haptic feedback.",
  },
  {
    icon: "✨",
    title: "Liquid Glass Navigation",
    body: "A premium interface with a custom floating tab bar — specular highlights, material blur, and dynamic, responsive layouts.",
  },
  {
    icon: "🔎",
    title: "Deep Catalog Discovery",
    body: "Explore all 24 official App Store categories, search the global catalog, and track top downloaded apps in real time.",
  },
  {
    icon: "💻",
    title: "Universal macOS Integration",
    body: "Runs natively on Apple Silicon Macs and Mac Catalyst, routing downloads through a native macOS Save Panel — bypassing mobile sandbox limits.",
  },
];

const audience = [
  {
    title: "UI/UX Designers",
    body: "Grab clean, pre-masked icons and screenshots to build mood boards, design systems, and competitive UI audits.",
  },
  {
    title: "iOS Developers",
    body: "Save references of visual layouts, typography systems, and promotional designs to inspire your next build.",
  },
  {
    title: "ASO Managers",
    body: "Audit competitor listings, screenshots, and visual branding assets in bulk.",
  },
  {
    title: "Apple Enthusiasts",
    body: "Collect beautiful app artwork and screenshots to personalize your setups.",
  },
];

export default function AppStractPage() {
  return (
    <div className="theme-appstract">
      <section className="hero hero-appstract">
        <div className="container">
          <span className="eyebrow">App Store Asset Toolkit</span>
          <Image
            className="app-icon"
            src={appstract.icon}
            alt={`${appstract.name} app icon`}
            width={120}
            height={120}
            priority
          />
          <h1>{appstract.tagline}</h1>
          <p className="lead">{appstract.description}</p>
          {appstract.appStoreUrl ? (
            <a
              className="appstore-btn"
              href={appstract.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppStoreBadge />
            </a>
          ) : (
            <span className="appstore-btn is-soon" aria-disabled="true">
              <AppStoreBadge small="Coming soon to the" />
            </span>
          )}
          <p className="platforms">{appstract.platforms}</p>
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

      <section className="features audience">
        <div className="container">
          <h2 className="section-title">Who is AppStract for?</h2>
          <div className="feature-grid">
            {audience.map((a) => (
              <div className="feature" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
          <p className="legal-row">
            <Link href="/appstract/privacy">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/appstract/terms">Terms of Service</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
