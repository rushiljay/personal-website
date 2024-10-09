"use client"

import Experiences from "./Experiences"

const experiences = [
    {
        name: "Deutsche Bank",
        logo: "DeutscheBank.png",
        location: "Cary, NC",
        positions: [
            {
                title: "Software Engineering Intern",
                startDate: "June 2024",
                endDate: "August 2024",
                description: '<ul className="mt-2 list-disc list-inside"> \
  <li key={1} className="mb-4"><strong>Cloud-Native Automated Test Compliance</strong> ⚙️☁️ tool for <strong>Investment Banking</strong> 💼 technology \n \
  <li key={2} className="mb-4"><strong>Retrieval-Augmented Generation (RAG)</strong> application 🤖🔄 to streamline <strong>ESG Reporting</strong> 🌱📊</li>\
</ul>',
                skills: [
                    // { icon: PanelTop, name: "Web", color: "#61DAFB" },
                    // { icon: Database, name: "SQL", color: "#336791" },
                    // { icon: Cloud, name: "AWS", color: "#FF9900" }
                ]
            }
        ]
    },
    {
        name: "Derivative Path",
        logo: "DerivativePath.png",
        location: "Remote",
        positions: [
            {
                title: "Machine Learning Engineering Intern",
                startDate: "October 2023",
                endDate: "April 2024",
                description: "<strong>Real-time</strong> AI financial news application 📈",
                skills: [
                    // { icon: PanelTop, name: "React Native", color: "#61DAFB" },
                    // { icon: "<svg viewBox='0 0 24 24'><path fill='currentColor' d='M12 18.08c-6.63 0-12-2.72-12-6.08s5.37-6.08 12-6.08S24 8.64 24 12s-5.37 6.08-12 6.08zm-9.58-6.08c0 3.36 4.3 6.08 9.58 6.08s9.58-2.72 9.58-6.08-4.3-6.08-9.58-6.08-9.58 2.72-9.58 6.08z'/><path fill='currentColor' d='M12 20.07c-3.95 0-7.16-3.21-7.16-7.16S8.05 5.75 12 5.75s7.16 3.21 7.16 7.16-3.21 7.16-7.16 7.16zm-5.16-7.16c0 2.85 2.31 5.16 5.16 5.16s5.16-2.31 5.16-5.16S14.85 7.75 12 7.75s-5.16 2.31-5.16 5.16z'/><circle fill='currentColor' cx='12' cy='12.91' r='2.5'/></svg>", name: "Jest", color: "#C21325" }
                ]
            },
            {
                title: "Cloud Engineering Intern",
                startDate: "January 2023",
                endDate: "September 2023",
                description: "Optimizing Financial Data <strong>ETL Pipelines</strong> 💼🚀 & AWS <strong>Infrastructure as Code</strong> (IaC) 🌩️🔧",
                skills: [
                    // { icon: PanelTop, name: "React Native", color: "#61DAFB" },
                    // { icon: "<svg viewBox='0 0 24 24'><path fill='currentColor' d='M12 18.08c-6.63 0-12-2.72-12-6.08s5.37-6.08 12-6.08S24 8.64 24 12s-5.37 6.08-12 6.08zm-9.58-6.08c0 3.36 4.3 6.08 9.58 6.08s9.58-2.72 9.58-6.08-4.3-6.08-9.58-6.08-9.58 2.72-9.58 6.08z'/><path fill='currentColor' d='M12 20.07c-3.95 0-7.16-3.21-7.16-7.16S8.05 5.75 12 5.75s7.16 3.21 7.16 7.16-3.21 7.16-7.16 7.16zm-5.16-7.16c0 2.85 2.31 5.16 5.16 5.16s5.16-2.31 5.16-5.16S14.85 7.75 12 7.75s-5.16 2.31-5.16 5.16z'/><circle fill='currentColor' cx='12' cy='12.91' r='2.5'/></svg>", name: "Jest", color: "#C21325" }
                ]
            },
            {
                title: "Incubation Engineering Intern",
                startDate: "February 2022",
                endDate: "December 2022",
                description: "<strong>Full-Stack</strong> web app development for US Bank Data 📊",
                skills: [
                    // { icon: PanelTop, name: "React Native", color: "#61DAFB" },
                    // { icon: "<svg viewBox='0 0 24 24'><path fill='currentColor' d='M12 18.08c-6.63 0-12-2.72-12-6.08s5.37-6.08 12-6.08S24 8.64 24 12s-5.37 6.08-12 6.08zm-9.58-6.08c0 3.36 4.3 6.08 9.58 6.08s9.58-2.72 9.58-6.08-4.3-6.08-9.58-6.08-9.58 2.72-9.58 6.08z'/><path fill='currentColor' d='M12 20.07c-3.95 0-7.16-3.21-7.16-7.16S8.05 5.75 12 5.75s7.16 3.21 7.16 7.16-3.21 7.16-7.16 7.16zm-5.16-7.16c0 2.85 2.31 5.16 5.16 5.16s5.16-2.31 5.16-5.16S14.85 7.75 12 7.75s-5.16 2.31-5.16 5.16z'/><circle fill='currentColor' cx='12' cy='12.91' r='2.5'/></svg>", name: "Jest", color: "#C21325" }
                ]
            },
        ]
    }
]

export default function Resume() {
  return (
    <div className="min-h-fit bg-gradient-to-br from-background to-muted rounded-xl">
      <Experiences experiences={experiences} />
    </div>
  )
}