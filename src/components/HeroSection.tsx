import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <Container fluid>
        <Row className="align-items-center justify-content-start">
          {/* Left Content */}
          <Col md={5} lg={5} className="hero-content">
            <h5 className="text-uppercase text-warning">
              Your All-in-One Transportation Solution
            </h5>
            <h1 className="fw-bold">
              Seamless ride-sharing, package delivery, and truck services— all
              in one place.
            </h1>
            <p>
              Unlock a hassle-free way to travel, send packages, or move heavy
              goods with our reliable, on-demand transportation network. Whether
              you need a quick ride, same-day package delivery, or a truck for
              larger hauls, we’ve got you covered.
            </p>
            <Button variant="primary" className="mt-3">
              Contact Sales
            </Button>
          </Col>

          {/* Right Image + Stats */}
          <Col md={7} lg={7} className="hero-image-container">
            <img
              src="/im.png"
              alt="Delivery"
              className="hero-image img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
