import { useSelector } from "react-redux";
import { dishesSelector } from "../../redux/selectors";
import { baseUrl } from "../../shared/baseUrl";
import Slider from 'react-slick'
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function DishesSlider(){
    const dishesData = useSelector(dishesSelector);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
    return (
        <Slider {...settings} >
          {dishesData.dishes.map((dish)=>{   
              return (
                <Card className='menu-card '>
                  <div style={{position: 'relative', overflow: 'hidden'}}>
                    <Link to={`/menu/${dish.id}`}>
                      <CardImg width='100%' src={baseUrl + dish.image} alt={dish.name} />
                      <CardImgOverlay className='menu-card-overlay'>
                        <h3>+See details</h3>
                      </CardImgOverlay>
                    </Link>
                  </div>
                <CardBody>
                    <CardTitle className='text-center'>{dish.name}</CardTitle>
                </CardBody>
              </Card>
              )
          })}
        </Slider>
    )
}

export default DishesSlider;