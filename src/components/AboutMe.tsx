import './AboutMe.css'

export default function AboutMe() {
    return (
        <div className="about-me-container">
            <h1 className="section-title">ABOUT ME</h1>

            <div className="profile-section">
                <h2 className="subsection-title">PROFILE</h2>
                <div className="profile-card">
                    <p className="profile-text">
                        Results-oriented Software Engineering Development Team Lead with a proven track record in designing scalable applications.
                        Skilled in working with cross-functional teams to build, refine, and rigorously test high-quality software solutions.
                        Proficient in React, Java Spring, and Git-centered development environments with a strong focus on standardizing deployment pipelines.
                        Experienced in creating automation frameworks and managing dynamic metadata to optimize data organization and streamline system integration.
                    </p>
                </div>
            </div>

            <div className="contact-section">
                <h2 className="subsection-title">CONTACT</h2>
                <div className="contact-card">
                    <div className="contact-item">
                        <span className="contact-label">Phone:</span>
                        <a href="tel:+38970829121" className="contact-link">+38970829121</a>
                    </div>
                    <div className="contact-item">
                        <span className="contact-label">Email:</span>
                        <a href="mailto:boris.nikolovski99@gmail.com" className="contact-link">boris.nikolovski99@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <span className="contact-label">LinkedIn:</span>
                        <a href="https://www.linkedin.com/in/boris-nikolovski/" target="_blank" rel="noopener noreferrer" className="contact-link">
                            linkedin.com/in/boris-nikolovski
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

