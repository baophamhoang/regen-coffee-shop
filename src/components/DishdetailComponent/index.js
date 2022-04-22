import { Card, CardBody, CardImg, CardTitle, CardText, Container, 
    Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
    Row, Col, Label } from "reactstrap";
import { Link } from "react-router-dom";
// import Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
// hooks
import React, { useState  } from "react";
import { Control, LocalForm, Errors } from 'react-redux-form'
import { useDispatch, useSelector } from 'react-redux'
import { dishesSelector, commentsSelector } from '../../redux/selectors'
// import { v4 as uuidv4} from 'uuid';
import { postCommentFB } from "../../redux/actions";
import Loading from "../WaitingPages/LoadingComponent";
import { imgBaseUrl } from '../../shared/imgBaseUrl'
import { FadeTransform } from 'react-animation-components';
import DishDetailSection from "./DishDetailSection";
// import css
import './index.css'
const validations = {
    minAuthorLength: len => val => val && val.length >= len,
    maxAuthorLength: len => val => !(val) || (val.length <= len)
}
    
function DishDetail({selectedDishId}){   
    const dishesData = useSelector(dishesSelector);
    const cmtData = useSelector(commentsSelector)
    const dispatch = useDispatch();
    const [isModalOpened, setIsModalOpened] = useState(false);
    
    function CommentForm({onClick}){
        return (
            <Button id='submit-btn' color='secondary' outline onClick={onClick}>
                <FontAwesomeIcon icon={faPencil}>
                </FontAwesomeIcon> Submit Comment
            </Button>
        )
    }

    const handleCommentBtnClick = () => {
        setIsModalOpened(!isModalOpened)
    }

    const handleCommentFormSubmit = (e) => {
        const payload = {...e};
        payload.rating = Number(payload.rating);
        // payload.id = uuidv4();
        payload.date = new Date().toISOString();
        payload.dishId = selectedDish.id;
        payload.id = cmtData.comments.length;
        dispatch(postCommentFB(payload));
        setIsModalOpened(!isModalOpened);
    }
    const selectedDish = dishesData.dishes.filter( dish => dish.id === parseInt(selectedDishId))[0];
    if (dishesData.isLoading){
        return ( 
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        )
        }
        else if (dishesData.errorMsg){
        return (
            <div className="container">
                <div className="row">            
                    <h4>{dishesData.errorMsg}</h4>
                </div>
            </div>
        )
        }
        else if (selectedDish){
            return(
                <Container>
                    <Modal isOpen={isModalOpened} toggle={()=>{setIsModalOpened()}} centered>
                        <ModalHeader>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={handleCommentFormSubmit}>
                                <Row className='form-group'>
                                    <Label htmlFor='rating' xl={3}>Rating</Label>
                                    <Col xl={9}>
                                        <Control.select defaultValue='5' model=".rating" id="rating" name="rating"
                                        placeholder=""
                                        className="form-control"
                                        >
                                            <option value='5'>5</option>
                                            <option value='4'>4</option>
                                            <option value='3'>3</option>
                                            <option value='2'>2</option>
                                            <option value='1'>1</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor='author' xl={3}>Your name</Label>
                                    <Col xl={9}>
                                        <Control.text model=".author" id="author" name="author"
                                        placeholder=""
                                        className="form-control"
                                        validators={{
                                            minLength : validations.minAuthorLength(3),
                                            maxLength : validations.maxAuthorLength(15)
                                        }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model='.author'
                                            show='touched'
                                            messages={{
                                                minLength: 'Must be greater than 2 characters. ',
                                                maxLength: 'Must be 15 characters or less. '
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor='comment' xl={3}>Comment</Label>
                                    <Col xl={9}>
                                        <Control.textarea defaultValue='' model=".comment" id="comment" name="comment"
                                        className="form-control"
                                        rows="6"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col xl={{size:9, offset: 3}}>
                                        <Button type="submit" color="primary">
                                        Send Feedback
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                    <div className="row">
                        <Breadcrumb>
                            {/* <BreadcrumbItem><Link to={'/'}>Home</Link></BreadcrumbItem> */}
                            <BreadcrumbItem><Link id="back-to-menu" to={'/menu'}>&larr; Back to Menu</Link></BreadcrumbItem>
                            {/* <BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem> */}
                        </Breadcrumb>
                        <div style={{borderBottom: '1px ridge'}}></div>
                    </div>
                    <div className="fading">
                        <FadeTransform in transformProps={{
                                            exitTransform: 'scale(0.5) translateY(-50%)'
                                        }}>
                        <div className="dish-details-box">
                            <div className="row mt-md-3 " >
                                <div className="col-md-5 col-12 m-1">
                                    <Card className='mt-md-5'>
                                        <CardImg top src={imgBaseUrl + selectedDish.image} alt={selectedDish.name} />
                                        {/* <CardBody>
                                            <CardTitle>{selectedDish.name}</CardTitle>
                                            <CardText>{selectedDish.description}</CardText>
                                        </CardBody> */}
                                    </Card>
                                        
                                </div>
                                <DishDetailSection selectedDish={selectedDish} selectedDishId={selectedDishId}  
                                    CommentForm={CommentForm} handleCommentBtnClick={handleCommentBtnClick}/>
                            </div>
                                <div className="col-md-5 col-12 m-1">
                                    
                            </div>
                        </div>
                        </FadeTransform>
                    </div>
            </Container>
            )}
            
        else {
            return (<div ></div>)
        }
    
    
}

export default DishDetail;