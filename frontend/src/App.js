import {React, useState} from 'react';
import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import {Routes, Route} from "react-router-dom";
import './App.css';
import FlightsSearch from './components/FlightsSearch';
import FlightsList from './components/FlightsList';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [flightsearch, setFlightSearch] = useState([]);
  const navigate = useNavigate();
  async function handleEvent(departureAirport, arrivalAirport, departureDate){
    if(departureAirport !== '' && arrivalAirport !== ''){
      const response = await fetch(`https://airline-api-app.azurewebsites.net/catalog/?departureAirportCode=${departureAirport}&arrivalAirportCode=${arrivalAirport}&departureDate=${departureDate}`);
      if(response.ok){
        
        const flights = await response.json();
        console.log(flights);
        setFlightSearch(flights);
        navigate("/search");
      }
      else{
        alert("No flights avaliable");
      }
      
  } else {
    alert("Fill all the fields");
  }
}

  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<FlightsSearch handleEvent={handleEvent}/>} />
            <Route path="/search" element={<FlightsList data={flightsearch}/>} />
        </Routes>
    </div>
  );
}
