import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Grid } from "@mui/material";
import FlightsCard from "./FlightsCard";


const FlightsList = (props) =>{
    
    const flightTime = (date1, date2) => {
        const diff = date1.getTime() - date2.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        return `${hours}h ${minutes}m`;
    };

    const flights = props.data.map(flight => <FlightsCard ticketPrice={flight.ticketPrice} departureAirportCode={flight.departureAirportCode}
                                    arrivalAirportCode={flight.arrivalAirportCode} flightNumber={flight.flightNumber} 
                                    departureAirportHour={new Date(flight.departureDate).toLocaleTimeString('it-IT').substring(0, 5)}
                                    arrivalAirportHour={new Date(flight.arrivalDate).toLocaleTimeString('it-IT').substring(0, 5)}
                                    EstimatedTime={flightTime(new Date(flight.arrivalDate), new Date(flight.departureDate))}/>);
    return(
        <div style={{padding:"20px 0px"}} >
            
            <Grid container spacing={2} >
                <Grid style={{backgroundColor:"#EAEAEA", display:"flex", justifyContent:"space-around", paddingBottom:"5px", margin:"1% 17% 0 18%"}} item xs={12} md={12}>
                <TextField
                        disabled
                        id="departureAirport"
                        label="From"
                        value={props.data[0].departureAirportCode}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard" />
                        
                        <TextField
                        disabled
                        id="arrivalAirport"
                        name="arrivalAirport"
                        value={props.data[0].arrivalAirportCode}
                        label="To"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard"/>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                            disabled
                            id="departureDate"
                            name="departureDate"
                            value={props.data[0].departureDate}
                            label="Date"
                            inputFormat="EEEE, MMM d, yyyy"
                            renderInput={(params) => <TextField {...params} variant="standard"/> }/>
                        </LocalizationProvider> 
                        
                        {/*<Button style={{color:"#fa3336", fontWeight:"medium"}} component="a" href="/">
                        Back
                    </Button>*/}

                </Grid>

            </Grid>

            <Typography variant="h4" gutterBottom color="primary" marginTop={10}>
                Select your flight
            </Typography>

            {
                flights.length > 0 && flights
            }

        </div>
    )

}

export default FlightsList;