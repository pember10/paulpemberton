import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export interface IToolstackProps {
    tools: IToolProps[];
}

export interface IToolProps {
    icon: string;
    name: string;
    description: string;
    url: string;
}

const Toolstack: React.FC<IToolstackProps> = (props) => {

    const splitTools = (tools: IToolProps[]): IToolProps[][] => {
        const result: IToolProps[][] = [];
        const chunkSize = 4;

        for (let i = 0; i < tools.length; i += chunkSize) {
            const chunk = tools.slice(i, i + chunkSize);
            result.push(chunk);
        }

        return result;
    };

    return (
        <section className="section section-lg">
            <Container>
                <Row className="justify-content-center text-center mb-lg">
                    <Col lg="8">
                        <h2 className="display-3">My Tools</h2>
                        <p className="lead text-muted">
                            Since I dabble in a little bit of everything, I have a wide variety of tools that
                            I use. Here is just a sample of what I use professionally and in hobby projects.
                        </p>
                    </Col>
                </Row>
                {splitTools(props.tools).map((chunk, index) => {
                    return (
                        <Row className='mb-5' key={index}>
                            {chunk.map((tool, index) => {
                                return (
                                    <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                        <div className="px-4">
                                            <img
                                                alt={tool.name}
                                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                                src={tool.icon}
                                                style={{ width: "200px", height: "200px" }}
                                            />
                                            <div className="pt-4 text-center">
                                                <h5 className="title">
                                                    <span className="d-block mb-1">{tool.name}</span>
                                                    <small className="h6 text-muted">{tool.description}</small>
                                                </h5>
                                                <div className="mt-3">
                                                    <Button
                                                        className="btn-icon mb-3 mb-sm-0"
                                                        color="success"
                                                        href={tool.url}
                                                        onClick={(e) => { e.preventDefault(); window.open(tool.url, "_blank"); }}
                                                    >
                                                        <span className="btn-inner--text">Take me there</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    );
                })}
            </Container>
        </section>
    );
};

export default Toolstack;