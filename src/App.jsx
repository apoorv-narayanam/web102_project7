// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import CreateCrewmate from './CreateCrewmate';
import GalleryPage from './GalleryPage';
import './App.css';

function App() {
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreateCrewmate />} />
                <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
        </Router>
    );
}

export default App;