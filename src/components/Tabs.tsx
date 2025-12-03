import './Tabs.css'

interface TabsProps {
    onTabChange: (tab: string) => void
    activeTab: string
}

export default function Tabs({ onTabChange, activeTab }: TabsProps) {
    const tabs = ['about me', 'skills', 'projects', 'work experience', 'education history', 'hobbies']

    const playClickSound = () => {
        const audio = new Audio('/src/assets/scific_click_short_ubtotr.wav')
        audio.volume = 0.5
        audio.play().catch((error) => {
            console.warn('Could not play click sound:', error)
        })
    }

    const handleTabClick = (tab: string) => {
        playClickSound()
        onTabChange(tab)
    }

    return (
        <div className="tabs-container">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => handleTabClick(tab)}
                >
                    <span className="tab-border-top"></span>
                    <span className="tab-border-bottom"></span>
                    <span className="tab-border-left"></span>
                    <span className="tab-border-right"></span>
                    <span className="tab-content">{tab}</span>
                </button>
            ))}
        </div>
    )
}

