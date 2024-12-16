// import logo from './logo.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../index.css";
import { Typography, Box, TextField , Button} from '@mui/material';
import Card_slider from "./cards/Card_slider";

const data=[
  {
    image:'Iristel',
    title:'Iphone 5G Phone',
  },
  {
    image:'Phone',
    title:'Iphone 5G Phone',
  },
  {
    image:'Client',
    title:'Iphone 5G Phone',
  },
  {
    image:'Home',
    title:'Iphone 5G Phone',
  },

]

function SliderSection() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className='h-screen bg-slate-600 pt-10'>

      <div className='w-3/4 m-auto '>
      <Slider {...settings}>
        {
          data.map((item,index)=>{
            return(
              <div key={index} className='bg-white'>

            <Box style={slider_Card}>
            <Card_slider icon_card={item.image}/>
            </Box>
                </div>
            )
          })
        }
      </Slider>
      </div>
    </div>
  );
}

export default SliderSection;

const slider_Card= {
    margin: '0px 16px',
  };
