import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DarkModeContextProvider } from './context/DarkModeContext/DarkModeContext'
import { FeedContextProvider } from './context/FeedContext/FeedContext'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import './styles/global.css'


export default function AppRouter() {
    return (
        <Router>
            <DarkModeContextProvider>
                <FeedContextProvider>
                 <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/profile' element={<Profile/>} />
                 </Routes>
                </FeedContextProvider>
            </DarkModeContextProvider>
        </Router>
    )
}