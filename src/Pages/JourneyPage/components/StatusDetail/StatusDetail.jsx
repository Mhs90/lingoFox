export default function StatusDetail({ icon, title, text }) {
    return (
        <div className="status-detail">
            <div className={`journey-badge ${icon}`}>
                <i className={`fa-solid fa-${icon}`}></i>
            </div>
            <div className="journeyTitleContainer">
                <p className="journeyTitle">{title}</p>
                <p className="journeyUnderTitle">
                    {text}
                </p>
            </div>
        </div>
    )
}
