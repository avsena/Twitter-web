import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DarkModeContextProvider } from './context/DarkModeContext/DarkModeContext'
import { FeedContextProvider } from './context/FeedContext/FeedContext'
import { Home } from './pages/Home'
import Login from './pages/Login/Login'
import { Profile } from './pages/Profile'
import Signup from './pages/SignUp/Signup'
//import { PageNotFound } from './pages/PageNotFound'

import './styles/global.css'

export default function AppRouter() {
    return (
        <Router>
            <DarkModeContextProvider>
                <FeedContextProvider>
                 <Routes>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/' element={<Profile/>} />

                 </Routes>
                </FeedContextProvider>
            </DarkModeContextProvider>
        </Router>
    )
}