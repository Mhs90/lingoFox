import './style.css'

export default function ContinueLearning() {
    return (
        <div className="continue">
            <div className="continue-header">
                <p className="title">Continuue Learning</p>
                <div className="inProgress">In Progres</div>
            </div>
            <div className='detailsContainer'>
                <img src="/assets/foxEating.png" alt="fox eating" className="continueImg" />
                <div className="details">
                    <p className="secondTitle">Restaurant Explore</p>
                    <div className="progressbarContainer">
                        <div className="progress-bar">
                            <div style={{ width: '80%' }} className="progress"></div>
                        </div><span>80%</span>
                    </div>
                    <p className="underTitle">
                        20% Of Our Previous Adventure Remains!
                    </p>
                    <button className="continueBtn">Continue <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}
