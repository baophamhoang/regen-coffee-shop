import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import ErrorMsg from './ErrorComponent';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl'

function RenderCard({item, isLoading, errorMsg}) {
  console.log(item);
  if (isLoading){
    return (<Loading/>)
  }
  else if (errorMsg){
    return (<ErrorMsg msg={errorMsg}/>)
  }
  else return (
  <Card>
    <CardImg width="100%" src={baseUrl + item.image} alt={item.name} />
    <CardBody>
      <CardTitle>{item.name}</CardTitle>
      {item.designation? <CardSubtitle>
        {item.designation}
        </CardSubtitle>: null}
        <CardText></CardText>
    </CardBody> 
  </Card>
)
}

function Home(props) {
  return(
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
                  <RenderCard item={props.leader} />
              </div>
          </div>
      </div>
  );
}
export default Home;   