import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, Jumbotron,
            Modal, ModalBody, ModalHeader, Button, Label, FormGroup, Input, Form } from "reactstrap";
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleInfo, faBars, faAddressBook } from '@fortawesome/free-solid-svg-icons';


function Header(){
    const [isNavOpened, setIsNavOpened] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);
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
            <Navbar dark expand='md'>
                <div className="container">
                    <NavbarToggler onClick={()=>{setIsNavOpened(!isNavOpened)}} className='mr-2' />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src='/assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
                    </NavbarBrand>
                    <Collapse isOpen={isNavOpened} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/home'>
                                    <FontAwesomeIcon size="lg" icon={faHouse}/> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/aboutus'>
                                    <FontAwesomeIcon size="lg" icon={faCircleInfo}/> About us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/menu'>
                                    <FontAwesomeIcon size="lg" icon={faBars}/> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contactus'>
                                    <FontAwesomeIcon size="lg" icon={faAddressBook}/> Contact us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={handleToggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
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

