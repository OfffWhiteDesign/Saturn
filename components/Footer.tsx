"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export function Footer() {
  const pathname = usePathname();
  const isAppstract = pathname?.startsWith("/appstract");

  // Point the legal links at the app the visitor is currently browsing.
  const privacyHref = isAppstract ? "/appstract/privacy" : "/privacy";
  const termsHref = isAppstract ? "/appstract/terms" : "/terms";

  return (
    <footer className="site-footer">
      <div className="container">
        <span>
          © {new Date().getFullYear()} {site.company}. All rights reserved.
        </span>
        <nav className="footer-links">
          <Link href={privacyHref}>Privacy Policy</Link>
          <Link href={termsHref}>Terms of Service</Link>
          <a href={`mailto:${site.contactEmail}`}>Contact</a>
        </nav>
      </div>
    </footer>
  );
}
