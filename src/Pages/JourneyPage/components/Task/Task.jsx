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
                numberOfStars >= 0 ?
                    <div className="stars">
                        <span style={{ color: `${numberOfStars >= 1 ? '#FAC747' : '#EBAD76'} ` }}>
                            {numberOfStars >= 1 ?
                                <i className="fas fa-star"></i> :
                                <i className="far fa-star"></i>}
                        </span>
                        <span style={{ color: `${numberOfStars >= 2 ? '#FAC747' : '#EBAD76'} ` }}>
                            {numberOfStars >= 2 ?
                                <i className="fas fa-star"></i> :
                                <i className="far fa-star"></i>}
                        </span>
                        <span style={{ color: `${numberOfStars === 3 ? '#FAC747' : '#EBAD76'} ` }}>
                            {numberOfStars === 3 ?
                                <i className="fas fa-star"></i> :
                                <i className="far fa-star"></i>}
                        </span>
                    </div> :
                    <img src="/assets/lock.png" alt="lock" className="lock" />
            }
        </div>
    )
}