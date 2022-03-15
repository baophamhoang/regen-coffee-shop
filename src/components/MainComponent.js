import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Menu from './MenuComponent';
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Route, Routes, useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Main(){
    const data = useSelector( state => state);
    // const [selectedDish, setSelectedDish] = useState(null)
    function HomePage(){
        return (
            <Home 
                dish={data.dishes.filter((dish) => dish.featured)[0]}
                promotion={data.promotions.filter((promo) => promo.featured)[0]}
                leader={data.leaders.filter((leader) => leader.featured)[0]}    
            />
        )
    }

    function DishWithId(){
        const {dishId} = useParams();
        console.log(dishId);
        return(
            <DishDetail 
                selectedDish={data.dishes.filter((dish)=> dish.id=== parseInt(dishId))}
                comments={data.comments.filter((cmt)=>cmt.dishId===parseInt(dishId))}
            />
        )
    }

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route exact path='/menu' element={
                    <Menu  dishes={data.dishes} />
                    } />
                <Route path='/menu/:dishId' element={<DishWithId />} />
                <Route path='/contactus' element={<Contact/>} />
                <Route path='/aboutus' element={<About leaders={data.leaders}/>} />
                <Route path="*" element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default Main;