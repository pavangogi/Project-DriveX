import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="hero-section">
      <Container fluid>
        <Row className="align-items-center justify-content-start">
          {/* Left Content */}
          <Col md={5} lg={5} className="hero-content">
            <h5
              className="text-uppercase text-warning"
              onMouseEnter={() => setHovered("h5")}
              onMouseLeave={() => setHovered(null)}
              style={{
                color: hovered === "h5" ? "#ffa500" : "",
                transform: hovered === "h5" ? "scale(1.1)" : "scale(1)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              Your All-in-One Transportation Solution
            </h5>
            <h1
              className="fw-bold"
              onMouseEnter={() => setHovered("h1")}
              onMouseLeave={() => setHovered(null)}
              style={{
                color: hovered === "h1" ? "#007bff" : "",
                transform: hovered === "h1" ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              Seamless ride-sharing, package delivery, and truck services— all
              in one place.
            </h1>
            <p
              onMouseEnter={() => setHovered("p")}
              onMouseLeave={() => setHovered(null)}
              style={{
                color: hovered === "p" ? "#6c757d" : "",
                transform:
                  hovered === "p" ? "translateX(5px)" : "translateX(0)",
                transition: "all 0.3s ease-in-out",
              }}
            >
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
              src="/im4.png"
              alt="Delivery"
              className="hero-image img-fluid"
              style={{ marginTop: "-120px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
