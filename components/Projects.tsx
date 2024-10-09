'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Github, Globe } from 'lucide-react'
import Image from 'next/image'
import { Skill } from './Skill'

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

const projects: Project[] = [
  {
    id: 1,
    name: 'Project 1',
    shortDescription: 'A brief overview of Project 1.',
    longDescription: 'Project 1 was an ambitious undertaking that involved creating a full-stack web application. It utilized React for the frontend, Node.js with Express for the backend, and MongoDB for the database. The project aimed to solve real-world problems by providing users with a platform to manage their daily tasks efficiently.',
    skills: [{icon: '', name: 'Python'}],
    liveLink: 'https://project1.com',
    githubLink: 'https://github.com/username/project1',
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 2,
    name: 'Project 2',
    shortDescription: 'A quick summary of Project 2.',
    longDescription: 'Project 2 focused on developing a mobile application using React Native. The app was designed to help users track their fitness goals and provide personalized workout plans. It integrated with various fitness APIs and used Firebase for real-time data synchronization and user authentication.',
    skills: [{icon: '', name: 'Python'}],
    githubLink: 'https://github.com/username/project2'
  },
  {
    id: 3,
    name: 'Project 3',
    shortDescription: 'An overview of Project 3.',
    longDescription: 'Project 3 was a machine learning project that utilized Python and TensorFlow to create a predictive model for stock market trends. The project involved data collection, preprocessing, model training, and deployment. A web interface was also created using Flask to allow users to interact with the model and visualize predictions.',
    skills: [{icon: '', name: 'Python'}],
    liveLink: 'https://project3.com',
    githubLink: 'https://github.com/username/project3',
    image: '/placeholder.svg?height=200&width=300'
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
                className="rounded-md object-cover w-full"
              />
            </div>
          )}
          <p className="text-muted-foreground mb-4">{project.longDescription}</p>
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