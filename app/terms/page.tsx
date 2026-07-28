import type { Metadata } from "next";
import { ContentPage } from "../components/content-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using BuildWise planning calculators.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Terms"
      title="Terms of use"
      intro="Effective July 28, 2026. By using BuildWise, you agree to use the calculators as planning aids and to verify important project decisions independently."
    >
      <h2>Planning estimates only</h2>
      <p>
        Results depend entirely on the values you enter and the assumptions
        shown by each calculator. They are not quotes, guarantees, engineering
        calculations, or professional advice.
      </p>
      <h2>Your responsibility</h2>
      <p>
        Verify quantities, prices, product coverage, waste, site conditions,
        codes, permits, structural requirements, and installation instructions
        with appropriate suppliers or qualified professionals before purchasing
        materials or starting work.
      </p>
      <h2>Availability</h2>
      <p>
        We aim to keep the tools available and accurate but do not promise
        uninterrupted service or that every calculator will fit every project.
        Features and default assumptions may change as the site improves.
      </p>
      <h2>Advertising and external links</h2>
      <p>
        The site may display third-party advertising or link to external
        websites. BuildWise does not control third-party content, products,
        pricing, or privacy practices.
      </p>
      <h2>Limitation</h2>
      <p>
        To the extent permitted by applicable law, BuildWise is not responsible
        for losses caused by relying on an estimate without independent
        verification.
      </p>
    </ContentPage>
  );
}
