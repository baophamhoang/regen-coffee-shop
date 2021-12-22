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

    onDishSelect(dish){
        this.setState({selectedDish: dish})
        console.log(dish);
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
                <Menu  dishes={this.state.dishes} onClick={(dish)=> this.onDishSelect(dish)} />
                <DishDetail selectedDish={this.state.selectedDish}/>
            </div>
        )
    }
}

export default Main;