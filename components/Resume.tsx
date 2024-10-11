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
                    {icon: '<svg fill="#3776AB" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>', name: 'Python'}
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