
import { imgBaseUrl } from "../../shared/imgBaseUrl";
import Slider from 'react-slick'
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";
import {casual_1,casual_2,casual_3,casual_4,casual_5,casual_6} from '../../shared/imgResources';
import { Link } from "react-router-dom";
function CasualSlider(){
  
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            // centerMode: true,
          }
    
        }, 
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },  {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }]

      };
      const imgUrl = [casual_1,casual_2,casual_3,casual_4,casual_5,casual_6];
    return (
        <Slider {...settings} >
          {imgUrl.map((url, id)=>{  
              return (
                <Card  key={id} className='menu-card '>
                  <CardImg className='slider-img' src={imgBaseUrl + url} alt='casual' />
              </Card>
              )
          })} 
        </Slider>
    
    )
  }
export default CasualSlider;