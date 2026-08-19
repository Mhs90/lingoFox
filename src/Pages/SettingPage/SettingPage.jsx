import './style.css'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'

export default function SettingPage() {
    return (
        <>
            <SideBar autoActiveItem="setting"/>
            <main>
                <Header />
                <h1>setting</h1>
            </main>
        </>
    )
}
