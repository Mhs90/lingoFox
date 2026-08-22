import { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import './style.css'
import { Link } from 'react-router-dom';

export default function Header() {
    const [language, setLanguage] = useState('چینی')
    const [isOpen, setIsOpen] = useState(false)

    const [languagesBuyed] = useState([
        'چینی',
        'انگلیسی',
        'اسپانیایی'
    ])

    const availableLanguages = languagesBuyed.filter(
        lan => lan !== language
    )

    return (
        <header>
            <div className="informations">
                <div className="variables"></div>
                <div className="diamonds">
                    💎12 الماس
                </div>
                <div className="points">
                    ⭐480 امتیاز
                </div>
                <div className="days">
                    🔥12 روز پیاپی
                </div>
                <div
                    className="languageMenu"
                    style={{
                        height: isOpen
                            ? `${45 + availableLanguages.length * 55 + 55}px`
                            : '45px'
                    }}
                >
                    <div
                        className="languageItem selected"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen && <div className="success">
                            <i className="fa-solid fa-check"></i>
                        </div>}
                        <img
                            src={`/assets/flags/${language}.png`}
                            className="flag"
                            alt="flag"
                        />
                        <span className="languageName">
                            {language}
                        </span>
                        <i
                            className={`fa-solid ${isOpen
                                ? 'fa-chevron-up'
                                : 'fa-chevron-down'
                                }`}
                        ></i>
                    </div>
                    {isOpen && (
                        <>
                            {availableLanguages.map(lan => (
                                <div
                                    className="languageItem"
                                    key={lan}
                                    onClick={() => {
                                        setLanguage(lan)
                                        setIsOpen(false)
                                    }}
                                >
                                    <img
                                        src={`/assets/flags/${lan}.png`}
                                        className="flag"
                                        alt={lan}
                                    />
                                    <span className="languageName">
                                        {lan}
                                    </span>
                                </div>
                            ))}
                            <Link
                                to="#"
                                className="addLanguage"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="plusIcon">
                                    <FaPlus />
                                </div>
                                <span>
                                    افزودن زبان جدید
                                </span>
                            </Link>
                        </>
                    )}
                </div>
                <div className="messages">
                    <i className="fa-regular fa-bell"></i>
                </div>
                <div className="profile">
                    <img
                        src="/assets/profile.png"
                        alt="profile"
                    />
                    <span>داریا</span>
                </div>
            </div>
            <div className="greeting">
                <h3>سلام داریا! 👋</h3>
                <p>برای ماجراجویی امروز آماده ای ؟</p>
            </div>
        </header>
    )
}