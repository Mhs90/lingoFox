import {
    TransformWrapper,
    TransformComponent
} from 'react-zoom-pan-pinch';

import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import './style.css'
import { useEffect, useState } from 'react';
import StatusDetail from './components/StatusDetail/StatusDetail';
import Station from './components/Station/Station';
import Task from './components/Task/Task';

export default function JourneyPage() {
    const [isZoomed, setIsZoomed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 700px)');

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        handleResize();

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);
    return (
        <>
            <SideBar autoActiveItem="journey" />
            <main>
                <Header />
                <TransformWrapper
                    initialScale={1}
                    minScale={1}
                    maxScale={isMobile ? 1 : 3}
                    centerOnInit={true}
                    wheel={{
                        disabled: true,
                    }}
                    pinch={{
                        disabled: !isMobile
                    }}
                    doubleClick={{
                        disabled: true
                    }}
                    panning={{
                        disabled: isMobile
                    }}
                    onTransformed={(ref) => {
                        setIsZoomed(!isMobile && ref.state.scale > 1);
                    }}
                >
                    {({ zoomIn, zoomOut, resetTransform }) => (
                        <>
                            <TransformComponent>
                                <div className="map">
                                    <div className="status">
                                        <StatusDetail icon='flag' title='2' text='Adventures Completed' />
                                        <StatusDetail icon='clock' title='12' text='Hours Learned' />
                                        <StatusDetail icon='book-open' title='700' text='Words Learned' />
                                        <StatusDetail icon='award' title='Itermediate' text='Your Current Level' />
                                    </div>
                                    <div className="comunication">
                                        <img
                                            src="/assets/434eae01-d8bc-478b-bb0d-9b2733febfd6.png"
                                            alt="travel"
                                        />
                                        <p className="comunicationTitle">
                                            3. Travel Comunication
                                        </p>
                                        <div className="inProgres">
                                            In Progres
                                        </div>
                                        <p className="journeyUnderTitle">
                                            Learn how to communicate in the airport
                                        </p>
                                        <p className="bodyParagraph">
                                            you will practice:
                                        </p>
                                        <p className="journeyUnderTitle">
                                            <i className="fa-solid fa-book-open"></i>
                                            12 New Words
                                        </p>
                                        <p className="journeyUnderTitle">
                                            <i className="fa-solid fa-headphones"></i>
                                            5 Min Listening Practice
                                        </p>
                                        <p className="journeyUnderTitle">
                                            <i className='fas fa-microphone'></i>
                                            5 Min Speaking Practice
                                        </p>
                                        <p className="bodyParagraph">
                                            progress
                                        </p>
                                        <div className="journey-progress-bar-container">
                                            <div className="journey-progress-bar">
                                                <div className="journey-progress"></div>
                                            </div>
                                            <span>0%</span>
                                        </div>
                                        <button>
                                            Start Journey ▶
                                        </button>
                                    </div>
                                    <div className="reward">
                                        <div className="details">
                                            <p className="rewardTitle">
                                                Chapter Reward
                                            </p>
                                            <p className="description">
                                                Complete all adventures in thid capter to earn a special reward!
                                            </p>
                                            <div>
                                                <p className="progressTitle">
                                                    2/6 Adventures
                                                </p>
                                                <div className="reward-progress-bar">
                                                    <div className="reward-progress"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <img
                                            src="/assets/beb339cf-4dda-434c-9d04-eb03bc4b9d08.png"
                                            alt="Treasure"
                                        />
                                    </div>
                                    <div className="timelineContainer">
                                        <div className="timelineTitle">
                                            Your Adventure Timeline
                                        </div>
                                        <a href="#">
                                            view all adventures
                                            <i className='fa-solid fa-arrow-right'></i>
                                        </a>
                                        <p className="journeyUnderTitle">
                                            Track your progress and milestones
                                        </p>
                                        <div className="timeline-bar">
                                            <div className="ahead"></div>
                                        </div>
                                        <div className="stations">
                                            <Station text='Welcome To The Village' icon='house' condition='success' />
                                            <Station text='Restaurant Explore' icon='utensils' condition='success' />
                                            <Station text='Travel Communication' icon='plane' condition='continuing' />
                                            <Station text='Check-In-Hotel' icon='lock' condition='close' />
                                            <Station text='Ask For Direction' icon='lock' condition='close' />
                                            <Station text='Shopping Explorer' icon='lock' condition='close' />
                                        </div>
                                    </div>
                                    <div className="journey-tasks">
                                        <Task text="Welcome To The Village" numberOftask={1} numberOfStars={3} condition='did' />
                                        <Task text="Restauarant Explore" numberOftask={2} numberOfStars={2} condition='did' />
                                        <Task text="Travel Communication" numberOftask={3} numberOfStars={0} condition='continuingTask' />
                                        <Task text="Check-In-Hotel" numberOftask={4} condition='' />
                                        <Task text="Ask For Direction" numberOftask={5} condition='' />
                                        <Task text="Shopping Explore" numberOftask={6} condition='' />
                                    </div>
                                </div>
                            </TransformComponent>
                            <div className={`map-controls ${isZoomed ? 'zoomed' : ''}`}>
                                <button
                                    className="target-btn"
                                    onClick={() => {
                                        resetTransform();
                                        setIsZoomed(false);
                                    }}
                                >
                                    <i className="fa-solid fa-crosshairs"></i>
                                </button>
                                <div className="zoom-controls">
                                    <button
                                        onClick={() => {
                                            zoomIn();
                                            setIsZoomed(true);
                                        }}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => {
                                            zoomOut();
                                        }}
                                    >
                                        −
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </TransformWrapper>
            </main>
        </>
    )
}