import Card_square from '../components/cards/Card_square';
import { Typography, Box } from '@mui/material';

const Services = () => {
  return (
    <Box sx={box_services}>
      <Box sx={box_services_title}>
        <Typography variant="h6" sx={h6}>
          SERVICES
        </Typography>
        <Typography variant="h2" sx={h2_mobile}>
          Protecting And Creating Your Digital Assets Expertly
        </Typography>
        <Typography variant="body1" sx={p}>
          We offer a variety of services that ensure a cohesive digital presence,
          strengthening your brand, engaging your audience, and driving growth.
        </Typography>
      </Box>
      <Box sx={box_carduri}>
        <Card_square icon_card="Security" text_titlu="Cyber security Assessment" text_descriere="Comprehensive assessments to identify and mitigate your cybersecurity risks." />
        <Card_square icon_card="Consultancy" text_titlu="Comprehensive IT Consultancy" text_descriere="Expert guidance to optimize your IT strategy and drive business growth." />
        <Card_square icon_card="Hosting" text_titlu="Reliable Server and Website Hosting" text_descriere="Secure and reliable hosting solutions to keep your website running smoothly." />
      </Box>
      <Box sx={box_carduri}>
        <Card_square icon_card="Training" text_titlu="User Training Programs" text_descriere="Empowering your team with the skills to navigate digital tools securely and efficiently." />
        <Card_square icon_card="Video" text_titlu="Video Assets Production" text_descriere="Engaging that brings your brand to life. " link="See our portfolio here." />
        <Card_square icon_card="Development" text_titlu="Creative Web Design and Development" text_descriere="Custom web design and development to make your brand stand out online." />
      </Box>
    </Box>
  );
};



const box_services={
  marginTop: '2%',
  justifyContent: 'center', /* Center the content horizontally */
  
};


const box_services_title ={
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto', // Aici mai trebuie incercat alta metoda de a centra textul
  marginLeft: 'auto',
  padding:'2%',
  justifyContent: 'center',
  textAlign: 'center',
  width: '60%',
};


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
};

const h6 = {
  fontWeight:600,  
  color:'#08BCD1', 
  fontFamily: 'Titillium Web',
  textAlign: 'center',
  textTransform:'uppercase',
  fontSize: {
    xs: '1rem !important', // 100% font size on extra-small screens
    sm: '1.2rem !important', // 110% font size on small screens
    md: '1.5rem !important', // 120% font size on medium screens
    lg: '1.5rem !important', // 130% font size on large screens
    xl: '1.5rem !important'  // 140% font size on extra-large screens
  }
};

const h2_mobile={
  fontWeight:600, display:'flex', color:'white', textAlign: 'center', fontFamily: 'Titillium Web',
  fontSize:{xs: '1.6rem',
    sm: '2rem', 
    md: '3rem', 
    lg: '3.5rem',
    xl: '4rem'  }
};

const p = {
  fontWeight:400, color:'white', fontFamily: "Poppins", marginTop:'2%', justifySelf:'center',
  fontSize: {
    xs: '0.8rem !important', // 110% font size on small screens
    md: '1rem !important', // 120% font size on medium screens
  },
};

export default Services;



