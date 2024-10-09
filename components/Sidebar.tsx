"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PanelLeftClose, PanelLeftOpen, FolderOpenDot, GraduationCap, Briefcase } from "lucide-react"
import PersonCard from "./PersonCard"

const MOBILE_BREAKPOINT = 768 // in pixels

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT
      setIsMobile(mobile)
      if (mobile) {
        setIsOpen(false)
      }
    }
  
    window.addEventListener('resize', handleResize)
    handleResize() // Check initial size
  
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const sidebarButtons = [
    { title: "Experience", icon: Briefcase, href: "#experiences" },
    { title: "Education", icon: GraduationCap, href: "#education" },
    { title: "Projects", icon: FolderOpenDot, href: "#projects" },
  ]

  // Base classes for buttons
  const buttonBaseClass = 'text-lg font-semibold p-2 space-x-2'

  // Reusable SidebarButton component
  const SidebarButton = ({ title, icon: Icon, href, onClick, tooltip }: { title: string, icon: React.ComponentType<{ className?: string }>, href?: string, onClick?: React.MouseEventHandler, tooltip?: string }) => (
    <Button
      title={tooltip}
      className={`${buttonBaseClass} ${
        isOpen
          ? 'justify-start w-full'
          : 'justify-center w-full'
      }`}
      onClick={onClick}
    >
      <Icon className={`h-5 w-5 ${isOpen && 'ml-2'}`} />
      {isOpen && <span>{title}</span>}
    </Button>
  )

  return (
    <div
      className={`flex flex-col min-h-screen h-full py-5 px-2.5 transition border-r justify-between backdrop-blur-3xl ${
        isMobile
          ? isOpen
            ? 'fixed inset-0 z-10 w-full max-w-full'
            : 'w-16'
          : isOpen
            ? 'min-w-[350px] max-w-[350px]'
            : 'w-16'
      }`}
    >
      <div>
        <div className="border-b-2 pb-10">
          <PersonCard showDetails={isOpen} />
          <div className="flex-none">
            <SidebarButton
              title="Close"
              icon={isOpen ? PanelLeftClose : PanelLeftOpen}
              onClick={toggleSidebar}
              tooltip={isOpen ? "Collapse" : "Expand"}
            />
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <div className={`flex flex-col space-y-4 w-full`}>
            {sidebarButtons.map((button) => (
              <a key={button.title} href={button.href}>
                <SidebarButton
                  title={button.title}
                  icon={button.icon}
                  tooltip={button.title}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
