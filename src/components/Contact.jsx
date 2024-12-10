import React from 'react'
import { Typography, Box } from '@mui/material';
import poza_laptop from '../assets/poza_laptop.png';
import Card_contact from './cards/Card_contact';

const Contact = () => {
  return (
    <Box style={box_services}>
    <Box style={box_services_title}>
        <Typography variant="h6" sx={{fontWeight:600, display:'block', color:'#08BCD1',textAlign:'center', fontFamily: 'Titillium Web', textTransform:'uppercase'}}>Contact</Typography>
        <Typography variant="h2" sx={{fontWeight:600, display:'block', color:'white',textAlign:'center', fontFamily: 'Titillium Web', textTransform:'capitalize'}}>Contact us today
        to get started</Typography>
    </Box>
        <Box style={container}>
        <Box style={left_pane}>
            <Card_contact icon_card={"Logo_color"}/>
        </Box>
        <Box style={right_pane}>
            <img src={poza_laptop} alt='Poza_Laptop' style={poza}></img>
        </Box>
        </Box>
    </Box>
  )
}

const container = {
    display: 'flex',
    backgroundColor:'red',
    height: '100%', // Full viewport height
    justifyContent: 'center', // Center content horizontally
    marginTop: '2%',
  };

const box_services={
    flexWrap: 'wrap', /* Allow wrapping for smaller screens */
    marginTop: '2%',
    justifyContent: 'center', /* Center the content horizontally */
    alignItems: 'center', /* Center the content vertically */
    height: '100%', 
    margin: '50px',
  };

const box_services_title ={
    display: 'flex',
    flexDirection: 'column',
    marginRight: 'auto', // Aici mai trebuie incercat alta metoda de a centra textul
    marginLeft: 'auto',
    padding:'2%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '40%',
  };

  const left_pane = {
    flex:0.45,
    backgroundColor:'blue',
  };
  
  const right_pane = {
    flex:0.45,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const poza = {
    maxWidth: '84%',
    height: 'auto',
}
export default Contact