// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import CreateCrewmate from './CreateCrewmate';
import GalleryPage from './GalleryPage';
import EditCrewmate from './EditCrewmate';
import CrewmateDetail from './CrewmateDetail'; 

import './App.css';

function App() {
    return (
        <Router>
            
            <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/edit/:id" element={<EditCrewmate />} />
        <Route path="/crewmate/:id" element={<CrewmateDetail />} />
      </Routes>
        </Router>
    );
}

export default App;