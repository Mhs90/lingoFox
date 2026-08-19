import { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import './style.css'
import { Link } from 'react-router-dom';

export default function Header() {
    const [language, setLanguage] = useState('چینی')
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            <div className="informations">
                <div className="variables"></div>
                <div className="diamonds">💎12  الماس</div>
                <div className="stars">⭐480 امتیاز</div>
                <div className="days">🔥12 روز پیاپی</div>
                <div className="languageMenu" style={{ height: `${!isOpen ? '45px' : `${55*4}px`}` }}>
                    {!isOpen ? <div className="languageItem selected" onClick={e => setIsOpen(true)}>
                        <img src={`/assets/flags/${language}.png`} className='flag' alt="flag" />
                        <span className="languageName">{language}</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div> :
                        <>
                            <div className="languageItem selected" onClick={() => {
                                setLanguage('چینی')
                                setIsOpen(false)
                            }}>
                                <img src="/assets/flags/چینی.png" className='flag' alt="flag" />
                                <span className="languageName">چینی</span>
                                <i className="fa-solid fa-chevron-up"></i>
                            </div>

                            <div className="languageItem" onClick={() => {
                                setLanguage('انگلیسی')
                                setIsOpen(false)
                            }}>
                                <img src="/assets/flags/انگلیسی.png" className='flag' alt="flag" />
                                <span className="languageName">انگلیسی</span>
                            </div>

                            <div className="languageItem" onClick={() => {
                                setLanguage('اسپانیایی')
                                setIsOpen(false)
                            }}>
                                <img src="/assets/flags/اسپانیایی.png" className='flag' alt="flag" />
                                <span className="languageName">اسپانیایی</span>
                            </div>

                            <Link className="addLanguage">
                                <div className="plusIcon">
                                    <FaPlus />
                                </div>
                                <span>افزودن زبان جدید</span>
                            </Link>
                        </>}
                </div >
                <div className="messages">
                    <i className="fa-regular fa-bell"></i>
                </div>
                <div className="profile">
                    <img src="/assets/profile.png" alt="profile" />  <span>داریا</span>
                </div>
            </div >
            <div className="greeting">
                <h3>سلام داریا! 👋</h3>
                <p>برای ماجراجویی امروز آماده ای ؟</p>
            </div>
        </header >
    )
}
