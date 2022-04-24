import SocialIcon from './SocialIconComponent'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'

export default function Footer(){
    const handleSubcribeSubmit = (e) =>{
        e.preventDefault();
        console.log();
    }
    return (
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 col-md-5">
                    <div className='row'>
                        <div className='col-12 col-md-6 justify-self-center'>
                            <h5>NAVIGATION</h5>
                            <ul className="list-unstyled">
                                <li><Link className='nostyle' to='/'>Home</Link></li>
                                <li><Link className='nostyle' to='/aboutus'>About Us</Link></li>
                                <li><Link className='nostyle' to='/menu'>Menu</Link></li>
                                <li><Link className='nostyle' to='/contactus'>Contact Us</Link></li>
                            </ul>
                            
                        </div>
                        <div className='col-12 col-md-6 mb-3'>
                            <h5>CONTACTS</h5>
                            <ul className="list-unstyled">
                                <li> regen@gmail.com</li>
                                <li>+84 90 5113 444</li>
                            </ul>
                            <SocialIcon facebook twitter instagram style={{marginLeft: '5px'}} />
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-2 align-self-center text-center">
                    <img src={logo} className='logo' alt='logo'></img>
                </div>

                <div className="col-12 col-md-5">
                    <div className='row'>
                        <div className='col'>
                            <h5>ADDRESS</h5>
                            <p>
                                17 Nguyen  Thiep, <br/>
                                Son Tra, Da Nang, <br/>
                                550000
                            </p>
                        </div>
                        <div className='col'>
                            <h5>SUBCRIBE US</h5>
                            <div className='subcribe-us-box'>
                                <form onSubmit={handleSubcribeSubmit}>
                                    <div className='form-floating '>
                                        <input type="email" className='form-control' style={{border: '2px solid', borderRadius: '0'}}  placeholder='you subcribe ?'
                                        id='subcribe-us'/>
                                        <label  htmlFor='subcribe-us'>Your E-mail</label>
                                        <button type='submit' className='btn btn-main btn-subcribe-us btn-danger '>SUBCRIBE</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
            
        </div>    
    </div>)
}

