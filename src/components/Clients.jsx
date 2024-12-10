import React from 'react'
import { Typography, Box } from '@mui/material';

const Clients = () => {
  return (
        <Box style={box_services}>
        <Box style={box_services_title}>
        <Typography variant="h6" sx={{fontWeight:600, display:'block', color:'#08BCD1',textAlign:'center', fontFamily: 'Titillium Web'}}>SERVICES</Typography>
        <Typography variant="h2" sx={{fontWeight:600, display:'flex', color:'white', textAlign: 'center', fontFamily: 'Titillium Web',}}>Protecting And Creating Your Digital Assets Expertly</Typography>
        <Typography variant="p" sx={{fontWeight:400, display:'block', color:'white', textAlign: 'center', fontFamily: "Poppins", marginTop:'2%', justifySelf:'center'}}>We offer a variety of services that ensure a cohesive digital presence,
        strengthening your brand, engaging your audience, and driving growth.</Typography>
        </Box>
    </Box>
  )
}

const box_services_title ={
    display: 'flex',
    flexDirection: 'column',
    marginRight: '20%', // Aici mai trebuie incercat alta metoda de a centra textul
    marginLeft: '20%',
    padding:'2%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'yellow',
  };
  
  const box_services={
    flexWrap: 'wrap', /* Allow wrapping for smaller screens */
    marginTop: '2%',
    justifyContent: 'center', /* Center the content horizontally */
    alignItems: 'center', /* Center the content vertically */
    height: '100%', 
    margin: '50px',
    backgroundColor: 'red',
  };

export default Clients