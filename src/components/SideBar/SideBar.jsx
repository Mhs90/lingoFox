import { Link } from 'react-router-dom';
import './style.css'
import { useState } from 'react';

export default function SideBar({ autoActiveItem }) {
    const [activeItem, setActiveItem] = useState(autoActiveItem)
    return (
        <div className="sidebar">
            <img src="/assets/Screenshot 2026-08-08 124305.png" alt="logo" className="logo" />
            <ul className="menuContainer">
                <Link
                    to="/"
                    onClick={() => setActiveItem('dashboard')}
                    className={`menu ${activeItem === 'dashboard' ? 'active' : ''}`}>
                    <i className="fa-solid fa-house"></i>
                    <span>Dashboard</span>
                </Link>
                <Link
                    to="/journey"
                    onClick={() => setActiveItem('journey')}
                    className={`menu ${activeItem === 'journey' ? 'active' : ''}`}>
                    <i className="fa-solid fa-map"></i>
                    <span>Journey</span>
                </Link>
                <Link
                    to="/vocabulary"
                    onClick={() => setActiveItem('vocabulary')}
                    className={`menu ${activeItem === 'vocabulary' ? 'active' : ''}`}>
                    <i className="fa-solid fa-book-open"></i>
                    <span>Vocabulary</span>
                </Link>
                <Link
                    to="/speaking"
                    onClick={() => setActiveItem('speaking')}
                    className={`menu ${activeItem === 'speaking' ? 'active' : ''}`}>
                    <i className="fa-solid fa-microphone"></i>
                    <span>Speaking</span>
                </Link>
                <Link
                    to="/listening"
                    onClick={() => setActiveItem('listening')}
                    className={`menu ${activeItem === 'listening' ? 'active' : ''}`}>
                    <i className="fa-solid fa-headphones"></i>
                    <span>Listening</span>
                </Link>
                <Link
                    to="/progress"
                    onClick={() => setActiveItem('progress')}
                    className={`menu ${activeItem === 'progress' ? 'active' : ''}`}>
                    <i className="fa-solid fa-chart-pie"></i>
                    <span>Progress</span>
                </Link>
                <Link
                    to="/ai"
                    onClick={() => setActiveItem('ai')}
                    className={`menu ${activeItem === 'ai' ? 'active' : ''}`}>
                    <img src="/assets/image.png" alt="fox" className="dashboardImg" />
                    <span>AI Coach </span><div className="new">new</div>
                </Link>
            </ul>
            {activeItem === 'dashboard' ? <div className="MeetNox">
                <img src="/assets/fox.png" alt="fox" />
                <div className="text">
                    <h3>Meet Nox</h3>
                    <br />
                    <p>Your AI Learning Companion</p>
                    <br />
                    <Link to="/ai">Chat With Nox <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div> :
                <div className="MeetNox">
                    <img src="/assets/2e36182c-9c6e-4fae-adb3-b8deb0fa23f3.png" alt="fox" />
                    <div className="text">
                        <h3>Nox's Tip</h3>
                        <br />
                        <p>every adventure makes you better!keep going!🚀</p>
                        <br />
                    </div>
                </div>}
        </div>
    )
}
