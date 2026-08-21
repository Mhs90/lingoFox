export default function StatusDetail({ icon, title, text }) {
    return (
        <div className="status-detail">
            <div className={`journey-badge ${icon}`}>
                <img src={`/assets/${icon == 'book-open' ? 'book-banner' : icon}.png`} alt="" />
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
