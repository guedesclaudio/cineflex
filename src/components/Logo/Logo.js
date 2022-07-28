import { Link } from "react-router-dom";

import "./style.css"

export default function Logo() {
    return (
        <Link to = "/">
            <div className = "logo">
                <h1>CINEFLEX</h1>
            </div>
        </Link>
    )
}