import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import './style.css'

export default function AIPage() {
    return (
        <>
            <SideBar autoActiveItem="ai" />
            <main>
                <Header />
                AI Coach
            </main>
        </>
    )
}