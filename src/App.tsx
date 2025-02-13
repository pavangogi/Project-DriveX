import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Login from "./components/login";
import HeroSection from "./components/HeroSection"; // Import the new hero section
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {/* Header Section */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="p-2">
        <Container>
          <Navbar.Brand href="#">DriveX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#about" className="me-3">
                Why we
              </Nav.Link>
              <Nav.Link href="#contact" className="me-3">
                Delivery Solutions
              </Nav.Link>
              <Nav.Link href="#why-we" className="me-3">
                Get Started
              </Nav.Link>
              <Nav.Link href="#delivery-solution" className="me-3">
                About Us
              </Nav.Link>
              <Nav.Link href="#get-started" className="me-3">
                Contact Us
              </Nav.Link>
            </Nav>
            <Button variant="outline-light" onClick={() => setShowLogin(true)}>
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <HeroSection />

      {/* Modals */}
      <Login show={showLogin} handleClose={() => setShowLogin(false)} />
    </div>
  );
}

export default App;
