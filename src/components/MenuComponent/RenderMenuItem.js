import { baseUrl } from "../../shared/baseUrl";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImgOverlay, CardImg, CardTitle } from "reactstrap";

function RenderMenuItem({dish}){
    // console.log(dish);
    return (
      <Card className='menu-card'>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width='100%' src={ baseUrl + dish.image} alt={dish.name} />
          <CardImgOverlay className='menu-card-overlay'>
            <h3>+See details</h3>
            </CardImgOverlay>  
        </Link>
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
        </CardBody>
      </Card>


    )
  }

  export default RenderMenuItem;