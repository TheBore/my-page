import { useState } from 'react'
import MonitorLayout from './components/MonitorLayout'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('about me')

  const renderContent = () => {
    switch (activeTab) {
      case 'about me':
        return (
          <div className="page-content">
            <h1>About Me</h1>
            <p>Your about me content goes here</p>
          </div>
        )
      case 'skills':
        return (
          <div className="page-content">
            <h1>Skills</h1>
            <p>Your skills content goes here</p>
          </div>
        )
      case 'projects':
        return (
          <div className="page-content">
            <h1>Projects</h1>
            <p>Your projects content goes here</p>
          </div>
        )
      case 'hobbies':
        return (
          <div className="page-content">
            <h1>Hobbies</h1>
            <p>Your hobbies content goes here</p>
          </div>
        )
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
