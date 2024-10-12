"use client"

import { useEffect, useRef } from "react"
import { NeonGradientCard } from "./ui/neon-gradient-card"
import ShineBorder from "./ui/shine-border"

export function Hero() {
  const gradientRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const gradientElement = gradientRef.current
    if (gradientElement) {
      const updateAnimation = () => {
        const rect = gradientElement.getBoundingClientRect()
        gradientElement.style.setProperty('--bg-size', `${rect.width * 3}px`)
      }
      updateAnimation()
      window.addEventListener('resize', updateAnimation)
      return () => window.removeEventListener('resize', updateAnimation)
    }
  }, [])

  return (
    <div className="flex flex-col mt-10 mb-0">
      <h1 className="sr-only">Rushil Jayant's Personal Website</h1>
      <p className="text-4xl md:text-6xl font-bold text-primary mb-2">Hello! I&apos;m</p>
      <p
        ref={gradientRef}
        className="text-6xl md:text-8xl font-extrabold animate-gradient bg-gradient-to-r from-orange-400 via-purple-500 to-orange-400 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
        style={{
          lineHeight: '1.2',
          ['--bg-size' as any]: '300%',
        }
      }
      >
        Rushil Jayant
      </p>
    </div>
  )
}