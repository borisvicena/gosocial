import React from "react";
import { FiMessageSquare, FiTwitter, FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const LightFooter = () => {
  const iconStyles = {
    base: "flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-slate-600 rounded-full w-8 h-8",
    hoverFocus:
      "focus:bg-[#DA22FF] hover:text-white focus:text-white hover:bg-[#DA22FF] hover:border-[#DA22FF] focus:border-[#DA22FF]",
  };

  const linkClasses = {
    base: "flex text-sm text-slate-400 transition-all duration-200",
    hoverFocus: "hover:text-[#DA22FF] focus:text-[#DA22FF]",
  };

  return (
    <section className="py-10 dark:bg-black-100 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <Image
              className="w-auto h-10"
              src="/gosocial.png" // Path to Aura UI logo
              alt="GoSocial Logo"
              width={150}
              height={36}
            />
            <p className="text-base leading-relaxed text-slate-400 mt-7">
              Developing websites with passion and attention to detail.
            </p>
          </div>

          {[
            {
              title: "Company",
              links: ["About", "Features", "Works", "Career"],
            },
            {
              title: "Help",
              links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
            },
            {
              title: "Resources",
              links: ["Free eBooks", "Development Tutorial", "How to - Blog", "YouTube Playlist"],
            },
            {
              title: "Extra Links",
              links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
            },
          ].map((section, index) => (
            <div className="lg:col-span-2" key={index}>
              <p className="text-base font-semibold dark:text-white">{section.title}</p>
              <ul className="mt-6 space-y-5">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href="#" title={link} className={`${linkClasses.base} ${linkClasses.hoverFocus}`}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="mt-16 mb-10 border-white/[0.2]" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">© Copyright 2024, All Rights Reserved by GoSocial | Boris Vicena</p>

          <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
            {[
              {
                icon: <FiTwitter className="w-4 h-4" />,
                href: "https://twitter.com",
              },
              {
                icon: <FiFacebook className="w-4 h-4" />,
                href: "https://facebook.com",
              },
              {
                icon: <FiInstagram className="w-4 h-4" />,
                href: "https://instagram.com",
              },
              {
                icon: <FiGithub className="w-4 h-4" />,
                href: "https://github.com",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${iconStyles.base} ${iconStyles.hoverFocus}`}
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LightFooter;
