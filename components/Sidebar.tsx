"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PanelLeftClose, PanelLeftOpen, FolderOpenDot, GraduationCap, Award, Briefcase } from "lucide-react"
import PersonCard from "./PersonCard"
import classNames from 'classnames';
import { ResizablePanel } from "./ui/resizable"
import { ModeToggle } from "./ModeToggle"

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
    { title: "Experience", icon: Briefcase },
    { title: "Projects", icon: FolderOpenDot },
    { title: "Education", icon: GraduationCap },
  ]

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
        <PersonCard showDetails={isOpen}/>
        <div className="flex-none ">
        <Button
          onClick={toggleSidebar}
          title={isOpen ? "collapse" : "expand"}
          className={`text-lg font-semibold ${
          isOpen
          ? 'p-2 space-x-2 justify-start px-2 w-full'
          : 'p-2 space-x-2 justify-center px-2 w-full'
          }`}
        >
          {isOpen ? (
          <>
            <PanelLeftClose className={`h-5 w-5 ${isOpen && 'ml-2'}`} /> <p>Close</p>
          </>
          ) : (
          <>
            <PanelLeftOpen className={`h-5 w-5` } />
          </>
          )}
        </Button>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <div className={`flex flex-col space-y-4 ${isOpen ? 'w-full' : 'w-full'}`}>
        {sidebarButtons.map((button) => (
          <Button
          key={button.title}
          title={button.title.toLowerCase()}
          className={`text-lg font-semibold ${
            isOpen
            ? 'p-2 space-x-2 justify-start w-full'
            : 'p-2 space-x-2 justify-center'
          }`}
          >
          <button.icon className={`h-5 w-5 ${isOpen && 'ml-2'}`} />
          {isOpen && <span>{button.title}</span>}
          </Button>
        ))}
        </div>
      </div>
      </div>

    </div>
  )
}