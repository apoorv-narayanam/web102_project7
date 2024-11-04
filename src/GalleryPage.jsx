// GalleryPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { supabase } from './supabaseClient';
import { useState, useEffect } from 'react';
const sampleCrewmates = [];

function GalleryPage() {
    const [crewmates, setCrewmates] = useState([]);
    const [loading, setLoading] = useState(true);
  
    // Fetch all crewmates from Supabase on component mount
    useEffect(() => {
      const fetchCrewmates = async () => {
        const { data: crewmatesData, error } = await supabase.from('crewmates').select('*');
  
        if (error) {
          console.error('Error fetching crewmates:', error);
          return;
        }
  
        setCrewmates(crewmatesData);
        setLoading(false);
      };
  
      fetchCrewmates();
    }, []);
  
    // Render loading state or empty state if no crewmates exist
    if (loading) {
      return (
        <div className="main-content">
          <h1>Your Crewmate Gallery!</h1>
          <p>Loading...</p>
        </div>
      );
    }
  
    if (crewmates.length === 0) {
      return (
        <div><Sidebar/>
                <div className="main-content">
        
        <h1>Your Crewmate Gallery!</h1>
        <p>You haven't made a crewmate yet!</p>
        <button onClick={() => window.location.href = '/create'}>Create one here!</button>
      </div></div>

      );
    }
  return (
    <div><Sidebar/>
    <div className="main-content">
      <h1>Your Crewmate Gallery!</h1>

      {/* Display crewmates in a grid */}
      <div className="crewmate-grid">
        {crewmates.map((crewmate) => (
          <div key={crewmate.id} className={`crewmate-card ${crewmate.color.toLowerCase()}`}>
            {/* Replace with actual images */}
            <div className="crewmate-placeholder"></div>  
            <p>Name of Crewmate: {crewmate.name}</p>
            <p>Speed of Crewmate: {crewmate.speed} mph</p>
            <p>Color of Crewmate: {crewmate.color}</p>
            {/* Add edit functionality if needed */}
            {/*<button>Edit Crewmate</button>*/}
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}

export default GalleryPage;

// Add some CSS for the grid layout and card styles:

