import React from 'react'
import { Typography, Box, TextField , Button} from '@mui/material';
import Contact_image from '../assets/Contact_image.png';
import Card_contact from './cards/Card_contact';

const Contact = () => {
  return (
    <Box sx={box_contact}>
    <Box sx={box_contact_title}>
        <Typography variant="h6" sx={h6}>Contact</Typography>
        <Typography variant="h2" sx={h2}>Contact us today to get started</Typography>
    </Box>
        <Box sx={container}>
        <Box style={left_pane}>
            <Card_contact icon_card={"Logo_color"} className={'icon_contact'}/>
          <Box style={box_textinputs}>

          {/* Name */}
          <TextField
          sx={textfield}
          required
          id="outlined-required"
          label="Name"
        />

         {/* Email */}
        <TextField
        sx={textfield}
          required
          id="outlined-required"
          label="Email"
        />

         {/* Phone Number */}
        <TextField
        sx={textfield}
          required
          id="outlined-required"
          label="Phone number"
        />

         {/* Company */}
        <TextField
        sx={textfield}
          id="outlined"
          label="Company"
        />

         {/* Message */}
        <TextField
        sx={textfield}
          id="outlined"
          multiline
          maxRows={5}
          label="Write your message"
        />
        <Button variant="contained" sx={buttonStyles}>Send</Button>
        </Box>
        </Box>
        <Box sx={right_pane}>
            <img src={Contact_image} alt='Poza_Laptop2' style={poza}></img>
        </Box>
        </Box>
    </Box>
  )
}

const container = {
  display: 'flex',
  height: '100%', // Full viewport height
  justifyContent: 'center', // Center content horizontally
  marginTop: '2%',
  flexDirection:{
    xs: 'column',
    sm: 'column',  
    md: 'row',
    lg: 'row',
    xl: 'row',
  },
  };

const box_contact={
    flexWrap: 'wrap', /* Allow wrapping for smaller screens */
    marginTop: '2%',
    justifyContent: 'center', /* Center the content horizontally */
    alignItems: 'center', /* Center the content vertically */
    height: '100%', 
    margin: '20px',
  };

const box_contact_title ={
    display: 'flex',
    flexDirection: 'column',
    marginRight: 'auto', // Aici mai trebuie incercat alta metoda de a centra textul
    marginLeft: 'auto',
    padding:'2%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '40%',
  };

  const left_pane = {
    flex:0.45,
  };
  
  const right_pane = {
    flex:0.45,
    display: 'flex',
    marginTop:{
      xs:'5vh',
      sm:'5vh'
    },
    justifyContent: 'center',
    alignItems: 'center',
  };

  const poza = {
    maxWidth: '84%',
    height: 'auto',
}

const box_textinputs = {
  marginTop: '5%',
  display: 'flex',
  flexDirection: 'column',
}

const h6 = {
  fontWeight:600, 
  display:'block', 
  color:'#08BCD1', 
  fontFamily: 'Titillium Web',
  textAlign:'center',
  textTransform:'uppercase',
  fontSize: {
    xs: '0.8rem !important', // 100% font size on extra-small screens
    sm: '1.2rem !important', // 110% font size on small screens
    md: '1.5rem !important', // 120% font size on medium screens
    lg: '1.5rem !important', // 130% font size on large screens
    xl: '1.5rem !important'  // 140% font size on extra-large screens
  },
  };

const h2 = {
  fontWeight:600, display:'flex', color:'white',  fontFamily: 'Titillium Web',
  textTransform:'capitalize',
  fontSize: {
    xs: '1.2rem !important', // 100% font size on extra-small screens
    sm: '2rem !important', // 110% font size on small screens
    md: '2.5rem !important', // 120% font size on medium screens
    lg: '3rem !important', // 130% font size on large screens
    xl: '3.75rem !important'  // 140% font size on extra-large screens
  },
};

const textfield ={
  '& .MuiInputBase-root': {
      color: '#8E8E8E', // Text color
    },
    '& .MuiInputLabel-root': {
      color: '#8E8E8E', // Label color
      '&.Mui-focused': {
        color: '#08BED2', // Label color when focused
      },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#8E8E8E', // Border color
      },
      '&:hover fieldset': {
        borderColor: 'white', // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#08BED2', // Border color when focused
      },
    },
  
    fontFamily:'Titillium Web',
    marginBottom: '20px', // Add some space between text fields
    marginLeft: {
      xs: '0%', // 100% width on extra-small screens
      sm: '15%',  // 80% width on small screens
      md: '0',  // 60% width on medium screens
      lg: '0',  // 50% width on large screens
      xl: '0'   // 40% width on extra-large screens
    },
    marginRight: {
      xs: '0%', // 100% width on extra-small screens
      sm: '15%',  // 80% width on small screens
      md: '0',  // 60% width on medium screens
      lg: '0',  // 50% width on large screens
      xl: '0'   // 40% width on extra-large screens
    },
    maxWidth:{
      xs:'100%',
      sm:'70%',
      md:'100%',
      lg:'100%',
      xl:'100%'
    },
  }

const buttonStyles = {
  background: 'linear-gradient(-90deg, #1585B7,#07BFD2)',
  fontWeight: 700,
  width: {
      xs: '50%', // 100% width on extra-small screens
      sm: '80%',  // 80% width on small screens
      md: '60%',  // 60% width on medium screens
      lg: '50%',  // 50% width on large screens
      xl: '40%'   // 40% width on extra-large screens
  },
  height: {
      xs: '45px', // 45px height on extra-small screens
      sm: '50px', // 50px height on small screens
      md: '55px', // 55px height on medium screens
      lg: '60px', // 60px height on large screens
      xl: '65px'  // 65px height on extra-large screens
  },
  fontFamily: 'Titillium Web',
  fontSize: {
      xs: '100%', // 100% font size on extra-small screens
      sm: '110%', // 110% font size on small screens
      md: '120%', // 120% font size on medium screens
      lg: '130%', // 130% font size on large screens
      xl: '140%'  // 140% font size on extra-large screens
  },
  marginLeft: {
      xs: '25%', // 100% width on extra-small screens
      sm: '10%',  // 80% width on small screens
      md: '0',  // 60% width on medium screens
      lg: '0',  // 50% width on large screens
      xl: '0'   // 40% width on extra-large screens
  },
  marginRight: {
      xs: '25%', // 100% width on extra-small screens
      sm: '10%',  // 80% width on small screens
      md: '0',  // 60% width on medium screens
      lg: '0',  // 50% width on large screens
      xl: '0'   // 40% width on extra-large screens
  },
  marginTop: {
      xs: '2vh', // 100% width on extra-small screens
      sm: '0',  // 80% width on small screens
      md: '0',  // 60% width on medium screens
      lg: '0',  // 50% width on large screens
      xl: '0'   // 40% width on extra-large screens
  },
};
export default Contact