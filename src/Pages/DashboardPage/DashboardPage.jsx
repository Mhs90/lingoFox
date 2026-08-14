import { useState } from "react";
import SideBar from "../../components/SideBar";
import './style.css'
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function DashboardPage() {
    return (
        <>
            <SideBar autoActiveItem="dashboard" />
            <main>
                <Header/>
                <div className="messageBox">
                    <div className="left">
                        <p className="greet">Welcome Back Daria !👋</p>
                        <h1>Your next adventure is watinig.</h1>
                        <p className="note">Today's focus :</p>
                        <div>
                            <i className="fa-solid fa-plane"></i> Travel Communication
                        </div>
                        <button>Start Today's Journey</button>
                    </div>
                    <div className="right">
                        <div className="message">
                            <p className="quoteTitle">Nox says :</p>
                            <p className="quote">You learned <span>24 new words</span> this week</p>
                        </div>
                        <img src="/assets/second-fox.png" alt="fox" />
                    </div>
                </div>
                <div className="snapshot">
                    <header>
                        <p className="title">Your Snapshot</p>
                        <a href="#">view all</a>
                    </header>
                    <div className="main">
                        <div className="vocabulary">
                            <p className="divTitle">
                                Vocabulary
                            </p>
                            <div className="condition">Intermediate</div>
                            <p className="number">700</p>
                            <p className="learned">Words Learned</p>
                            <p className="today">+12 Today</p>
                            <div className="progress-circle"
                                style={{ background: 'conic-gradient(#5b5ce2 0deg 288deg, #eeeeff 288deg 360deg)' }}>
                                <span>80%</span>
                            </div>
                        </div>
                        <div className="rightColumn">
                            <div className="speakingAndListening">
                                <p className="divTitle">Speaking</p>
                                <p className="underTitle">Upper Beginer</p>
                                <div className="progress-circle"
                                    style={{ background: 'conic-gradient(#5b5ce2 0deg 259.2deg, #eeeeff 259.2deg 360deg)' }}>
                                    <span>72%</span>
                                </div>
                                <p className="thisMonth"><span className="green">+4</span> this month</p>
                            </div>
                            <div className="speakingAndListening">
                                <p className="divTitle">Listening</p>
                                <p className="underTitle">Upper Intemediate</p>
                                <div className="progress-circle"
                                    style={{ background: 'conic-gradient(#5b5ce2 0deg 230.4deg, #eeeeff 230.4deg 360deg)' }}>
                                    <span>64%</span>
                                </div>
                                <p className="thisMonth"><span className="green">+3</span> this month</p>
                            </div>
                            <div className="grammer">
                                <p className="divTitle">Grammer</p>
                                <p className="underTitle">Intemediate</p>
                                <div className="progress-circle"
                                    style={{ background: 'conic-gradient(#5b5ce2 0deg 194.4deg, #eeeeff 194.4deg 360deg)' }}>
                                    <span>54%</span>
                                </div>
                                <p className="thisMonth"><span className="green">+3</span> this month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="todayJourney">
                    <header>
                        <div className="titleContainer">
                            <p className="title">Today's Journey</p>
                            <p className="underTitle">Small steps for meanigful progress.</p>
                        </div>
                        <Link to="/journey" href="#">view full jurney <i className="fa-solid fa-arrow-right"></i></Link>
                    </header>
                    <div className="tasks">
                        <div className="task">
                            <header>
                                <div className="badge plane"><i className="fas fa-plane"></i></div>
                                <div className="titleContainer">
                                    <p className="title">Airport Explore</p>
                                    <p className="underTitle">12 New Words</p>
                                </div>
                            </header>
                            <div className="progress-bar-container">
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div><span>0/10</span>
                                <button>start</button>
                            </div>
                        </div>
                        <div className="task">
                            <header>
                                <div className="badge headphone"><i className="fa-solid fa-headphones"></i></div>
                                <div className="titleContainer">
                                    <p className="title">Travel Listening</p>
                                    <p className="underTitle">5 Minutes</p>
                                </div>
                            </header>
                            <div className="progress-bar-container">
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div><span>5 min</span>
                                <button>start</button>
                            </div>
                        </div>
                        <div className="task">
                            <header>
                                <div className="badge microphone"><i className="fas fa-microphone"></i></div>
                                <div className="titleContainer">
                                    <p className="title">Check-In-Conversation</p>
                                    <p className="underTitle">Speaking Practice</p>
                                </div>
                            </header>
                            <div className="progress-bar-container">
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div><span>5 min</span>
                                <button>start</button>
                            </div>
                        </div>
                        <div className="task">
                            <header>
                                <div className="badge restore"><i className="fa-solid fa-rotate-left"></i></div>
                                <div className="titleContainer">
                                    <p className="title">Word Reveiw</p>
                                    <p className="underTitle">25 Words</p>
                                </div>
                            </header>
                            <div className="progress-bar-container">
                                <div className="progress-bar">
                                    <div className="progress"></div>
                                </div>
                                <button>start</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lastRow">
                    <div className="continue">
                        <div className="continue-header">
                            <p className="title">Continuue Learning</p>
                            <div className="inProgress">In Progres</div>
                        </div>
                        <div className='detailsContainer'>
                            <img src="/assets/foxEating.png" alt="fox eating" className="continueImg" />
                            <div className="details">
                                <p className="secondTitle">Restaurant Explore</p>
                                <div className="progressbarContainer">
                                    <div className="progress-bar">
                                        <div style={{ width: '80%' }} className="progress"></div>
                                    </div><span>80%</span>
                                </div>
                                <p className="underTitle">
                                    20% Of Our Previous Adventure Remains!
                                </p>
                                <button className="continueBtn">Continue <i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="words">

                        <div className="words-header">
                            <div>
                                <div className="title">Words Learned</div>
                                <div className="subtitle">Last 30 days</div>
                            </div>

                            <select>
                                <option>30 days</option>
                                <option>7 days</option>
                                <option>90 days</option>
                            </select>
                        </div>


                        <div className="chart">

                            <svg viewBox="0 0 400 180">

                                <line className="grid-line" x1="25" y1="20" x2="390" y2="20"></line>
                                <line className="grid-line" x1="25" y1="68" x2="390" y2="68"></line>
                                <line className="grid-line" x1="25" y1="116" x2="390" y2="116"></line>
                                <line className="grid-line" x1="25" y1="164" x2="390" y2="164"></line>


                                <text x="5" y="23">60</text>
                                <text x="5" y="71">40</text>
                                <text x="5" y="119">20</text>
                                <text x="12" y="167">0</text>


                                <path
                                    className="chart-area"
                                    d="
                M 25 135

                C 35 125, 45 130, 55 132
                C 65 134, 75 125, 85 112
                C 95 98, 105 90, 115 98
                C 125 108, 135 116, 145 117
                C 155 118, 160 110, 165 95

                C 170 78, 180 88, 190 90
                C 200 92, 205 100, 215 95
                C 225 90, 230 92, 238 88

                C 245 70, 250 58, 260 55
                C 270 52, 275 38, 285 42
                C 295 47, 300 60, 310 68

                C 320 76, 330 67, 338 63
                C 346 58, 352 72, 360 50

                C 365 35, 370 25, 378 22
                C 385 20, 390 12, 390 8

                L 390 164
                L 25 164
                Z
                "
                                />


                                <path
                                    className="chart-line"
                                    d="
                M 25 135

                C 35 125, 45 130, 55 132
                C 65 134, 75 125, 85 112
                C 95 98, 105 90, 115 98
                C 125 108, 135 116, 145 117
                C 155 118, 160 110, 165 95

                C 170 78, 180 88, 190 90
                C 200 92, 205 100, 215 95
                C 225 90, 230 92, 238 88

                C 245 70, 250 58, 260 55
                C 270 52, 275 38, 285 42
                C 295 47, 300 60, 310 68

                C 320 76, 330 67, 338 63
                C 346 58, 352 72, 360 50

                C 365 35, 370 25, 378 22
                C 385 20, 390 12, 390 8
                "
                                />


                                <text className="date" x="55" y="178">Apr 23</text>
                                <text className="date" x="135" y="178">Apr 30</text>
                                <text className="date" x="215" y="178">May 7</text>
                                <text className="date" x="290" y="178">May 14</text>
                                <text className="date" x="365" y="178">May 21</text>

                            </svg>

                        </div>

                    </div>
                    <div className="insight">
                        <div className="insight-header">
                            <p className="title">Nox Insight</p>
                            <a href="#">see more insights <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="talking">
                            <img src="/assets/foxLamp.png" alt="fox" />
                            <div className="secondMessage">
                                <p>You perform better with listening experiences.</p>
                                <p className="underTitle">
                                    keep it up! your listening score has improved 18% this month.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>♡ Every adventure brings you closer to your goals</footer>
            </main>
        </>
    )
}