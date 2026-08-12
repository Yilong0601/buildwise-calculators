import type { Metadata } from "next";
import { GuidePage } from "../../components/guide-page";

export const metadata: Metadata = {
  title: "Material Waste Allowance — How Much Extra to Buy",
  description:
    "Choose a practical material waste allowance for cuts, breakage, patterns, full packages, and project complexity.",
  alternates: { canonical: "/guides/material-waste-allowance" },
};

export default function Page() {
  return <GuidePage slug="material-waste-allowance" />;
}
