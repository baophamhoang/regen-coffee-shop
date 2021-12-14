import { Component } from "react/cjs/react.production.min";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state ={
            
        }
    }

    renderComments(comments) {
        return(
            this.props.selectedDish.comments.map((x)=>{
                return (
                    <div>
                        <ul className="list-unstyled">
                            <li>
                                <p>{x.comment}</p>
                                <p>--{x.author}, {x.date}</p>
                            </li>
                        </ul>
                    </div>)
            })
        )
    }
    
    
    render(){
        

        if (this.props.selectedDish != null){         
                return(
                    <div className="row">
                        <div className="col-md-5 col-12 m-1">
                            <Card>
                                <CardImg width='100%' src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                    <CardText>{this.props.selectedDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-5 col-12 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.selectedDish.comments)}
                        </div>
                    </div>
                )}
            else {
                return (<div></div>)
            }
        
    }
}

export default DishDetail;