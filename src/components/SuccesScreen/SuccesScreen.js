import { Link } from "react-router-dom";
import Button from "../Button/Button"
import "./style.css"

export default function SuccesScreen({
    dataUser
}) {
    
    const places = dataUser.ids
    
    return(
        <div >
            <div className = "succes">
                <h2>Pedido feito com sucesso!</h2>
            </div>
            <div className = "movie-session">
                <h3>Filme e sessão</h3>
                <p>{dataUser.movieTitle}</p>
                <p>{dataUser.movieDate} {dataUser.movieTime}</p>
            </div>
            <div className = "movie-session">
                <h3>Ingressos</h3>
                {places ?  places.map((value, index) => <p key = {index}>Assento {value}</p>) : "carregando dados..."}
            </div>
            <div className = "movie-session">
                <h3>Comprador</h3>
                <p>Nome: {dataUser.name}</p>
                <p>CPF: {dataUser.cpf}</p>
            </div>
            <Link to = {"/"}>
                <Button className = "botao">
                    <h1>Voltar para Home</h1>   
                </Button>
            </Link>
        </div>
    )
}