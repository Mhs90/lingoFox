import './style.css'
import SideBar from '../../components/SideBar'
import Header from '../../components/Header'

export default function VocabularyPage() {
    return (
        <>
            <SideBar autoActiveItem="listening" />
            <main>
                <Header />
                listening
            </main>
        </>
    )
}