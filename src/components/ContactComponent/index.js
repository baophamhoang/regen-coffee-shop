import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { 
    faPhone,
    faEnvelope,
 } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import {  postFeedbacks } from '../../redux/actions';
import { v4 as uuidv4} from 'uuid';
import FeedBackForm from './FeedbackForm';
import AddressMap from './MapComponent';
import './index.css'
import SocialIcon from '../SocialIconComponent';


function Contact() {
    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: 'auto'
        })
    },[]);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        const payload = {...e};
        payload.id = uuidv4();
        payload.date = new Date().toISOString();
        console.log(payload);
        dispatch(postFeedbacks(payload));
    }

    return(
        <div className="container">
            {/* <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>           
            </div> */}
            <div className="row row-content ">
                <div className="col-12 text-center">
                    <h1>Contact us</h1>
                    <span>Want to know more about what we offer? Need to check that we can meet your dietary needs? Got an unusual request you want us to fulfill? Or just want to tell us about your day?</span>
                    <br/>
                    <br/>
                    <span>Get in touch via the contact details below and we’ll get back to you ASAP. </span>
                </div>                
            </div>
            <div className="row row-content">
                {/* <div className="col-12">
                    <h2>Where to find us</h2>
                </div> */}
                <div className="col-12 col-sm-6  align-self-center">
                        <h2 className='logo-font'>Regen - Drinks and Coffee</h2>
                        <p style={{
                            fontSize: '20px',
                            background: 'rgb(248, 247, 245)',
                            textAlign: 'center'
                        }}>17 Nguyen Thiep, Son Tra, Da Nang</p>
                        <p>
                            <div className='row'>
                                <div className='col-12 col-lg-auto'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 090 5113 444 &nbsp; &nbsp;</div>
                                <div className='col-12 col-lg-auto'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><a className='nostyle' style={{color:'inherit'}} href="mailto:confusion@food.net"> regen@gmail.com</a></div>
                                <div className='col-12 col-lg'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon><a className='nostyle' style={{color:'inherit'}} href="https://www.facebook.com/regen.coffee.shop"> regen.coffee.shop</a></div>
                            </div>
                        </p>
                        <SocialIcon facebook call mail dark size='2x' style={{
                            'marginRight': '5px'
                        }} />
                        
                </div>

                <div className="col-12  col-sm-6">
                    {/* <h5>Map of our Location</h5> */}
                        <AddressMap/>
                </div>
            </div>
            <div className="row row-content text-center">
                   <div className="col-12">
                      <h3  style={{
                        fontFamily: '"Playfair Display", arial, serif'
                    }} >Send us your Feedback</h3>
                   </div>
                    <div className="col-12 col-md-9">
                    {/* <LocalForm model='.feedback' onSubmit={(e) => handleSubmit(e)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors 
                                        className='text-danger'
                                        model='.firstname'
                                        show='touched'
                                        messages={{
                                            required: 'Don\'t leave a blank. ',
                                            minLength: 'Must be greater than 2 characters. ',
                                            maxLength: 'Must be 15 characters or less. '
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}
                                         />
                                        <Errors
                                            className='text-danger'
                                            model='.lastname'
                                            show='touched'
                                            messages={{
                                                required: 'Don\'t leave a blank. ',
                                                minLength: 'Must be greater than 2 characters. ',
                                                maxLength: 'Must be 15 characters or less. '
                                            }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            
                                            minLength: minLength(6),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                         />
                                         <Errors
                                            className='text-danger'
                                            model='.lastname'
                                            show='touched'
                                            messages={{
                                                required: 'Don\'t leave a blank. ',
                                                minLength: 'Must be greater than 6 characters. ',
                                                maxLength: 'Must be 15 characters or less. ',
                                                isNumber: 'Must be a number. '
                                            }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required, validEmail
                                            }}
                                            />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            messages={{
                                                required: 'Required. ',
                                                validEmail: 'Invalid Email Address. '
                                            }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" defaultValue={false}
                                                className="form-check-input"  
                                                 /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control" defaultValue='Tel.'>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm> */}
                        
                    </div>
                    <div className="col-12 col-md-7">
                        <FeedBackForm></FeedBackForm>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className='feedback-support'>
                            <h3>Customer Support</h3>
                            <p>How can we help you? Give us a call</p>  
                            <p className='call'>Call: 090 5113 444 </p>
                            <p>Or just send us an e-mail below:</p>
                                <a href='mailto:'>
                                    <div className='feedback-btn'>
                                        Send an e-mail
                                    </div>
                                </a>
                        </div>
                    </div>
               </div>

        </div>
    );
}


export default Contact;