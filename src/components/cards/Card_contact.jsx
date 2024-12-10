import React from 'react'
import { Typography, Box } from '@mui/material';
import Icon from '../Icon';

const Card_contact = ({text_titlu, text_descriere, icon_card}) => {
  return (
    <Box style={container}>
    <Icon styles={poza} icon={icon_card}/>
    <Typography variant="p1" sx={{fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins', marginTop:2, backgroundColor:'purple', fontSize:'16px',   justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',}}>
    <Icon styles={icon} icon={"Hours"}/> anndy.dron@airitsolutions.com</Typography>
    <Typography variant="p1" sx={{fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins', marginTop:2, backgroundColor:'red', fontSize:'20px'}}>
    <Icon styles={icon} icon={"Phone"}/> +40 733 348 053</Typography>
    </Box>
  )
}

const container={
  padding:'5%',
  maxWidth:'100%',
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
  backgroundColor:'orange',
}

const poza = {
  maxWidth: '100%',
  height: 'auto',
}
export default Card_contact