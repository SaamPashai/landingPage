import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem } from 'reactstrap';

import { NavHashLink as NavLink } from 'react-router-hash-link';

class MenuBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">
                    <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink smooth to="/#titleBlock">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink smooth to="/#missionBlock">
                                    Mission
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink smooth to="/#impactBlock">
                                    Impact
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink smooth to="/#aboutUsBlock">
                                    About Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MenuBar;