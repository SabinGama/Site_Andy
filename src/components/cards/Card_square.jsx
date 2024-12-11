import { Typography, Box } from '@mui/material';
import Icon from '../Icon';

const Card_square = ({text_titlu, text_descriere, icon_card, link}) => {
  return (
    <Box style={container}>
      <Box style={box_icon}>
      <Icon styles={icon} icon={icon_card}/>
      </Box>
    <Typography variant="h5" sx={{fontWeight:600, display:'block', color:'white', fontFamily: 'Titillium Web', marginTop:3, marginRight:'10%', marginLeft:'10%'}}>{text_titlu}</Typography>
    <Typography variant="p1" sx={{fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins', marginTop:3, marginRight:'10%', marginLeft:'10%'}}>{text_descriere} <a href="" style={{textDecoration:'underline'}}>{link}</a></Typography>
    </Box>
  )
}

const container={
  padding:'2%',
  maxWidth:'25%',
  borderRadius: '16px',
  textAlign: 'center',
  background: 'linear-gradient(90deg, #171717,#323335,#171717)',
  marginTop:'5%',
  marginBottom:'5%',
  marginRight: 'auto',
  marginLeft: 'auto',
}

const box_icon={
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop:"-20%",
}

const icon={
  maxWidth: '30%',
  height: 'auto',
}
export default Card_square