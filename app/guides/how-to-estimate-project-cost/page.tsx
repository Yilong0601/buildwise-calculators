import type { Metadata } from "next";
import { GuidePage } from "../../components/guide-page";

export const metadata: Metadata = {
  title: "How to Estimate Project Cost — Step-by-Step Guide",
  description:
    "Learn how to estimate material, labor, delivery, contingency, and tax with a transparent step-by-step project budget.",
  alternates: { canonical: "/guides/how-to-estimate-project-cost" },
};

export default function Page() {
  return <GuidePage slug="how-to-estimate-project-cost" />;
}
