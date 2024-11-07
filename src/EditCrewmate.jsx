import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient'; // Import Supabase client
import { useParams, useNavigate } from 'react-router-dom';

function EditCrewmate() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');
  
  // Fetch the existing crewmate data
  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data: crewmate, error } = await supabase.from('crewmates').select('*').eq('id', id).single();
      
      if (error) {
        console.error('Error fetching crewmate:', error);
        return;
      }
      
      setName(crewmate.name);
      setSpeed(crewmate.speed);
      setColor(crewmate.color);
    };
    
    fetchCrewmate();
  }, [id]);

  // Handle form submission to update the crewmate
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from('crewmates').update({ name, speed: parseFloat(speed), color }).eq('id', id);

    if (error) {
      console.error('Error updating crewmate:', error);
    } else {
      navigate('/gallery');
    }
  };

  return (
    <div className="main-content">
      <h1>Edit Crewmate</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-box">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>

        <div className="form-box">
          <label>Speed (mph):</label>
          <input 
            type="number" 
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
            {/* Add other colors */}
          </select>
        </div>

        <button type="submit">Update Crewmate</button>
      </form>
    </div>
  );
}

export default EditCrewmate;