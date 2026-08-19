import { Link } from 'react-router-dom';
import './style.css'
import { useState } from 'react';

export default function SideBar({ autoActiveItem }) {
    const [activeItem, setActiveItem] = useState(autoActiveItem)
    return (
        <div className="sidebar">
            <div>
                <img src="/assets/Screenshot 2026-08-08 124305.png" alt="logo" className="logo" />
                <ul className="menuContainer">
                    <Link
                        to="/"
                        onClick={() => setActiveItem('dashboard')}
                        className={`menu ${activeItem === 'dashboard' ? 'active' : ''}`}>
                        {activeItem === 'dashboard' ?
                            <img src="/assets/active-home-icon.png" alt="fox" className="dashboardImg" /> :
                            <img src="/assets/home-icon.png" alt="fox" className="dashboardImg" />}
                        <span>داشبورد</span>
                    </Link>
                    <Link
                        to="/journey"
                        onClick={() => setActiveItem('journey')}
                        className={`menu ${activeItem === 'journey' ? 'active' : ''}`}>
                        {activeItem === 'journey' ?
                            <img src="/assets/active-journey-icon.png" alt="fox" className="dashboardImg" /> :
                            <img src="/assets/journey-icon.png" alt="fox" className="dashboardImg" />}
                        <span>ماجراجویی</span>
                    </Link>
                    <Link
                        to="/vocabulary"
                        onClick={() => setActiveItem('vocabulary')}
                        className={`menu ${activeItem === 'vocabulary' ? 'active' : ''}`}>
                        {activeItem === 'vocabulary' ?
                            <img src="/assets/active-book-icon.png" alt="fox" className="dashboardImg" /> :
                            <img src="/assets/book-icon.png" alt="fox" className="dashboardImg" />}
                        <span>واژگان</span>
                    </Link>
                    <Link
                        to="/speaking"
                        onClick={() => setActiveItem('speaking')}
                        className={`menu ${activeItem === 'speaking' ? 'active' : ''}`}>
                        {activeItem === 'speaking' ?
                            <img src="/assets/active-mic-icon.png" alt="fox" className="dashboardImg" /> :
                            <img src="/assets/mic-icon.png" alt="fox" className="dashboardImg" />}
                        <span>مهارت گفتاری</span>
                    </Link>
                    <Link
                        to="/listening"
                        onClick={() => setActiveItem('listening')}
                        className={`menu ${activeItem === 'listening' ? 'active' : ''}`}>
                        {activeItem === 'listening' ?
                            <img src="/assets/active-headphone-icon.png" alt="fox" className="dashboardImg" /> :
                            <img src="/assets/headphone-icon.png" alt="fox" className="dashboardImg" />}
                        <span>مهارت شنیداری</span>
                    </Link>
                    <Link
                        to="/ai"
                        onClick={() => setActiveItem('ai')}
                        className={`menu ${activeItem === 'ai' ? 'active' : ''}`}>
                        {activeItem === 'ai' ?
                            <img src="/assets/active-nox.png" alt="fox" className="dashboardImg" /> :
                            <img src="/assets/image.png" alt="fox" className="dashboardImg" />}
                        <span>ناکس</span>
                    </Link>
                    <Link
                        to="/progress"
                        onClick={() => setActiveItem('progress')}
                        className={`menu ${activeItem === 'progress' ? 'active' : ''}`}>
                        {activeItem === 'progress' ?
                            <img src="/assets/active-progress-icon.png" alt="fox" className="dashboardImg" /> :
                            <img src="/assets/progress-icon.png" alt="fox" className="dashboardImg" />}
                        <span>پیشرفت</span>
                    </Link>
                    <Link
                        to="/library"
                        onClick={() => setActiveItem('library')}
                        className={`menu ${activeItem === 'library' ? 'active' : ''}`}>
                        {activeItem === 'library' ?
                            <img src="/assets/active-library-icon.png" alt="fox" className="dashboardImg" /> :
                            <img src="/assets/library-icon.png" alt="fox" className="dashboardImg" />}
                        <span>کتابخانه</span>
                    </Link>
                </ul>
            </div>
            <div className="other">
                <Link
                    to="/setting"
                    onClick={() => setActiveItem('setting')}
                    className={`menu ${activeItem === 'setting' ? 'active' : ''}`}>
                    {activeItem === 'setting' ?
                        <img src="/assets/active-setting.png" alt="fox" className="dashboardImg" /> :
                        <img src="/assets/setting.png" alt="fox" className="dashboardImg" />}
                    <span>تنظیمات</span>
                </Link>
                <Link
                    to="/help"
                    onClick={() => setActiveItem('help')}
                    className={`menu ${activeItem === 'help' ? 'active' : ''}`}>
                    {activeItem === 'help' ?
                        <img src="/assets/active-help.png" alt="fox" className="dashboardImg" /> :
                        <img src="/assets/help.png" alt="fox" className="dashboardImg" />}
                    <span>راهنما و پشتیبانی</span>
                </Link>
            </div>
        </div>
    )
}
