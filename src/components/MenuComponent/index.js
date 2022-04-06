import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

function Menu(){
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