import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Menu from './MenuComponent';
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Route, Routes, useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { fetchDishes, fetchPromos, fetchComments } from "../redux/actions";
import { actions } from 'react-redux-form'

function Main(){
    const data = useSelector( state => state);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchDishes());
        dispatch(fetchComments());
        dispatch(fetchPromos());
    },[])
    
    // const [selectedDish, setSelectedDish] = useState(null)
    function HomePage(){
        return (
            <Home 
                dish={data.dishes.dishes.filter((dish) => dish.featured)[0]}
                promotion={data.promotions.promotions.filter((promo) => promo.featured)[0]}
                promoLoading={data.promotions.isLoading}
                promoErrorMsg={data.promotions.errMess}
                leader={data.leaders.filter((leader) => leader.featured)[0]}  
                dishesLoading={data.dishes.isLoading}
                dishErrorMsg={data.dishes.errorMsg}
            />
        )
    }

    function DishWithId(){
        const {dishId} = useParams();
        console.log(dishId);
        return(
            <DishDetail 
                selectedDish={data.dishes.dishes.filter((dish)=> dish.id=== parseInt(dishId))}
                comments={data.comments.filter((cmt)=>cmt.dishId===parseInt(dishId))}
                isLoading={data.dishes.isLoading}
                errorMsg={data.dishes.errorMsg}
                cmtErrorMsg={data.comments.errorMsg}
            />
        )
    }

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route exact path='/menu' element={
                    <Menu  
                        dishes={data.dishes.dishes}
                        isLoading={data.dishes.isLoading}
                        errorMsg={data.dishes.errorMsg}
                         />
                    } />
                <Route path='/menu/:dishId' element={<DishWithId />} />
                <Route path='/contactus' element={<Contact resetFeedbackForm={()=>{
                    dispatch(actions.reset('feedback'))
                }}/>} />
                <Route path='/aboutus' element={<About leaders={data.leaders}/>} />
                <Route path="*" element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default Main;