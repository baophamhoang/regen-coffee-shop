import Loading from "../WaitingPages/LoadingComponent";
import ErrorMsg from "../WaitingPages/ErrorComponent";
import RenderMenuItem from "./RenderMenuItem";
// import MenuCard from "./MenuCard";

function MenuItems({dishesData}){
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
          <div key={dish.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 text-center ">
            <RenderMenuItem dish={dish}/>
          </div>
        )
    });
    return menu;
    }
}
export default MenuItems;