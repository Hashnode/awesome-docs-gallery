import ToolsPageContent from "@/components/ToolsPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Developer Documentation Tools in 2024 - Awesome Docs Gallery",
  description:
    "Discover the best tools for creating high-quality developer documentation in 2024. Find the best tools for AI projects, API references, cloud docs, and more.",
  openGraph: {
    title: "Best Developer Documentation Tools in 2024 - Awesome Docs Gallery",
    description:
      "Discover the best tools for creating high-quality developer documentation in 2024. Find the best tools for AI projects, API references, cloud docs, and more.",
    url: "https://awesome-docs.gallery/tools",
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
    title: "Best Developer Documentation Tools in 2024 - Awesome Docs Gallery",
    description:
      "Discover the best tools for creating high-quality developer documentation in 2024. Find the best tools for AI projects, API references, cloud docs, and more.",
    creator: "@hashnode",
    images: ["/images/awesome-docs-gallery-og.png"],
  },
  alternates: {
    canonical: "https://awesome-docs.gallery/tools",
  },
};

export default function ToolsPage() {
  return <ToolsPageContent />;
}
