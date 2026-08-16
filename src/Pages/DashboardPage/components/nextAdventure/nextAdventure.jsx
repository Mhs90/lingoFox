import './style.css'

export default function NextAdventure() {
    return (
        <div className="messageBox">
            <div className="left">
                <p className="greet">Welcome Back Daria !👋</p>
                <h1>Your next adventure is waiting.</h1>
                <p className="note">Today's focus :</p>
                <div>
                    <i className="fa-solid fa-plane"></i> Travel Communication
                </div>
                <button>Start Today's Journey</button>
            </div>
            <div className="right">
                <div className="message">
                    <p className="quoteTitle">Nox says :</p>
                    <p className="quote">You learned <span>24 new words</span> this week</p>
                </div>
                <img src="/assets/second-fox.png" alt="fox" />
            </div>
        </div>
    )
}
