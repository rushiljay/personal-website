import { CalendarIcon, MapPinIcon, LucideIcon } from "lucide-react"
import React from "react"
import { Skill } from "./Skill"
import type { SkillProps } from "./Skill"

type Position = {
    title: string
    startDate: string
    endDate: string
    description: string
    skills: SkillProps[]
}

type Company = {
  name: string
  logo: string
  location: string
  positions: Position[]
}

type ExperienceSectionProps = {
  experiences: Company[]
}

const PositionEntry = ({ position }: { position: Position }) => (
  <div className="mb-4 last:mb-0">
    <h4 className="text-lg font-semibold">{position.title}</h4>
    <p className="text-sm text-muted-foreground flex items-center">
      <CalendarIcon className="mr-1 h-4 w-4" />
      {position.startDate} - {position.endDate}
    </p>
    <div className="mt-2 text-sm" dangerouslySetInnerHTML={{ __html: position.description }} />
    <div className="mt-3 flex flex-wrap gap-2">
      {position.skills.map((skill, index) => (
        <Skill key={index} icon={skill.icon} name={skill.name} color={skill.color} />
      ))}
    </div>
  </div>
)

const CompanyEntry = ({ company }: { company: Company }) => (
  <div className="mb-6 last:mb-0">
    <div className="flex items-start">
      <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12 mr-4" />
      <div>
        <h3 className="text-xl font-bold">{company.name}</h3>
        <p className="text-sm text-muted-foreground flex items-center">
          <MapPinIcon className="mr-1 h-4 w-4" />
          {company.location}
        </p>
      </div>
    </div>
    <div className="mt-4 border-l-2 border-muted pl-4">
      {company.positions.map((position, index) => (
        <PositionEntry key={index} position={position} />
      ))}
    </div>
  </div>
)

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <div className="max-w-full mx-auto p-8">
      <h2 className="text-4xl font-bold mb-6">Experience</h2>
      <div className="bg-background/60 backdrop-blur-lg border border-border rounded-lg shadow-lg p-6">
        {experiences.map((company, index) => (
          <CompanyEntry key={index} company={company} />
        ))}
      </div>
    </div>
  )
}