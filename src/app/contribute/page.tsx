import ContributePageContent from "@/components/ContributePageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribute - Awesome Docs Gallery",
  description:
    "Add a documentation site to Awesome Docs Gallery. Help developers discover high-quality developer documentation resources in our crowdsourced gallery.",
  openGraph: {
    title: "Contribute - Awesome Docs Gallery",
    description:
      "Add a documentation site to Awesome Docs Gallery. Help developers discover high-quality developer documentation resources in our crowdsourced gallery.",
    url: "https://awesome-docs.gallery/contribute",
    siteName: "awesome-docs.gallery",
    images: [
      {
        url: "/images/awesome-docs-gallery-og.png",
        width: 1200,
        height: 630,
        alt: "Awesome Docs Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contribute — Awesome Docs Gallery",
    description:
      "Discover high-quality developer documentation resources in our crowdsourced gallery. Find the best payments, ML-AI, IaaS, SaaS, API and cloud docs.",
    creator: "@hashnode",
    images: ["/images/awesome-docs-gallery-og.png"],
  },
  alternates: {
    canonical: "https://awesome-docs.gallery/contribute",
  },
};

export default function ContributePage() {
  return <ContributePageContent />;
}
