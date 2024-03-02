import React from "react";

import { faq } from "../data/index";

import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComponents = () => {
    return (
        <div className="faqComponents">
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-bold text-center">Pertanyaan Penting</h1>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                            nihil.
                        </p>
                    </Col>
                </Row>
                <Row>
                    {faq.map((faq) => {
                        return (
                            <Col>
                                <Accordion defaultActiveKey="0" className="shadow-sm">
                                    <Accordion.Item eventKey={faq.id}>
                                        <Accordion.Header>{faq.ask}</Accordion.Header>
                                        <Accordion.Body>{faq.qustion}</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default FaqComponents;
