import './style.css'

export default function NoxInsight() {
    return (
        <div className="insight">
            <div className="insight-header">
                <p className="title">Nox Insight</p>
                <a href="#">see more insights <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="talking">
                <img src="/assets/foxLamp.png" alt="fox" />
                <div className="secondMessage">
                    <p>You perform better with listening experiences.</p>
                    <p className="underTitle">
                        keep it up! your listening score has improved 18% this month.
                    </p>
                </div>
            </div>
        </div>
    )
}
