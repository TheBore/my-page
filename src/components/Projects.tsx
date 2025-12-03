import './Projects.css'

interface Project {
  name: string
  period: string
  description: string
  technologies: string[]
  link?: string
}

const projects: Project[] = [
  {
    name: 'Appointed People Register - Microservice System',
    period: '1 Apr 2022 - Current',
    description: 'A microservice system containing multiple services, libraries, third-party integrations, SSO, interoperability with other institutions along with different frontend systems. The system is live and is in a support phase where new features are still added.',
    technologies: ['Java Spring Boot', 'ReactJS', 'RabbitMQ', 'Liquibase', 'Docker', 'Microsoft SQL', 'PostgreSQL']
  },
  {
    name: 'HR System for multiple clients',
    period: '1 Jan 2024 - Current',
    description: 'A modular system with the idea of selling to different clients and turning on/off different modules through configurations. The system should be a one place where everything for the employees is entered and updated, along with calculating absences, holidays etc. In the process of making it SaaS.',
    technologies: ['Java Spring Boot', 'ReactJS', 'Flyway']
  },
  {
    name: 'Airport Car Transfer',
    period: '1 Jul 2024 - 1 Sep 2024',
    description: 'Application for scheduling car transfer appointments made in React and served on Google Cloud Platform.',
    technologies: ['ReactJS', 'Google Cloud Platform'],
    link: 'https://airportwego.com/'
  }
]

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="section-title">PROJECTS</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-header">
              <h2 className="project-name">{project.name}</h2>
              <span className="project-period">{project.period}</span>
            </div>
            <div className="card-border-top"></div>
            <div className="card-border-bottom"></div>
            <div className="card-border-left"></div>
            <div className="card-border-right"></div>
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              <div className="technologies-section">
                <h3 className="technologies-title">Technologies:</h3>
                <div className="technologies-list">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              {project.link && (
                <div className="project-link-section">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

