import './Hobbies.css'

const hobbies = [
    '3D Printing',
    'Hiking',
    'DIY Stuff',
    'Electronics',
    'Arduino/Raspberry Projects',
    'Book Nerd'
]

export default function Hobbies() {
    return (
        <div className="hobbies-container">
            <h1 className="section-title">HOBBIES</h1>
            <div className="hobbies-grid">
                {hobbies.map((hobby, index) => (
                    <div key={index} className="hobby-card">
                        <div className="hobby-border-top"></div>
                        <div className="hobby-border-bottom"></div>
                        <div className="hobby-border-left"></div>
                        <div className="hobby-border-right"></div>
                        <span className="hobby-text">{hobby}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

