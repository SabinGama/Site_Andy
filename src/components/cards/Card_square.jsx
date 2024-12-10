import React from 'react'
import { Typography, Box } from '@mui/material';
import Icon from '../Icon';

const Card_square = ({text_titlu, text_descriere, icon_card}) => {
  return (
    <Box style={container}>
      <Box style={box_imagine}>
      <Icon styles={icon} icon={icon_card}/>
      </Box>
    <Box style={box_text} sx={{}}>
    <Typography variant="h5" sx={{fontWeight:600, display:'block', color:'white', fontFamily: 'Titillium Web', marginTop:7}}>{text_titlu}</Typography>
    <Typography variant="p1" sx={{fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins', marginBottom:3, marginTop:3}}>{text_descriere}</Typography>
    </Box>

    </Box>
  )
}

const container={
  padding:'2%',
  maxWidth:'25%',
}

const box_text={
  background: 'linear-gradient(90deg, #171717,#323335,#171717)',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  borderRadius: '16px',
  maxHeight:'45%',
  marginTop:'2%',
  padding:10,
}

const box_imagine={
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom:-40,
}

const icon={
  maxWidth: '100%',
  height: 'auto',
}
export default Card_square