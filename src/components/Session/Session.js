import "./style.css"
import Logo from "../Logo/Logo.js"

function Seat({place}) {
    return (
        <div className = "seat">{place}</div>
    )
}

export default function Session() {

    const places = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    return (
        <>
            <h1 className = "title-session">Selecione o(s) assentos(s)</h1>
            <div className = "places">
                {places.map((value, index)=> <Seat key = {index} place = {value}/>)}
            </div>
            <div className = "legend">
                <div>
                    <div className = "circle"></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className = "circle"></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className = "circle"></div>
                    <p>Indisponível</p>
                </div>
            </div>
        </>
        
    )
}