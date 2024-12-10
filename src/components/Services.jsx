import React from 'react'
import Card_square from './cards/Card_square';
import { Typography, Box } from '@mui/material';

const Services = () => {
  return (
    <Box  style={box_services}>
        <Box style={box_services_title}>
        <Typography variant="h6" sx={{fontWeight:600, display:'block', color:'#08BCD1',textAlign:'center', fontFamily: 'Titillium Web'}}>SERVICES</Typography>
        <Typography variant="h2" sx={{fontWeight:600, display:'flex', color:'white', textAlign: 'center', fontFamily: 'Titillium Web',}}>Protecting And Creating Your Digital Assets Expertly</Typography>
        <Typography variant="p" sx={{fontWeight:400, display:'block', color:'white', textAlign: 'center', fontFamily: "Poppins", marginTop:'2%', justifySelf:'center'}}>We offer a variety of services that ensure a cohesive digital presence,
        strengthening your brand, engaging your audience, and driving growth.</Typography>
        </Box>
        <Box style={box_carduri}>
            <Card_square icon_card={"Security"} text_titlu="Cyber security Assessment" text_descriere="Comprehensive assessments to identify and mitigate your cybersecurity risks."/>
            <Card_square icon_card={"Consultancy"} text_titlu="Comprehensive IT Consultancy" text_descriere="Expert guidance to optimize your IT strategy and drive business growth."/>
            <Card_square icon_card={"Hosting"} text_titlu="Reliable Server and Website Hosting" text_descriere="Secure and reliable hosting solutions to keep your website running smoothly. "/>
        </Box>
        <Box style={box_carduri}>
            <Card_square icon_card={"Training"} text_titlu="User Training Programs" text_descriere="Empowering your team with the skills to navigate digital tools securely and efficiently."/>
            <Card_square icon_card={"Video"} text_titlu="Video Assets Production" text_descriere="Engaging video production that brings your brand to life. See our portfolio here."/>
            <Card_square icon_card={"Development"} text_titlu="Creative Web Design and Development" text_descriere="Custom web design and development to make your brand stand out online."/>
        </Box>
    </Box>
  )
}

const box_services={
  flexWrap: 'wrap', /* Allow wrapping for smaller screens */
  marginTop: '2%',
  justifyContent: 'center', /* Center the content horizontally */
  alignItems: 'center', /* Center the content vertically */
  height: '100%', 
  margin: '50px',
};

const box_services_title ={
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto', // Aici mai trebuie incercat alta metoda de a centra textul
  marginLeft: 'auto',
  padding:'2%',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '60%',
};


const box_carduri={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export default Services