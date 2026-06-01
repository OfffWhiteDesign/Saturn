import { site } from "@/lib/site";

export function AppStoreButton() {
  return (
    <a
      className="appstore-btn"
      href={site.appStoreUrl}
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
