export default function Task({ icon, title, text, progressText }) {
    return (
        <div className={`task ${icon}`}>
            <header>
                <div className="titleContainer">
                    <p className="title">{title}</p>
                    <p className="underTitle">{text}</p>
                </div>
            </header>
            <img src={`/assets/${icon}.png`} alt="" />
            <div className="progress-bar-container">
                <span>{progressText}</span><div className={`progress-bar ${icon}`}>
                    <div className={`progress ${icon}`}></div>
                </div>
            </div>
        </div>
    )
}
