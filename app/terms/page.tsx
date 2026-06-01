import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Service — ${site.name}`,
  description: `Terms of Service for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <div className="container legal">
      <Link href="/" className="back-link">
        ← Back to home
      </Link>
      <h1>Terms of Service</h1>
      <p className="updated">Last updated: {site.lastUpdated}</p>

      <p>
        These Terms of Service (“Terms”) govern your use of the {site.name} app
        for iPhone, iPad, and Mac (the “App”), provided by {site.company} (“we,”
        “us,” or “our”). By downloading or using the App, you agree to these
        Terms. If you do not agree, please do not use the App.
      </p>

      <h2>License</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable, revocable
        license to use the App on Apple devices that you own or control, in
        accordance with the Apple Media Services Terms and these Terms. You may
        not copy, modify, reverse-engineer, or distribute the App except as
        permitted by law.
      </p>

      <h2>Acceptable Use</h2>
      <p>You agree not to use the App to:</p>
      <ul>
        <li>Violate any applicable law or the rights of others;</li>
        <li>
          Access feeds or content you are not authorized to access, or otherwise
          infringe intellectual property rights;
        </li>
        <li>
          Interfere with, disrupt, or place an unreasonable load on third-party
          feed providers or servers.
        </li>
      </ul>

      <h2>Third-Party Content</h2>
      <p>
        {site.name} lets you read content from third-party websites and feeds.
        That content is owned by its respective publishers and is subject to
        their own terms. We do not create, endorse, or take responsibility for
        third-party content, and we are not liable for its accuracy,
        availability, or legality.
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
        the App.
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
