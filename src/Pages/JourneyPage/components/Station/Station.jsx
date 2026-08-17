export default function Station({ text, icon, condition }) {
    return (
        <div className={`station ${condition === 'success' || condition}`}>
            {condition === 'success' && <div className="success">
                <i className="fa-solid fa-check"></i>
            </div>}
            <i className={`fas fa-${icon}`}></i>
            <p>
                {text}
            </p>
        </div>
    )
}
