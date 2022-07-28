import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';


import Logo from "../Logo/Logo.js"
import "./style.css"

function Movie({
    id,
    titleMovie,
    image
}) {
    return (
        <Link to = {`/moviescreen/${id}`}>
            <div>
                <img src = {image}/>
            </div>
        </Link>
    )
}

export default function Home() {

    

    const linkApiMovies = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get(linkApiMovies)

        promise.then(answerServer => {
            setMovies(answerServer.data)
            console.log(answerServer.data)
        })
    }, [])

    return (
        <>
            <div className = "title-select">Selecione o filme</div>
            <div className = "movies">
                {movies.map(value => <Movie key = {value.id} id = {value.id}titleMovie = {value.title} image = {value.posterURL}/>)}
            </div>
        </>
    )
}