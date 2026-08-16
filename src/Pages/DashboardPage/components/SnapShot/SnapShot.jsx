import './style.css'

export default function SnapShot() {
    return (
        <div className="snapshot">
            <header>
                <p className="title">Your Snapshot</p>
                <a href="#">view all</a>
            </header>
            <div className="main">
                <div className="vocabulary">
                    <p className="divTitle">
                        Vocabulary
                    </p>
                    <div className="condition">Intermediate</div>
                    <p className="number">700</p>
                    <p className="learned">Words Learned</p>
                    <p className="today">+12 Today</p>
                    <div className="progress-circle"
                        style={{ background: 'conic-gradient(#5b5ce2 0deg 288deg, #eeeeff 288deg 360deg)' }}>
                        <span>80%</span>
                    </div>
                </div>
                <div className="rightColumn">
                    <div className="speakingAndListening">
                        <p className="divTitle">Speaking</p>
                        <p className="underTitle">Upper Beginer</p>
                        <div className="progress-circle"
                            style={{ background: 'conic-gradient(#5b5ce2 0deg 259.2deg, #eeeeff 259.2deg 360deg)' }}>
                            <span>72%</span>
                        </div>
                        <p className="thisMonth"><span className="green">+4</span> this month</p>
                    </div>
                    <div className="speakingAndListening">
                        <p className="divTitle">Listening</p>
                        <p className="underTitle">Upper Intemediate</p>
                        <div className="progress-circle"
                            style={{ background: 'conic-gradient(#5b5ce2 0deg 230.4deg, #eeeeff 230.4deg 360deg)' }}>
                            <span>64%</span>
                        </div>
                        <p className="thisMonth"><span className="green">+3</span> this month</p>
                    </div>
                    <div className="grammer">
                        <p className="divTitle">Grammer</p>
                        <p className="underTitle">Intemediate</p>
                        <div className="progress-circle"
                            style={{ background: 'conic-gradient(#5b5ce2 0deg 194.4deg, #eeeeff 194.4deg 360deg)' }}>
                            <span>54%</span>
                        </div>
                        <p className="thisMonth"><span className="green">+3</span> this month</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
