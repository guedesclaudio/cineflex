import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button.js"
import axios from "axios";
import "./style.css"

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
    const linkApiSendData = "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many"
    const navigate = useNavigate()

    function receiveEvent(event) {
        event.preventDefault()
        generateObject()
        sendData()
    }

    function generateObject() {
        console.log("fui chamado")
        setDataUser({ 
            ...dataUser, 
            ids : chosenSeat, 
            name,
            cpf, 
            movieTitle, 
            movieDay, 
            movieTime, 
            movieDate,
        })
    }

    function sendData() {
        const promise = axios.post(linkApiSendData, { //nao ta dando post
            ids : chosenSeat, 
            name, 
            cpf,
        })
        promise
        .then(answerServer => {
            console.log(answerServer)
            resetData()
            navigate("/succes")
        })
        .catch(answerServer => {
            console.log("deu erro")
            console.log(answerServer)
        })
    }
    
    function resetData() {
        setName("")
        setCpf("")
    }
    
    
    return (
        <form onSubmit = {receiveEvent}>
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
            
            <Button type = "submit" >
                <h1 >Reservar assento(s)</h1>   
            </Button>
            
        </form>
    )
}