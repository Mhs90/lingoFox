import Station from './Station'
import './style.css'

export default function TimeLine() {
    return (
        <div className="timelineContainer">
            <div className="timelineTitle">
                Your Adventure Timeline
            </div>
            <a href="#">
                view all adventures
                <i className='fa-solid fa-arrow-right'></i>
            </a>
            <p className="journeyUnderTitle">
                Track your progress and milestones
            </p>
            <div className="timeline-bar">
                <div className="ahead"></div>
            </div>
            <div className="stations">
                <Station text='Welcome To The Village' icon='house' condition='success' />
                <Station text='Restaurant Explore' icon='utensils' condition='success' />
                <Station text='Travel Communication' icon='plane' condition='continuing' />
                <Station text='Check-In-Hotel' icon='lock' condition='close' />
                <Station text='Ask For Direction' icon='lock' condition='close' />
                <Station text='Shopping Explorer' icon='lock' condition='close' />
            </div>
        </div>
    )
}
