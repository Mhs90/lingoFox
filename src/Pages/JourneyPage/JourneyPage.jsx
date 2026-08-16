import {
    TransformWrapper,
    TransformComponent
} from 'react-zoom-pan-pinch';

import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import './style.css'
import { useEffect, useState } from 'react';
import Status from './components/Status';
import NextAdventure from './components/NextAdventure';
import Reward from './components/reward';
import TimeLine from './components/TimeLine';
import Task from './components/Task';

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
                                    <Status />
                                    <NextAdventure />
                                    <Reward />
                                    <TimeLine />
                                    <div className="journey-tasks">
                                        <Task text="Welcome To The Village" numberOftask={1} numberOfStars={3} condition='did' />
                                        <Task text="Restauarant Explore" numberOftask={2} numberOfStars={2} condition='did' />
                                        <Task text="Travel Communication" numberOftask={3} numberOfStars={1} condition='continuingTask' />
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
