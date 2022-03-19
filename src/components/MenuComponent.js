import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "./LoadingComponent";
import ErrorMsg from "./ErrorComponent";
import { baseUrl } from "../shared/baseUrl";

function Menu({dishes, isLoading, errorMsg}){

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

  function MenuItems(){
    if (isLoading){
      return (
        <div className="col-12">
        <Loading/>
        </div>)
    }
    else if (errorMsg){
      return (
      <div className="col-12">
        <ErrorMsg msg={errorMsg}/>
      </div>
        )
    }
    else { 
    const menu = dishes.map((dish)=>{
      return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={dish}/>
          </div>
        )
    });
    return menu;
    }
  }

  return (
    
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>  
              <MenuItems/>
        </div>
      </div>
    );
}


export default Menu;