import SideBar from "../../components/SideBar";
import './style.css'
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Task from "./components/Task/Task";
import { useState } from "react";

export default function DashboardPage() {
    const [lastDay, setLastDay] = useState(30)
    return (
        <>
            <SideBar autoActiveItem="dashboard" />
            <main>
                <Header />
                <div className="wrapper">

                    <div className="messageBox">
                        <div className="left">
                            <p className="adventure">✨ ماجراجویی امروز</p>
                            <h1>در فرودگاه ✈️</h1>
                            <p className="note">باهم یاد میگیریم چطور آدرس بپرسیم و مقصدمون رو مشخص کنیم!</p>
                            <div className="banners">
                                <div className="banner">
                                    <img src="/assets/mic-banner.png" alt="" />
                                    <div className="text">
                                        <p className="up">15 دقیقه</p>
                                        <p className="down">زمان تقریبی</p>
                                    </div>
                                </div>
                                <div className="banner">
                                    <img src="/assets/book-banner.png" alt="" />
                                    <div className="text">
                                        <p className="up">12 واژه جدید</p>
                                        <p className="down">واژگان اصلی</p>
                                    </div>
                                </div>
                                <div className="banner">
                                    <img src="/assets/clock-banner.png" alt="" />
                                    <div className="text">
                                        <p className="up">مهارت گفتاری</p>
                                        <p className="down">مهارت اصلی</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/journey"><button>شروع ماجراجویی  ◀</button></Link>
                        </div>
                        <div className="right">
                            <img src="/assets/second-fox.png" alt="fox" />
                        </div>
                    </div>
                    <div className="snapshot">
                        <header className="header">
                            <p className="title">این هفته با تو</p>
                            <Link to="/progress">مشاهده پیشرفت <i className="fa-solid fa-arrow-left"></i></Link>
                        </header>
                        <div className="main">
                            <div className="row">
                                <div className="badge active-book-icon"><img src="/assets/active-book-icon.png" alt="" /></div>
                                <div className="textContainer">
                                    <p className="learned">30 واژه یاد گرفتی</p>
                                    <p className="level">سطح متوسط</p>
                                </div>
                                <div className="detailAndProgress">
                                    <p className="green">12 واژه جدید امروز!</p>
                                    <div className="progress-circle"
                                        style={{ background: 'conic-gradient(#5b5ce2 0deg 288deg, #eeeeff 288deg 360deg)' }}>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="badge microphone"><img src="/assets/microphone.png" alt="" /></div>
                                <p className="learned">3 جلسه گفتاری</p>
                                <div className="detailAndProgress">
                                    <p className="green">1 جلسه گفتاری امروز!</p>
                                    <div className="progress-circle"
                                        style={{ background: 'conic-gradient(#5b5ce2 0deg 230.4deg, #eeeeff 230.4deg 360deg)' }}>
                                        <span>64%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="badgeAndTitle">
                                    <div className="badge headphone"><img src="/assets/headphone.png" alt="" /></div>
                                    <p className="learned">3 جلسه شنیداری</p></div>
                                <div className="detailAndProgress">
                                    <div className="progress-circle"
                                        style={{ background: 'conic-gradient(#5b5ce2 0deg 259.2deg, #eeeeff 259.2deg 360deg)' }}>
                                        <span>72%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="badgeAndTitle">
                                    <div className="badge message"><img src="/assets/message.png" alt="" /></div>
                                    <p className="learned">1 مکالمه داشتی</p></div>
                                <div className="detailAndProgress">
                                    <div className="progress-circle"
                                        style={{ background: 'conic-gradient(#5b5ce2 0deg 194.4deg, #eeeeff 194.4deg 360deg)' }}>
                                        <span>54%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-wrapper">

                    <div className="todayJourney">
                        <header>
                            <div className="headerTitleContainer">
                                <p className="title">مسیر امروز</p>
                                <p className="underTitle">مسیری که برای امروز در پیش داری</p>
                            </div>
                            <Link to="/journey" href="#">مشاهده مسیر کامل <i className="fa-solid fa-arrow-left"></i></Link>
                        </header>
                        <div className="tasks">
                            <Task icon="plane" title='واژگان فرودگاه' text='12 واژه جدید' progressText="0/12" />
                            <img src="/assets/dashed-line.png" alt="" />
                            <Task icon="microphone" title='تمرین گفتاری' text='5 دقیقه' progressText="5 دقیقه" />
                            <img src="/assets/second-dashed-line.png" alt="" />
                            <Task icon="headphone" title='تمرین شنیداری' text='5 دقیقه' progressText="5 دقیقه" />
                            <img src="/assets/dashed-line.png" alt="" />
                            <Task icon="message" title='مکالمه در فرودگاه' text='چیزهایی که یادگرفتی رو مرور کن!' progressText="5 دقیقه" />
                        </div>
                    </div>
                    <div className="continue">
                        <div className="continue-header">
                            <p className="title">ادامه یادگیری</p>
                            <div className="inProgress">در حال انجام</div>
                        </div>
                        <div className='detailsContainer'>
                            <div className="details">
                                <p className="secondTitle">در رستوران 🍜</p>
                                <div className="progressbarContainer">
                                    <span>80%</span><div className="progress-bar">
                                        <div style={{ width: '80%' }} className="progress"></div>
                                    </div>
                                </div>
                                <p className="underTitle">
                                    هنوز یک مرحله از ماجراجویی قبلی مونده!
                                </p>
                                <Link to="/journey"><button className="continueBtn">ادامه <i className="fa-solid fa-arrow-left"></i></button></Link>
                            </div>
                            <img src="/assets/foxEating.png" alt="fox eating" className="continueImg" />
                        </div>
                    </div>
                </div>
                <div className="third-wrapper">
                    <div className="insight">
                        <div className="insight-header">
                            <p className="title">ناکس چیزی برات داره!</p>
                        </div>
                        <div className="talking">
                            <img src="/assets/foxLamp.png" alt="fox" />
                            <div className="secondMessage">
                                <p>چندتا واژه جدید هفته پیش یاد گرفتی، بیا باهاشون جمله بسازیم و مکالمه داشته باشیم!</p>
                            </div>
                        </div>
                        <Link to="/ai"><button><i class="fa-regular fa-comment-dots"></i>  مکالمه با ناکس</button></Link>
                    </div>
                    <div className="libraryContainer">
                        <header>
                            <div className="headerTitleContainer">
                                <p className="title">کتابخانه تو</p>
                                <p className="underTitle">مشاهده کتابخانه</p>
                            </div>
                            <Link to="/library">مشاهده کتابخانه <i className="fa-solid fa-arrow-left"></i></Link>
                        </header>
                        <div className="shelf">
                            <div className="book" style={{ backgroundImage: "url('/assets/brown-book.png')" }}>
                                <div className="description">
                                    <p className="top">نقشه 1</p>
                                    <p className="title">اولین روز ها در مدرسه</p>
                                    <p className="level">HSK1</p>
                                </div>
                                <p className="writer">نوشته  شده توسط داریا</p>
                            </div>
                            <div className="book" style={{ backgroundImage: "url('/assets/green-book.png')" }}>
                                <div className="description">
                                    <p className="top">نقشه 1</p>
                                    <p className="title"> گشت و گذار در مدرسه</p>
                                    <p className="level">HSK1</p>
                                </div>
                                <p className="writer">نوشته  شده توسط داریا</p></div>
                            <div className="book next">
                                <img src="/assets/book-banner.png" alt="book" />
                                <p>کتاب بعدی در حال ساخته شدن توسط تو هست</p>
                            </div>
                        </div>
                    </div>
                    <div className="words">
                        <div className="words-header">
                            <div>
                                <div className="title">واژه هایی که یاد گرفتی</div>
                                <div className="subtitle">در {lastDay} روز گذشته</div>
                            </div>

                            <select onChange={(e) => setLastDay(e.target.value)}>
                                <option>30 روز</option>
                                <option>7 روز</option>
                                <option>90 روز</option>
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
                </div >
                <footer>♡  یادت نره! لازم نیست کامل باشی،فقط ادامه بده. هر قدم کوچیک تو رو به هدفت نزدیک تر میکنه! </footer>
            </main>
        </>
    )
}