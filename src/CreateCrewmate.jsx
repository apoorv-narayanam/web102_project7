// CreateCrewmate.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './App.css';
import { supabase } from './supabaseClient'; // Import Supabase client

function CreateCrewmate() {
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!name || !speed || !color) {
          setErrorMessage('Please fill out all fields.');
          return;
        }
    
        try {
          // Insert crewmate data into Supabase
          const { data, error } = await supabase.from('crewmates').insert([
            { name, speed: parseFloat(speed), color },
          ]);
    
          if (error) throw error;
    
          // Clear form after successful submission
          setName('');
          setSpeed('');
          setColor('');
          setErrorMessage('');
    
          console.log('Crewmate created:', data);
        } catch (error) {
          console.error('Error creating crewmate:', error.message);
          setErrorMessage('Failed to create crewmate.');
        }
      };
    
      return (
        <div><Sidebar/>
        <div className="main-content">
          <h1>Create a New Crewmate</h1>
          <img src="/path-to-crewmates-image.png" alt="Crewmates" />
    
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-box">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter crewmate's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
    
            <div className="form-box">
              <label>Speed (mph):</label>
              <input
                type="number"
                placeholder="Enter speed in mph"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
              />
            </div>
    
            <div className="form-box">
              <label>Color:</label>
              <select value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="">Select Color</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                {/* Add other colors */}
              </select>
            </div>
    
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    
            <button type="submit">Create Crewmate</button>
          </form>
        </div>
        </div>
      );
    }
    
    export default CreateCrewmate;