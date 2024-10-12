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
                    {icon: 'https://cdn.simpleicons.org/jenkins', name: 'Jenkins'},
                    {icon: 'https://cdn.simpleicons.org/kubernetes', name: 'Kubernetes'},
                    {icon: 'https://cdn.simpleicons.org/git', name: 'Git'},
                    {icon: 'https://cdn.simpleicons.org/python', name: 'Python'},
                    {icon: 'https://cdn.simpleicons.org/postman', name: 'Postman'},
                    {icon: 'https://cdn.simpleicons.org/apachegroovy', name: 'Groovy'},
                    {icon: 'https://cdn.simpleicons.org/docker', name: 'Docker'},
                    {icon: 'https://cdn.simpleicons.org/redhatopenshift', name: 'OpenShift'},
                    {icon: 'https://cdn.simpleicons.org/googlecloud', name: 'Google Cloud'},
                    {icon: 'https://cdn.simpleicons.org/bitbucket', name: 'BitBucket'},
                    {icon: 'https://cdn.simpleicons.org/jira', name: 'Jira'},
                    {icon: 'https://cdn.simpleicons.org/sonarqube', name: 'SonarQube'},
                    {icon: 'https://cdn.simpleicons.org/confluence', name: 'Confluence'},
                    {icon: 'https://cdn.simpleicons.org/pytest', name: 'PyTest'},
                    {icon: 'https://cdn.simpleicons.org/helm', name: 'Helm'},
                    {icon: 'https://cdn.simpleicons.org/flask', name: 'Flask'},   
                    {icon: 'https://cdn.simpleicons.org/googlegemini', name: 'Google Gemini'},
                    {icon: 'https://cdn.simpleicons.org/googlecloudstorage', name: 'Google Cloud Storage'},
                    {icon: 'https://cdn.simpleicons.org/github', name: 'Github'},
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
                    {icon: 'https://swimburger.net/media/ppnn3pcl/azure.png', name: 'Azure'},
                    {icon: 'https://cdn.simpleicons.org/python', name: 'Python'},
                    {icon: 'https://cdn.simpleicons.org/openai', name: 'OpenAI'},
                    {icon: 'https://cdn.simpleicons.org/docker', name: 'Docker'},
                    {icon: 'https://cdn.simpleicons.org/langchain', name: 'Langchain'},
                ]
            },
            {
                title: "Cloud Engineering Intern",
                startDate: "January 2023",
                endDate: "September 2023",
                description: "Optimizing Financial Data <strong>ETL Pipelines</strong> 💼🚀 & AWS <strong>Infrastructure as Code</strong> (IaC) 🌩️🔧",
                skills: [
                    {icon: 'https://cdn.simpleicons.org/amazonwebservices', name: 'AWS'},
                    {icon: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hY2M3M2RiNTFjNmE3NzIxYTIzNDAzNTQ0OWQ4MzgwOT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.xgNJFrB8Tz89BFgDaybQOp1e54UfUv7VeqayL_Piddg', name: 'AWS Cloud Development Kit'},
                    {icon: 'https://cdn.simpleicons.org/python', name: 'Python'},
                    {icon: 'https://cdn.simpleicons.org/typescript', name: 'Typescript'},
                    {icon: 'https://cdn.simpleicons.org/amazons3', name: 'Amazon S3'},
                    {icon: 'https://cdn.simpleicons.org/awslambda', name: 'AWS Lambda'},
                    {icon: 'https://d3g9o9u8re44ak.cloudfront.net/logo/40c0988b-b7ec-4c51-9732-5fd3c7d52928/96ad06d5-cf24-4ffe-94fb-5d3085d7d3eb.png', name: 'AWS Glue'},
                    {icon: 'https://static-00.iconduck.com/assets.00/analytics-amazonathena-icon-2048x2028-16si4o29.png', name: 'Amazon Athena'},
                    {icon: 'https://cdn.simpleicons.org/amazoniam', name: 'Amazon Identity Access Management'},
                    {icon: 'https://cdn.simpleicons.org/confluence', name: 'Confluence'},
                ]
            },
            {
                title: "Incubation Engineering Intern",
                startDate: "February 2022",
                endDate: "December 2022",
                description: "<strong>Full-Stack</strong> web app development for US Bank Data 📊",
                skills: [
                    {icon: 'https://cdn.simpleicons.org/blazor', name: 'Blazor'},
                    {icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsu9DT1XLVF5b0A-LgCJr0RdXhHJL6CXuhbw&s', name: 'Syncfusion'},
                    {icon: 'https://cdn.simpleicons.org/dotnet', name: '.NET'},
                    {icon: 'https://cdn.simpleicons.org/postman', name: 'Postman'},
                    {icon: 'https://cdn.simpleicons.org/jira', name: 'Jira'},
                    {icon: 'https://cdn.simpleicons.org/codacy', name: 'Codacy'},

                ]
            },
        ]
        
    },
    {
        name: "Mathnasium",
        logo: "./MathnasiumA+.webp",
        location: "Remote",
        positions: [
            {
                title: "Math Instructor",
                startDate: "April 2021",
                endDate: "April 2023",
                description: "🌟 Encouraged mastery in thousands of math concepts (K-12) by leveraging Socratic questioning. 🤔📐",
                skills: [
                    // {icon: 'https://cdn.simpleicons.org/python', name: 'Python'},
                    // {icon: 'https://cdn.simpleicons.org/cplusplus', name: 'C++'},
                    // {icon: 'https://cdn.simpleicons.org/c', name: 'C'},
                    // {icon: 'https://cdn.simpleicons.org/gcc', name: 'GCC'},
                    // {icon: 'https://cdn.simpleicons.org/clang', name: 'Clang'},
                ]
            }
        ]
    },
    {
        name: "City of Cupertino",
        logo: "./Seal_of_Cupertino,_California.svg.png",
        location: "Cupertino, CA",
        positions: [
            {
                title: "Chair - Cupertino Teen Commission",
                startDate: "August 2020",
                endDate: "August 2021",
                description: "👥 Chaired a teen group representing 15k youth, managing a $10k budget, organizing events like hackathons and political discussions, and advising City Council on youth issues, even transitioning events online. 💼💻🎉",
                skills: []
            },
            {
                title: "Vice Chair - Cupertino Teen Commission",
                startDate: "August 2029",
                endDate: "August 2020",
                description: "🎓 Represented thousands of teens in Cupertino events, facilitated mental health, civic engagement, and environmental initiatives, and advised the school district on reopening measures. 🌱🧠🏫",
                skills: []
            }
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