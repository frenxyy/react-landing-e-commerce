import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";

const testimonialPage = () => {
  return (
    <div className="testimonial-page">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold">Testimonial Pelanggan</h1>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              accusantium.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            {testimonial.map((testi) => {
              return (
                <div key={testi.id} className="card-testi shadow rounded">
                  <div className="people">
                    <img src={testi.image} alt="" />
                    <h3 className="pt-3 fw-bold fs-3">{testi.name}</h3>
                    <p className="fw-medium">{testi.skill}</p>
                  </div>
                  <div className="desc">
                    <p className="fw-medium">{testi.desc}</p>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default testimonialPage;
