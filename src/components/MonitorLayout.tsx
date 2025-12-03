import { ReactNode } from 'react'
import './MonitorLayout.css'
import Tabs from './Tabs'

interface MonitorLayoutProps {
  children: ReactNode
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function MonitorLayout({ children, activeTab, onTabChange }: MonitorLayoutProps) {
  return (
    <div className="monitor-container">
      <div className="monitor-frame">
        <div className="monitor-screen">
          <div className="screen-content">
            {children}
          </div>
          <Tabs activeTab={activeTab} onTabChange={onTabChange} />
        </div>
      </div>
    </div>
  )
}

