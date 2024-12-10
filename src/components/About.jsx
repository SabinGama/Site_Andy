import React from 'react';
import poza_laptop from '../assets/poza_laptop.png';
import { Typography, Box } from '@mui/material';
import Card_about from './cards/Card_about';

const About = () => {
  return (
    <Box style={container}>
      <Box style={left_pane}>
          <img className="poza_laptop" src={poza_laptop} alt='Poza_Laptop' style={poza}></img>
      </Box>
      <Box style={right_pane}>
        <Box>
          <Typography variant="h6" sx={{fontWeight:600, display:'block', color:'#08BCD1', fontFamily: 'Titillium Web'}}>ABOUT US</Typography>
          <Typography variant="h2" sx={h2}>Transforming Your Business for the Digital Age</Typography>
          <Typography variant="p" sx={p}>We’ve taken on the mission to empower businesses by building secure, visually striking digital solutions that protect your brand and drive lasting growth in today’s competitive landscape.</Typography>
        </Box>
        <Box style={box_carduri}>
          <Card_about icon_card={"Remote"} text_titlu="Remote services around the globe" text_descriere="We provide seamless support no matter where you are."/>
          <Card_about icon_card={"Solution"} text_titlu="Customized IT Solutions" text_descriere="We deliver tailored IT solutions that meet your unique needs."/>
        </Box>
        <Box style={box_carduri}>
          <Card_about icon_card={"Hours"} text_titlu="24/7 Incident Response" text_descriere="You can trust us to keep your systems running smoothly around the clock."/>
          <Card_about icon_card={"Client"} text_titlu="Client-Centric Approach" text_descriere=" You’re at the heart of everything we do, prioritizing your success every step of the way."/>
        </Box>
      </Box>
    </Box>
  );
};

const container = {
  display: 'flex',
  height: '100%', // Full viewport height
  justifyContent: 'center', // Center content horizontally
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

const box_carduri={
  display: 'flex',
  justifyContent: 'space-between',
};

const poza = {
    maxWidth: '84%',
    height: 'auto',
}

const h2 = {
  fontWeight:600, display:'flex', color:'white',  fontFamily: 'Titillium Web',
  textTransform:'capitalize',
  fontSize: {
    xs: '1.4rem !important', // 100% font size on extra-small screens
    sm: '2rem !important', // 110% font size on small screens
    md: '2.5rem !important', // 120% font size on medium screens
    lg: '3rem !important', // 130% font size on large screens
    xl: '3.75rem !important'  // 140% font size on extra-large screens
  },
};

const p = {
  fontWeight:400, display:'block', color:'white', fontFamily: "Poppins", marginTop:'2%', justifySelf:'center',
  fontSize: {
    sm: '1.2rem !important', // 110% font size on small screens
    md: '1.2rem !important', // 120% font size on medium screens
  },
}
export default About;