import Card_review from './cards/Card_review';
import { Typography, Box } from '@mui/material';

const Reviews = () => {
  return (
    <Box sx={box_reviews}>
        <Box sx={box_reviews_title}>
        <Typography variant="h6" sx={h6}>REVIEWS</Typography>
        <Typography variant="h2" sx={h2}>See What Others People Are Saying</Typography>
        </Box>
        <Box sx={box_carduri}>
            <Card_review className='card_reviews' text_nume="Miss Sammy Feeney" text_descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." text_functie={'Investor Metrics Executive'}/>
            <Card_review className='card_reviews' text_nume="Rosemary Mante" text_descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." text_functie={'Human Integration Agent'}/>
        </Box>
        <Box sx={box_carduri}>
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
    display:'block', 
    color:'#08BCD1', 
    fontFamily: 'Titillium Web',
    textAlign:'center',
    fontSize: {
      xs: '1rem !important', // 100% font size on extra-small screens
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
      xs: '1.4rem !important', // 100% font size on extra-small screens
      sm: '2rem !important', // 110% font size on small screens
      md: '2.5rem !important', // 120% font size on medium screens
      lg: '3rem !important', // 130% font size on large screens
      xl: '3.75rem !important'  // 140% font size on extra-large screens
    },
  };
export default Reviews