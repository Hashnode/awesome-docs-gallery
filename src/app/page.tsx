import HomePageContent from "@/components/HomePageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Awesome Docs Gallery — A crowdsourced, open-source gallery for high-quality dev docs.",
  description:
    "Discover high-quality developer documentation resources in our crowdsourced gallery. Find the best payments, ML-AI, IaaS, SaaS, API and cloud docs.",
  openGraph: {
    title:
      "Awesome Docs Gallery — A crowdsourced, open-source gallery for high-quality dev docs.",
    description:
      "Discover high-quality developer documentation resources in our crowdsourced gallery. Find the best payments, ML-AI, IaaS, SaaS, API and cloud docs.",
    url: "https://awesome-docs.gallery",
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
    title:
      "Awesome Docs Gallery — A crowdsourced, open-source gallery for high-quality dev docs.",
    description:
      "Discover high-quality developer documentation resources in our crowdsourced gallery. Find the best payments, ML-AI, IaaS, SaaS, API and cloud docs.",
    creator: "@hashnode",
    images: ["/images/awesome-docs-gallery-og.png"],
  },
  alternates: {
    canonical: "https://awesome-docs.gallery",
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
