import React from "react"
import Image from 'next/image'

export type SkillProps = {
    icon: string | React.ReactElement
    name: string
}

export function Skill({ icon, name}: SkillProps) {
  const iconElement = React.isValidElement(icon) ? (
    React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4" })
  ) : typeof icon === "string" && icon.startsWith("http") ? (
    <Image src={icon} alt={name} className="w-4 h-4" width={16} height={16} />
  ) : (
    <span
      className="w-4 h-4"
      dangerouslySetInnerHTML={{ __html: icon as string }}
    />
  )

  return (
    <div className="w-fit flex items-center space-x-2 p-2 bg-white rounded-lg shadow-md ">
      {iconElement}
      <span className="text-xs font-medium text-black">{name}</span>
    </div>
  )
}
