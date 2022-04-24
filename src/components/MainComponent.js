import About from "./AboutComponent/";
import DishDetail from './DishdetailComponent/';
import Menu from './MenuComponent/';
import Contact from "./ContactComponent/";
import Home from "./HomeComponent/";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Route, Routes, useParams} from 'react-router-dom'
import {  useDispatch } from 'react-redux'
import {  useEffect } from "react";
import React from "react";
import { fetchDishesFB, fetchCommentsFB, } from "../redux/actions";
import Loading from "./WaitingPages/LoadingComponent";
// import SlideRoutes from 'react-slide-routes'

function Main(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchDishesFB());
        dispatch(fetchCommentsFB());
    },[]);
    function DishWithId(){
        const {dishId} = useParams();
        return(
            <DishDetail 
                selectedDishId={dishId}
            />
        )
    }

    return (
        <React.Fragment>
            
        <div className="waiting-for-app " >
            <Loading/>
        </div>
        <div className="App hidden">
            <Header/>
                {/* {location.pathname!=='/'?<BreadcrumbComponent></BreadcrumbComponent>:null} */}
            {/* <TransitionGroup > */}
                {/* <CSSTransition classNames="page" timeout={300} key={location.pathname}> */}
                <Routes>
                    {/* <SlideRoutes animation='' duration={500} location={location}> */}
                        <Route path={'/'} element={<Home/>} />
                        <Route exact path={'/menu'} element={<Menu/>} />
                        <Route path={'/menu/:dishId'} element={<DishWithId />} />
                        <Route path={'/contactus'} element={<Contact/>} />
                        <Route path={'/aboutus'} element={<About />} />
                        <Route path="*" element={<Home/>}/>
                    {/* </SlideRoutes> */}
                    </Routes>
                {/* </CSSTransition> */}
            {/* </TransitionGroup> */}
            <Footer/>
        </div>
        </React.Fragment>
    )
}
export default Main;