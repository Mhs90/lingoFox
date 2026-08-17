export default function Task({ icon, title, text, progressText }) {
    return (
        <div className="task">
            <header>
                <div className={`badge ${icon}`}><i className={`fas fa-${icon}`}></i></div>
                <div className="titleContainer">
                    <p className="title">{title}</p>
                    <p className="underTitle">{text}</p>
                </div>
            </header>
            <div className="progress-bar-container">
                <div className="progress-bar">
                    <div className="progress"></div>
                </div><span>{progressText}</span>
                <button>start</button>
            </div>
        </div>
    )
}
