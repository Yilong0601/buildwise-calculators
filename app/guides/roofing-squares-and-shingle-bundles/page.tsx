import type { Metadata } from "next";
import { GuidePage } from "../../components/guide-page";

export const metadata: Metadata = {
  title: "Roofing Squares and Shingle Bundles Explained",
  description:
    "Understand roof area, pitch, 100-square-foot roofing squares, shingle bundle coverage, waste, and full-bundle estimates.",
  alternates: { canonical: "/guides/roofing-squares-and-shingle-bundles" },
};

export default function Page() {
  return <GuidePage slug="roofing-squares-and-shingle-bundles" />;
}
