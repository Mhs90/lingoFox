import { Link } from 'react-router-dom';
import './style.css'

export default function SideBar({ activeItem }) {
    function clickHandler(event) {
        const clickedEl = event.currentTarget;

        clickedEl
            .closest('.menuContainer')
            .querySelectorAll('.menu')
            .forEach(element => {
                element.classList.remove("active");
            });

        clickedEl.classList.add("active");
    }
    return (
        <div className="sidebar">
            <img src="/assets/Screenshot 2026-08-08 124305.png" alt="logo" className="logo" />
            <ul className="menuContainer">
                <Link to="/" onClick={clickHandler} className={`menu ${activeItem == 'dashboard' ? 'active' : ''}`}>
                    <i className="fa-solid fa-house"></i> <span>Dashboard</span>
                </Link>
                <Link to="/journey" onClick={clickHandler} className={`menu ${activeItem == 'journey' ? 'active' : ''}`}>
                    <i className="fa-solid fa-map"></i> <span>Journey</span>
                </Link>
                <Link onClick={clickHandler} className="menu">
                    <i className="fa-solid fa-book-open"></i><span>Vocabulary</span>
                </Link>
                <Link onClick={clickHandler} className="menu">
                    <i className="fa-solid fa-microphone"></i><span>Speaking</span>
                </Link>
                <Link onClick={clickHandler} className="menu">
                    <i className="fa-solid fa-headphones"></i><span>Listening</span>
                </Link>
                <Link onClick={clickHandler} className="menu">
                    <i className="fa-solid fa-chart-pie"></i><span>Progress</span>
                </Link>
                <Link onClick={clickHandler} className="menu">
                    <img src="/assets/image.png" alt="fox" className="dashboardImg" /><span>AI Coach </span><div className="new">new</div>
                </Link>
            </ul>
            {activeItem == 'dashboard' ? <div className="MeetNox">
                <img src="/assets/fox.png" alt="fox" />
                <div className="text">
                    <h3>Meet Nox</h3>
                    <br />
                    <p>Your AI Learning Companion</p>
                    <br />
                    <a href="#">Chat With Nox <i className="fa-solid fa-arrow-right"></i></a>
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
