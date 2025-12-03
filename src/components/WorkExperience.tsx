import './WorkExperience.css'

interface WorkExperience {
    title: string
    company: string
    period: string
    description: string
}

const workExperiences: WorkExperience[] = [
    {
        title: 'Development Team Lead',
        company: 'Inteligenta',
        period: 'Apr 2021 - Current',
        description: 'The journey in this firm started as an intern, continued as a full stack developer and development team lead as latest. I am responsible for coordinating the teams, creating tasks and providing help logic and code-wise. By this time I have gained deep knowledge and understanding of React and Java Spring Boot, as well as database management.'
    },
    {
        title: 'Tutor',
        company: 'Edufront',
        period: '1 Jan 2024 - Current',
        description: 'Teach web development (HTML, CSS, JavaScript) and Python programming to children aged 10-14, building creativity, problem-solving, and foundational coding skills through engaging lessons and interactive projects. Ensure lessons are interactive and adjusted for different learning paces, making coding enjoyable and easy to understand for all children.'
    }
]

export default function WorkExperience() {
    return (
        <div className="work-experience-container">
            <h1 className="work-experience-title">WORK EXPERIENCE</h1>
            <div className="experience-cards">
                {workExperiences.map((experience, index) => (
                    <div key={index} className="experience-card">
                        <div className="card-header">
                            <div className="card-title-section">
                                <h2 className="card-title">{experience.title}</h2>
                                <span className="card-company">{experience.company}</span>
                            </div>
                            <span className="card-period">{experience.period}</span>
                        </div>
                        <div className="card-border-top"></div>
                        <div className="card-border-bottom"></div>
                        <div className="card-border-left"></div>
                        <div className="card-border-right"></div>
                        <div className="card-content">
                            <p>{experience.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

