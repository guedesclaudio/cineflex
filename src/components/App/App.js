import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import "./style.css"
import "./reset.css"

import Home from "../Home/Home.js"
import MovieScreen from "../MovieScreen/MovieScreen.js"
import Session from "../Session/Session.js"
import Logo from "../Logo/Logo.js"
import SuccesScreen from "../SuccesScreen/SuccesScreen.js"



export default function App() {

	const [dataUser, setDataUser] = useState({})

    return (
        <BrowserRouter>
			<Logo/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/moviescreen/:idMovie" element={<MovieScreen />}/>
                <Route path="/session/:idSeats" element={<Session dataUser = {dataUser} setDataUser = {setDataUser}/>}/>
				<Route path="/succes" element={<SuccesScreen dataUser = {dataUser}/>}/>
			</Routes>
		</BrowserRouter>
    )
}