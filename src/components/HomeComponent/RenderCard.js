import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import ErrorMsg from '../WaitingPages/ErrorComponent';
import Loading from '../WaitingPages/LoadingComponent';
import { baseUrl } from '../../shared/baseUrl'
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

  export default RenderCard;