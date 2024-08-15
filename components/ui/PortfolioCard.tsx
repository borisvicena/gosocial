"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

type PortfolioCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  logoSrc: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ imageSrc, title, description, link, logoSrc }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:bg-black-100/[0.5] dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] lg:w-[40rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full">
          <Image
            src={imageSrc}
            height="1000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            See project →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Visit client
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default PortfolioCard;
