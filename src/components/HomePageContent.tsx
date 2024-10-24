"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import data from "../data/data.json";
import DocCard from "@/components/DocCard";
import Header from "@/components/Header";
import { motion } from "framer-motion";

interface DocItem {
  id: number;
  title: string;
  description: string;
  link: string;
  logo: string;
  screenshot: string;
  category: string;
  featured: boolean;
  x: string;
  github: string;
  linkedin: string;
}

const HomePageContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const categorySet = new Set(data.map((item: DocItem) => item.category));
    return Array.from(categorySet).sort();
  }, []);

  const filteredAndSortedData = useMemo(() => {
    const filtered = data.filter(
      (item: DocItem) =>
        (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!selectedCategory || item.category === selectedCategory)
    );
    return filtered.sort((a, b) => a.title.localeCompare(b.title));
  }, [searchTerm, selectedCategory]);

  const featuredData = useMemo(
    () => filteredAndSortedData.filter((item) => item.featured),
    [filteredAndSortedData]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategory && categoriesRef.current) {
      categoriesRef.current.scrollIntoView();
    }
  }, [selectedCategory]);

  return (
    <main className="max-w-5xl mx-auto md:pt-5 transition-colors duration-200 flex flex-col items-stretch gap-10 px-5 lg:px-0 overflow-x-hidden lg:overflow-x-visible">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {!searchTerm && !selectedCategory && (
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex flex-col pt-16 pb-16 lg:pb-32 gap-1 items-center max-w-3xl mx-auto relative"
        >
          <span className="text-2xl text-neutral-500 dark:text-neutral-300">
            ✲
          </span>
          <h1 className="text-lg text-neutral-500 dark:text-neutral-300 font-semibold">
            awesome-docs.gallery
          </h1>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-neutral-950 dark:from-neutral-100 dark:via-neutral-300 via-neutral-600 dark:to-neutral-400 to-neutral-500 text-balance text-center !leading-tight !tracking-tight">
            A crowdsourced, open-source gallery for high-quality dev docs.
          </h2>
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
      )}
      {!searchTerm && !selectedCategory && featuredData.length > 0 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl font-bold mb-5 mx-4 scroll-mt-28"
            id="featured"
            variants={itemVariants}
          >
            Featured
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
          >
            {featuredData.map((item) => (
              <div key={item.id}>
                <motion.div variants={itemVariants} className="h-full">
                  <DocCard {...item} />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 min-h-svh">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={`md:col-span-1 scroll-mt-24 ${
            selectedCategory ? "block" : "hidden md:block"
            }`}
          ref={categoriesRef}
          id="categories"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold mb-5 mx-4 scroll-mt-28"
          >
            Categories
          </motion.h2>
          <motion.ul
            variants={itemVariants}
            className="space-y-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            {selectedCategory && (
              <li>
                <button
                  className="px-4 py-2 border border-red-500 rounded-md w-full text-left text-red-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  onClick={() => setSelectedCategory(null)}
                >
                  Clear filter
                </button>
              </li>
            )}
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`px-4 py-2 rounded-md w-full text-left ${
                    selectedCategory === category
                    ? "bg-neutral-950 text-neutral-50 dark:bg-neutral-800 dark:text-white"
                    : "hover:bg-neutral-200 dark:hover:bg-neutral-800"
                    }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="md:col-span-2"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold mb-5 mx-4 scroll-mt-28"
          >
            All docs
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch"
          >
            {filteredAndSortedData.length > 0 ? (filteredAndSortedData.map((item) => (
              <div key={item.id}>
                <motion.div variants={itemVariants} className="h-full">
                  <DocCard {...item} />
                </motion.div>
              </div>
            ))) : (
            <div className="flex flex-col ml-4">
              <h4 className="font-medium text-lg text-slate-300 md:whitespace-nowrap">
                Whoops! No results found. Try a new keyword or phrase.
              </h4>
              <Image src="https://cdn.hashnode.com/res/hashnode/image/upload/v1634545140037/TJzLog6cK.png" alt="no results found" width={400} height={300} />
            </div>
          )}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default HomePageContent;
