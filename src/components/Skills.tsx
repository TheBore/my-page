import './Skills.css'

const skills = [
    'ReactJS',
    'NextJS',
    'TypeScript',
    'Git',
    'SQL',
    'Database Management',
    'Java Spring Boot',
    'Linux',
    'Docker',
    'Server Management',
    'CI/CD',
]

export default function Skills() {
    return (
        <div className="skills-container">
            <h1 className="section-title">DIGITAL SKILLS</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-border-top"></div>
                        <div className="skill-border-bottom"></div>
                        <div className="skill-border-left"></div>
                        <div className="skill-border-right"></div>
                        <span className="skill-text">{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

