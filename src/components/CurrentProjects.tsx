import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import IllImage from '../assets/img/ill/ill-2.svg';

export interface ICurrentProjectsProps {
    // Define the props for your component here
}

const CurrentProjects: React.FC<ICurrentProjectsProps> = () => {
    // Implement your component logic here

    return (
        <section className="section pb-0 bg-gradient-warning">
            <Container>
                <Row className="row-grid align-items-center">
                    <Col className="order-lg-2 ms-lg-auto" md="6">
                        <div className="position-relative ps-md-5">
                            <img
                                alt="Coding is fun"
                                className="img-center img-fluid"
                                src={IllImage}
                            />
                        </div>
                    </Col>
                    <Col className="order-lg-1" lg="6">
                        <div className="d-flex px-3">
                            <div>
                                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                    <i className="ni ni-building text-primary" />
                                </div>
                            </div>
                            <div className="ps-4">
                                <h4 className="display-3 text-white">I Dabble In Everything</h4>
                                <p className="text-white">
                                    Even in my downtime, I'm still coding. I love to learn new ways of doing things,
                                    or learn new technologies. Here are a couple of projects I'm currently working on.
                                </p>
                            </div>
                        </div>
                        <Card className="shadow shadow-lg--hover mt-5">
                            <CardBody>
                                <div className="d-flex px-3">
                                    <div>
                                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                            <i className="ni ni-satisfied" />
                                        </div>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="title text-success">
                                            Thaumcraft 4 Reboot
                                        </h5>
                                        <p>
                                            A re-write of the popular (and my favorite) Minecraft mod Thaumcraft 4. The
                                            original version is stuck on 1.7.10, and since the entire entity and world
                                            structure of Minecraft changed in 1.18, the mod basically has to be
                                            re-written from scratch to work in newer versions.
                                        </p>
                                        <a className="text-success" href="https://github.com/pember10/thaumcraftreboot" target='_blank'>
                                            Learn more
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="shadow shadow-lg--hover mt-5">
                            <CardBody>
                                <div className="d-flex px-3">
                                    <div>
                                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                            <i className="ni ni-active-40" />
                                        </div>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="title text-warning">
                                            Phylogenesis
                                        </h5>
                                        <p>
                                            I love plants, and I love coding. So I decided to combine the two.
                                            Phylogenesis is a horticultral database that allows you to search
                                            for plants based on their scientific names, common names, or other
                                            characteristics.
                                        </p>
                                        <a className="text-warning" href="https://github.com/pember10/phylogenesis" target='_blank'>
                                            Learn more
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* SVG separator */}
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
    );
};

export default CurrentProjects;