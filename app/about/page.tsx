import type { Metadata } from "next";
import { ContentPage } from "../components/content-page";

export const metadata: Metadata = {
  title: "About BuildWise",
  description:
    "Why BuildWise creates simple, transparent project planning calculators.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="About BuildWise"
      title="Planning tools without the pressure."
      intro="BuildWise helps homeowners, DIYers, and small project teams turn measurements into clearer material and cost estimates."
    >
      <h2>What we build</h2>
      <p>
        Our calculators focus on a practical question: what should you plan to
        buy? Results include complete boxes, cans, or bags when relevant, along
        with editable assumptions and straightforward formulas.
      </p>
      <h2>How we keep it simple</h2>
      <p>
        Calculations run directly in your browser. There is no account, database,
        subscription, or saved personal project record. This keeps the tools
        quick to use and inexpensive to operate.
      </p>
      <h2>What the estimates mean</h2>
      <p>
        BuildWise provides planning estimates, not engineering, architectural,
        legal, or contractor advice. Product coverage, site conditions, prices,
        codes, and installation requirements vary. Confirm important quantities
        with the product manufacturer, supplier, or a qualified professional.
      </p>
    </ContentPage>
  );
}
