import React from 'react'
import { Typography, Box, Hidden } from '@mui/material';
import Icon from '../Icon';

const Card_slider = ({text_titlu, text_descriere, icon_card, className}) => {
  return (
    <Box sx={container}>
    <Icon icon={icon_card} className={className}/>
    <Box sx={icon_text}>
    <Typography variant="h3" sx={h3}>{text_titlu}</Typography>    
    <Typography variant="p1" sx={p}> {text_descriere}</Typography>
    </Box>
    </Box>
  )
}

const container={
  padding:'2%',
  justifyContent:'center',
  alignItems:'center',
  background: 'linear-gradient(90deg, #171717,#323335,#171717)',
  borderRadius:'16px',
  border: '2px solid rgb(8, 190, 210)',
  marginTop:'2%',
  marginRight:'2%',
  marginLeft:'2%',
  display:'flex',
  height:
  {
    xs:'35vh',
    sm:'35vh',
    md:'35vh',
    lg:'30vh',
    xl:'30vh'
  },
  flexDirection:{
    xs: 'column',
    sm:'column',
    md:'column',
    lg:'row',
    xl:'row'
  }
}

const icon_text ={
  display:'flex',
  flexDirection:'column',
  textAlign:{
    xs: 'center',
    sm: 'center',
    md: 'center',
    lg: 'start',
    xl: 'start'
  },
}

const p = {
  fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins',marginTop:'2%',
  fontSize: {
    xs:'0.5rem',
    sm:'0.6rem',
    md:'0.8rem',
    lg:'0.8rem',
    xl:'1rem'
  },
};

const h3 = {
    fontWeight:600, display:'block', color:'white', fontFamily: 'Poppins',marginTop:'2%',
    fontSize: {
    xs:'0.7rem',
    sm:'1rem',
    md:'1.2rem',
    lg:'1.5rem',
    xl:'1.5rem'
  },
}
export default Card_slider