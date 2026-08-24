import './style.css'
import SideBar from '../../components/SideBar'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Word from './components/Word'

export default function VocabularyPage() {
    const [canScrollLeft, setCanScrollLeft] = useState(true)
    const [canScrollRight, setCanScrollRight] = useState(false)
    const [bookMarkWords, setBookMarkWords] = useState([])
    const [isWeekWord, setIsWeekWord] = useState(false)
    const containerRef = useRef(null)

    const moveRight = () => {
        containerRef.current.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    };
    const moveLeft = () => {
        containerRef.current.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    };
    const checkScroll = () => {
        const container = containerRef.current
        if (!container) return
        const maxScroll = container.scrollWidth - container.clientWidth
        const currentScroll = Math.abs(container.scrollLeft)
        if (currentScroll <= 1) {
            setCanScrollLeft(true)
            setCanScrollRight(false)
            return
        }
        if (currentScroll >= maxScroll - 1) {
            setCanScrollLeft(false)
            setCanScrollRight(true)
            return
        }
        setCanScrollLeft(true)
        setCanScrollRight(true)
    }
    const toggleBookMark = (word) => {
        setBookMarkWords(prev =>
            prev.includes(word)
                ? prev.filter(item => item !== word)
                : [...prev, word]
        )
    }
    const speakWord = (word) => {
        const speech = new SpeechSynthesisUtterance(word);
        speech.lang = 'zh-CN';
        speech.rate = 0.8;
        window.speechSynthesis.speak(speech);
    };
    useEffect(() => {
        const container = containerRef.current
        if (!container) return
        checkScroll()
        container.addEventListener("scroll", checkScroll)
        return () => {
            container.removeEventListener("scroll", checkScroll)
        }
    }, [])
    return (
        <>
            <SideBar autoActiveItem="vocabulary" />
            <main>
                <Header />
                <header className="pageTitleContainer">
                    <div className="titleBadge">
                        <img src="/assets/vocabulary.png" alt="vocabulary" />
                    </div>
                    <div className="pageTitle">
                        <h3>واژگان</h3>
                        <p>مدیریت و مرور واژه هایی که یاد گرفتی</p>
                    </div>
                </header>
                <div className="general">
                    <div className="generalRight">
                        <div className="talking">
                            <img src="/assets/2e61693d6c477d0f6d24e31d40e7ada1b49b8ab5.png" alt="fox" />
                            <div className="foxMessage">
                                <p>هر روز چند واژه رو مرور کن تا ماندگار بشن!</p>
                            </div>
                        </div>
                        <h2>نمای کلی واژگان</h2>
                        <div className="works">
                            <div className="work overview">
                                <h4>42</h4>
                                <p>نیاز به مرور</p>
                                <div className="progressbarContainer">
                                    <span>12%</span><div className="progress-bar">
                                        <div style={{ width: '12%' }} className="progress"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="work stabilization">
                                <h4>96</h4>
                                <p>در حال تثبیت</p>
                                <div className="progressbarContainer">
                                    <span>28%</span><div className="progress-bar">
                                        <div style={{ width: '28%' }} className="progress"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="work fluent">
                                <h4>210</h4>
                                <p>مسلط</p>
                                <div className="progressbarContainer">
                                    <span>80%</span><div className="progress-bar">
                                        <div style={{ width: '80%' }} className="progress"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="generalLeft">
                        <div className="progress-circle"
                            style={{ background: `conic-gradient(#5b5ce2 0deg ${67 / 100 * 360}deg, #eeeeff ${67 / 100 * 360}deg 360deg)` }}>
                            <span>
                                348
                                <br />
                                <span>
                                    واژه یاد گرفتی!
                                </span>
                            </span>
                        </div>
                        <Link>
                            <button>
                                <i className="fa-solid fa-arrow-trend-up"></i>
                                گزارش کامل
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="vocabWrapper">
                    <div className="needOverview">
                        <p className='title'><i className="fas fa-rotate-left"></i>  واژه هایی که نیاز به مرور دارن</p>
                        <p className="text">12 واژه در خطر فراموشی</p>
                        <p className="footerText">مرور پیشنهادی امروز</p>
                        <div className="wordsNeed">
                            <div className="word">
                                <h6>机场</h6>
                                <p>jīchǎng</p>
                            </div>
                            <div className="word">
                                <h6>发现</h6>
                                <p>fāxiàn</p>
                            </div>
                            <div className="word">
                                <h6>参加</h6>
                                <p>cānjiā</p>
                            </div>
                        </div>
                        <Link>
                            <button>
                                مرور 12 واژه
                            </button>
                        </Link>
                    </div>
                    <div className="thisWeekWord">
                        <img src="/assets/e2079e39ebab51de8dc693eeb449a493f7f5b04b.png" alt="fox" className='foxReading' />
                        <header>
                            <p className="title">واژه این هفته</p>
                            <p className="information"><img src="/assets/information.png" alt="information" />چرا این واژه ؟</p>
                        </header>
                        <main>
                            <button className="playBtn" onClick={() => speakWord('旅行')}><i className="fas fa-volume-up"></i></button>
                            <button className="bookMarkBtn" onClick={() => isWeekWord ? setIsWeekWord(false) : setIsWeekWord(true)}>{isWeekWord ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>}</button>
                        </main>
                        <footer>
                            <p className="wordInOtherLan">旅行</p>
                            <p className="wordSound">Lǚxíng</p>
                            <p className="meaning">سفر</p>
                        </footer>
                        <button className="learnBtn">یادگیری بیشتر</button>
                    </div>
                </div>
                <div className="todayPractice">
                    <header>
                        <Link to="/journey" href="#">مشاهده همه <i className="fa-solid fa-arrow-left"></i></Link>
                        <p className="title">تمرین های پیشنهادی امروز</p>
                    </header>
                    <div className="practices" ref={containerRef}>
                        {canScrollRight && (
                            <button className="goRight" onClick={moveRight}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        )}
                        <div className="practice brain">
                            <img src="/assets/brain.png" alt="brain" />
                            <div className="titleContainer">
                                <p className="title">مرور واژه های سخت</p>
                                <p className="underTitle">8 واژه - 3 دقیقه</p>
                            </div>
                            <button className="startBtn">شروع</button>
                        </div>
                        <div className="practice headphone">
                            <img src="/assets/headphone.png" alt="headphone" />
                            <div className="titleContainer">
                                <p className="title">مرور واژه های سخت</p>
                                <p className="underTitle">8 واژه - 3 دقیقه</p>
                            </div>
                            <button className="startBtn">شروع</button>
                        </div>
                        <div className="practice pencil">
                            <img src="/assets/pencil.png" alt="pencil" />
                            <div className="titleContainer">
                                <p className="title">مرور واژه های سخت</p>
                                <p className="underTitle">8 واژه - 3 دقیقه</p>
                            </div>
                            <button className="startBtn">شروع</button>
                        </div>
                        <div className="practice microphone">
                            <img src="/assets/microphone.png" alt="mic" />
                            <div className="titleContainer">
                                <p className="title">مرور واژه های سخت</p>
                                <p className="underTitle">8 واژه - 3 دقیقه</p>
                            </div>
                            <button className="startBtn">شروع</button>
                        </div>
                        <div className="practice brain">
                            <img src="/assets/brain.png" alt="brain" />
                            <div className="titleContainer">
                                <p className="title">مرور واژه های سخت</p>
                                <p className="underTitle">8 واژه - 3 دقیقه</p>
                            </div>
                            <button className="startBtn">شروع</button>
                        </div>
                        {canScrollLeft && (
                            <button className="goLeft" onClick={moveLeft}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                        )}
                    </div>
                </div>
                <div className="myWords">
                    <header>
                        <h3>واژه های من</h3>
                        <div className="filterAndSearch">
                            <button><i className="fa-solid fa-filter"></i>فیلتر ها</button>
                            <div className="searchBox">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder="جستجو در واژه ها..." />
                            </div>
                            <div className="sortSelect">
                                <i className="fa-solid fa-arrow-down-wide-short"></i>
                                <select>
                                    <option>مرتب سازی : بر اساس پین یین</option>
                                    <option>مرتب سازی : بر اساس واژه</option>
                                    <option>مرتب سازی : بر اساس نقش دستوری</option>
                                </select>
                            </div>
                        </div>
                    </header>
                    <div className='letersAndWords'>
                        <div className="letters">
                            <a href="#A" name='A'>A</a>
                            <a href="#B" name="B">B</a>
                            <a href="">C</a>
                            <a href="">D</a>
                            <a href="">E</a>
                            <a href="">F</a>
                            <a href="">G</a>
                            <a href="">H</a>
                            <a href="">I</a>
                            <a href="">J</a>
                            <a href="">.</a>
                            <a href="">.</a>
                            <a href="">.</a>
                            <a href="">Z</a>
                        </div>
                        <div className="words">
                            <div className="wordsOfLetter">
                                <header name='A'>A</header>
                                <div className="wordRow first">
                                    <p>واژه</p>
                                    <p>Pinyin</p>
                                    <p>ترجمه فارسی</p>
                                    <p>نقش دستوری</p>
                                    <p>میزان تسلط</p>
                                </div>
                                <hr />
                                <Word
                                    word='爱'
                                    pinyin='Ài'
                                    mean='دوست داشتن'
                                    grammer='فعل'
                                    percent={92}
                                    bookMarkWords={bookMarkWords}
                                    toggleBookMark={toggleBookMark}
                                />
                                <hr />
                                <Word
                                    word='安全'
                                    pinyin='ānquán'
                                    mean='امن / ایمن'
                                    grammer='صفت'
                                    percent={78}
                                    bookMarkWords={bookMarkWords}
                                    toggleBookMark={toggleBookMark}
                                />
                                <hr />
                                <Word
                                    word='安排'
                                    pinyin='ānpái'
                                    mean='ترتیب دادن/برنامه‌ریزی کردن'
                                    grammer='فعل'
                                    percent={65}
                                    bookMarkWords={bookMarkWords}
                                    toggleBookMark={toggleBookMark}
                                />
                                <hr />
                                <Word
                                    word='澳门'
                                    pinyin='Àomén'
                                    mean='ماکائو'
                                    grammer='اسم خاص'
                                    percent={88}
                                    bookMarkWords={bookMarkWords}
                                    toggleBookMark={toggleBookMark}
                                />
                            </div>
                            <div className="wordsOfLetter">
                                <header name='B'>B</header>
                                <div className="wordRow first">
                                    <p>واژه</p>
                                    <p>Pinyin</p>
                                    <p>ترجمه فارسی</p>
                                    <p>نقش دستوری</p>
                                    <p>میزان تسلط</p>
                                </div>
                                <hr />
                                <Word
                                    word='吧'
                                    pinyin='ba'
                                    mean='ذره پایانی جمله'
                                    grammer='ذره'
                                    percent={70}
                                    bookMarkWords={bookMarkWords}
                                    toggleBookMark={toggleBookMark}
                                />
                                <hr />
                                <Word
                                    word='白'
                                    pinyin='bái'
                                    mean='سفید'
                                    grammer='صفت'
                                    percent={90}
                                    bookMarkWords={bookMarkWords}
                                    toggleBookMark={toggleBookMark}
                                />
                                <hr />
                            </div>
                            <button className='seeMore'>مشاهده بیشتر</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}