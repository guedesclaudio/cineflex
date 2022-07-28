import "./style.css"

export default function Button({children}) {
    return (
        <div className = "button">
            {children}
        </div>
    )
}