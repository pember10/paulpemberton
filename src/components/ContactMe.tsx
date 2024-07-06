import React from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup, InputGroup, InputGroupText, Input, Button } from 'reactstrap';
import classnames from 'classnames';

interface IContactMeProps {

}

const ContactMe: React.FC<IContactMeProps> = (props) => {    
    const [nameFocused, setNameFocused] = React.useState(false);
    const [emailFocused, setEmailFocused] = React.useState(false);

    return (
        <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
                <Row className="justify-content-center mt--300">
                    <Col lg="8">
                        <Card className="bg-gradient-secondary shadow">
                            <CardBody className="p-lg-5">
                                <h4 className="mb-1">Want to work with us?</h4>
                                <p className="mt-0">
                                    Your project is very important to us.
                                </p>
                                <FormGroup
                                    className={classnames("mt-5", {
                                        focused: nameFocused,
                                    })}
                                >
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupText>
                                            <i className="ni ni-user-run" />
                                        </InputGroupText>
                                        <Input
                                            placeholder="Your name"
                                            type="text"
                                            onFocus={(e) =>
                                                setNameFocused(true)
                                            }
                                            onBlur={(e) =>
                                                setNameFocused(false)
                                            }
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup
                                    className={classnames({
                                        focused: emailFocused,
                                    })}
                                >
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                        <Input
                                            placeholder="Email address"
                                            type="email"
                                            onFocus={(e) =>
                                                setEmailFocused(true)
                                            }
                                            onBlur={(e) =>
                                                setEmailFocused(false)
                                            }
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className="mb-4">
                                    <Input
                                        className="form-control-alternative"
                                        cols="80"
                                        name="name"
                                        placeholder="Type a message..."
                                        rows="4"
                                        type="textarea"
                                    />
                                </FormGroup>
                                <div>
                                    <Button
                                        block
                                        className="btn-round"
                                        color="default"
                                        size="lg"
                                        type="button"
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactMe;