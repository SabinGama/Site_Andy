import React from 'react'
import { Typography, Box } from '@mui/material';
import Icon from '../Icon';

const Card_slider = ({text_titlu, text_descriere, icon_card}) => {
  return (
    <Box sx={container}>
    <Icon styles={poza} icon={icon_card}/>
    <Box sx={icon_text}>
    <Typography variant="h3" sx={h3}>Iristel.com</Typography>    
    <Typography variant="p1" sx={p}> Business Communications
    Solutions Provider</Typography>
    </Box>
    </Box>
  )
}

const container={
  padding:'2%',
  marginLeft: {
    xs: '0%', // 100% width on extra-small screens
    sm: '15%',  // 80% width on small screens
    md: '0',  // 60% width on medium screens
    lg: '0',  // 50% width on large screens
    xl: '0'   // 40% width on extra-large screens
},
marginRight: {
    xs: '0%', // 100% width on extra-small screens
    sm: '15%',  // 80% width on small screens
    md: '0',  // 60% width on medium screens
    lg: '0',  // 50% width on large screens
    xl: '0'   // 40% width on extra-large screens
},
  width:{
    xs:'30vw',
    sm:'30vw',
    md:'30vw',
    lg:'30vw',
    xl:'30vw'
  },
  height:'30vh',
  justifyContent:'center',
  alignItems:'center',
  background: 'linear-gradient(90deg, #171717,#323335,#171717)',
  borderRadius: '16px',
  border: '2px solid rgb(8, 190, 210)',
  marginTop:'2%',
  display: 'flex',
  flexDirection:{
    xs: 'column',
    sm:'column',
    md:'column',
    lg:'row',
    xl:'row'
  }
}

const icon={
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',
  padding:2,
}

const poza = {
  maxWidth: '100%',
  height:{ xs: '15vh',
  sm: '15vh',
  md: '4vh',
  lg: '4vh',
  xl: '4vh',
},
  width: '6vw',
  margin: '0px 40px'
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
  margin:{
    xs: '0',
    sm: '3vh 0',
    md: '3vh 0',
    lg: '0 2vh',
    xl: '0 2vh'
  },
}

const p = {
  fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins', marginLeft:'1%',
  fontSize: {
    xs:'0.3rem',
    sm:'0.8rem',
    md:'1.2rem',
    lg:'1.4rem',
    xl:'1.4rem'
  },
};

const h3 = {
    fontWeight:600, display:'block', color:'white', fontFamily: 'Poppins', marginLeft:'1%',
  fontSize: {
    xs:'0.5rem',
    sm:'1rem',
    md:'1.4rem',
    lg:'2rem',
    xl:'2rem'
  },
  marginBottom: '2.5vh',
  lineHeight: '32px'
}
export default Card_slider