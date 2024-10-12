import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
Github,
Linkedin,
Mail

} from "lucide-react";


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
      href: "mailto:rushil.jayant@gmail.com",
    },
    {
      title: "Linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/rushiljay/",
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
