import React from 'react'
import Card_review from './cards/Card_review';
import { Typography, Box } from '@mui/material';

const Reviews = () => {
  return (
    <Box  style={box_services}>
        <Box style={box_services_title}>
        <Typography variant="h6" sx={{fontWeight:600, display:'block', color:'#08BCD1',textAlign:'center', fontFamily: 'Titillium Web'}}>REVIEWS</Typography>
        <Typography variant="h2" sx={{fontWeight:600, display:'block', color:'white',textAlign:'center', fontFamily: 'Titillium Web'}}>See What Others People Are Saying</Typography>
        </Box>
        <Box style={box_carduri}>
            <Card_review text_nume="Miss Sammy Feeney" text_descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." text_functie={'Investor Metrics Executive'}/>
            <Card_review text_nume="Rosemary Mante" text_descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." text_functie={'Human Integration Agent'}/>
        </Box>
        <Box style={box_carduri}>
        <Card_review text_nume="Regina Weissnat" text_descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt utSed do eiusmod tempor incididunt ut Sed do eiusmod tempor incididunt ut Sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua." text_functie={'Regional Branding Consultant'}/>
        <Card_review text_nume="Marianne Bode" text_descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " text_functie={'Product Intranet Agent'}/>
        </Box>
    </Box>
  )
}

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
    marginRight: '25%', // Aici mai trebuie incercat alta metoda de a centra textul
    marginLeft: '25%',
    padding:'2%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };
  
  const box_carduri={
    display: 'flex',
    justifyContent: 'space-between',
  };

export default Reviews