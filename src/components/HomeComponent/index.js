import React from 'react';
import DishesSlider from './DishesSlider';
import SocialIcon from '../SocialIconComponent'
import { Container } from 'reactstrap';
import { imgBaseUrl } from '../../shared/imgBaseUrl';
import { bg } from '../../shared/imgResources';
import './index.css'
const jumbotronBg = {
  backgroundImage: `url(${imgBaseUrl+bg})`,
  opacity: `0.9`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  backgroundPosition: 'center center'
  }

function Home() {
  const handleSubcribeBtn = () => {
    const subInput = document.querySelector('.footer input');
    subInput.scrollIntoView();
    subInput.focus();
  }
  
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
          <div className='subscribe-banner'>
            <img className='subscribe-bg' src={imgBaseUrl+'1J6cn1Tnc-GfASqhU9twjwjFvNsyKO6Z1'}></img>
            <button className='btn-main' onClick={handleSubcribeBtn}>Subscribe us</button>
          </div>
        <Container>
        <div className='row row-content text-center '>
          <h3>What to try</h3>
          <DishesSlider/>
        </div>
        <div className='row row-content text-center'>
          <h3><SocialIcon facebook size='2x'/>/regen.coffee.shop</h3>
          <DishesSlider/>
        </div>
        {/* <div className="row row-content align-content-center text-center">
            <h3 className='col-12'>Meet us at 17 Nguyen Thiep, Son Tra, Da Nang</h3>
        </div> */}
      </Container>
    </React.Fragment>
  );
}
export default Home;   
