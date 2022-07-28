import Logo from "../Logo/Logo.js"
import Footer from "../Footer/Footer.js"
import "./style.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Schedule({
    day,
    date,
    time
}) {

    console.log(time)
    return (
        <>
            <div className = "date">
                {day} - {date}
            </div>
            <div className = "select-hour">
                <Link to = {`/session/${time[0].id}`}>
                    <div className = "hour">
                        {time[0].name}
                    </div>
                </Link>
                
                <Link to = {`/session/${time[1].id}`}>
                    <div className = "hour">
                        {time[1].name}
                    </div>
                </Link>
                
            </div>
        </>
    )
}

export default function MovieScreen() {

    const {idMovie} = useParams()
    console.log(idMovie)

    const linkApiMoviesTimes = `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idMovie}/showtimes`
    const [moviesDay, setMoviesDay] = useState([])
    const [moviesFooterTitle, setMoviesFooterTitle] = useState("")
    const [moviesFooterImage, setMoviesFooterImage] = useState("")

    useEffect(() => {
        const promise = axios.get(linkApiMoviesTimes)
        promise.then(answerServer => {
            setMoviesDay(answerServer.data.days)
            setMoviesFooterTitle(answerServer.data.title)
            setMoviesFooterImage(answerServer.data.posterURL)
            console.log(answerServer.data)
        })
    }, [])
    console.log(moviesFooterImage + "oi")
    return (
        <>
            <div className = "movie-select">Selecione o horário</div>
            <div className = "schedules">
                {moviesDay.map((value,index) => <Schedule key = {index} day = {value.weekday} date = {value.date} time = {value.showtimes}/>)}
            </div>
            <Footer >
                <>
                    <div className = "frame"><img src = {moviesFooterImage} alt = "..."/></div>
                    <h1>{moviesFooterTitle}</h1>
                </>
            </Footer>
        </>
    )
}
