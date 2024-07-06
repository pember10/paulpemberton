import React from 'react';
import { Container, Row, Col, Badge, Button } from 'reactstrap';
import Promo from '../assets/img/theme/promo-1.png';

export interface ICompetentFullStackProps {

}

const CompetentFullStack: React.FC<ICompetentFullStackProps> = (props) => {
    return (
        <section className="section section-lg pt-0">
            <Container>
                <Row className="row-grid align-items-center">
                    <Col className="order-md-2" md="6">
                        <img
                            alt="I build everything"
                            className="img-fluid floating"
                            src={Promo}
                        />
                    </Col>
                    <Col className="order-md-1" md="6">
                        <div className="pe-md-5">
                            <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                <i className="ni ni-settings-gear-65" />
                            </div>
                            <h3>Backend, frontend, full stack. Oh my!</h3>
                            <p>
                                While my title is Senior Software Engineer, I am competent in the entire web stack.
                                From deep business logic all the way up to the presentation layer, and everything in
                                between, I can handle it.
                            </p>
                            <ul className="list-unstyled mt-5">
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle me-3"
                                                color="success"
                                            >
                                                <i className="ni ni-satisfied" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">C#, Java, .NET Core</h6>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle me-3"
                                                color="success"
                                            >
                                                <i className="ni ni-settings-gear-65" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Web Services and APIs</h6>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle me-3"
                                                color="success"
                                            >
                                                <i className="ni ni-html5" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">React, TypeScript, SCSS, Razor, etc.</h6>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle me-3"
                                                color="success"
                                            >
                                                <i className="ni ni-satisfied" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Agile and Scrum SDLCs</h6>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                            <div className="btn-wrapper">
                                            <Button
                                                className="btn-icon mb-3 mb-sm-0"
                                                color="success"
                                                href="https://www.linkedin.com/in/paulpemberton/"
                                            >
                                                <span className="btn-inner--icon me-1">
                                                    <i className="fa fa-linkedin" />
                                                </span>
                                                <span className="btn-inner--text">Let's Connect!</span>
                                            </Button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CompetentFullStack;