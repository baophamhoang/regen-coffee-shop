import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import MenuCard from "./MenuCard";
import "./index.css"

function Menu(){
  return (
    <React.Fragment>
      {/* <div className="header-space">
      </div> */}
      <div className="container">
        <div className="row">
          {/* <Breadcrumb>
            <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb> */}
          </div>  
          <div className="row row-content ">
                <div className="col-12 text-center">
                    <h1>Menu</h1>
                    <span>Want to know more about what we offer? Need to check that we can meet your dietary needs? Got an unusual request you want us to fulfill? Or just want to tell us about your day?</span>
                    <br/>
                    <br/>
                    <span>Get in touch via the contact details below and we’ll get back to you ASAP. </span>
                </div>                
            </div>
            <div className="row row-content">
              <ul class="menu-cards col">
                <MenuItems/>      
              </ul>
        </div>
      </div>
    </React.Fragment>
    );
}


export default Menu;