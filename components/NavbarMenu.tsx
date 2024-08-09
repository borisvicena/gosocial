"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ui/ThemeToggle";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-black-100/[0.2] dark:bg-transparent dark:border-white/[0.2] inset-x-0 z-50",
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
          </div>
        </MenuItem>
        {/* TODO !!! */}
        <HoveredLink href="/contact">Contact</HoveredLink>
      </Menu>
    </div>
  );
}

export default Navbar;
