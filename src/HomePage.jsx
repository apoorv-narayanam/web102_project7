// HomePage.js
import React from 'react';
import Sidebar from './Sidebar';
// import crewmatesImage from './public/images/crewmate.webp'; // Replace with your image path
// public\images\crewmate.webp
function HomePage() {
    return (
        <div>
            <Sidebar/>
            
            <div className="main-content">
            
                <h1>Welcome to the Crewmate Creator!</h1>
                <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
                <img src="./public/images/crewmate.webp" alt="Crewmates" />
            </div>
        </div>
    );
}

export default HomePage;