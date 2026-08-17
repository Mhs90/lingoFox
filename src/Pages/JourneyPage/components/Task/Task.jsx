import './style.css'

export default function Task({ numberOftask, condition, text, numberOfStars }) {
    return (
        <div className={`journey-task ${numberOftask === 1 ? 'firstTask'
            : numberOftask === 2 ? 'secondTask'
                : numberOftask === 3 ? 'thirdTask'
                    : numberOftask === 4 ? 'forthTask'
                        : numberOftask === 5 ? 'fifthTask'
                            : 'sixthTask'
            } ${condition}`}>
            {condition === 'continuingTask' && <div className='foxTopOfContinuing'>
                <img
                    src="/assets/foxHead.png"
                    alt="fox"
                />
            </div>}
            <div className='numberOfTask'>{numberOftask}</div>
            <p className='taskDescription'>
                {text}
            </p>
            {
                numberOfStars ?
                    <div className="stars">
                        <span style={{ color: `${numberOfStars >= 1 ? '#FAC747' : '#EBAD76'} ` }}>{numberOfStars >= 1 ? '★' : '☆'}</span>
                        <span style={{ color: `${numberOfStars >= 2 ? '#FAC747' : '#EBAD76'} ` }}>{numberOfStars >= 2 ? '★' : '☆'}</span>
                        <span style={{ color: `${numberOfStars === 3 ? '#FAC747' : '#EBAD76'} ` }}>{numberOfStars === 3 ? '★' : '☆'}</span>
                    </div> :
                    <i className="fa-solid fa-lock"></i>
            }
        </div>
    )
}