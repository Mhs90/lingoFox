import { Link } from "react-router-dom";
import './style.css'
import Task from "./Task";

export default function TodayJourney() {
    return (
        <div className="todayJourney">
            <header>
                <div className="titleContainer">
                    <p className="title">Today's Journey</p>
                    <p className="underTitle">Small steps for meanigful progress.</p>
                </div>
                <Link to="/journey">view full jurney <i className="fa-solid fa-arrow-right"></i></Link>
            </header>
            <div className="tasks">
                <Task icon="plane" title='Airport Explore' text='12 New Words' progressText="0/10" />
                <Task icon="headphones" title='Travel Listening' text='5 Minutes' progressText="5 min" />
                <Task icon="microphone" title='Check-In-Conversation' text='Speaking Practice' progressText="5 min" />
                <Task icon="rotate-left" title='Word Reveiw' text='25 Words' progressText="" />
            </div>
        </div>
    )
}
