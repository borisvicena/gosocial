"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50", className)}>
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
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
