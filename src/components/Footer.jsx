import React from 'react';
import { Box, Typography, Link, TextField, Button, InputAdornment  } from '@mui/material';
import logocolor from "../assets/logo_color.png";
import tagline from "../assets/tagline.png";

const Footer = () => {
  return (
    <Box sx={footerContainer}>
      <Box sx={footerContent}>
        {/* Column 1 */}
        <Box sx={footerColumn}>
         <img className="logo_footer" src={logocolor} alt="Logo" />
         <Typography  variant='h1' sx={{fontWeight:200, display:'block',height:{xs: '10vh', sm:'13.5vh', md:'15vh'}, fontFamily: 'Titillium Web', textAlign:'left', margin:'10px auto', letterSpacing:'6px', textTransform:'uppercase', fontSize:'20px!important'}}>When <br/> restart <br/> doesn’t<br/> work</Typography>
        </Box>

        {/* Column 2 */}
        <Box sx={footerColumn}>
          <Typography variant="h6" sx={h6}>
           Quick Links
          </Typography>
            <Link href="" sx={footerLink}>Services</Link>
            <Link href="" sx={footerLink}>About Us</Link>
            <Link href="" sx={footerLink}>Client</Link>
            <Link href="" sx={footerLink}>Reviews</Link>
        </Box>

        {/* Column 3 */}
        <Box sx={footerColumn}>
          <Typography variant="h6" sx={h6} className='h6_footer'>
            Contact Us
          </Typography>
            <Link href="#" sx={footerLink}>anndy.dron@airitsolutions.com</Link>
            <Link href="#" sx={footerLink}>+40 733 348 053</Link>
        </Box>

        
        <Box sx={footerColumn}>
          <Typography variant="h6" sx={h6}>Newsletter</Typography>
          <TextField
            id="newsletter-email"
            type="email"
            label="Email address"
            variant="outlined"
            sx={newsletterInput}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" color="primary" sx={newsletterButton}>
                    Subscribe
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

const footerContainer = {
  color: 'white',
  padding: '2%',
  marginTop: '2%',
  background: '#transparent',
};

const footerContent = {
  display: 'flex',
  flexDirection: {
    xs: 'column',
    sm: 'column',
    md: 'column',
    lg: 'row',
    xl: 'row',
  },
  justifyContent: 'space-around',
  flexWrap: 'wrap', // Allow wrapping for smaller screens
};

const footerColumn = {
  textAlign: {
    xs: 'center',
    sm: 'center',
    md: 'center',
    lg: 'left',
    xl: 'left',
  },
  maxWidth: {
    xs: '100%',
    sm: '100%',
    md: '100%',
    lg: '20%',
    xl: '20%',
  },
  margin:{
    xs: '0',
    sm:'0',
    md:'15px auto',
    lg:'0',
    xl:'0'
  },
  height: 'auto!important',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '5%',
};

const footerLink = {
  color: 'white',
  fontWeight:400, display:'block', fontFamily: "Poppins",
  fontSize: {
    xs: '0.8rem !important', // 110% font size on small screens
    md: '1rem !important', // 120% font size on medium screens
  },
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
};

const newsletterInput = {
  width: '100%',
  backgroundColor:'#fff',
  borderRadius:'24px',
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderRadius: '24px', // Border color when focused
        },}
};

const newsletterButton = {
  height: '100%',
  borderRadius: 24,
  fontWeight: 700,
  fontFamily: 'Titillium Web',
  fontSize: '80%'};

const h6 = {
    fontWeight:600, 
    display:'block', 
    textAlign:'center', 
    fontFamily: 'Titillium Web',
    marginBottom: '2vh',
    fontSize: {
      xs: '1rem !important', // 100% font size on extra-small screens
      sm: '1.2rem !important', // 110% font size on small screens
      md: '1.5rem !important', // 120% font size on medium screens
      lg: '1.5rem !important', // 130% font size on large screens
      xl: '1.5rem !important'  // 140% font size on extra-large screens
    },
  };
export default Footer;