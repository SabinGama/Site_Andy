import React from 'react'
import { Typography, Box, Rating } from '@mui/material';

const Card_review = ({text_nume, text_descriere, text_functie}) => {
  return (
    <Box style={container}>
    <Typography variant="p1" sx={p}>{text_descriere}</Typography>
    <Typography variant="h5" sx={{fontWeight:600, display:'block', color:'white', fontFamily: 'Titillium Web', marginTop:2}}>{text_nume}</Typography>
    <Typography sx={{fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins', size:12}}>{text_functie}</Typography>
    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly size='small' />
    </Box>
  )
}

const container={
    padding:'1.5%',
    maxWidth:'40%',
    justifyContent:'center',
    alignItems:'center',
    background: 'rgba(170, 170, 170, 0.06)',
    borderRadius: '16px',
    marginTop:'2%',
    marginRight:'5%',
    marginLeft:'5%',
  }

const p = {
    fontWeight:400, display:'block', color:'white', fontFamily: "Poppins",
    fontSize: {
      sm: '1.2rem !important', // 110% font size on small screens
      md: '1.2rem !important', // 120% font size on medium screens
    },
  }
export default Card_review