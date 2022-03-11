import { Card, CardBody, CardImg, CardTitle, CardText, Container, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
function RenderComments({cmts}) {
    console.log(cmts);
        return(
            cmts.map((x)=>{
                return (
                    <div key={x.id}>
                        <li>
                            <p>{x.comment}</p>
                            <p>--{x.author}, {new Intl.DateTimeFormat('en-us',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(x.date)))}</p>
                        </li>
                    </div>)
            })
        )
    }  



function DishDetail(props){   
        const selectedDish = props.selectedDish[0];
        if (selectedDish){
                return(
                    <Container>
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to={'/'}>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem><Link to={'/menu'}>Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{selectedDish.name}</h3>
                                <hr />
                            </div>      
                        </div>
                   <div className="fading">
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
                            <ul className="list-unstyled" >
                                <RenderComments cmts={props.comments} />
                            </ul>
                        </div>
                    </div>
                </div>
                </Container>
                )}
            else {
                return (<div ></div>)
            }
        
    }

export default DishDetail;