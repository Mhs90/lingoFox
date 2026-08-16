import SideBar from "../../components/SideBar";
import './style.css'
import Header from "../../components/Header";
import NextAdventure from "./components/nextAdventure";
import SnapShot from "./components/SnapShot/SnapShot";
import TodayJourney from "./components/TodayJourney";
import ContinueLearning from "./components/ContinueLearning";
import WordsLearned from "./components/WordsLearned";
import NoxInsight from "./components/NoxInsight";

export default function DashboardPage() {
    return (
        <>
            <SideBar autoActiveItem="dashboard" />
            <main>
                <Header />
                <NextAdventure />
                <SnapShot />
                <TodayJourney />
                <div className="lastRow">
                    <ContinueLearning />
                    <WordsLearned />
                    <NoxInsight />
                </div>
                <footer>♡ Every adventure brings you closer to your goals</footer>
            </main>
        </>
    )
}