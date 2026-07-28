import type { Metadata } from "next";
import { ContentPage } from "../components/content-page";

export const metadata: Metadata = {
  title: "Contact & Feedback",
  description: "Report a calculator issue or suggest a BuildWise improvement.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Contact"
      title="Help us improve a calculator."
      intro="BuildWise is intentionally small and simple. The most useful feedback includes the calculator, the values entered, the result received, and the result you expected."
    >
      <h2>Report an issue or request</h2>
      <p>
        Use our public feedback tracker to report a calculation issue, unclear
        instruction, accessibility problem, or useful calculator idea. Do not
        include private project, payment, or personal information.
      </p>
      <p>
        <a
          className="content-cta"
          href="https://github.com/Yilong0601/buildwise-calculators/issues/new"
          rel="noreferrer"
          target="_blank"
        >
          Open the feedback tracker ↗
        </a>
      </p>
      <h2>Before sending feedback</h2>
      <ul>
        <li>Confirm whether you selected metric or imperial units.</li>
        <li>Check that depth and product coverage use the unit shown.</li>
        <li>Use the product label yield when a calculator provides that field.</li>
      </ul>
    </ContentPage>
  );
}
