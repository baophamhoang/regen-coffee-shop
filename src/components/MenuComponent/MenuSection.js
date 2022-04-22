import MenuSort from "./MenuSort";
import MenuItems from "./MenuItems";
import { useState } from "react";

function MenuSection({dishesData}){
    const [filtererList, setFiltererList] = useState();
    const handleTypeClick = (e) => {  
      setFiltererList({
        ...dishesData,
        dishes: dishesData.dishes.filter(e)})
    };
    // console.log(filtererList);
    return (
        <div className="menu-section">
              <div className="row mt-2 justify-content-center">
                <MenuSort handleTypeClick={handleTypeClick}/>
              </div>
              <div className="row row-content justify-content-between">
                <MenuItems dishesData={filtererList||dishesData} />   
              </div>   
          </div>
    )
}

export default MenuSection;