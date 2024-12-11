import Card_review from './cards/Card_review';
import { Typography, Box } from '@mui/material';
import './Reviews.css'

const Reviews = () => {
  return (
    <Box  style={box_reviews}>
        <Box style={box_reviews_title}>
        <Typography variant="h6" sx={{fontWeight:600, display:'block', color:'#08BCD1',textAlign:'center', fontFamily: 'Titillium Web'}}>REVIEWS</Typography>
        <Typography variant="h2" sx={h2}>See What Others People Are Saying</Typography>
        </Box>
        <Box style={box_carduri} className='box_carduri_reviews'>
            <Card_review className='card_reviews' text_nume="Miss Sammy Feeney" text_descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." text_functie={'Investor Metrics Executive'}/>
            <Card_review className='card_reviews' text_nume="Rosemary Mante" text_descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." text_functie={'Human Integration Agent'}/>
        </Box>
        <Box style={box_carduri} className='box_carduri_reviews'>
        <Card_review text_nume="Regina Weissnat" text_descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt utSed do eiusmod tempor incididunt ut Sed do eiusmod tempor incididunt ut Sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua." text_functie={'Regional Branding Consultant'}/>
        <Card_review text_nume="Marianne Bode" text_descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " text_functie={'Product Intranet Agent'}/>
        </Box>
    </Box>
  )
}

const box_reviews={
    flexWrap: 'wrap', /* Allow wrapping for smaller screens */
    marginTop: '2%',
    justifyContent: 'center', /* Center the content horizontally */
    alignItems: 'center', /* Center the content vertically */
    height: '100%', 
    margin: '50px',
    boxSizing: 'border-box'
  };

const box_reviews_title ={
    display: 'flex',
    flexDirection: 'column',
    marginRight: '25%', // Aici mai trebuie incercat alta metoda de a centra textul
    marginLeft: '25%',
    padding:'2%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };
  
  const box_carduri={
    justifyContent: 'space-between',
    display: 'flex',
  };

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
export default Reviews