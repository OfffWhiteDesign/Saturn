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
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </header>
  );
}
