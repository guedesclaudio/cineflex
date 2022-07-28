import "./style.css"
import Footer from "../Footer/Footer.js"
import Button from "../Button/Button.js"
import InputDataUser from "../InputDataUser/InputDataUser.js"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Seat({
    place,
    isAvailable
}) {
    return (
        <div className = {isAvailable ? "seat available" : "seat unavailable"}>
            {place}
        </div>
    )
}

export default function Session() {

    const [seats, setSeats] = useState([])
    const [movieTitle, setMovieTitle] = useState("")
    const [movieImage, setMovieImage] = useState("")
    const [movieDay, setMovieDay] = useState("")
    const [movieTime, setMovieTime] = useState("")
    const {idSeats} = useParams()
    console.log(idSeats)

    const linkApiMoviesSeats = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSeats}/seats`

    useEffect(() => {
        const promise = axios.get(linkApiMoviesSeats)

        promise.then(answerServer => {
            setSeats(answerServer.data.seats)
            setMovieTitle(answerServer.data.movie.title)
            setMovieImage(answerServer.data.movie.posterURL)
            setMovieImage(answerServer.data.movie.posterURL)
            setMovieDay(answerServer.data.day.weekday)
            setMovieTime(answerServer.data.name)
            console.log(answerServer.data.seats)
            console.log(answerServer.data)
        })
    }, [])

    return (
        <>
            <h1 className = "title-session">Selecione o(s) assentos(s)</h1>
            <div className = "places">
                {seats.map((value, index)=> <Seat key = {index} place = {value.name} isAvailable = {value.isAvailable}/>)}
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
            <InputDataUser/>
            <Footer>
                <>
                    <div className = "frame"><img src = {movieImage} alt = "..."/></div>
                    <div>
                        <h1>{movieTitle}</h1>
                        <h1>{movieDay} - {movieTime}</h1>
                    </div>
                    
                </>
            </Footer>
            <Button>
                <h1>Reservar assento(s)</h1>   
            </Button>
        </>
        
    )
}