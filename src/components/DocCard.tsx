import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

interface DocCardProps {
  id: number;
  title: string;
  description: string;
  link: string;
  logo: string;
  screenshot: string;
  category: string;
  x: string;
  github: string;
  linkedin: string;
  linkText?: string;
}

const DocCard: React.FC<DocCardProps> = ({
  title,
  description,
  link,
  logo,
  screenshot,
  x,
  github,
  linkedin,
  linkText = "View Documentation",
}) => {
  const modifiedLink = `${link}?utm_source=awesome-docs.gallery`;

  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg h-full dark:border-neutral-800 dark:bg-neutral-900">
      <CardContent className="p-0 relative">
        {screenshot && (
          <div className="w-full pt-[52.5%] relative overflow-hidden transform scale-[1.02] hover:scale-105 transition duration-100">
            <Image src={screenshot} alt={title + " screenshot"} fill />
            <div className="bg-gradient-to-b group-hover:opacity-0 opacity-100 from-neutral-950/0 via-neutral-950/10 to-neutral-950/20 absolute top-0 left-0 right-0 bottom-0 z-10"></div>
          </div>
        )}
        {logo && (
          <Link
            href={modifiedLink}
            target="_blank"
            rel="noopener"
            className="absolute left-5 -bottom-8 shadow-md border dark:border-neutral-800 bg-neutral-100 rounded-full overflow-hidden w-16 h-16 z-20"
          >
            <img
              src={logo}
              alt={title + " logo"}
              className="w-full h-full block"
            />
          </Link>
        )}
      </CardContent>
      <CardHeader className={`flex-1 ${logo ? "pt-14" : ""}`}>
        <CardTitle className="dark:text-neutral-50">{title}</CardTitle>
        <CardDescription className="dark:text-neutral-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-row items-center justify-between">
        {link && (
          <Button asChild variant="outline">
            <Link href={modifiedLink} target="_blank" rel="noopener">
              <span>{linkText}</span>
            </Link>
          </Button>
        )}
        <div className="text-sm text-neutral-500 flex flex-row items-center gap-2">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener"
              className="hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6.1-11.4.1-28.8.1-43.7 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 9 .1 21.7.1 30.6 0 4.8.1 8.6.1 10 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3-1.9.4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4 0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1-.9 1.1-2.8.9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9 1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1-.9.6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5-.9.9-2.4.4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6-.4.9-1.7 1.1-2.8.4z"
                />
              </svg>
            </Link>
          )}
          {x && (
            <Link
              href={x}
              target="_blank"
              rel="noopener"
              className="hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"
                />
              </svg>
            </Link>
          )}
          {linkedin && (
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener"
              className="hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default DocCard;
