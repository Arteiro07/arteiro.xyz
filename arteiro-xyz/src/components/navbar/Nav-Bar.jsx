import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import React, {Component} from "react";
import './nav-bar.css'
import logo from '../../images/arte.png';

class NavBarra extends Component{
  render(){

        return (
            <Container>
                <Navbar className='nav-bar' bg="dark" variant ="dark" fixed="top"  expand="sm" collapseOnSelect>
                <Navbar.Brand href="http://localhost:3000"> <img src={logo} width="130px" height="50px" /> </Navbar.Brand>
                <Navbar.Toggle/>
                    <Navbar.Collapse>
                            <Nav className="me-auto" >
                                <Nav.Link href="/twentyfour">24</Nav.Link>
                                <Nav.Link href="/padel">Padel</Nav.Link>
                                <Nav.Link href="/musica">Musica</Nav.Link>
                                <NavDropdown title="About me" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Email</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default NavBarra;
