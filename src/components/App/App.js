import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./style.css"
import "./reset.css"

import Home from "../Home/Home.js"
import MovieScreen from "../MovieScreen/MovieScreen.js"
import Session from "../Session/Session.js"
import Logo from "../Logo/Logo.js"



export default function App() {
    return (
        <BrowserRouter>
			<Logo/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/moviescreen/:idMovie" element={<MovieScreen />}/>
                {<Route path="/session/:idSeats" element={<Session />}/>}
			</Routes>
		</BrowserRouter>
    )
}