import { Component } from "react/cjs/react.production.min";
import { DISHES } from "../shared/dishes";
import { Navbar, NavbarBrand} from 'reactstrap';
import DishDetail from "./DishdetailComponent";
import Menu from './MenuComponent';



class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            dishes : DISHES,
            selectedDish : null
        }
    }

    onDishSelect(dishId){
        this.setState({selectedDish: dishId})
    }

    render(){
        console.log(this.state.selectedDish);

        return(
            <div className="App">
                <Navbar dark color="primary">
                    <div className='container'>
                    <NavbarBrand href='/'>Logo Brand</NavbarBrand>
                    </div>
                </Navbar>
                <Menu  dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)} />
                <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)}/>
            </div>
        )
    }
}

export default Main;