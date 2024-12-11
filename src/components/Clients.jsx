import React from 'react'
import { Typography, Box } from '@mui/material';

const Clients = () => {
  return (
        <Box sx={box_clients}>
        <Box sx={box_clients_title}>
        <Typography variant="h6" sx={h6}>Clients</Typography>
        <Typography variant="h2" sx={h2}>Our portfolio features
        a diverse range of clients</Typography>
        <Typography variant="p" sx={p}>Our diverse portfolio spans clients worldwide, from startups to large enterprises. 
        Partner with us to take your business to the next level.</Typography>
        </Box>
    </Box>
  )
}

const box_clients_title ={
    display: 'flex',
    flexDirection: 'column',
    marginRight: '20%', // Aici mai trebuie incercat alta metoda de a centra textul
    marginLeft: '20%',
    padding:'2%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    //backgroundColor: 'yellow',
  };
  
  const box_clients={
    flexWrap: 'wrap', /* Allow wrapping for smaller screens */
    marginTop: '2%',
    justifyContent: 'center', /* Center the content horizontally */
    alignItems: 'center', /* Center the content vertically */
    height: '100%', 
    margin: '50px',
    //backgroundColor: 'red',
  };

const h2 = {
    fontWeight:600, display:'flex', color:'white',  fontFamily: 'Titillium Web',
    textTransform:'capitalize',
    fontSize: {
      xs: '1.4rem !important', // 100% font size on extra-small screens
      sm: '2rem !important', // 110% font size on small screens
      md: '2.5rem !important', // 120% font size on medium screens
      lg: '3rem !important', // 130% font size on large screens
      xl: '3.75rem !important'  // 140% font size on extra-large screens
    },
  };

const h6 = {
  fontWeight:600, 
  display:'block', 
  color:'#08BCD1',
  textAlign:'center', 
  fontFamily: 'Titillium Web',
  textTransform:'uppercase',
  fontSize: {
    xs: '1rem !important', // 100% font size on extra-small screens
    sm: '1.2rem !important', // 110% font size on small screens
    md: '1.5rem !important', // 120% font size on medium screens
    lg: '1.5rem !important', // 130% font size on large screens
    xl: '1.5rem !important'  // 140% font size on extra-large screens
  },
};

const p = {
  fontWeight:400, display:'block', color:'white', fontFamily: "Poppins", marginTop:'2%', justifySelf:'center',
  fontSize: {
    xs: '0.8rem !important', // 110% font size on small screens
    md: '1rem !important', // 120% font size on medium screens
  },
};
export default Clients