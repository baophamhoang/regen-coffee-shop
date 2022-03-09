import { Component } from "react/cjs/react.production.min";
import { Card, CardBody, CardImg, CardTitle, CardText, Container } from "reactstrap";

var count =0;

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    renderComments(cmts) {
        return(
            cmts.map((x)=>{
                return (
                    <div>
                        <li>
                            <p>{x.comment}</p>
                            <p>--{x.author}, {new Intl.DateTimeFormat('en-us',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(x.date)))}</p>
                        </li>
                    </div>)
            })
        )
    }  



    render(){   
        const selectedDish = this.props.selectedDish[0];
        if (selectedDish){
                return(
                    <Container>
                   <div className="fading" key={selectedDish.id}>
                    <div className="row mt-5 " >
                        <div className="col-md-5 col-12 m-1">
                            <Card>
                                <CardImg width='100%' src={selectedDish.image} alt={selectedDish.name} />
                                <CardBody>
                                    <CardTitle>{selectedDish.name}</CardTitle>
                                    <CardText>{selectedDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-5 col-12 m-1">
                            <h4>Comments</h4>
                            <ul className="list-unstyled" >{this.renderComments(selectedDish.comments)}</ul>
                        </div>
                    </div>
                </div>
                </Container>
                )}
            else {
                return (<div ></div>)
            }
        
    }
}

export default DishDetail;