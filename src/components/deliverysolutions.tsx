import { Container, Row, Col, Card, Button } from "react-bootstrap";

function DeliverySolutions({ onBack }: { onBack: () => void }) {
  return (
    <Container className="mt-5 pt-5">
      <Row>
        {/* Challenges Section */}
        <Col md={4}>
          <h4>Challenges to Solve with Roadie</h4>
          <ul className="list-unstyled">
            <li>🚀 Same-Day Delivery</li>
            <li>📦 Big & Bulky Delivery</li>
            <li>🚛 Last Mile Shipping</li>
            <li>🔄 Returns Pick Up</li>
            <li>🛒 Buy Online Deliver From Store</li>
          </ul>
        </Col>

        {/* Products Section */}
        <Col md={4}>
          <h4>Products</h4>
          <ul className="list-unstyled">
            <li>✅ Roadie Same Day®</li>
            <li>✅ RoadieXD® Cross Dock</li>
            <li>✅ RoadieXL®</li>
            <li>✅ Roadie Green®</li>
          </ul>
        </Col>

        {/* Blog/Whitepaper Section */}
        <Col md={4}>
          <h4>Latest Updates</h4>
          <Card className="mb-3">
            <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
            <Card.Body>
              <Card.Title>📢 10 Stats on Same-Day Delivery</Card.Title>
              <Card.Text>
                Learn why same-day delivery is a game changer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
            <Card.Body>
              <Card.Title>📘 Big & Bulky Done Better</Card.Title>
              <Card.Text>
                How businesses are solving large-scale delivery challenges.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Back Button */}
      <Button variant="dark" onClick={onBack} className="mt-4">
        ← Back to Home
      </Button>
    </Container>
  );
}

export default DeliverySolutions;
