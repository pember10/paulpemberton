import React, { Fragment } from 'react';
import { Container, Row, Col, Button, UncontrolledTooltip } from 'reactstrap';

export interface ISimpleFooterProps {
    socialMediaLinks?: ISocialMediaProps[];
}

export interface ISocialMediaProps {
    color: string;
    icon: string;
    url: string;
    tooltip: string;
    name?: string;
}

const SimpleFooter: React.FC<ISimpleFooterProps> = (props) => {
    return (
        <footer className="footer pt-6">
            <Container>
                <Row className=" row-grid align-items-center mb-5">
                    <Col lg="6">
                        <h3 className="font-weight-light mb-2">
                            Thanks for checking out my site!
                        </h3>
                        <h4 className=" mb-0 font-weight-light">
                            Let's connect on any of these platforms.
                        </h4>
                    </Col>
                    <Col className="text-lg-center btn-wrapper" lg="6">
                        {props.socialMediaLinks?.map((socialMediaButton, index) => {
                            let displayIndex = index < 10 ? `0${index}` : index;
                            return (
                                <Fragment key={index}>
                                    <Button
                                        className="btn-icon-only rounded-circle ms-1"
                                        color={socialMediaButton.color}
                                        href={socialMediaButton.url}
                                        id={`tooltip128${displayIndex}`}
                                        target="_blank"
                                    >
                                        <span className="btn-inner--icon">
                                            <i className={`fa ${socialMediaButton.icon}`} />
                                        </span>
                                    </Button>
                                    <UncontrolledTooltip delay={0} target={`tooltip128${displayIndex}`}>
                                        {socialMediaButton.tooltip}
                                    </UncontrolledTooltip>
                                </Fragment>
                            );
                        })}
                    </Col>
                </Row>
                <hr />
                <Row className=" align-items-center justify-content-md-between pb-5">
                    <Col md="6">
                        <div className="copyright">
                            &copy; {new Date().getFullYear()}{" "}
                            <a href="https://www.paulpemberton.com?ref=footer" target="_blank" rel="noreferrer">Paul Pemberton</a>.
                            Design by <a href="https://www.creative-tim.com" target="_blank" rel="noreferrer"> Creative Tim</a>.
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default SimpleFooter;