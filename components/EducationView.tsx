"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Education from './EducationComponent'

// interface Tab {
//   id: number
//   title: string
//   content: React.ReactNode
// }



export default function EducationView() {
const tamuSkills = [
    { icon: 'https://cdn.simpleicons.org/python', name: 'Python'},
    { icon: 'https://cdn.simpleicons.org/cplusplus', name: 'C++'},
    { icon: 'https://cdn.simpleicons.org/r', name: 'R'},
    { icon: 'https://cdn.simpleicons.org/pytorch', name: 'PyTorch'},
    { icon: 'https://cdn.simpleicons.org/pandas', name: 'Pandas'},
    { icon: 'https://cdn.simpleicons.org/scipy', name: 'SciPy'},
    { icon: 'https://cdn.simpleicons.org/overleaf', name: 'Overleaf'},
    { icon: 'https://cdn.simpleicons.org/c', name: 'C'},
    { icon: 'https://cdn.simpleicons.org/numpy', name: 'Numpy'},
    { icon: 'https://cdn.simpleicons.org/postgresql', name: 'PostgreSQL'},
    { icon: 'https://cdn.simpleicons.org/selenium', name: 'Selenium'},
    { icon: 'https://cdn.simpleicons.org/vuedotjs', name: 'Vue.js'},
    { icon: 'https://cdn.simpleicons.org/django', name: 'Django'},
    { icon: 'https://cdn.simpleicons.org/springboot', name: 'SpringBoot'},
    { icon: 'https://cdn.simpleicons.org/vercel', name: 'Vercel'},
    { icon: 'https://cdn.simpleicons.org/pytest', name: 'PyTest'},
]

const foothillSkills = [
    { icon: 'https://cdn.simpleicons.org/mysql', name: 'MySQL'},
    { icon: 'https://cdn.simpleicons.org/numpy', name: 'Numpy'},
    { icon: 'https://cdn.simpleicons.org/python', name: 'Python'},
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg', name: 'Excel'},
    { icon: 'https://cdn.simpleicons.org/pandas', name: 'Pandas'},
    { icon: 'https://cdn.simpleicons.org/linux', name: 'Linux'},
    { icon: 'https://cdn.simpleicons.org/gnubash', name: 'Bash'},

]

const hhsSkills = [
    { icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg', name: 'Java'},
    { icon: 'https://cdn.simpleicons.org/github', name: 'Github'},
    { icon: 'https://cdn.simpleicons.org/eclipseide', name: 'Eclipse'},

]

const TAMU_educationSkills = "<ul> \
    <li><strong>📜 Scholarships:</strong> National Merit Scholar, President’s Endowed Scholar, Class of 1925 Scholar, National Merit Recognition Award</li> \
    <li><strong>🏅 Honors:</strong> Craig and Galen Brown Engineering Honors Program</li> \
    <li><strong>👥 Organizations:</strong> Aggie Coding Club, Aggie Data Science Club, Texas A&M Computing Society, TAMU Hack</li> \
    <li><strong>📚 Relevant Coursework:</strong> Machine Learning, Artificial Intelligence, Computer and Network Security, Parallel Computing, Statistical Computing</li> \
  </ul>";

const Foothill_educationSkills = "  <p>📘 Studied analytics, databases, programming, statistics, data structures, and algorithms at Foothill College through the Dual Enrollment program while in high school. 💻📊</p>";

const HHS_educationSkills = "   <h2>🎓Achievements</h2>\
  <p>👥 President of Investments Club, President of Data Science Club, Academic Center Tutor, COVID-19 Taskforce Member</p>\
  <p>🏅 Graduated with California State Seal of Biliteracy and Golden State Merit Diploma</p>";

const tabs = ([
    { id: 1, title: 'Texas A&M University', content:<Education university={'Texas A&M University'} degree={'Bachelors of Science in Computer Science and Minor in Statistics'} duration={'December 2024'} skills={tamuSkills} icon={'https://upload.wikimedia.org/wikipedia/commons/e/ee/Texas_A%26M_University_logo.svg'} description={TAMU_educationSkills}/>},
    { id: 2, title: 'Foothill College', content:<Education university={'Foothill College'} degree={'Certificate of Achievement: Advanced Software Engineering and Software Development in Python'} duration={'June 2022'} skills={foothillSkills} icon={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Foothill_College_logo.svg/2560px-Foothill_College_logo.svg.png'} description={Foothill_educationSkills}/>},
    { id: 3, title: 'Homestead High School', content:<Education university={'Homestead High School'} degree={'High School Diploma'} duration={'June 2022'} skills={hhsSkills} icon={'https://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/922/2017/07/07163913/5410.png'} description={HHS_educationSkills}/>},
])
  const [activeTab, setActiveTab] = useState<number>(1)

  const handleTabClick = (id: number) => {
    setActiveTab(id)
  }

  return (
    <div className="min-h-fit bg-gradient-to-br from-background to-muted rounded-xl p-10 mb-10">
    <h2 className="text-4xl font-bold mb-6">Education</h2>
    <div className="w-full max-w-4xl mx-auto bg-[#f0f0f0] rounded-t-lg overflow-hidden shadow-xl">
      <div className="bg-[#1e1e1e] dark:bg-[#ffffff] rounded-lg shadow-xl">
        <div className="bg-[#3a3a3a] dark:bg-[#e0e0e0] px-4 py-2 flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
        </div>
        </div>
      <div className="bg-[#dee1e6] flex items-center">
        <div className="flex-grow flex overflow-x-auto">
        {tabs.map(tab => (
            <motion.div
              key={tab.id}
              className={`relative px-4 py-2 text-sm cursor-pointer flex-shrink-0 max-w-[200px] min-w-[100px] ${
                activeTab === tab.id ? 'bg-white' : 'bg-[#f2f3f5] hover:bg-[#e8e8e8]'
              }`}
              style={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }}
              onClick={() => handleTabClick(tab.id)}
              layoutId={`tab-${tab.id}`}
            >
              <span className="truncate text-gray-800">{tab.title}</span>
              {activeTab === tab.id && (
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-0.5`}
                  layoutId="activeTab"
                />
              )}
            </motion.div>
          ))}
        </div>
        
      </div>
      <div className="bg-white p-4 h-fit overflow-auto">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
    </div>
  )
}