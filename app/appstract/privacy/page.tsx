import type { Metadata } from "next";
import Link from "next/link";
import { appstract, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${appstract.name}`,
  description: `Privacy Policy for ${appstract.name}.`,
};

export default function AppStractPrivacyPage() {
  return (
    <div className="container legal">
      <Link href="/appstract" className="back-link">
        ← Back to {appstract.name}
      </Link>
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: {appstract.lastUpdated}</p>

      <p>
        This Privacy Policy describes how {site.company} (“we,” “us,” or “our”)
        handles information in connection with the {appstract.name} app (the
        “App”). We built {appstract.name} to respect your privacy.
      </p>

      <h2>Information We Collect</h2>
      <p>
        {appstract.name} does not require you to create an account, and we do not
        sell your personal information. The App is designed to keep your data on
        your device.
      </p>
      <ul>
        <li>
          <strong>App Store catalog requests.</strong> When you browse or search,
          the App queries publicly available Apple App Store / iTunes APIs to
          retrieve listings, icons, and screenshots. These requests are made
          directly from your device.
        </li>
        <li>
          <strong>Downloads and favorites.</strong> Assets you download are saved
          to your device or chosen folder. Your favorites and preferences are
          stored locally on your device.
        </li>
        <li>
          <strong>Diagnostics.</strong> If you choose to share crash reports and
          usage statistics through Apple, we may receive anonymized diagnostic
          information to help improve the App. You can disable this in your device
          settings.
        </li>
      </ul>

      <h2>How We Use Information</h2>
      <p>
        We use the limited information described above solely to operate,
        maintain, and improve the App. We do not use it for advertising or
        profiling, and we do not share it with third parties except as needed to
        provide the App’s functionality (for example, fetching catalog data and
        assets from Apple’s public APIs).
      </p>

      <h2>Third-Party Content and Assets</h2>
      <p>
        Icons, screenshots, and other assets retrieved through the App are owned
        by their respective publishers and are subject to copyright and
        trademark law. {appstract.name} provides these assets for reference and
        research purposes; you are responsible for ensuring your use of any
        downloaded asset complies with applicable rights and licenses.
      </p>

      <h2>Data Storage</h2>
      <p>
        Your favorites, preferences, and downloaded assets are stored locally on
        your device. We do not operate our own servers to store your personal
        data.
      </p>

      <h2>Children’s Privacy</h2>
      <p>
        {appstract.name} is not directed to children under 13, and we do not
        knowingly collect personal information from children.
      </p>

      <h2>Your Choices</h2>
      <p>
        You can delete your data at any time by clearing your favorites,
        removing downloaded files, or deleting the App from your device.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the “Last updated” date above. Continued use of the App after an
        update constitutes acceptance of the revised policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </div>
  );
}
