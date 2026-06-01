import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `Privacy Policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="container legal">
      <Link href="/" className="back-link">
        ← Back to home
      </Link>
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: {site.lastUpdated}</p>

      <p>
        This Privacy Policy describes how {site.company} (“we,” “us,” or “our”)
        handles information in connection with the {site.name} app for iPhone,
        iPad, and Mac (the “App”). We built {site.name} to respect your privacy.
      </p>

      <h2>Information We Collect</h2>
      <p>
        {site.name} is designed to keep your data on your devices. We do not
        require you to create an account to use the App, and we do not sell your
        personal information.
      </p>
      <ul>
        <li>
          <strong>Feed data.</strong> The list of feeds you subscribe to, your
          read/unread state, and your reading preferences are stored on your
          device. If you enable iCloud sync, this data is synced privately
          through your personal Apple iCloud account, to which we have no access.
        </li>
        <li>
          <strong>Feed content requests.</strong> To fetch articles, the App
          connects directly to the websites and feed providers you subscribe to.
          Those third parties may receive your IP address and standard request
          information as part of serving the content, subject to their own
          privacy policies.
        </li>
        <li>
          <strong>Diagnostics.</strong> If you choose to share crash reports and
          usage statistics through Apple, we may receive anonymized diagnostic
          information to help improve the App. You can disable this in your
          device settings.
        </li>
      </ul>

      <h2>How We Use Information</h2>
      <p>
        We use the limited information described above solely to operate,
        maintain, and improve the App. We do not use it for advertising or
        profiling, and we do not share it with third parties except as needed to
        provide the App’s functionality (for example, fetching the feeds you
        request).
      </p>

      <h2>Data Storage and Sync</h2>
      <p>
        Your subscriptions and reading data are stored locally on your device.
        Syncing between devices, when enabled, uses Apple iCloud and is governed
        by{" "}
        <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
          Apple’s Privacy Policy
        </a>
        . We do not operate our own servers to store your personal feed data.
      </p>

      <h2>Children’s Privacy</h2>
      <p>
        {site.name} is not directed to children under 13, and we do not knowingly
        collect personal information from children.
      </p>

      <h2>Your Choices</h2>
      <p>
        You can delete all of your data at any time by removing your
        subscriptions or deleting the App from your device. Disabling iCloud sync
        in your device settings stops cross-device syncing.
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
