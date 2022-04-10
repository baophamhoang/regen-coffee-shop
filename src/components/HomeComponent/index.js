import React from 'react';

import { useSelector } from 'react-redux'
import { allSelector } from '../../redux/selectors'
import RenderCard from './RenderCard';

const jumbotronBg = {
  backgroundImage: `url(http://localhost:3001/images/bg.jpg)`,
  opacity: `0.9`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  backgroundPositionY: `+25%`,
  }

function Home() {
  const data = useSelector(allSelector);
  console.log(data.dishes);
  
  return(
    <React.Fragment>
      <div className='jumbotron' style={jumbotronBg} >
        <div className="container">
            <div className="row row-header">
                <div className="col-12 col-sm-8">
                    <h1>REGEN</h1>
                    
                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    {/* <h2>17 Nguyễn Thiếp, Sơn Trà, Đà Nẵng</h2> */}
                </div>
            </div>
        </div>
      </div>
      {/* </Jumbotron> */}
      
      <div className="container">
          <div className="row align-items-start">
              <div className="col-12 col-md m-1">
                  <RenderCard 
                    item={data.dishes.dishes.filter(dish => dish.featured)[0]} 
                    isLoading={data.dishes.isLoading} 
                    errorMsg={data.dishes.errorMsg}
                    />
              </div>
              <div className="col-12 col-md m-1">
                  <RenderCard 
                    item={data.promotions.promotions.filter( pro => pro.featured)[0]} 
                    isLoading={data.promotions.isLoading} 
                    errorMsg={data.promotions.errorMsg}/>
              </div>
              <div className="col-12 col-md m-1">
                  <RenderCard 
                    item={data.leaders.leaders.filter( leader => leader.featured)[0]} 
                    isLoading={data.leaders.isLoading} 
                    errorMsg={data.leaders.errorMsg}/>
              </div>
          </div>
      </div>
      </React.Fragment>
  );
}
export default Home;   