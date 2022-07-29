import "./style.css"
import { useState } from "react"
import Button from "../Button/Button.js"
import { Link } from "react-router-dom";

export default function InputDataUser({
    chosenSeat,
    dataUser,
    setDataUser,
    movieTitle,
    movieDay,
    movieTime,
    movieDate
}) {

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    function sendData(event) {
        event.preventDefault()
    }

    function toma() {
        setDataUser({ ...dataUser, ids : chosenSeat, name:name , cpf:cpf, movieTitle:movieTitle, movieDay:movieDay, movieTime:movieTime, movieDate:movieDate})
        console.log(dataUser)
    }
    
    //const dataUser = { ids : [chosenSeat], name:name , cpf:cpf }

    return (
        <form onSubmit = {sendData}>
            <div className = "inputs">
                <div>
                    <h1 className = "name-user">Nome do comprador</h1>
                    <input type = "text" placeholder = "Digite seu nome" required value = {name} onChange={event => setName(event.target.value)}/>
                </div>
                <div>
                    <h1 className = "cpf-user">CPF do comprador</h1>
                    <input type = "text" placeholder = "Digite seu CPF" required value = {cpf} onChange={event => setCpf(event.target.value)}/>
                </div>
            </div>
            <Link to = {"/succes"} onClick = {toma}>
                <Button type = "submit">
                    <h1>Reservar assento(s)</h1>   
                </Button>
            </Link>
        </form>
    )
}