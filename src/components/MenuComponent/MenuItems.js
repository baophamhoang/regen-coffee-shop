import Loading from "../WaitingPages/LoadingComponent";
import ErrorMsg from "../WaitingPages/ErrorComponent";
import RenderMenuItem from "./RenderMenuItem";
import { useSelector } from 'react-redux'
import { dishesSelector } from '../../redux/selectors'
import MenuCard from "./MenuCard";

function MenuItems(){
    const dishesData = useSelector(dishesSelector);
    if (dishesData.isLoading){
      return (
        <div className="col-12">
        <Loading/>
        </div>)
    }
    else if (dishesData.errorMsg){
      return (
      <div className="col-12">
        <ErrorMsg msg={dishesData.errorMsg}/>
      </div>
        )
    }
    else { 
    const menu = dishesData.dishes.map((dish)=>{
      return (
          // <div key={dish.id} className="col-12 col-md-5 m-1">
          //   <RenderMenuItem dish={dish}/>

          // </div>
          <MenuCard dish={dish}/>
        )
    });
    return menu;
    }
}
export default MenuItems;