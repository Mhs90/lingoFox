export default function Word({
    word,
    pinyin,
    mean,
    grammer,
    percent,
    bookMarkWords,
    toggleBookMark
}) {
    return (
        <div className="wordRow">
            <p className="wordName">{word}</p>
            <p>{pinyin}</p>
            <p className="mean">{mean}</p>
            <p>{grammer}</p>

            <div className="progressBarContainer">
                <span className="percent">{percent}%</span>

                <div
                    className="progress-bar"
                    style={{
                        backgroundColor:
                            percent > 80 ? '#58b16157' : '#f59f0b52'
                    }}
                >
                    <div
                        className="progress"
                        style={{
                            width: `${percent}%`,
                            backgroundColor:
                                percent > 80 ? '#58B161' : '#F59E0B'
                        }}
                    />
                </div>
            </div>

            <div className="buttons">
                <button
                    className="BookMark"
                    onClick={() => toggleBookMark(word)}
                >
                    {bookMarkWords.includes(word) ? (
                        <i className="fas fa-star"></i>
                    ) : (
                        <i className="far fa-star"></i>
                    )}
                </button>

                <button className="other">...</button>
            </div>
        </div>
    )
}