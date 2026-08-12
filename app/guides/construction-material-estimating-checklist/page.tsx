import type { Metadata } from "next";
import { GuidePage } from "../../components/guide-page";

export const metadata: Metadata = {
  title: "Construction Material Estimating Checklist",
  description:
    "A repeatable checklist for measurements, product coverage, package rounding, accessories, cost, and final quantity review.",
  alternates: {
    canonical: "/guides/construction-material-estimating-checklist",
  },
};

export default function Page() {
  return <GuidePage slug="construction-material-estimating-checklist" />;
}
