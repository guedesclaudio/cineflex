import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

import Logo from "../Logo/Logo.js"
import "./style.css"

function Movie({
    key,
    titleMovie,
    image
}) {
    return (
        <Link to = "/moviescreen">
            <div>
                <img src = {image}/>
            </div>
        </Link>
    )
}

export default function Home() {

    const linkApi = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get(linkApi)

        promise.then(answerServer => {
            setMovies(answerServer.data)
            console.log(answerServer.data)
        })
    }, [])

    return (
        <>
            <div className = "title-select">Selecione o filme</div>
            <div className = "movies">
                {movies.map(value => <Movie key = {value.id} titleMovie = {value.title} image = {value.posterURL}/>)}
            </div>
        </>
    )
}