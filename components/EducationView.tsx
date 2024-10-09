"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Education from './EducationComponent'

interface Tab {
  id: number
  title: string
  color: string
  content: React.ReactNode
}

export default function Component() {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 1, title: 'Texas A&M University', content:<Education university={'Texas A&M University'} degree={'Bachelors of Science in Computer Science and Minor in Statistics'} duration={'December 2024'} description={''} skills={[{icon: '<svg fill="#3776AB" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>', name: 'Python'}]} icon={'https://upload.wikimedia.org/wikipedia/commons/e/ee/Texas_A%26M_University_logo.svg'}/>, color:'bg-[#500000]'},
    { id: 2, title: 'Foothill College', content: 'This is the React documentation tab.', color: 'bg-orange-500' },
    { id: 3, title: 'Homestead High School', content: 'This is the GitHub tab.', color: 'bg-green-500'},
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
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${tab.color}`}
                  layoutId="activeTab"
                />
              )}
            </motion.div>
          ))}
        </div>
        
      </div>
      <div className="bg-white p-4 h-64 overflow-auto">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
    </div>
  )
}