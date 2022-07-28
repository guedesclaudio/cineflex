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
				<Route path="/moviescreen" element={<MovieScreen />}/>
                <Route path="/session" element={<Session />}/>
			</Routes>
		</BrowserRouter>
    )
}