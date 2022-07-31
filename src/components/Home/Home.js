import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css"

function Movie({
    id,
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

    const linkApiMovies = "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get(linkApiMovies)

        promise.then(answerServer => {
            setMovies(answerServer.data)
        })
    }, [])

    return (
        <>
            <div className = "title-select">Selecione o filme</div>
            <div className = "movies">
                {movies.map(value => <Movie key = {value.id} id = {value.id} image = {value.posterURL}/>)}
            </div>
        </>
    )
}