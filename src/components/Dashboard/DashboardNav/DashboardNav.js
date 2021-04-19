import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const DashboardNav = () => {
    return (
        <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
    >
        <Navbar.Brand className="mt-2 ms-4">
            CAR SERVICE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <NavLink
                    exact={true}
                    to="/"
                    className="btn mt-2 me-1"
                    activeClassName="btn-primary"
                >
                HOME
                </NavLink>
            <NavLink
                    exact={true}
                    to="/dashboard"
                    className="btn mt-2 me-1"
                    activeClassName="btn-primary"
                >
                    ORDER LIST
                </NavLink>

                <NavLink
                    to="/dashboard/addService"
                    className="btn mt-2 me-1"
                    activeClassName="btn-primary"
                >
                    ADD SERVICE
                </NavLink>
                <NavLink
                    to="/dashboard/reviews"
                    className="btn mt-2 me-1"
                    activeClassName="btn-primary"
                >
                    REVIEWS
                </NavLink>
                <NavLink
                    to="/dashboard/manageService"
                    className="btn mt-2 me-1"
                    activeClassName="btn-primary"
                >
                    MANAGE SERVICE
                </NavLink>
                
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
};

export default DashboardNav;