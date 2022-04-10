import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import MenuCard from "./MenuCard";
import "./index.css"

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
              <ul class="menu-cards col">
                <MenuItems/>      
              </ul>
        </div>
      </div>
    );
}


export default Menu;