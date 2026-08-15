import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar'
import './style.css'

export default function JourneyPage() {
    return (
        <>
            <SideBar autoActiveItem="journey" />
            <main>
                <Header />
                <div className="map">
                    <div className="status">
                        <div className="status-detail">
                            <div className="journey-badge flag"><i className='fa-solid fa-flag'></i></div>
                            <div className="journeyTitleContainer">
                                <p className="journeyTitle">2</p>
                                <p className="journeyUnderTitle">Adventures Completed</p>
                            </div>
                        </div>
                        <div className="status-detail">
                            <div className="journey-badge clock"><i className='fa-solid fa-clock'></i></div>
                            <div className="journeyTitleContainer">
                                <p className="journeyTitle">12</p>
                                <p className="journeyUnderTitle">Hours Learned</p>
                            </div>
                        </div>
                        <div className="status-detail">
                            <div className="journey-badge book"><i className='fa-solid fa-book-open'></i></div>
                            <div className="journeyTitleContainer">
                                <p className="journeyTitle">700</p>
                                <p className="journeyUnderTitle">Words Learned</p>
                            </div>
                        </div>
                        <div className="status-detail">
                            <div className="journey-badge medal"><i className='fa-solid fa-award'></i></div>
                            <div className="journeyTitleContainer">
                                <p className="journeyTitle">Intermediate</p>
                                <p className="journeyUnderTitle">Your Current Level</p>
                            </div>
                        </div>
                    </div>
                    <div className="comunication">
                        <img src="/assets/434eae01-d8bc-478b-bb0d-9b2733febfd6.png" alt="travel" />
                        <p className="comunicationTitle">3. Travel Comunication</p>
                        <div className="inProgres">In Progres</div>
                        <p className="journeyUnderTitle">Learn how to communicate in the airport</p>
                        <p className="bodyParagraph">you will practice:</p>
                        <p className="journeyUnderTitle"><i className="fa-solid fa-book-open"></i>  12 New Words</p>
                        <p className="journeyUnderTitle"><i className="fa-solid fa-headphones"></i>  5 Min Listening Practice</p>
                        <p className="journeyUnderTitle"><i className='fas fa-microphone'></i>  5 Min Speaking Practice</p>
                        <p className="bodyParagraph">progress</p>
                        <div className="journey-progress-bar-container">
                            <div className="journey-progress-bar">
                                <div className="journey-progress"></div>
                            </div><span>0%</span>
                        </div>
                        <button>Start Journey ▶</button>
                    </div>
                    <div className="reward">
                        <div className="details">
                            <p className="rewardTitle">Chapter Reward</p>
                            <p className="description">
                                Complete all adventures in thid capter to earn a special reward!
                            </p>
                            <div>
                                <p className="progressTitle">2/6 Adventures</p>
                                <div className="reward-progress-bar">
                                    <div className="reward-progress"></div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/beb339cf-4dda-434c-9d04-eb03bc4b9d08.png" alt="Treasure" />
                    </div>
                    <div className="timelineContainer">
                        <div className="timelineTitle">Your Adventure Timeline</div>
                        <a href="#">view all adventures <i className='fa-solid fa-arrow-right'></i></a>
                        <p className="journeyUnderTitle">Track your progress and milestones</p>
                        <div className="timeline-bar">
                            <div className="ahead"></div>
                        </div>
                        <div className="stations">
                            <div className="station">
                                <div className="success"><i className="fa-solid fa-check"></i></div>
                                <i className="fas fa-house"></i>
                                <p>Welcome To The Village</p>
                            </div>
                            <div className="station">
                                <div className="success"><i className="fa-solid fa-check"></i></div>
                                <i className="fa-solid fa-utensils"></i>
                                <p>Restaurant Explore</p>
                            </div>
                            <div className="station continuing">
                                <i className="fas fa-plane"></i>
                                <p>Travel Communication</p>
                            </div>
                            <div className="station close">
                                <i className="fa-solid fa-lock"></i>
                                <p>Check-In-Hotel</p>
                            </div>
                            <div className="station close">
                                <i className="fa-solid fa-lock"></i>
                                <p>Ask For Direction</p>
                            </div>
                            <div className="station close">
                                <i className="fa-solid fa-lock"></i>
                                <p>Shopping Explorer</p>
                            </div>
                        </div>
                    </div>
                    <div className="journey-tasks">
                        <div className="journey-task firstTask did">
                            <div className='numberOfTask'>1</div>
                            <p className='taskDescription'>Welcome To The Village</p>
                            <div className="stars">
                                <span style={{ color: '#FAC747' }}>★</span>
                                <span style={{ color: '#FAC747' }}>★</span>
                                <span style={{ color: '#FAC747' }}>★</span>
                            </div>
                        </div>
                        <div className="journey-task secondTask did">
                            <div className='numberOfTask'>2</div>
                            <p className='taskDescription'>Restauarant Explore</p>
                            <div className="stars">
                                <span style={{ color: '#FAC747' }}>★</span>
                                <span style={{ color: '#FAC747' }}>★</span>
                                <span style={{ color: '#EBAD76' }}>☆</span>
                            </div>
                        </div>
                        <div className="journey-task thirdTask continuingTask">
                            <div className='foxTopOfContinuing'><img src="/assets/foxHead.png" alt="fox" /></div>
                            <div className='numberOfTask'>3</div>
                            <p className='taskDescription'>Travel Communication</p>
                            <div className="stars">
                                <span style={{ color: '#EBAD76' }}>☆</span>
                                <span style={{ color: '#EBAD76' }}>☆</span>
                                <span style={{ color: '#EBAD76' }}>☆</span>
                            </div>
                        </div>
                        <div className="journey-task forthTask">
                            <div className='numberOfTask'>4</div>
                            <p className='taskDescription'>Check-In-Hotel</p>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                        <div className="journey-task fifthTask">
                            <div className='numberOfTask'>5</div>
                            <p className='taskDescription'>Ask For Direction</p>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                        <div className="journey-task sixthTask">
                            <div className='numberOfTask'>6</div>
                            <p className='taskDescription'>Shopping Explore</p>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                    </div>
                    <div class="map-controls">
                        <button class="target-btn">
                            <i class="fa-solid fa-crosshairs"></i>
                        </button>

                        <div class="zoom-controls">
                            <button>+</button>
                            <button>−</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}