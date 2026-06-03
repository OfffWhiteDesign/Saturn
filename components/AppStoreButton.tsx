"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

// Decide which App Store listing to send the visitor to.
// - Real Macs -> Mac listing (when available), otherwise the iOS/iPadOS listing.
// - iPhone/iPad -> iOS/iPadOS listing.
// Note: iPadOS 13+ reports itself as "MacIntel", so we use touch support to
// tell a true Mac apart from an iPad masquerading as a desktop.
function resolveAppStoreUrl(): string {
  const ios = site.appStore.ios;
  const mac = site.appStore.mac || ios; // fall back to iOS link until Mac is live

  if (typeof navigator === "undefined") return ios;

  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const maxTouch = navigator.maxTouchPoints || 0;

  const isIPhone = /iPhone|iPod/.test(ua);
  const isIPad = /iPad/.test(ua) || (platform === "MacIntel" && maxTouch > 1);
  const isMac = /Mac/.test(platform) && maxTouch <= 1;

  if (isIPhone || isIPad) return ios;
  if (isMac) return mac;
  return ios;
}

export function AppStoreButton() {
  // Default to the iOS link for SSR and no-JS; refine on the client.
  const [href, setHref] = useState(site.appStore.ios);

  useEffect(() => {
    setHref(resolveAppStoreUrl());
  }, []);

  return (
    <a
      className="appstore-btn"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.05 12.54c-.02-2.04 1.67-3.02 1.74-3.07-.95-1.39-2.43-1.58-2.96-1.6-1.26-.13-2.46.74-3.1.74-.64 0-1.62-.72-2.66-.7-1.37.02-2.63.8-3.34 2.03-1.42 2.47-.36 6.12 1.02 8.12.68.98 1.49 2.08 2.55 2.04 1.02-.04 1.41-.66 2.65-.66 1.23 0 1.58.66 2.66.64 1.1-.02 1.79-1 2.47-1.99.78-1.14 1.1-2.25 1.12-2.3-.02-.01-2.15-.82-2.17-3.27zM15.1 6.13c.56-.68.94-1.63.83-2.58-.81.03-1.79.54-2.37 1.22-.52.6-.98 1.56-.86 2.48.9.07 1.83-.46 2.4-1.12z" />
      </svg>
      <span className="label">
        <small>Download on the</small>
        <span>App Store</span>
      </span>
    </a>
  );
}
