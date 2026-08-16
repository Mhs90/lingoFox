import './style.css'

export default function NextAdventure() {
    return (
        <div className="adventure">
            <img
                src="/assets/434eae01-d8bc-478b-bb0d-9b2733febfd6.png"
                alt="travel"
            />
            <p className="adventureTitle">
                3. Travel Comunication
            </p>
            <div className="inProgres">
                In Progres
            </div>
            <p className="journeyUnderTitle">
                Learn how to communicate in the airport
            </p>
            <p className="bodyParagraph">
                you will practice:
            </p>
            <p className="journeyUnderTitle">
                <i className="fa-solid fa-book-open"></i>
                12 New Words
            </p>
            <p className="journeyUnderTitle">
                <i className="fa-solid fa-headphones"></i>
                5 Min Listening Practice
            </p>
            <p className="journeyUnderTitle">
                <i className='fas fa-microphone'></i>
                5 Min Speaking Practice
            </p>
            <p className="bodyParagraph">
                progress
            </p>
            <div className="journey-progress-bar-container">
                <div className="journey-progress-bar">
                    <div className="journey-progress"></div>
                </div>
                <span>0%</span>
            </div>
            <button>
                Start Journey ▶
            </button>
        </div>
    )
}
