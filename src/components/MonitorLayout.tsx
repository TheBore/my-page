import { useState } from 'react'
import type { ReactNode } from 'react'
import './MonitorLayout.css'
import Tabs from './Tabs'

interface MonitorLayoutProps {
  children: ReactNode
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function MonitorLayout({ children, activeTab, onTabChange }: MonitorLayoutProps) {
  const [isPoweredOn, setIsPoweredOn] = useState(true)

  const handlePowerToggle = () => {
    setIsPoweredOn(!isPoweredOn)
  }

  return (
    <div className="monitor-container">
      <button
        className={`power-button ${isPoweredOn ? 'on' : 'off'}`}
        onClick={handlePowerToggle}
        aria-label={isPoweredOn ? 'Turn off' : 'Turn on'}
      >
        <svg className="power-button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <line x1="12" y1="8" x2="12" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className="monitor-frame">
        <div className={`monitor-screen ${isPoweredOn ? 'powered-on' : 'powered-off'}`}>
          <div className={`screen-content ${isPoweredOn ? '' : 'disabled'}`}>
            {children}
          </div>
          {isPoweredOn && <Tabs activeTab={activeTab} onTabChange={onTabChange} />}
        </div>
      </div>
    </div>
  )
}

