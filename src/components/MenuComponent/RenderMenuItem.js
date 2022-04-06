import { baseUrl } from "../../shared/baseUrl";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderMenuItem({dish}){
    console.log(dish);
    return (
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width='100%' src={ baseUrl + dish.image} alt={dish.name} />         
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    )
  }

  export default RenderMenuItem;