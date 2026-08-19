import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import './style.css'

export default function HelpPage() {
    return (
        <>
            <SideBar autoActiveItem="help"/>
            <main>
                <Header/>
                <h1>help</h1>
            </main>
        </>
    )
}
