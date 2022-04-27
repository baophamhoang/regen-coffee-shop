import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { 
    faPhone,
    faEnvelope,
 } from '@fortawesome/free-solid-svg-icons'
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
                        
                        <div className='row'>
                            <div className='col-12 col-lg-auto'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 090 5113 444 &nbsp; &nbsp;</div>
                            <div className='col-12 col-lg-auto'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><a className='nostyle' style={{color:'inherit'}} href="mailto:confusion@food.net"> regen@gmail.com</a></div>
                            <div className='col-12 col-lg'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon><a className='nostyle' style={{color:'inherit'}} href="https://www.facebook.com/regen.coffee.shop"> regen.coffee.shop</a></div>
                        </div>
                        
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