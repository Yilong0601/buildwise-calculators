import type { Metadata } from "next";
import { ContentPage } from "../components/content-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BuildWise privacy and advertising information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Privacy"
      title="Privacy policy"
      intro="Effective July 28, 2026. This page explains how BuildWise handles calculator inputs, technical data, cookies, and advertising."
    >
      <h2>Calculator inputs</h2>
      <p>
        Calculator values are processed in your browser. BuildWise does not
        require an account and does not store your project measurements in a
        BuildWise database.
      </p>
      <h2>Hosting and technical data</h2>
      <p>
        Our hosting and security providers may process standard technical
        information such as IP address, browser type, request time, and pages
        requested to deliver and protect the website.
      </p>
      <h2>Google AdSense and cookies</h2>
      <p>
        BuildWise uses Google AdSense. Google and its partners may use cookies,
        local storage, or similar technologies to deliver, measure, and
        personalize advertising where permitted. Visitors in regions requiring
        consent are shown a consent message with choices before applicable
        advertising storage is used.
      </p>
      <p>
        Learn more about how Google uses information from sites that use its
        services at{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          rel="noreferrer"
          target="_blank"
        >
          Google’s partner sites policy
        </a>
        .
      </p>
      <h2>Your choices</h2>
      <p>
        Where a consent message is available, you can accept, decline, or manage
        advertising choices. You may also control cookies through your browser
        settings.
      </p>
      <h2>Changes</h2>
      <p>
        We may update this policy when website features, advertising practices,
        or legal requirements change. The effective date above identifies the
        current version.
      </p>
    </ContentPage>
  );
}
