import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Logon from './pages/Logon'
import Register from './pages/Register'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Teams from './pages/Teams'
import Playoffs from './pages/Playoffs'


export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={< Logon />} />
                <Route path="/register" element={< Register />} />

                <Route path="/home" element={<Home />}/>
                <Route path="/calendar" element={<Calendar />}/>
                <Route path="/teams" element={<Teams />}/>
                <Route path="/playoffs" element={<Playoffs />}/>
            </Routes>
        </BrowserRouter>
    )
}