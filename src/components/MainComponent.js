import { Component } from "react/cjs/react.production.min";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS} from '../shared/promotions' 
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Menu from './MenuComponent';
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Route, Routes} from 'react-router-dom'


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            selectedDish : null
        }
    }

    onDishSelect(dishId){
        this.setState({selectedDish: dishId})
    }

   
    render(){
        console.log(this.state.selectedDish);
        
        const HomePage = () => {
            return (
                <Home 
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}    
                />
            )
        }
        

        return(
            <div className="App">
                <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route exact path='/menu' element={
                        <Menu  dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)}/>
                        } />
                    <Route path='/contactus' element={<Contact/>} />
                    <Route path="*" element={<HomePage/>}/>
                </Routes>
                {/* <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)}/>  */}
                <Footer/>
            </div>
        )
    }
}

export default Main;