import './Education.css'

interface EducationItem {
  degree: string
  period: string
  institution: string
  location: string
  website: string
}

const education: EducationItem[] = [
  {
    degree: 'Master of Science in Software for embedded systems',
    period: '1 Jan 2024 - Current',
    institution: 'Faculty of Computer Science & Engineering',
    location: 'Skopje, North Macedonia',
    website: 'https://www.finki.ukim.mk/en'
  },
  {
    degree: 'Bachelor of Science (Information Science), sub-degree: Software Engineering and Information Technologies',
    period: 'Sep 2018 - Nov 2022',
    institution: 'Faculty of Computer Science & Engineering',
    location: 'Skopje, North Macedonia',
    website: 'https://www.finki.ukim.mk/en'
  }
]

export default function Education() {
  return (
    <div className="education-container">
      <h1 className="section-title">EDUCATION HISTORY</h1>
      <div className="education-list">
        {education.map((item, index) => (
          <div key={index} className="education-card">
            <div className="card-header">
              <h2 className="degree-title">{item.degree}</h2>
              <span className="education-period">{item.period}</span>
            </div>
            <div className="card-border-top"></div>
            <div className="card-border-bottom"></div>
            <div className="card-border-left"></div>
            <div className="card-border-right"></div>
            <div className="education-content">
              <div className="education-info">
                <div className="info-item">
                  <span className="info-label">Institution:</span>
                  <span className="info-value">{item.institution}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">{item.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Website:</span>
                  <a href={item.website} target="_blank" rel="noopener noreferrer" className="info-link">
                    {item.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

