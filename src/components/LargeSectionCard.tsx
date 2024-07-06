import React from 'react';
import { Container, Card, Row, Col, Button } from 'reactstrap';

interface ILargeSectionCardProps {

}

const LargeSectionCard: React.FC<ILargeSectionCardProps> = (props) => {
    return (
        <section className="section section-lg pt-0">
            <Container>
                <Card className="bg-gradient-warning shadow-lg border-0">
                    <div className="p-5">
                        <Row className="align-items-center">
                            <Col lg="8">
                                <h3 className="text-white">
                                    We made website building easier for you.
                                </h3>
                                <p className="lead text-white mt-3">
                                    I will be the leader of a company that ends up being
                                    worth billions of dollars, because I got the answers. I
                                    understand culture.
                                </p>
                            </Col>
                            <Col className="ms-lg-auto" lg="3">
                                <Button
                                    block
                                    className="btn-white"
                                    color="default"
                                    href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                                    size="lg"
                                >
                                    Download React
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Container>
        </section>
    );
};

export default LargeSectionCard;