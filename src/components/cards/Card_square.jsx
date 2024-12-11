import { Typography, Box, backdropClasses } from '@mui/material';
import Icon from '../Icon';

const Card_square = ({text_titlu, text_descriere, icon_card, link}) => {
  return (
    <Box sx={container}>
      <Box sx={box_icon}>
      <Icon styles={icon} icon={icon_card}/>
      </Box>
    <Typography variant="h5" sx={h5}>{text_titlu}</Typography>
    <Typography variant="p1" sx={p}>{text_descriere} <a href="" style={{textDecoration:'underline'}}>{link}</a></Typography>
    </Box>
  )
}

const container={
  padding:'2%',
  maxWidth:{
    xs:'80%',
    sm: '30%',
    md: '25%',
    lg:'25%',
    xl:'25%'
  },
  borderRadius: '16px',
  textAlign: 'center',
  background: 'linear-gradient(90deg, #171717,#323335,#171717)',
  marginTop: {
    xs: '8vh', // 100% width on extra-small screens
    sm: '2vh',  // 80% width on small screens
    md: '1vh',  // 60% width on medium screens
    lg: '1vh',  // 50% width on large screens
    xl: '2vh'   // 40% width on extra-large screens
},
  marginBottom:'5%',
  marginRight: 'auto',
  marginLeft: 'auto',
}

const box_icon={
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: {
    xs: '-8vh', // 100% width on extra-small screens
    sm: '-6vh',  // 80% width on small screens
    md: '-6vh',  // 60% width on medium screens
    lg: '-8vh',  // 50% width on large screens
    xl: '-8vh'   // 40% width on extra-large screens
},
}

const icon={
  maxWidth: '30%',
  height: 'auto',
}

const h5= {
  fontWeight:600, 
  display:'block', 
  color:'white', 
  fontFamily: 'Titillium Web',
  marginTop:'5%', 
  marginRight:'10%',
   marginLeft:'10%',
  fontSize: {
    xs: '1rem !important', // 100% font size on extra-small screens
    sm: '1.2rem !important', // 110% font size on small screens
    md: '1.5rem !important', // 120% font size on medium screens
    lg: '2rem !important', // 130% font size on large screens
    xl: '2rem !important'  // 140% font size on extra-large screens
  },
}

const p = {
  fontWeight:400, display:'block', color:'white', fontFamily: 'Poppins', 
  marginTop:'5%', 
  marginRight:'10%',
  marginLeft:'10%',
  fontSize: {
    xs: '0.8rem !important', // 110% font size on small screens
    md: '1rem !important', // 120% font size on medium screens
  },
};
export default Card_square;