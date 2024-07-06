import React, { Fragment, useEffect } from 'react';
import Headroom from 'react-headroom';
import { BrowserRouter, Link, NavLink, Route } from "react-router-dom";
import { Col, Container, Nav, Navbar, NavbarBrand, NavItem, Row, UncontrolledCollapse, UncontrolledTooltip } from 'reactstrap';
import { ISocialMediaProps } from '../Footers/SimpleFooter';
import Landing from '../Landing';

export interface IDemoNavbarProps {
    socialMediaLinks?: ISocialMediaProps[];
}

const DemoNavbar: React.FC<IDemoNavbarProps> = (props) => {

    useEffect(() => {

    });

    return (
        <header className="header-global">
            <Headroom>
                <Navbar
                    className="navbar-main navbar-transparent navbar-light headroom"
                    expand="lg"
                    id="navbar-main"
                >
                    <Container>
                        <NavbarBrand className="me-lg-5">
                            <i className='fa fa-hand-spock-o' /> Paul Pemberton
                        </NavbarBrand>
                        <button className="navbar-toggler" id="navbar_global">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <UncontrolledCollapse
                            toggler="#navbar_global"
                            navbar
                        >
                            <div className="navbar-collapse-header">
                                <Row>
                                    <Col className="collapse-brand" xs="6">
                                        <Link to="/">
                                            <i className='fa fa-hand-spock-o' /> Paul Pemberton
                                        </Link>
                                    </Col>
                                    <Col className="collapse-close" xs="6">
                                        <button className="navbar-toggler" id="navbar_global">
                                            <span />
                                            <span />
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <Nav className="align-items-lg-center ms-lg-auto" navbar>
                                {props.socialMediaLinks?.map((socialMediaButton, index) => {
                                    let displayIndex = index < 10 ? `0${index}` : index;
                                    return (
                                        <Fragment key={socialMediaButton.url}>
                                            <NavItem>
                                                <NavLink
                                                    className="nav-link-icon"
                                                    href={socialMediaButton.url}
                                                    id={`tooltip131${displayIndex}`}
                                                    target="_blank" to={''}
                                                >
                                                    <i className={`fa ${socialMediaButton.icon}`} />
                                                    <span className="nav-link-inner--text d-lg-none ms-2">
                                                        {socialMediaButton.name}
                                                    </span>
                                                </NavLink>
                                                <UncontrolledTooltip delay={0} target={`tooltip131${displayIndex}`}>
                                                    {socialMediaButton.tooltip}
                                                </UncontrolledTooltip>
                                            </NavItem>
                                        </Fragment>
                                    );
                                })}
                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </Headroom>
        </header>
    );
};

export default DemoNavbar;