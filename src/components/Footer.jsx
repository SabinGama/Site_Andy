import React from 'react';
import { Box, Typography, Link, TextField, Button } from '@mui/material';
import logocolor from "../assets/logo_color.png";
import tagline from "../assets/tagline.png";

const Footer = () => {
  return (
    <Box sx={footerContainer}>
      <Box sx={footerContent}>
        {/* Column 1 */}
        <Box sx={footerColumn}>
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: '10px' }}>
         <img className="logo" src={logocolor} alt="Logo" />
          </Typography>
          <Box sx={footerNav}>
          <img className="tagline" src={tagline} alt="Tag Line" />
          </Box>
        </Box>

        {/* Column 2 */}
        <Box sx={footerColumn}>
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: '10px' }}>
           Quick Links
          </Typography>
          <Box sx={footerNav}>
            <Link href="#" sx={footerLink}>Services</Link>
            <Link href="#" sx={footerLink}>About Us</Link>
            <Link href="#" sx={footerLink}>Client</Link>
            <Link href="#" sx={footerLink}>Reviews</Link>
          </Box>
        </Box>

        {/* Column 3 */}
        <Box sx={footerColumn}>
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: '10px' }}>
            Contact Us
          </Typography>
          <Box sx={footerNav}>
            <Link href="#" sx={footerLink}>anndy.dron@airitsolutions.com</Link>
            <Link href="#" sx={footerLink}>+40 733 348 053</Link>
          </Box>
        </Box>

        {/* Newsletter Column
        <Box sx={newsletterColumn}>
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: '10px' }}>
            Newsletter
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', visibility:'hidden' }}>
            Monthly digest of what's new and exciting from us.
          </Typography>
          <Box sx={newsletterForm}>
            <TextField
              id="newsletter1"
              type="email"
              label="Email address"
              variant="outlined"
              sx={newsletterInput}
            />
            <Button variant="contained" color="primary" sx={newsletterButton}>
              Subscribe
            </Button>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

const footerContainer = {
  color: 'white',
  padding: '40px 20px',
  marginTop: 'auto',
};

const footerContent = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  margin: '0 auto',
  flexWrap: 'wrap', // Allow wrapping for smaller screens
};

const footerColumn = {
  width: '100%',
  maxWidth: '200px',
  textAlign: 'left',
  marginBottom: '20px', // Add margin for spacing between columns
};

const footerNav = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const footerLink = {
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  color:'white'
};

const newsletterColumn = {
  width: '100%',
  maxWidth: '500px',
  marginBottom: '20px', // Add margin for spacing
  
};

const newsletterForm = {
  background:'white',
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  width: '432px',
  height: '80px',
  position:'relative',
  borderRadius:'24px',
  border: 'none!important'
};

const newsletterInput = {
  width: '432px',
  height: '80px',
  borderRadius:'24px',
  marginTop: '2vh'
};

const newsletterButton = {
  borderRadius:'24px',
  width: '150px',
  height: '64px',
  background:'#1198C0',
  position: 'absolute',
  right:'0',
  top:'1.3vh'
};

export default Footer;