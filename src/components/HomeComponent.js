import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Jumbotron } from 'reactstrap';
import ErrorMsg from './ErrorComponent';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl'
import { FadeTransform } from 'react-animation-components'

function RenderCard({item, isLoading, errorMsg}) {

  if (isLoading){
    return (<Loading/>)
  }
  else if (errorMsg){
    return (<ErrorMsg msg={errorMsg}/>)
  }
  else return (
    <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
  <Card>
    <CardImg width="100%" src={baseUrl + item.image} alt={item.name} />
    <CardBody>
      <CardTitle>{item.name}</CardTitle>
      {item.designation? <CardSubtitle>
        {item.designation}
        </CardSubtitle>: null}
        <CardText className='d-none d-lg-block'>{item.description}</CardText>
    </CardBody> 
  </Card>
  </FadeTransform>
)
}

function Home(props) {
  return(
    <React.Fragment>
      <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
      <div className="container">
          <div className="row align-items-start">
              <div className="col-12 col-md m-1">
                  <RenderCard 
                    item={props.dish} 
                    isLoading={props.dishesLoading} 
                    errorMsg={props.dishErrorMsg}
                    />
              </div>
              <div className="col-12 col-md m-1">
                  <RenderCard item={props.promotion} isLoading={props.promoLoading} errorMsg={props.promoErrorMsg}/>
              </div>
              <div className="col-12 col-md m-1">
                  <RenderCard item={props.leader} isLoading={props.leaderLoading} errorMsg={props.leaderErrorMsg}/>
              </div>
          </div>
      </div>
      </React.Fragment>
  );
}
export default Home;   