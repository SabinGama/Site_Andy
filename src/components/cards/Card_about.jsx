import React from 'react'
import { Typography, Box } from '@mui/material';
import Icon from '../Icon';

const Card_about = ({text_titlu, text_descriere, icon_card}) => {
  return (
    <Box style={container}>
    <Icon styles={icon} icon={icon_card}/>
    <Typography variant="h5" sx={{fontWeight:600, display:'block', color:'white', fontFamily: 'Titillium Web'}}>{text_titlu}</Typography>
    <Typography variant="p1" sx={{fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins', marginTop:2}}>{text_descriere}</Typography>
    </Box>
  )
}

const container={
  padding:'2%',
  maxWidth:'40%',
  justifyContent:'center',
  alignItems:'center',
  background: 'linear-gradient(90deg, #171717,#323335,#171717)',
  borderRadius: '16px',
  marginTop:'2%',
}

const icon={
  maxWidth: '30%',
  height: 'auto',
}
export default Card_about