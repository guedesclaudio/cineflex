import Logo from "../Logo/Logo.js"
import "./style.css"

function Schedule() {
    return (
        <>
            <div className = "date">
                Quinta-feira - 24/06/2021
            </div>
            <div className = "select-hour">
                <div className = "hour">
                    15:00
                </div>
                <div className = "hour">
                    19:00
                </div>
            </div>
        </>
    )
}

export default function MovieScreen() {
    return (
        <>
            <Logo/>
            <div className = "movie-select">Selecione o horário</div>
            <div className = "schedules">
                <Schedule/>
                <Schedule/>
                <Schedule/>
            </div>
        </>
    )
}