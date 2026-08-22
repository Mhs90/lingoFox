export default function Station({ text, footerText, icon, condition, level }) {
    return (
        <div className={`station ${condition === 'success' ? 'tick' : condition}`}>
            {
                condition === 'currentLevel' ?
                    <>
                        <i class="fa-solid fa-location-dot"></i>
                        <p className="levelName">{level}</p>
                    </>
                    : condition === 'nextLevel' ?
                        <>
                            <img src="/assets/lock.png" alt="lock" className="levelLock" />
                            <p className={level}>{level}</p>
                        </> : condition === 'success' ?
                            <img src="/assets/success.png" alt="success" className="success"/>
                            : condition === "continuing" ?
                                <img src="/assets/journey.png" alt="journey" /> :
                                <img src="/assets/lock.png" alt="lock" />
            }
            <p className="bottom">
                {text}
            </p>
            <footer>{footerText}</footer>
        </div >
    )
}
