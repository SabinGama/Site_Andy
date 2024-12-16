import React from 'react'
import { Typography, Box } from '@mui/material';
import Icon from '../Icon';

const Card_contact = ({icon_card, className}) => {
  return (
    <Box sx={container}>
    <Icon styles={poza} icon={icon_card} className={className}/>
    <Box sx={icon_text}>
    <Icon styles={icon} icon={"Mail"} className={"mail"}/>
    <Typography variant="p1" sx={p}>anndy.dron@airitsolutions.com</Typography>
    </Box>
    <Box sx={icon_text}>
    <Icon styles={icon} icon={"Phone"} className={"phone"}/>
    <Typography variant="p1" sx={p}> +40 733 348 053</Typography>
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
  maxWidth:{
    xs:'100%',
    sm:'70%',
    md:'100%',
    lg:'100%',
    xl:'100%'
  },
  height:'auto',
  justifyContent:'center',
  alignItems:'center',
  background: 'linear-gradient(90deg, #171717,#323335,#171717)',
  borderRadius: '16px',
  border: '2px solid rgb(8, 190, 210)',
  marginTop:'2%',
}

const icon={
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',
  padding:2,
}

const poza = {
  maxWidth: '100%',
  height: 'auto',
}

const icon_text ={
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  marginTop:'2%',
}

const p = {
  fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins', marginLeft:'1%',
  fontSize: {
    xs: '0.8rem !important', // 110% font size on small screens
    md: '1rem !important', // 120% font size on medium screens
  },
};
export default Card_contact