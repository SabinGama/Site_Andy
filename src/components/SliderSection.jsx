// import logo from './logo.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../index.css";
import {Box} from '@mui/material';
import Card_slider from "./cards/Card_slider";

const data=[
  {
    image:'Iristel',
    text_titlu:'Iristel.com',
    text_descriere:'Business Communications Solutions Provider',
  },
  {
    image:'P_plus_M',
    text_titlu:'P+M Business Solutions GmbH',
    text_descriere:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image:'Client',
    text_titlu:'Client 3',
    text_descriere:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image:'Logo',
    text_titlu:'Client 4',
    text_descriere:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
            <Card_slider icon_card={item.image} text_titlu={item.text_titlu} text_descriere={item.text_descriere} className={'icon_slider'}/>
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