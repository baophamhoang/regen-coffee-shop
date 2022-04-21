// import { useSelector } from "react-redux";
// import { dishesSelector } from "../../redux/selectors";
// import { baseUrl } from "../../shared/baseUrl";
// const { CSSTransitionGroup } = React.addons;

// function DishesSlider(){
//     const dishesData = useSelector(dishesSelector);
//     function Card({dish}){
//         console.log(dish);
//         return (<div className="slide-card col m-1">
//             <img src={baseUrl+ dish.image} alt={dish.name}/>
//             <h2>{dish.name}</h2>
//         </div>)
//     }
//     return (
//         <div className="card-slider">
//         <div className="row">
//           {dishesData.dishes.map((dish,index)=>{
//               let position = index > 0 ? "nextCard" : index === 0 ? 
//               "activeCard" : "prevCard";
//               return <Card dish={dish} cardStyle={position} />;
//           })}
//         </div>
//         <div className="row">
//         </div>
//         </div>
//     )
// }

// export default DishesSlider;