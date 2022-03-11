import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, Jumbotron } from "reactstrap";
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleInfo, faBars, faAddressBook } from '@fortawesome/free-solid-svg-icons';


function Header(){
    const [isOpened, setIsOpened] = useState(false);
    return (
        <React.Fragment>
            <Navbar dark expand='md'>
                <div className="container">
                    <NavbarToggler onClick={()=>{setIsOpened(!isOpened)}} className='mr-2' />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src='/assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
                    </NavbarBrand>
                    <Collapse isOpen={isOpened} navbar>
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
        </React.Fragment>
        )
}

export default Header;

