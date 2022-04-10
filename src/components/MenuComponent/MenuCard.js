import { baseUrl } from "../../shared/baseUrl";
import { Link } from "react-router-dom";
function MenuCard({dish}){
  console.log(dish);
    return(

  <li>
    <Link to={`/menu/${dish.id}`} class="menu-card">
      <img src={baseUrl+dish.image} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{dish.name}</h3>            
            <span class="card__status">${dish.price}</span>
          </div>
        </div>
        <p class="card__description">{dish.description}</p>
      </div>
    </Link>      
  </li>
  

)
    }
    
export default MenuCard;