import type { Metadata } from "next";
import { GuidePage } from "../../components/guide-page";

export const metadata: Metadata = {
  title: "Calculator Methodology and Assumptions",
  description:
    "How BuildWise handles measurements, conversions, editable defaults, waste, package rounding, cost, review, and limitations.",
  alternates: {
    canonical: "/guides/calculator-methodology-and-assumptions",
  },
};

export default function Page() {
  return <GuidePage slug="calculator-methodology-and-assumptions" />;
}
