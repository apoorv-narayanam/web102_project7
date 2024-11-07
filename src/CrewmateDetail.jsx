import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient'; // Import Supabase client
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

function CrewmateDetail() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data: crewmateData, error } = await supabase.from('crewmates').select('*').eq('id', id).single();

      if (error) {
        console.error('Error fetching crewmate:', error);
        return;
      }

      setCrewmate(crewmateData);
      setLoading(false);
    };

    fetchCrewmate();
  }, [id]);

  if (loading) {
    return (
      <div className="main-content">
        <h1>Crewmate Details</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (!crewmate) {
    return (
      <div className="main-content">
        <h1>Crewmate Details</h1>
        <p>No details available for this crewmate.</p>
      </div>
    );
  }

  // Determine speed category
  let speedCategory;
  if (crewmate.speed > 5) speedCategory = "Fast";
  else if (crewmate.speed > 2) speedCategory = "Medium";
  else speedCategory = "Slow";

  return (
    <div>
    <Sidebar/>
            <div className="main-content">
      <h1>{crewmate.name}'s Details</h1>
      <p>Speed: {crewmate.speed} mph - {speedCategory}</p>
      <p>Color: {crewmate.color}</p>
    </div>
    </div>

  );
}

export default CrewmateDetail;