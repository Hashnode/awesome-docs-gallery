"use client";

import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ContributePageContent: React.FC = () => {
  const router = useRouter();

  const handleSearch = (searchTerm: string) => {
    router.push(`/?search=${encodeURIComponent(searchTerm)}`);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <main className="max-w-5xl mx-auto md:pt-5 transition-colors duration-200 flex flex-col items-stretch gap-10 px-5 lg:px-0 overflow-x-hidden lg:overflow-x-visible">
      <Header
        searchTerm=""
        setSearchTerm={(value) =>
          handleSearch(typeof value === "string" ? value : "")
        }
      />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="flex flex-col pt-16 pb-32 gap-1 items-center max-w-3xl mx-auto"
      >
        <span className="text-2xl text-neutral-500 dark:text-neutral-300">
          ✲
        </span>
        <p className="text-lg text-neutral-500 dark:text-neutral-300 font-semibold">
          awesome-docs.gallery
        </p>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-neutral-950 dark:from-neutral-100 dark:via-neutral-300 via-neutral-600 dark:to-neutral-400 to-neutral-500 text-balance text-center !leading-tight !tracking-tight">
          Contribution Guide
        </h1>
        <div className="absolute -z-10 -top-80 right-0 lg:-right-80">
          <svg
            fill="none"
            className="w-[800px] h-auto block dark:hidden"
            viewBox="0 0 981 862"
          >
            <g filter="url(#a)">
              <path
                fill="#FAE8FF"
                d="M359.5 393.5V291l56-127.5 86 53.5h101l72 59.5H775l-52 167H519.5l-160-50Z"
              />
              <path
                fill="#A7F3D0"
                d="m120.5 436.5 61-109.5h40l28.5 61 91.5 38 23.5 66.5-59 64.5-124.5-45-61-75.5Z"
              />
              <path
                fill="#E0F2FE"
                d="m252 476 30.5-356 45 99L473 262l90 77.5L766 397l122 37.5L949.5 593 766 729.5 498 742l-246-75.5V476Z"
              />
            </g>
            <defs>
              <filter
                id="a"
                width="1069"
                height="862"
                x=".5"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_1_138"
                  stdDeviation="60"
                />
              </filter>
            </defs>
          </svg>
          <svg
            fill="none"
            className="w-[800px] h-auto hidden dark:block"
            viewBox="0 0 1070 862"
          >
            <g filter="url(#a)">
              <path
                fill="#86198F"
                d="M359.5 393.5V291l56-127.5 86 53.5h101l72 59.5H775l-52 167H519.5l-160-50Z"
              />
              <path
                fill="#065F46"
                d="m120.5 436.5 61-109.5h40l28.5 61 91.5 38 23.5 66.5-59 64.5-124.5-45-61-75.5Z"
              />
              <path
                fill="#075985"
                d="m252 476 30.5-356 45 99L473 262l90 77.5L766 397l122 37.5L949.5 593 766 729.5 498 742l-246-75.5V476Z"
              />
            </g>
            <defs>
              <filter
                id="a"
                width="1069"
                height="862"
                x=".5"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_8_8"
                  stdDeviation="60"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </motion.section>
      <section className="pt-10 pb-32 max-w-3xl mx-auto">
        <div className="prose dark:prose-invert prose-neutral">
          <p>
            We welcome all contributions that help improve this gallery of
            high-quality developer documentation. To contribute, please follow
            these simple steps:
          </p>
          <ol>
            <li>
              <span>Fork the Repository:</span> Head over to our{" "}
              <a
                href="https://github.com/Hashnode/awesome-docs-gallery/"
                target="_Blank"
                rel="noopener"
              >
                GitHub repository
              </a>{" "}
              and fork the project to your own GitHub account.
            </li>
            <li>
              <span>Add Your Documentation:</span> Create a new entry in the{" "}
              <code>data/data.json</code> file, including relevant information
              such as title, description, link, logo, and any other details.
            </li>
            <li>
              <span>Add Your Documentation Tool:</span> Create a new entry in the {" "}
              <a
                href="https://github.com/Hashnode/awesome-docs-gallery/blob/main/src/components/ToolsPageContent.tsx"
                target="_Blank"
                rel="noopener"
              >
                ToolsPageContext.tsx
              </a>{" "}
              file, including relevant information such as title, description, link, logo, and any other details.
            </li>
            <li>
              <span>Images CDN:</span> Use Hashnode&apos;s free{" "}
              <a
                href="https://hashnode.com/uploader"
                target="_Blank"
                rel="noopener"
              >
                Image uploader
              </a>{" "}
              to upload and grab a CDN link for your images.
            </li>
            <li>
              <span>Submit a Pull Request:</span> Once you&apos;ve added your
              entry, submit a pull request for review. Our team will review your
              submission and merge it if it meets the quality standards.
            </li>
            <li>
              <span>Stay Updated:</span> Keep an eye on your pull request for
              any comments or suggestions from the maintainers.
            </li>
          </ol>
          <p>
            Thank you for helping us build a comprehensive and high-quality
            collection of developer documentation!
          </p>
        </div>
      </section>
    </main>
  );
};

export default ContributePageContent;
