import { useState } from 'react'
import './style.css'

export default function Header() {
    const [language, setLanguage] = useState('Persian')
    return (
        <header>
            <div class="days">🔥12 Day</div>
            <div class="informations">
                <div class="language-select">
                    <img src={`/assets/flags/${language}.png`} alt={language} />
                    <select name="language" onChange={(e) => setLanguage(e.target.value)}>
                        <option defaultValue="persian" >Persian</option>
                        <option defaultValue="chinese">Chinese</option>
                        <option defaultValue="english">English</option>
                        <option defaultValue="german">German</option>
                        <option defaultValue="french">French</option>
                    </select>
                </div>
                <div class="messages">
                    <i class="fa-regular fa-bell"></i>
                </div>
                <div class="profile">
                    <img src="/assets/profile.png" alt="profile" /> <span>Daria</span>
                </div>
            </div>
        </header>
    )
}
