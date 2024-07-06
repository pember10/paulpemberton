import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

interface IHeroProps {

}

const Hero: React.FC<IHeroProps> = (props) => {
    return (
        <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
                <div className="shape shape-style-1 shape-default">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <Container className="py-lg-md d-flex">
                    <div className="col px-0">
                        <Row>
                            <Col lg="6">
                                <h1 className="display-3 text-white">
                                    Welcome!
                                </h1>
                                <p className="lead text-white">
                                    I'm glad you're here. I'm a hybrid Senior Software Engineer, meaning I
                                    have dual IC and People Manager roles. I am an MCSD in web platforms, and
                                    have skills in C#, React, TypeScript, Azure, ASP (.Net and Core), web
                                    services, apis, and much more. I also have a passion for people, and love
                                    to help other developers grow in their skills and careers.
                                </p>
                                <div className="btn-wrapper">
                                    <Button
                                        className="btn-icon mb-3 mb-sm-0"
                                        color="warning"
                                        href="https://github.com/pember10"
                                    >
                                        <span className="btn-inner--icon me-1">
                                            <i className="fa fa-github" />
                                        </span>
                                        <span className="btn-inner--text">My GitHub</span>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <p className="lead text-white">Check out some of my favorite repos...</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className="separator separator-bottom separator-skew">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="fill-white"
                            points="2560 0 2560 100 0 100"
                        />
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default Hero;