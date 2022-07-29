import "./style.css"
import Footer from "../Footer/Footer.js"

import InputDataUser from "../InputDataUser/InputDataUser.js"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Seat({
    place,
    isAvailable,
    chosenSeat,
    setChosenSeat
}) {

    const [condition, setCondition] = useState(isAvailable ? "seat available" : "seat unavailable")

    function selectSeat() {
        if (isAvailable) {
            setCondition("seat choosen")
            setChosenSeat([... chosenSeat, place])
        }
    }

    return (
        <div className = {condition} onClick = {selectSeat}>
            {place}
        </div>
    )
}

export default function Session({setDataUser, dataUser}) {

    const [chosenSeat, setChosenSeat] = useState([])
    const [seats, setSeats] = useState([])
    const [movieTitle, setMovieTitle] = useState("")
    const [movieImage, setMovieImage] = useState("")
    const [movieDay, setMovieDay] = useState("")
    const [movieDate, setMovieDate] = useState("")
    const [movieTime, setMovieTime] = useState("")
    const {idSeats} = useParams()

    const linkApiMoviesSeats = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSeats}/seats`

    useEffect(() => {
        const promise = axios.get(linkApiMoviesSeats)

        promise.then(answerServer => {
            setSeats(answerServer.data.seats)
            setMovieTitle(answerServer.data.movie.title)
            setMovieImage(answerServer.data.movie.posterURL)
            setMovieImage(answerServer.data.movie.posterURL)
            setMovieDay(answerServer.data.day.weekday)
            setMovieDate(answerServer.data.day.date)
            setMovieTime(answerServer.data.name)
            console.log(answerServer.data)
        })
    }, [])

    return (
        <>
            <h1 className = "title-session">Selecione o(s) assentos(s)</h1>
            <div className = "places">
                {seats.map((value, index)=> <Seat key = {index} place = {value.name} 
                isAvailable = {value.isAvailable} 
                chosenSeat = {chosenSeat} setChosenSeat = {setChosenSeat}/>)}
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
            <InputDataUser chosenSeat = {chosenSeat} dataUser = {dataUser} setDataUser = {setDataUser} 
            movieTitle = {movieTitle} movieDay = {movieDay} movieTime = {movieTime} movieDate = {movieDate}/>
            <Footer>
                    <div className = "frame"><img src = {movieImage} alt = "..."/></div>
                    <div>
                        <h1>{movieTitle}</h1>
                        <h1>{movieDay} - {movieTime}</h1>
                    </div>
            </Footer>
        </>
    )
}