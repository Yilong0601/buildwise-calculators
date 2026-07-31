import type { Metadata } from "next";
import { CalculatorSeoPage } from "../components/calculator-seo-page";
import { toolById } from "../lib/calculators";

const spec = toolById.brick;

export const metadata: Metadata = {
  title: spec.seoTitle,
  description: spec.seoDescription,
  alternates: { canonical: `/${spec.slug}` },
};

export default function BrickCalculatorPage() {
  return <CalculatorSeoPage tool="brick" />;
}
