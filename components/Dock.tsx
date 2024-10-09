import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
Github,
Linkedin,
Mail

} from "lucide-react";
import Image from "next/image";

export function Dock() {
  const links = [
    {
      title: "Github",
      icon: (
        <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/rushiljay",
    },

    {
      title: "Mail",
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    
  ];
  return (
    <div className="flex items-center justify-center h-[6rem] w-full fixed bottom-0">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
