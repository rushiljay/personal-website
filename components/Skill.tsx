import React from "react"

export type SkillProps = {
    icon: string
    name: string
}

export function Skill({ icon, name}: SkillProps) {
  const iconElement = React.isValidElement(icon) ? (
    React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4" })
  ) : (
    <span
      className="w-4 h-4"
      dangerouslySetInnerHTML={{ __html: icon as string }}
    />
  )

  return (
    <div className="w-fit flex items-center space-x-2 p-2 bg-background rounded-lg border shadow-sm">
      {iconElement}
      <span className="text-xs font-medium">{name}</span>
    </div>
  )
}