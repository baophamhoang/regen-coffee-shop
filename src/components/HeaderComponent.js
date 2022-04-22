import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, 
            Modal, ModalBody, ModalHeader, Button, Label, FormGroup, Input, Form } from "reactstrap";
import React, {useState} from "react";
import { NavLink, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse, faCircleInfo, faBars, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.png'


function Header(){
    const [isNavOpened, setIsNavOpened] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const login = {
                username: '',
                password: '',
                remember: false
            }
    const location = useLocation();
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
            <Navbar light expand='md' >
                <div className="container justify-content-start">
                    <NavbarToggler style={{border:'none'}} onClick={()=>{setIsNavOpened(!isNavOpened)}} className='' />
                    <NavbarBrand className=" mr-auto navbar-brand" href="/">
                        <h2 className="logo-font" style={{
                            'transform' : 'translateY(10%)',
                            color: '#636363'
                     }}>REGEN</h2>
                     {/* <img src={logo} className='ml-md-5 mr-10' width='80px'/> */}

                    </NavbarBrand>
                    <Collapse className='ml-3 flex-row-reverse' isOpen={isNavOpened} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    {/* <FontAwesomeIcon size="lg" icon={faHouse}/>  */}
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/aboutus'>
                                    {/* <FontAwesomeIcon size="lg" icon={faCircleInfo}/>  */}
                                    About us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/menu'>
                                    {/* <FontAwesomeIcon size="lg" icon={faBars}/>  */}
                                    Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contactus'>
                                    {/* <FontAwesomeIcon size="lg" icon={faAddressBook}/>  */}
                                    Contact us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        {/* Login Button */}
                        {/* <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={handleToggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav> */}
                    </Collapse>
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

