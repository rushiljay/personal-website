import Image from "next/image"
import { Skill } from "./Skill"

interface EducationProps {
    university: string;
    degree: string;
    duration: string;
    description: string;
    skills: { icon: string; name: string }[];
    icon: string; // Added icon property
}

export default function Education({
    university = "University Name",
    degree = "Degree",
    duration = "Duration",
    description = "Description",
    skills = [],
    icon = "/placeholder.svg?height=56&width=56", // Default icon value
}: EducationProps) {
    return (
        <div className="w-full h-fit max-w-2xl mx-auto p-6">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ">
                <Image
                    src={icon} // Use the icon from props
                    alt="University logo"
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                />
                <div className="flex-1 space-y-2 text-center md:text-left">
                    <h3 className="text-lg font-semibold text-black">{university}</h3>
                    <p className="text-sm text-muted-foreground text-gray-800">{degree}</p>
                    <p className="text-sm text-muted-foreground text-gray-500">{duration}</p>
                </div>
            </div>
            <div className="pt-2">
                <div className="flex flex-wrap gap-1 justify-center md:justify-start">
                    {skills.map((skill, index) => (
                        <Skill key={index} icon={skill.icon} name={skill.name} />
                    ))}
                </div>
            </div>
            <p className="text-sm pt-2 text-gray-800">
                Lorem Impsum Dolor
            </p>
        </div>
    )
}
