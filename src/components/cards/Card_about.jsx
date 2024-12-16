import React from 'react'
import { Typography, Box } from '@mui/material';
import Icon from '../Icon';

const Card_about = ({text_titlu, text_descriere, icon_card, className}) => {
  return (
    <Box sx={container}>
    <Icon styles={icon} icon={icon_card} className={className}/>
    <Typography variant="h5" sx={h5}>{text_titlu}</Typography>
    <Typography variant="p1" sx={p}>{text_descriere}</Typography>
    </Box>
  )
}

const container={
  padding:'2%',
  marginLeft: {
    xs: '15%', // 100% width on extra-small screens
    sm: '0',  // 80% width on small screens
    md: '0',  // 60% width on medium screens
    lg: '0',  // 50% width on large screens
    xl: '0'   // 40% width on extra-large screens
},
marginRight: {
    xs: '15%', // 100% width on extra-small screens
    sm: '0',  // 80% width on small screens
    md: '0',  // 60% width on medium screens
    lg: '0',  // 50% width on large screens
    xl: '0'   // 40% width on extra-large screens
},
  maxWidth:{
    xs:'80%',
    sm:'45%',
    md:'45%',
    lg:'40%',
    xl:'40%'
  },
  justifyContent:'center',
  alignItems:'center',
  background: 'linear-gradient(90deg, #171717,#323335,#171717)',
  borderRadius: '16px',
  marginTop:'2%',
}

const h5= {
  fontWeight:600, 
  display:'block', 
  color:'white', 
  fontFamily: 'Titillium Web',
  fontSize: {
    xs: '1rem !important', // 100% font size on extra-small screens
    sm: '1.2rem !important', // 110% font size on small screens
    md: '1.5rem !important', // 120% font size on medium screens
    lg: '2rem !important', // 130% font size on large screens
    xl: '2rem !important'  // 140% font size on extra-large screens
  },
}

const p = {
  fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins', marginTop:2,
  fontSize: {
    xs: '0.8rem !important', // 110% font size on small screens
    md: '1rem !important', // 120% font size on medium screens
  },
};

const icon={
  maxWidth: '30%',
  height: 'auto',
}
export default Card_about