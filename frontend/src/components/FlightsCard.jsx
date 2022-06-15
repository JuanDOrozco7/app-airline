import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import { Grid, Card, CardContent, Divider } from "@mui/material";
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';



const FlightsCard = (props) =>{
    return(
        <div style={{marginTop: '30px', marginBottom: '10px', marginLeft: '20%', marginRight: '20%'}}>
            <Card style ={{boxShadow:"0px 3px 0px -1px #fa3336"}} >
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            
                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                                DEPARTURE
                            </Typography>

                            <Typography sx={{ fontSize: 20 }} color="primary" gutterBottom>
                                {props.departureAirportHour}
                            </Typography>
                            
                        </Grid>

                        <Grid item xs={6}>

                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                                ARRIVAL
                            </Typography>

                            <Typography sx={{ fontSize: 20 }} color="primary" gutterBottom>
                                {props.arrivalAirportHour}
                            </Typography>

                        </Grid>  

                    </Grid>


                    <Divider />

                    <Grid container spacing={2}  justifyContent="space-evenly" marginTop={1} marginBottom={2}>

                        <Grid item marginLeft={4}>
                            <FlightTakeoffOutlinedIcon sx={{fontSize: 30 }} color="primary" />
                            <Typography sx={{ fontSize: 16 }} color="primary" gutterBottom>
                                {props.departureAirportCode}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <AccessTimeIcon sx={{fontSize: 30 }} color="primary" />
                            <Typography sx={{ fontSize: 16 }} color="primary" gutterBottom>
                                {props.EstimatedTime}
                            </Typography>
                        </Grid>

                        <Grid item marginRight={4}>
                            <FlightLandOutlinedIcon sx={{fontSize: 30 }} color="primary" />
                            <Typography sx={{ fontSize: 16 }} color="primary" gutterBottom>
                                {props.arrivalAirportCode}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>

                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                            € {props.ticketPrice}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                                Flight {props.flightNumber}
                            </Typography>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </div>
    )

}

export default FlightsCard;