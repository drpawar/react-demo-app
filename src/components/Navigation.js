import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export class Navigation extends React.Component {
    render() {
        return(
            <Navbar sticky="top" expand="lg" bg="primary" variant="dark">
                <Navbar.Toggle/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                    <NavLink className="d-inline p-2 bg-primary text-white" to="/">Home</NavLink>
                    <NavLink className="d-inline p-2 bg-primary text-white" to="/about">About Us</NavLink>
                    <NavLink className="d-inline p-2 bg-primary text-white" to="/contactus">Contact Us</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}