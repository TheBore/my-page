import { useState } from 'react'
import MonitorLayout from './components/MonitorLayout'
import WorkExperience from './components/WorkExperience'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('about me')

  const renderContent = () => {
    switch (activeTab) {
      case 'about me':
        return <AboutMe />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'work experience':
        return <WorkExperience />
      case 'education history':
        return <Education />
      case 'hobbies':
        return <Hobbies />
      default:
        return (
          <div className="page-content">
            <h1>Portfolio</h1>
            <p>Your content goes here</p>
          </div>
        )
    }
  }

  return (
    <MonitorLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </MonitorLayout>
  )
}

export default App
