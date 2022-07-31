import { useState } from "react"
import { useNavigate } from "react-router-dom";
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
    movieDate,
    places
}) {

    const linkApiSendData = "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many"
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const navigate = useNavigate()

    function receiveEvent(event) {
        event.preventDefault()
        if (checkDataUser() === false) return
        generateObject()
        sendData()
        navigate("/succes")
    }

    function checkDataUser() {
        setCpf(Number(cpf))
        if (cpf.length < 11 || isNaN(cpf)) {
            alert("Digite um cpf válido")
            setCpf("")
            return false
        }
        else if (chosenSeat.length === 0) {
            alert("Selecione ao menos um assento")
            return false
        }
    }

    function generateObject() {
        setDataUser({ 
            ...dataUser, 
            ids : places, 
            name,
            cpf, 
            movieTitle, 
            movieDay, 
            movieTime, 
            movieDate,
        })
    }

    function sendData() {
        const promise = axios.post(linkApiSendData, { 
            ids : chosenSeat, 
            name, 
            cpf,
        })
        promise
        .then(answerServer => {
            resetData()
            navigate("/succes")
        })
        .catch(answerServer => {
            alert("Ops, algo deu errado! Estamos tentando descobrir o erro para melhor atendê-lo")
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