import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./App.css"; // Ensure this is imported

function App() {
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
                About Us
              </Nav.Link>
              <Nav.Link href="#contact" className="me-3">
                Contact Us
              </Nav.Link>
            </Nav>
            <Button variant="outline-light">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to DriveX</h1>
        <p>Drive Anything, Deliver Everything.</p>
      </div>
    </div>
  );
}

export default App;
