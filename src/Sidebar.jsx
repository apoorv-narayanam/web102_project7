// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import crewmateIcon from './public/images/cremate_icopn.jpeg'; // Replace with your image path
// public\images\crewmate.webp
// public\images\cremate_icopn.jpeg
function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/create">Create a Crewmate!</Link>
            <Link to="/gallery">Crewmate Gallery</Link>
            <img src="./public/images/cremate_icopn.jpeg" alt="Crewmate Icon" />
        </div>
    );
}

export default Sidebar;