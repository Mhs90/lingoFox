import './style.css'

export default function Reward() {
    return (
        <div className="reward">
            <div className="details">
                <p className="rewardTitle">
                    Chapter Reward
                </p>
                <p className="description">
                    Complete all adventures in thid capter to earn a special reward!
                </p>
                <div>
                    <p className="progressTitle">
                        2/6 Adventures
                    </p>
                    <div className="reward-progress-bar">
                        <div className="reward-progress"></div>
                    </div>
                </div>
            </div>
            <img
                src="/assets/beb339cf-4dda-434c-9d04-eb03bc4b9d08.png"
                alt="Treasure"
            />
        </div>
    )
}
