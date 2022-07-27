import "./style.css"

export default function InputDataUser() {
    return (
        <div className = "inputs">
            <div>
                <h1 className = "name-user">Nome do comprador</h1>
                <input type = "text" placeholder = "Digite seu nome"/>
            </div>
            <div>
                <h1 className = "cpf-user">CPF do comprador</h1>
                <input type = "text" placeholder = "Digite seu CPF"/>
            </div>
        </div>
        
    )
}