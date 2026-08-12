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
      <h2>How calculators are created and reviewed</h2>
      <p>
        Each calculator begins with a visible geometry or quantity formula. We
        separate measured quantity, project allowances, product coverage, and
        complete-package rounding so users can see which assumption changes the
        result. Worked examples are recalculated when fields or formulas change.
      </p>
      <p>
        Defaults are general starting points, not product recommendations. We
        compare terminology and planning methods with primary manufacturer
        resources, then keep coverage, yield, package size, density, waste, and
        price editable. Every calculator links to our planning guides and
        publishes the formula used.
      </p>
      <p>
        Content is reviewed when a formula, default, or explanation changes.
        Guide pages show their update month and link to representative sources.
        Read our full <a href="/guides/calculator-methodology-and-assumptions">calculator methodology and assumptions</a>.
      </p>
      <h2>Why we do not publish local prices</h2>
      <p>
        Prices, taxes, product availability, and labor rates change by place and
        time. Instead of maintaining a price database that can quickly become
        outdated, BuildWise lets you enter a current supplier price and keeps
        the cost calculation transparent.
      </p>
      <h2>What the estimates mean</h2>
      <p>
        BuildWise provides planning estimates, not engineering, architectural,
        legal, or contractor advice. Product coverage, site conditions, prices,
        codes, and installation requirements vary. Confirm important quantities
        with the product manufacturer, supplier, or a qualified professional.
      </p>
      <p className="content-updated">Last updated: August 2026</p>
    </ContentPage>
  );
}
