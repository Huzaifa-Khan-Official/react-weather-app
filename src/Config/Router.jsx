import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HistoryPage from '../Components/History'
import Home from '../Components/Home'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/history' element={<HistoryPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}