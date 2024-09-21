"use client";
import React, { useEffect, useRef, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const sections = useRef(["hero", "services", "portfolio", "about", "testimonials", "cta"]);

  const getBorderColor = () => {
    switch (active) {
      case "services":
        return "border-b-2 border-orange-500";
      case "portfolio":
        return "border-b-2 border-pink-500";
      case "about":
      case "testimonials":
        return "border-b-2 border-blue-500";
      case "hero":
      case "cta":
      default:
        return "border-white/[0.2]";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sections.current.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.current.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-white/[0.2] dark:bg-transparent inset-x-0 z-50 transition-all duration-700",
        getBorderColor(),
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-development">Web Development</HoveredLink>
            <HoveredLink href="/mobile-app-development">Mobile App Development</HoveredLink>
            <HoveredLink href="/digital-marketing">Digital Marketing</HoveredLink>
            <HoveredLink href="/content-creation">Content Creation</HoveredLink>
            <HoveredLink href="/branding-and-identity">Branding & Identity</HoveredLink>
            <HoveredLink href="/ui-and-ux-design">UI/UX Design</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-1 gap-10 p-4">
            <ProductItem
              title="GoSocial Platform"
              description="Build your online success now."
              href="#"
              src="/platform.jpg"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#about">Meet the team</HoveredLink>
            <HoveredLink href="/#about">Our Mission</HoveredLink>
            <HoveredLink href="/#about">Our Values</HoveredLink>
            <HoveredLink href="/#about">Our Journey</HoveredLink>
            <HoveredLink href="/contact">Contact</HoveredLink>
          </div>
        </MenuItem>
        <ThemeToggle />
      </Menu>
    </div>
  );
}

export default Navbar;
