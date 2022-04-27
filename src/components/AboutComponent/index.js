import React  from 'react';
import { Link } from 'react-router-dom';
import { imgBaseUrl } from '../../shared/imgBaseUrl';
import { aboutus_2, aboutus_1, coffee } from '../../shared/imgResources';
import Loading from '../WaitingPages/LoadingComponent';

function About() {
    const handleOnLoad = (e) => {
        e.target.nextSibling.className = 'hidden';
        e.target.classList.add('appear');
        setTimeout(()=>{e.target.classList.add('shown')},100);
    }
    const AboutImg = ({imgUrl}) => {
        return (
            <div className='about-img'>
                <img src={imgBaseUrl+imgUrl} className='hidden' onLoad={handleOnLoad} width='100%' alt={imgUrl}></img>
                <Loading/>
            </div>
        )
    }
    return(
        <div className="container">
            <div className="row ">
                {/* <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb> */}
            </div>
            <div className="row row-content ">
                <div className="col-12 text-center">
                    <h1>About Us</h1>
                    <span>We have two obsessions: tea and coffee. We’re passionate about sharing both with you, 
                        which is why we created Regen. Here is a place to drink, eat, meet friends, get drunk and enjoy an atmosphere away from the hassles of everyday life.    </span>
                </div>                
            </div>
            <div className="row row-content align-items-center">
                <div className="col-12 col-md-8">
                    {/* <img src={imgBaseUrl+ aboutus_2} width='100%' alt='aboutus_2.jpg' /> */}
                    <AboutImg imgUrl={aboutus_2}/>
                    
                </div>
                <div className="col-12 col-md-4 ">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
            </div> 
            <div className="row row-content align-items-center">
                <div className="col-12 col-md-4 order-2 order-md-1">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 offset-md-1 col-md-7 order-1 order-md-2">
                    {/* <img src={imgBaseUrl+coffee} width='100%' alt='coffee.jpg'/> */}
                    <AboutImg imgUrl={coffee}/>
                </div>
            </div>
            <div className="row row-content align-items-center">
                <div className="col-12 col-md-7">
                    {/* <img src={imgBaseUrl+aboutus_1} width='100%' alt='aboutus_1.jpg'/> */}
                    <AboutImg imgUrl={aboutus_1}/>
                </div>
                <div className="col-12 col-md-5">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
            </div> 
            <div className="row row-content align-items-center"> 
                <div className='col-12 text-center'>
                    <h3 style={{
                        fontWeight : 300,
                    }}>Meet us at 17 Nguyen Thiep, Son Tra, Da Nang</h3>
                    <Link to='/contactus'>
                        <button className=' btn btn-light' style={{
                            border: '2px solid black',
                            background: 'transperant',
                            fontSize: '20px',
                            marginTop: '30px',
                            padding: '20px 40px 20px 40px'
                            }}>Contact us</button>    
                    </Link>
                </div> 
                <div className='col-10 offset-1 text-center mt-1'> 
                    {/* <div className='image-card' style={{
                        backgroundImage: `url(http://localhost:3001/images/aboutus_4.jpg)`,
                        // width: '500px',
                        minHeight: '300px',
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`,
                    }}> */}
                        
                    {/* </div> */}
                    
                </div>
            </div>
        </div>
    );
}

export default About;    