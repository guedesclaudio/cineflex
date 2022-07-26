import Logo from "../Logo/Logo.js"
import "./style.css"

function Movie() {
    return (
        <div>
            FILME
        </div>
    )
}

export default function Home() {
    return (
        <>
            <Logo/>
            <div className = "title-select">Selecione o filme</div>
            <div className = "movies">
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
            </div>
        </>
    )
}