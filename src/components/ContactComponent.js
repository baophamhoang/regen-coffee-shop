import React, 
    { 
        Component ,
        useState,
    } from 'react';
import { Breadcrumb, BreadcrumbItem,
            Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkype } from '@fortawesome/free-brands-svg-icons'
import { 
    faPhone,
    faFax,
    faEnvelope,
    faEnvelopeOpen
 } from '@fortawesome/free-solid-svg-icons'

function Contact(props) {
    const initialInput = {
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        agree: false,
        contactType: 'Tel.',
        message: '',
        touched: {
            firstname: false,
            lastname: false,
            telnum: false,
            email: false
        }
    }

    const [input, setInput] = useState(initialInput);
    console.log(input);

    const handleInputChange  = e => {
        setInput(
            {
                ...input,
                [e.target.name]: e.target.value
            }
        )
    
    }

    const handleSubmit = e => {
        console.log(JSON.stringify(input));
        e.preventDefault();
    }

    const handleBlur = (e) => {
        console.log(e);
        setInput(
            {
                ...input,
                touched: {
                    ...input.touched,
                    [e.target.name]: true
                }
            }
        )
    }

    const validate = (firstname, lastname, telnum, email) =>{
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (input.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (input.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (input.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (input.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (input.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(input.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

    const errors = validate(input.firstname, input.lastname, input.telnum, input.email);
 
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>: +852 1234 5678<br />
                        <FontAwesomeIcon icon={faFax}></FontAwesomeIcon>: +852 8765 4321<br />
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Call</a>
                        <a role="button" className="btn btn-info"><FontAwesomeIcon icon={faSkype}></FontAwesomeIcon> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={input.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={handleBlur}
                                        onChange={handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={input.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={handleBlur}
                                        onChange={handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        value={input.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={handleBlur}
                                        onChange={handleInputChange} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={input.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={handleBlur}
                                        onChange={handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
               </div>

        </div>
    );
}


export default Contact;