import React from 'react'
import { Typography, Box } from '@mui/material';
import Icon from '../Icon';

const Card_contact = ({text_titlu, text_descriere, icon_card}) => {
  return (
    <Box style={container}>
    <Icon styles={poza} icon={icon_card}/>
    <Box style={icon_text}>
    <Icon styles={icon} icon={"Mail"}/>
    <Typography variant="p1" sx={{fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins', marginLeft:'1%'}}>anndy.dron@airitsolutions.com</Typography>
    </Box>
    <Box style={icon_text}>
    <Icon styles={icon} icon={"Phone"}/>
    <Typography variant="p1" sx={{fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins',marginLeft:'1%'}}> +40 733 348 053</Typography>
    </Box>
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
export default Card_contact