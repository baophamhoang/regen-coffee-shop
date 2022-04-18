import React from 'react';

import { useSelector } from 'react-redux'
import { allSelector } from '../../redux/selectors'
import RenderCard from './RenderCard';
import SocialIcon from '../SocialIconComponent'
import { Container, UncontrolledCarousel } from 'reactstrap';
const jumbotronBg = {
  backgroundImage: `url(http://localhost:3001/images/bg.jpg)`,
  opacity: `0.9`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  // backgroundPositionY: `+25%`,
  // backgroundAttachment: 'fixed',
  backgroundPosition: 'center center'
  }

function Home() {
  const data = useSelector(allSelector);
  console.log(data.dishes);
  
  return(
    <React.Fragment>
      <div className='jumbotron' style={jumbotronBg} >
        <Container>
            <div className="row row-header">
                <div className="col-12 col-sm-8">
                  <h1 className='logo-font'>REGEN</h1>
                  <p >We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                </div>
                <div className="ml-2 col-sm-6 col-12 align-self-center">
                    <SocialIcon facebook twitter instagram plain/>
                </div>
                {/* <p>17 Nguyen Thiep, Son Tra District, Da Nang, 550000 </p> */}
              
            </div>
        </Container>
      </div>
      {/* </Jumbotron> */}
      
      <Container>
        <div className='row row-content align-content-center text-center'>
          <h2 className='col-12'>Come and enjoy </h2>
          <p className='col-12'>You deserve a great cup of tea wherever you are. Your office tea should be nothing less</p>
        </div>
      </Container>
        {/* <div className="row row-content align-items-start"> */}
          {/* <div className="col-12 col-md m-1">
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
          </div> */}
        {/* </div> */} 
        
      <Container>
        <div className="row row-content align-content-center text-center">
            <h3 className='col-12'>Meet us at 17 Nguyen Thiep, Son Tra, Da Nang</h3>
        </div>
      </Container>
    </React.Fragment>
  );
}
export default Home;   