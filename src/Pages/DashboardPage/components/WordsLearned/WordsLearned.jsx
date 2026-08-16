import './style.css'

export default function WordsLearned() {
    return (
        <div className="words">

            <div className="words-header">
                <div>
                    <div className="title">Words Learned</div>
                    <div className="subtitle">Last 30 days</div>
                </div>

                <select>
                    <option>30 days</option>
                    <option>7 days</option>
                    <option>90 days</option>
                </select>
            </div>


            <div className="chart">

                <svg viewBox="0 0 400 180">

                    <line className="grid-line" x1="25" y1="20" x2="390" y2="20"></line>
                    <line className="grid-line" x1="25" y1="68" x2="390" y2="68"></line>
                    <line className="grid-line" x1="25" y1="116" x2="390" y2="116"></line>
                    <line className="grid-line" x1="25" y1="164" x2="390" y2="164"></line>


                    <text x="5" y="23">60</text>
                    <text x="5" y="71">40</text>
                    <text x="5" y="119">20</text>
                    <text x="12" y="167">0</text>


                    <path
                        className="chart-area"
                        d="
                M 25 135

                C 35 125, 45 130, 55 132
                C 65 134, 75 125, 85 112
                C 95 98, 105 90, 115 98
                C 125 108, 135 116, 145 117
                C 155 118, 160 110, 165 95

                C 170 78, 180 88, 190 90
                C 200 92, 205 100, 215 95
                C 225 90, 230 92, 238 88

                C 245 70, 250 58, 260 55
                C 270 52, 275 38, 285 42
                C 295 47, 300 60, 310 68

                C 320 76, 330 67, 338 63
                C 346 58, 352 72, 360 50

                C 365 35, 370 25, 378 22
                C 385 20, 390 12, 390 8

                L 390 164
                L 25 164
                Z
                "
                    />


                    <path
                        className="chart-line"
                        d="
                M 25 135

                C 35 125, 45 130, 55 132
                C 65 134, 75 125, 85 112
                C 95 98, 105 90, 115 98
                C 125 108, 135 116, 145 117
                C 155 118, 160 110, 165 95

                C 170 78, 180 88, 190 90
                C 200 92, 205 100, 215 95
                C 225 90, 230 92, 238 88

                C 245 70, 250 58, 260 55
                C 270 52, 275 38, 285 42
                C 295 47, 300 60, 310 68

                C 320 76, 330 67, 338 63
                C 346 58, 352 72, 360 50

                C 365 35, 370 25, 378 22
                C 385 20, 390 12, 390 8
                "
                    />


                    <text className="date" x="55" y="178">Apr 23</text>
                    <text className="date" x="135" y="178">Apr 30</text>
                    <text className="date" x="215" y="178">May 7</text>
                    <text className="date" x="290" y="178">May 14</text>
                    <text className="date" x="365" y="178">May 21</text>

                </svg>

            </div>

        </div>
    )
}
