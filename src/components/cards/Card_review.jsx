/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Typography, Box, Rating } from '@mui/material';

const Card_review = ({text_nume, text_descriere, text_functie}) => {
  return (
    <Box sx={container}>
    <Typography variant="p" sx={p}>{text_descriere}</Typography>
    <Typography variant="h5" sx={h5}>{text_nume}</Typography>
    <Typography sx={p2}>{text_functie}</Typography>
    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly size='small' />
    </Box>
  )
}

const container={
    padding:'2%',
    maxWidth:{
      xs:'100%',
      sm: '40%',
      md: '40%',
      lg:'40%',
      xl:'40%'
    },
    justifyContent:'center',
    alignItems:'center',
    background: 'rgba(170, 170, 170, 0.06)',
    borderRadius: '16px',
    marginTop:'2%',
    marginRight:'5%',
    marginLeft:'5%',
  }

const h5= {
    fontWeight:600, 
    display:'block', 
    color:'white', 
    fontFamily: 'Titillium Web',
    marginTop:2,
    fontSize: {
      xs: '1rem !important', // 100% font size on extra-small screens
      sm: '1.2rem !important', // 110% font size on small screens
      md: '1.5rem !important', // 120% font size on medium screens
      lg: '2rem !important', // 130% font size on large screens
      xl: '2rem !important'  // 140% font size on extra-large screens
    },
  }

const p = {
    fontWeight:400, display:'block', color:'white', fontFamily: "Poppins",
    fontSize: {
      xs: '0.8rem !important', // 110% font size on small screens
      md: '1.2rem !important', // 120% font size on medium screens
    },
  }
  
const p2 = {
    fontWeight:400, display:'block', color:'white', fontFamily: "Poppins",
    fontSize: {
      xs: '0.7rem !important', // 110% font size on small screens
      md: '1rem !important', // 120% font size on medium screens
    },
  }
export default Card_review