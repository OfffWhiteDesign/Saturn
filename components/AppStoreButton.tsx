"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { AppStoreBadge } from "./AppStoreBadge";

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
      <AppStoreBadge />
    </a>
  );
}
