import React, { Component, useLayoutEffect } from "react";
import { Media } from "reactstrap";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import DishDetail from "./DishdetailComponent";


class Menu extends Component{
    constructor(props){
        super(props);
        this.state= {
          selectedDish : null
        }
    }
    
    // onDishSelect(dish){
    //   this.setState({
    //     selectedDish: dish
    //   })
    //   this.props.onClick(dish);
    // }


    render(){
        // console.log(this.state);
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                  <Card onClick={()=> this.props.onClick(dish.id)}>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />         
                    <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                  </Card>
                </div>
              );
        })
        return (
            <div className="container">
              <div className="row">
                    {menu}
              </div>
            </div>
          );
    }
}

export default Menu;