import React from 'react';
import { Container, Row, Col } from 'reactstrap';

interface IBuildSomethingProps {

}

const AboutMe: React.FC<IBuildSomethingProps> = (props) => {
    return (
        <section className="section section-lg bg-gradient-default about-me">
            <Container>
                <Row className="text-center justify-content-center">
                    <Col lg="10">
                        <h2 className="display-3 text-white">About Me</h2>
                        <p className="lead text-white">
                            Schweitzer once said, "Success is not the key to happiness. Happiness is
                            the key to success. If you love what you are doing, you will be successful."
                        </p>
                    </Col>
                </Row>
                <Row className="row-grid mt-5">
                    <Col lg="4">
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                            <i className="ni ni-laptop text-primary" />
                        </div>
                        <h5 className="text-white mt-3">Mind for Coding</h5>
                        <p className="text-white mt-3">
                            I'm a Senior Software Engineer. I love coding, people, and discovery. I crave
                            autonomy and mastery, and I love to help others grow in their skills and careers.
                            For fun I code game mods, websites, apps, or just tinker with something new.
                        </p>
                    </Col>
                    <Col lg="4">
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                            <i className="ni ni-settings text-primary" />
                        </div>
                        <h5 className="text-white mt-3">Work With My Hands</h5>
                        <p className="text-white mt-3">
                            I am a carpenter at heart. Most of the furniture in my house I built myself. I
                            have a passion for DIY, and I love to build things. Right now, I'm rebuilding a
                            1980 Ford F-250. It was my great grandpa's truck, my grandpa's truck, and now it's
                            mine. It has a lot of sentimental history.
                        </p>
                    </Col>
                    <Col lg="4">
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                            <i className="ni ni-square-pin text-primary" />
                        </div>
                        <h5 className="text-white mt-3">Family is My World</h5>
                        <p className="text-white mt-3">
                            Family is the single most important thing to me. I have a wife and three children.
                            When we're not watching Chopped together, we're fishing, camping, playing video
                            games, or going on an adventure.
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="fill-secondary"
                        points="2560 0 2560 100 0 100"
                    />
                </svg>
            </div>
        </section>
    );
};

export default AboutMe;