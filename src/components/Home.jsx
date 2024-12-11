import Button from '@mui/material/Button';
import { Typography, Box } from '@mui/material';
import './Home.css';
import poza_home from '../assets/home.png';

const text2="You talk with"
const text3="Let’s face it. In the digital world of bugs, errors, freeze screens and blue screens, there’s a magic button that turns each and everyone of us into an IT guru. It’s the restart button. Just press it and everything is solved. Most of the times. Or at least sometimes. But what happens when it doesn’t? Well… You contact the experts that can help you."

const Home = () => {
    return (
        <Box className="container">
            <Box className="left-pane">
                {/* Left pane content */}
                <Typography  variant='h1' className='h_home' sx={{fontWeight:700, display:'block', fontFamily: 'Titillium Web'}}>When restart doesn’t work</Typography>
                <Typography className='p_home'sx={{fontWeight:700, display:'block'}}>{text2}
                <a href="" className="redirect"> AirIT Solutions</a>
                .</Typography>
                <Typography variant="p_home" sx={{fontWeight:400, display:'block', marginBottom:'5%'}}>{text3} </Typography>
                <Button variant="contained" sx={buttonStyles}>Contact</Button>
            </Box>
            <Box className="right-pane">
                {/* Right pane content */}
                <img className="poza_home" src={poza_home} alt='Poza_Home'></img>
            </Box>
        </Box>
    );
};

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
export default Home;