import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "../Footer/Footer.js"
import InputDataUser from "../InputDataUser/InputDataUser.js"
import "./style.css"

function Seat({
    place,
    isAvailable,
    chosenSeat,
    setChosenSeat,
    id,
    places,
    setPlaces
}) {

    const [condition, setCondition] = useState(isAvailable ? "seat available" : "seat unavailable")
    
    function selectSeat() {
        
        if (isAvailable) {
            condition === "seat available" ? setCondition("seat choosen") : setCondition("seat available")
            
            if (!places.includes(place)) {
                setChosenSeat([... chosenSeat, id])
                setPlaces([...places, place])
            }
            else {
                chosenSeat.splice(chosenSeat.indexOf(id),1)
                places.splice(places.indexOf(place),1)
                setPlaces([...places])
                setChosenSeat([...chosenSeat])
            }
        }
        else {
            alert("Esse assento não está disponível")
        }
    }

    return (
        <div className = {condition} onClick = {selectSeat}>
            {place}
        </div>
    )
}

export default function Session({setDataUser, dataUser}) {

    const {idSeats} = useParams()
    const linkApiMoviesSeats = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSeats}/seats`
    const [chosenSeat, setChosenSeat] = useState([])
    const [places, setPlaces] = useState([])
    const [seats, setSeats] = useState([])
    const [movieDate, setMovieDate] = useState("")
    const [movieTime, setMovieTime] = useState("")
    const [movieFeatures, setMovieFeatures] = useState({})
    
    useEffect(() => {
        const promise = axios.get(linkApiMoviesSeats)

        promise.then(answerServer => {
            setSeats(answerServer.data.seats)
            setMovieFeatures(answerServer.data.movie)
            setMovieDate(answerServer.data.day)
            setMovieTime(answerServer.data.name)
        })
    }, [])

    
    return (
        <div className = "session">
            <h1 className = "title-session">Selecione o(s) assentos(s)</h1>
            <div className = "places">
                {seats.map((value, index)=> <Seat key = {index} place = {value.name} 
                isAvailable = {value.isAvailable} id = {value.id} places = {places} setPlaces = {setPlaces}
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
            movieTitle = {movieFeatures.title} movieDay = {movieDate.weekday} movieTime = {movieTime} movieDate = {movieDate.date} 
            places = {places}/>
            <Footer>
                    <div className = "frame"><img src = {movieFeatures.posterURL} alt = "..."/></div>
                    <div>
                        <h1>{movieFeatures.title}</h1>
                        <h1>{movieDate.weekday} - {movieTime}</h1>
                    </div>
            </Footer>
        </div>
    )
}