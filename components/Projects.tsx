'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Github, Globe } from 'lucide-react'
import Image from 'next/image'
import { Skill } from './Skill'
import { ScrollArea } from './ui/scroll-area'

type Project = {
  id: number
  name: string
  shortDescription: string
  longDescription: string
  skills: { icon: string; name: string }[];
  liveLink?: string
  githubLink?: string
  image?: string
}

// TODO: Add live link

const projects: Project[] = [
  {
    id: 1,
    name: 'Texas A&M Course Recommender',
    shortDescription: 'Helps students find courses that match their interests and preferences',
    longDescription: 'Designed and developed a course recommendation service for over 10,000 courses at Texas A&M by\
collaborating with a team of researchers to implement Chroma DB vector database, Llama 3.1 LLM, and Retrieval Augmented Generation\
(RAG) pipelines using LangGraph, significantly enhancing the course selection process by providing personalized recommendations',    
    // liveLink: 'https://project1.com',
    githubLink: 'https://github.com/rushiljay/Aggie-Course-Recommender',
    image: '/CourseRecommender.png',
    skills: [
      {icon: 'https://cdn.simpleicons.org/sqlite', name: 'Sqlite'},
      {icon: 'https://cdn.simpleicons.org/langchain', name: 'LangChain'},
      {icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtQY9Ofk71m8DVL5yV3d_sDPuqzCexABNLA&s', name: 'Groq'},
      {icon: 'https://cdn.simpleicons.org/python', name: 'Python'},
      {icon: 'https://cdn.simpleicons.org/ollama', name: 'Ollama'},
      {icon: 'https://cdn.simpleicons.org/meta', name: 'Llama 3.1'},]
  },
  {
    id: 2,
    name: 'Grocery List Item Categorization App',
    image: '/GroceryList.png',
    shortDescription: 'Streamline the grocery shopping experience through item categorization using NLP',
    longDescription: ' Developed a grocery list application to streamline the shopping experience by efficiently categorizing\
items, integrating the RoBERTa-Base transformer model with Spacy for precise categorization, and creating a user-friendly interface using\
HTML/CSS and React.js, while powering backend processes with FastAPI, resulting in a more organized and time-saving experience for users',
    skills: [
      {icon: 'https://cdn.simpleicons.org/fastapi', name: 'FastAPI'},
      {icon: 'https://cdn.simpleicons.org/spacy', name: 'Spacy'},
      {icon: 'https://cdn.simpleicons.org/html5', name: 'HTML'},
      {icon: 'https://cdn.simpleicons.org/css3', name: 'CSS'},
      {icon: 'https://cdn.simpleicons.org/react', name: 'React'},
      {icon: 'https://cdn.simpleicons.org/python', name: 'Python'},
      {icon: 'https://cdn.simpleicons.org/jupyter', name: 'Jupyter'},],
    githubLink: 'https://github.com/rushiljay/Grocery-List-AI-App'
  },
  {
    id: 3,
    name: 'GrowFolio',
    shortDescription: 'Comprehensive stock research app leveraging real-time data analysis, predictive analytics, AI-driven insights',
    longDescription: "Developed an AI-powered chatbot to assist with investment decision-making by interpreting \
financial data. Utilized Streamlit and Groq's Llama3 70b model, along with Retrieval Augmented Generation within LangChain, to fetch and \
analyze data from Yahoo Finance and Wikipedia. The assistant enhanced users' understanding of the stock market, improving decision-making \
accuracy and engagement. Image above is a conceptual representation of the GrowFolio app",
    skills: [
      {icon: 'https://cdn.simpleicons.org/streamlit', name: 'Streamlit'},
      {icon: 'https://cdn.simpleicons.org/fastapi', name: 'FastAPI'},
      {icon: 'https://cdn.simpleicons.org/meta', name: 'Llama 3.1'},
      {icon: 'https://cdn.simpleicons.org/python', name: 'Python'},
      {icon: 'https://cdn.simpleicons.org/langchain', name: 'LangChain'},
      {icon: 'https://cdn.simpleicons.org/ollama', name: 'Ollama'},
      {icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtQY9Ofk71m8DVL5yV3d_sDPuqzCexABNLA&s', name: 'Groq'},
    ],
    // liveLink: 'https://project3.com',
    githubLink: 'https://github.com/rushiljay/GrowFolio',
    image: '/GrowFolio.png'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="min-h-fit bg-gradient-to-br from-background to-muted rounded-xl p-10 mb-32">
    <h2 className="text-4xl font-bold mb-3">Projects</h2>
    <p className="text-sm font-light mb-6">Click on any project to view more detailed information</p>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black dark:bg-white text-card-foreground rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" onClick={() => setSelectedProject(project)}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl text-white dark:text-black font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, index) => (
                        <Skill key={index} icon={skill.icon} name={skill.name} />
                    ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                {project.liveLink && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubLink && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project | null, onClose: () => void }) {
  if (!project) return null

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {project.image && (
            <div className="mb-4">
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={300}
                className="rounded-md object-cover w-full h-[300px] max-h-[300px]"
              />
            </div>
          )}
          <ScrollArea className="max-h-[192px] overflow-y-auto mb-4">
            <p className="text-muted-foreground">{project.longDescription}</p>
          </ScrollArea>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill, index) => (
                        <Skill key={index} icon={skill.icon} name={skill.name} />
                    ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {project.liveLink && (
              <Button asChild variant="outline">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubLink && (
              <Button asChild variant="outline">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}