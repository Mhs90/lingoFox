import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import './style.css'

export default function SpeakingPage() {
    return (
        <>
            <SideBar autoActiveItem="speaking" />
            <main>
                <Header />
                Speaking
            </main>
        </>
    )
}