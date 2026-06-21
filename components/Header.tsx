import Link from "next/link";
import { SaturnLogo } from "./SaturnLogo";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          <SaturnLogo />
          {site.name}
        </Link>
        <nav className="nav-links">
          <Link href="/appstract">AppStract</Link>
          <Link href="/privacy" className="nav-legal">Privacy</Link>
          <Link href="/terms" className="nav-legal">Terms</Link>
        </nav>
      </div>
    </header>
  );
}
