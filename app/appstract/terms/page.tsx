import type { Metadata } from "next";
import Link from "next/link";
import { appstract, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Service — ${appstract.name}`,
  description: `Terms of Service for ${appstract.name}.`,
};

export default function AppStractTermsPage() {
  return (
    <div className="container legal">
      <Link href="/appstract" className="back-link">
        ← Back to {appstract.name}
      </Link>
      <h1>Terms of Service</h1>
      <p className="updated">Last updated: {appstract.lastUpdated}</p>

      <p>
        These Terms of Service (“Terms”) govern your use of the {appstract.name}{" "}
        app (the “App”), provided by {site.company} (“we,” “us,” or “our”). By
        downloading or using the App, you agree to these Terms. If you do not
        agree, please do not use the App.
      </p>

      <h2>License</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable, revocable
        license to use the App on Apple devices that you own or control, in
        accordance with the Apple Media Services Terms and these Terms. You may
        not copy, modify, reverse-engineer, or distribute the App except as
        permitted by law.
      </p>

      <h2>Intellectual Property of Downloaded Assets</h2>
      <p>
        {appstract.name} lets you access and download app icons, screenshots, and
        related assets from public App Store listings. These assets are the
        property of their respective owners and are protected by copyright and
        trademark law. {appstract.name} grants you no rights in those assets.
      </p>
      <p>
        You are solely responsible for how you use any asset you download. You
        agree to use downloaded assets only for lawful purposes — such as
        personal reference, research, or design evaluation — and to obtain any
        permissions or licenses required before reproducing, distributing, or
        otherwise using an asset commercially. You agree not to use the App in a
        way that infringes the intellectual property rights of others.
      </p>

      <h2>Acceptable Use</h2>
      <p>You agree not to use the App to:</p>
      <ul>
        <li>Violate any applicable law or the rights of others;</li>
        <li>
          Infringe intellectual property rights or misrepresent the source of
          downloaded assets;
        </li>
        <li>
          Interfere with, disrupt, overload, or attempt to gain unauthorized
          access to Apple’s services or any third-party systems.
        </li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>
        The App retrieves data from Apple’s public App Store / iTunes APIs. Your
        use of that data is also subject to Apple’s applicable terms. We are not
        affiliated with or endorsed by Apple, and we are not responsible for the
        accuracy or availability of third-party data.
      </p>

      <h2>Subscriptions and Purchases</h2>
      <p>
        Any paid features or subscriptions are billed through your Apple App
        Store account and are governed by Apple’s terms. Pricing, renewal, and
        cancellation are managed in your App Store account settings.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The App is provided “as is” and “as available” without warranties of any
        kind, whether express or implied, including merchantability, fitness for
        a particular purpose, and non-infringement. We do not warrant that the
        App will be uninterrupted, error-free, or secure.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, {site.company} shall not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages, or any loss of data, arising out of or related to your use of
        the App or any assets downloaded through it.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise
        the “Last updated” date above. Your continued use of the App after an
        update constitutes acceptance of the revised Terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms, contact us at{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </div>
  );
}
