// Central place for site-wide values. Update these as the app ships.
export const site = {
  name: "Saturn",
  tagline: "Your feeds, beautifully in orbit.",
  description:
    "Saturn is a fast, elegant RSS reader for iPhone, iPad, and Mac. Follow your favorite sites, blogs, and podcasts — all in one calm, distraction-free place.",
  // Canonical site URL, used for the sitemap and robots.txt.
  url: "https://saturn-rss-reader.vercel.app",
  // App Store links. The button on the home page picks the right one based on
  // the visitor's platform (Mac vs iPhone/iPad), falling back to `ios`.
  appStore: {
    ios: "https://apps.apple.com/us/app/saturn-rss-reader/id6775278867",
    // TODO: add the Mac App Store link once the Mac version is approved.
    // While empty, Mac visitors fall back to the iOS/iPadOS link above.
    mac: "",
  },
  contactEmail: "zach@offfwhite.design",
  company: "Offfwhite Design",
  // Used for legal pages "last updated" dates.
  lastUpdated: "June 1, 2026",
};

// Second app hosted on this site: AppStract.
export const appstract = {
  name: "AppStract",
  // App icon shown above the hero heading. Lives in /public.
  icon: "/AppStract-Icon-1024.png",
  fullName: "AppStract — App Store Asset Downloader & Design Explorer",
  tagline: "Extract, export, and explore App Store design assets in high fidelity.",
  description:
    "AppStract is the ultimate utility for mobile developers, UI/UX designers, app marketers, and Apple enthusiasts. Browse the App Store catalog, organize your favorite listings, and download high-resolution app icons and screenshots directly to your device or computer.",
  // TODO: add the App Store link once AppStract is live.
  // While empty, the download button shows a "coming soon" state.
  appStoreUrl: "",
  platforms: "Designed for iPad · Apple Silicon Mac",
  lastUpdated: "June 4, 2026",
};

