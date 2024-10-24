"use client";

import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import DocCard from "@/components/DocCard";

// Array to store documentation tools
const docsTools = [
  {
    id: 1,
    title: "Docs by Hashnode",
    description:
      "The content engine for your API docs, product guides, and blogs. Create and scale developer documentation, API references, and blogs with GitHub sync, built-in AI features, Headless mode, and more—powering a complete developer hub for your team.",
    link: "https://hashnode.com/products/docs",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281652059/1cvYpHl9F.jpg?auto=format",
    screenshot:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281626134/lf9tAAH9z.png?auto=format",
    github: "https://github.com/hashnode",
    linkedin: "https://linkedin.com/company/hashnode",
    x: "https://x.com/hashnode",
    category: "",
    featured: false,
  },
  {
    id: 2,
    title: "Docusaurus",
    description:
      "Docusaurus is an open-source framework that helps developers build, deploy, and maintain documentation websites easily. It supports Markdown, and provides built-in versioning.",
    link: "https://docusaurus.io/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281269828/PUMyx1KdK.png?auto=format",
    screenshot:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281215685/lYUHWAWaF.png?auto=format",
    github: "https://github.com/facebook/docusaurus",
    linkedin: "https://www.linkedin.com/company/facebook",
    x: "https://x.com/docusaurus",
    category: "",
    featured: false,
  },
  {
    id: 3,
    title: "GitBook",
    description:
      "GitBook is a modern documentation platform that allows teams to collaborate and create knowledge bases, product docs, and internal wikis. It offers real-time collaboration, version control, and powerful search, making it easy to manage and scale documentation.",
    link: "https://www.gitbook.com/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281419268/fM6o0J-Pz.jpg?auto=format",
    screenshot:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281360388/oyM9rPIDE.png?auto=format",
    github: "https://github.com/GitbookIO",
    linkedin: "https://www.linkedin.com/company/gitbook",
    x: "https://x.com/GitBookIO",
    category: "",
    featured: false,
  },
  {
    id: 4,
    title: "ReadMe",
    description:
      "ReadMe is a documentation platform designed to create interactive API docs and developer hubs. It offers features like API reference generation, customizable docs, and real-time collaboration to help teams build engaging and scalable developer experiences.",
    link: "https://readme.com/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281566293/xXgGQdX0F.png?auto=format",
    screenshot:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729281517207/6D_H2wfQF.png?auto=format",
    github: "https://github.com/readmeio",
    linkedin: "https://linkedin.com/company/readme",
    x: "https://x.com/readme",
    category: "",
    featured: false,
  },
  {
    id: 5,
    title: "Postman API Documentation",
    description:
      "Postman provides an API documentation tool that helps teams generate and share interactive, user-friendly API docs. It integrates with Postman collections to offer real-time collaboration, mock servers, and detailed API references for easier API development and testing.",
    link: "https://www.postman.com/api-documentation-tool/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729324576015/lk0zb46Su.png?auto=format",
    screenshot:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729324607279/tHh3kJvoi.png?auto=format",
    github: "https://github.com/postmanlabs",
    linkedin: "https://www.linkedin.com/company/postman-platform",
    x: "https://x.com/readme",
    category: "",
    featured: false,
  },
  {
    id: 6,
    title: "SwaggerHub",
    description:
      "SwaggerHub streamlines API documentation by integrating with OpenAPI and Swagger. It offers collaboration tools, versioning, and built-in hosting for easy API sharing and management at scale.",
    link: "https://swagger.io/tools/swaggerhub/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729324975558/fKwsCIPr7.jpg?auto=format",
    screenshot:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729324994173/6ljLzIDN6.png?auto=format",
    github: "https://github.com/swagger-api",
    linkedin: "",
    x: "",
    category: "",
    featured: false,
  },
  {
    id: 7,
    title: "Redocly",
    description:
      "Redocly helps teams create customizable API docs based on OpenAPI specs. With a clean UI, robust features, and theming options, it offers an excellent developer experience for API documentation.",
    link: "https://redocly.com/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729325165081/zf52V06w1.jpg?auto=format",
    screenshot:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729325186955/wlseI_4vY.png?auto=format",
    github: "https://github.com/Redocly",
    linkedin: "https://www.linkedin.com/company/redocly",
    x: "https://x.com/Redocly",
    category: "",
    featured: false,
  },
  {
    id: 8,
    title: "Slate",
    description:
      "Slate is an open-source tool that helps teams create clean, simple, and responsive API documentation with a three-panel layout. It supports Markdown and is customizable for different use cases.",
    link: "https://slatedocs.github.io/slate/#introduction",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729325279437/d3CGUQlKh.png?auto=format",
    screenshot:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729325313533/miigE0exA.png?auto=format",
    github: "https://github.com/slatedocs/slate",
    linkedin: "",
    x: "",
    category: "",
    featured: false,
  },
  {
    id: 9,
    title: "Stoplight",
    description:
      "Stoplight offers a visual API design and documentation platform that integrates with OpenAPI. It allows teams to design, mock, and document APIs collaboratively, streamlining the development process.",
    link: "https://stoplight.io/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729325357012/_JpBhNz73.png?auto=format",
    screenshot:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729325369510/BUNMMP5yB.png?auto=format",
    github: "https://github.com/stoplightio",
    linkedin: "",
    x: "",
    category: "",
    featured: false,
  },
  {
    id: 10,
    title: "MkDocs",
    description:
      "MkDocs is a static site generator designed for building project documentation. It is simple to configure and supports Markdown for creating fast and responsive documentation websites.",
    link: "https://www.mkdocs.org/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729325624013/bDr8b92HN.png?auto=format",
    screenshot:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729325643604/OybyBLItN.png?auto=format",
    github: "https://github.com/mkdocs/mkdocs",
    linkedin: "",
    x: "",
    category: "",
    featured: false,
  },
  {
    id: 11,
    title: "Sphinx",
    description:
      "Sphinx is a Python-based documentation generator, primarily used for creating technical documentation. It supports reStructuredText and Markdown, and offers extensive customization options.",
    link: "https://www.sphinx-doc.org/en/master/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729325686001/3rKO9fbJq.png?auto=format",
    screenshot:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729325695210/3k7PBhkju.png?auto=format",
    github: "https://github.com/sphinx-doc/sphinx",
    linkedin: "",
    x: "",
    category: "",
    featured: false,
  },
  {
    id: 12,
    title: "Fern",
    description:
      "Fern is an API platform that helps teams design, generate, and document APIs with ease. It provides built-in support for SDK generation and offers an intuitive experience for managing APIs.",
    link: "https://buildwithfern.com/",
    logo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1729325794521/HlC4oSc30.jpg?auto=format",
    screenshot:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729325784004/r_wGDxClu.png?auto=format",
    github: "https://github.com/fern-api",
    linkedin: "",
    x: "https://x.com/buildwithfern",
    category: "",
    featured: false,
  },
];

const ToolsPageContent: React.FC = () => {
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

  const sortedDocsTools = [...docsTools].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

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
          Best Developer Documentation Tools in 2024
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

      {/* Cards section to list documentation tools */}
      <section className="pt-10 pb-32 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {sortedDocsTools.map((tool) => (
          <DocCard
            key={tool.id}
            id={tool.id}
            title={tool.title}
            description={tool.description}
            link={tool.link}
            logo={tool.logo}
            screenshot={tool.screenshot}
            github={tool.github}
            linkedin={tool.linkedin}
            x={tool.x}
            linkText="Learn more"
            category={tool.category}
          />
        ))}
      </section>
    </main>
  );
};

export default ToolsPageContent;

