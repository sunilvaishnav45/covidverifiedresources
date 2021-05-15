import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component {
    
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Navbar.Brand href="#home">
                        <FontAwesomeIcon icon={faBuilding} />
                        <span class="ml-3">  COVID-19 INFORMATION </span>
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="row-reverse">
                            <Nav.Link eventKey={2} href="/cases">
                                Cases
                            </Nav.Link>
                            <Nav.Link href="/home">Hospitals</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default NavBar;