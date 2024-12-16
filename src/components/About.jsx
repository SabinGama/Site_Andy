import React from 'react';
import poza_laptop from '../assets/poza_laptop.png';
import { Typography, Box } from '@mui/material';
import Card_about from './cards/Card_about';

const About = () => {
  return (
    <Box sx={container}>
      <Box sx={left_pane}>
          <img className="poza_laptop" src={poza_laptop} alt='Poza_Laptop' style={poza}></img>
      </Box>
      <Box sx={right_pane}>
        <Box sx={center_mobile}>
          <Typography variant="h6" sx={h6}>ABOUT US</Typography>
          <Typography variant="h2" sx={h2}>Transforming Your Business for the Digital Age</Typography>
          <Typography variant="p" sx={p}>We’ve taken on the mission to empower businesses by building secure, visually striking digital solutions that protect your brand and drive lasting growth in today’s competitive landscape.</Typography>
        </Box>
        <Box sx={box_carduri}>
          <Card_about icon_card={"Remote"} className="icon_about" text_titlu="Remote services around the globe" text_descriere="We provide seamless support no matter where you are."/>
          <Card_about icon_card={"Solution"} className="icon_about" text_titlu="Customized IT Solutions" text_descriere="We deliver tailored IT solutions that meet your unique needs."/>
        </Box>
        <Box sx={box_carduri}>
          <Card_about icon_card={"Hours"} className="icon_about" text_titlu="24/7 Incident Response" text_descriere="You can trust us to keep your systems running smoothly around the clock."/>
          <Card_about icon_card={"Client"} className="icon_about" text_titlu="Client-Centric Approach" text_descriere=" You’re at the heart of everything we do, prioritizing your success every step of the way."/>
        </Box>
      </Box>
    </Box>
  );
};

const container = {
  display: 'flex',
  height: '100%', // Full viewport height
  justifyContent: 'center', // Center content horizontally
  flexDirection:{
    xs:'column-reverse',
    sm:'column-reverse',
    md:'row',
    lg:'row',
    xl:'row'
  },
};

const left_pane = {
  flex:0.45,
  display: 'flex',
  alignItems: 'center', // Center content vertically
  justifyContent:'center', // Center content horizontally
};

const right_pane = {
  flex:0.45,
  display: 'flex',
  flexDirection: 'column',
};

const center_mobile = {
  textAlign:{
    xs:'center',
    sm: 'center',
    md: 'left',
    lg:'left',
    xl:'left'
  },
  marginLeft: {
    xs: '5%', // 100% width on extra-small screens
    sm: '5%',  // 80% width on small screens
    md: '0',  // 60% width on medium screens
    lg: '0',  // 50% width on large screens
    xl: '0'   // 40% width on extra-large screens
},
marginRight: {
    xs: '5%', // 100% width on extra-small screens
    sm: '5%',  // 80% width on small screens
    md: '0',  // 60% width on medium screens
    lg: '0',  // 50% width on large screens
    xl: '0'   // 40% width on extra-large screens
},
}

const box_carduri={
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection:{
    xs:'column',
    sm:'row',
    md:'row',
    lg:'row',
    xl:'row'
  },
  marginLeft: {
    xs: '0', // 100% width on extra-small screens
    sm: '5%',  // 80% width on small screens
    md: '0',  // 60% width on medium screens
    lg: '0',  // 50% width on large screens
    xl: '0'   // 40% width on extra-large screens
},
marginRight: {
    xs: '0', // 100% width on extra-small screens
    sm: '5%',  // 80% width on small screens
    md: '0',  // 60% width on medium screens
    lg: '0',  // 50% width on large screens
    xl: '0'   // 40% width on extra-large screens
},
};

const poza = {
    maxWidth: '84%',
    height: 'auto',
    marginTop: '2%',
}

const h2 = {
  fontWeight:600, color:'white',  fontFamily: 'Titillium Web',
  textTransform:'capitalize',
  fontSize: {
    xs: '1.4rem !important', // 100% font size on extra-small screens
    sm: '2rem !important', // 110% font size on small screens
    md: '2.5rem !important', // 120% font size on medium screens
    lg: '3rem !important', // 130% font size on large screens
    xl: '3.75rem !important'  // 140% font size on extra-large screens
  },
  textAlign:{
    xs:'center',
    sm: 'center',
    md: 'left',
    lg:'left',
    xl:'left'
  },
};

const h6 = {
fontWeight:600, 
display:'block', 
color:'#08BCD1', 
fontFamily: 'Titillium Web',
textTransform:'uppercase',
fontSize: {
  xs: '1rem !important', // 100% font size on extra-small screens
  sm: '1.2rem !important', // 110% font size on small screens
  md: '1.5rem !important', // 120% font size on medium screens
  lg: '1.5rem !important', // 130% font size on large screens
  xl: '1.5rem !important'  // 140% font size on extra-large screens
},
};

const p = {
  fontWeight:400, display:'block', color:'white', fontFamily: "Poppins", marginTop:'2%', justifySelf:'center',
  fontSize: {
    xs: '0.8rem !important', // 110% font size on small screens
    md: '1rem !important', // 120% font size on medium screens
  },
};
export default About;