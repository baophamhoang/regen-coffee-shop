import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, 
            Modal, ModalBody, ModalHeader, Button, Label, FormGroup, Input, Form } from "reactstrap";
import React, {useState, useEffect, useRef, useLayoutEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse, faCircleInfo, faBars, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.png'


function Header(){
    const [scrolling, setScrolling] = useState(false );
    const refRef = useRef(null);
    const [isNavOpened, setIsNavOpened] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [currentPage, setcurrentPage] = useState();
    const location = useLocation();
    useEffect(()=>{
        console.log(refRef);
    },
    [])
    useEffect(()=>{
        setIsNavOpened(false)
    },
    [location])
    const onScroll = () => {
        const scrollPos = window.scrollY;
            if (scrollPos>20){
                setScrolling(true);
            }
            else {
                setScrolling(false);
            }
    }
    useLayoutEffect(()=>{
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    })
    const login = {
                username: '',
                password: '',
                remember: false
            }
    const handleToggleModal = () => {
        setIsModalOpened(!isModalOpened);
    }   

    const handleLogin = (e) => {
        handleToggleModal();
        alert("Username: " + login.username.value + " Password: " + login.password.value
            + " Remember: " + login.remember.checked);
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <Navbar className={`noselect ${scrolling?'navbar-scrolling': ''}`} light fixed='top' expand='md'>
            <div ref={refRef} className="container justify-content-start">
                <div className="navbar-links-left">
                    <div className="navbar-links-container">
                        <div className="navbar-links">
                            <Link className={`nav-link ${location.pathname==='/'?'active':''}`} to='/' aria-current="page">Home</Link>
                        </div>
                        <div className="navbar-links">
                            <Link className={`nav-link ${location.pathname==='/aboutus'?'active':''}`} to='/aboutus'>About us</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-logo">
                    <Link className='nav-link nostyle mr-auto navbar-brand text-md-center'  to='/' >
                        <img src={logo} className='ml-md-5 mr-10' width='100px'/>
                    </Link>
                </div>
                <div className="navbar-links-right">
                    <div className="navbar-links-container">
                        <div className="navbar-links">
                            <Link className={`nav-link ${location.pathname==='/menu'?'active':''}`} to='/menu'>Menu</Link>
                        </div>
                        <div className="navbar-links">
                            <Link className={`nav-link ${location.pathname==='/contactus'?'active':''}`} to='/contactus'>Contact us</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-collapse-menu">
                    <div>
                        <NavbarToggler style={{border:'none'}} onClick={()=>{setIsNavOpened(!isNavOpened)}} className='' />
                    </div>
                    <Collapse className='ml-3 flex-row-reverse' isOpen={isNavOpened} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/aboutus'>
                                    About us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/menu'>
                                    Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contactus'>
                                    Contact us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                        {/* <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={handleToggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav> */}
                </div>
                {/* <div ref={refRef} className="container justify-content-start">
                    <NavbarToggler style={{border:'none'}} onClick={()=>{setIsNavOpened(!isNavOpened)}} className='' />
                    
                    <Collapse className='ml-3 flex-row-reverse' isOpen={isNavOpened} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/aboutus'>
                                    About us
                                </NavLink>
                            </NavItem>
                            </Nav>
                            </Collapse>
                            <Link className='nav-link nostyle mr-auto navbar-brand text-md-center'  to='/' >
                        <h2 className="logo-font" style={{
                        'transform' : 'translateY(10%)',
                        color: '#636363'
                        }}>REGEN</h2>
                        <img src={logo} className='ml-md-5 mr-10' width='100px'/>
                        </Link>
                     
                            <Collapse className='ml-3 flex-row' isOpen={isNavOpened} navbar>
                                <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/menu'>
                                    Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contactus'>
                                    Contact us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={handleToggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div> */}
                </div>
            </Navbar>
            
            <Modal isOpen={isModalOpened} toggle={handleToggleModal}>
                <ModalHeader toggle={handleToggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                innerRef={(input) => login.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={(input) => login.password = input}  />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                innerRef={(input) => login.remember = input}  />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
        )
}

export default Header;

