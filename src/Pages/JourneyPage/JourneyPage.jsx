import {
    TransformWrapper,
    TransformComponent
} from 'react-zoom-pan-pinch';
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import './style.css'
// import { useState } from 'react';
import StatusDetail from './components/StatusDetail/StatusDetail';
import Station from './components/Station/Station';
import Task from './components/Task/Task';

export default function JourneyPage() {
    return (
        <>
            <SideBar />
            <main>
                <Header />
                <div className="container">

                    <div className="status">
                        <StatusDetail icon='flag' title='2' text='ماجراجویی تکمیل شده' />
                        <StatusDetail icon='clock' title='12' text='ساعت یادگیری' />
                        <StatusDetail icon='book-open' title='700' text='واژه آموخته شده' />
                        <StatusDetail icon='award' title='HSK1' text='سطح فعلی' />
                    </div>
                    <div className="reward">
                        <div className="details">
                            <p className="rewardTitle">
                                جایزه فصل✨
                            </p>
                            <p className="description">
                                تمام ماجراجویی های این نقشه رو کامل کن و جایزه مخصوص ناکس رو بگیر!
                            </p>
                            <div>
                                <p className="progressTitle">
                                    2/6 ماجراجویی
                                </p>
                                <div className="reward-progress-bar">
                                    <div className="reward-progress"></div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/beb339cf-4dda-434c-9d04-eb03bc4b9d08.png" alt="Treasure" />
                    </div>
                    <div className="adventure">
                        <img src="/assets/e407d59b107ae33963a1e2c2713cc139d6119216.png" alt="travel" />
                        <p className="adventureTitle">
                            3. مکالمه در سفر
                        </p>
                        <div className="inProgres">
                            درحال یادگیری
                        </div>
                        <p className="journeyUnderTitle">
                            یاد بگیر چطور در فرودگاه ارتباط برقرار کنی و آدرس مورد نظرت رو پیدا کنی
                        </p>
                        <p className="bodyParagraph">
                            تو تمرین میکنی :
                        </p>
                        <p className="journeyUnderTitle">
                            <img src="/assets/book-icon.png" alt="book" />
                            12 واژه جدید
                        </p>
                        <p className="journeyUnderTitle">
                            <img src="/assets/headphone-icon.png" alt="headphone" />
                            5 دقیقه تمرین شنیداری
                        </p>
                        <p className="journeyUnderTitle">
                            <img src="/assets/mic-icon.png" alt="microphone" />
                            5 دقیقه تمرین گفتاری
                        </p>
                        <p className="bodyParagraph">
                            پیشرفت
                        </p>
                        <div className="journey-progress-bar-container">
                            <span>0%</span><div className="journey-progress-bar">
                                <div className="journey-progress"></div>
                            </div>
                        </div>
                        <button>
                            شروع ماجراجویی  ◀
                        </button>
                    </div>
                    <div className="map">

                        <TransformWrapper
                            initialScale={1}
                            minScale={1}
                            maxScale={2.5}
                            wheel={{
                                disabled: true
                            }}
                            doubleClick={{
                                disabled: true
                            }}
                            panning={{
                                disabled: false
                            }}
                        >
                            {({ zoomIn, zoomOut, resetTransform }) => (
                                <>
                                    <TransformComponent
                                        wrapperClass="map-transform-wrapper"
                                        contentClass="map-transform-content"
                                    >
                                        <div className="map-content">
                                            <img
                                                src="/assets/hils2.png"
                                                alt="map"
                                                className="map-image"
                                            />
                                            <div className="journey-tasks">
                                                <Task
                                                    text="به دهکده خوش آمدی!"
                                                    numberOftask={1}
                                                    numberOfStars={3}
                                                    condition="did"
                                                />
                                                <Task
                                                    text="گشت و گذار در رستوران"
                                                    numberOftask={2}
                                                    numberOfStars={2}
                                                    condition="did"
                                                />
                                                <Task
                                                    text="مکالمه در سفر"
                                                    numberOftask={3}
                                                    numberOfStars={0}
                                                    condition="continuingTask"
                                                />
                                                <Task
                                                    text="هتل"
                                                    numberOftask={4}
                                                    condition=""
                                                />
                                                <Task
                                                    text="پرسیدن مسیر"
                                                    numberOftask={5}
                                                    condition=""
                                                />
                                                <Task
                                                    text="در بازار"
                                                    numberOftask={6}
                                                    condition=""
                                                />
                                            </div>
                                        </div>
                                    </TransformComponent>
                                    <div className="pined">
                                        <img
                                            src="/assets/sanjagh.png"
                                            alt="pin"
                                            className="pin"
                                        />
                                        <h6>
                                            نقشه 2 : گردش در روستا و شهر
                                        </h6>
                                        <p>
                                            <img
                                                src="/assets/information.png"
                                                alt="information"
                                            />
                                            راهنمای نقشه
                                        </p>
                                    </div>
                                    <div className="map-controls">
                                        <button
                                            className="target-btn"
                                            onClick={() => resetTransform()}
                                        >
                                            <i className="fa-solid fa-crosshairs"></i>
                                        </button>
                                        <div className="zoom-controls">
                                            <button onClick={() => zoomIn()}>
                                                +
                                            </button>
                                            <button onClick={() => zoomOut()}>
                                                −
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </TransformWrapper>

                    </div>
                    <div className="timelineContainer">
                        <div className="timelineTitle">
                            مسیر یادگیری تو
                        </div>
                        <p className="journeyUnderTitle">
                            بهترین سرمایه گذاری،یادگیری مداومه!🌿
                        </p>
                        <div className="timeline-bar">
                            <div className="ahead" style={{ width: '30%' , zIndex: '1'}}></div>
                            <div className="ahead" style={{width: '40%',backgroundColor: '#6662EB'}}></div>
                        </div>
                        <div className="stations">
                            <Station
                                text="سطح فعلی"
                                condition="currentLevel"
                                level="HSK1"
                            />

                            <Station
                                text="نقشه 1"
                                condition="success"
                                footerText="تکمیل شده!"
                            />

                            <Station
                                text="نقشه 2"
                                condition="continuing"
                                footerText="درحال پیشرفت"
                            />

                            <Station
                                text="نقشه 3"
                                condition="close"
                                footerText="به زودی..."
                            />

                            <Station
                                text="نقشه 4"
                                condition="close"
                                footerText="به زودی..."
                            />

                            <Station
                                text="در انتظار تو!"
                                condition="nextLevel"
                                level="HSK2"
                            />
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}