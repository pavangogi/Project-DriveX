import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Login from "./components/Login";
import HeroSection from "./components/HeroSection";
import DeliverySolutions from "./components/deliverysolutions";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  // Apply dark mode to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
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
              <Nav.Link
                href="#"
                className="me-3"
                onClick={() => setCurrentPage("home")}
              >
                Why we
              </Nav.Link>
              <Nav.Link
                href="#"
                className="me-3"
                onClick={() => setCurrentPage("deliverySolutions")}
              >
                Delivery Solutions
              </Nav.Link>
              <Nav.Link href="#" className="me-3">
                Get Started
              </Nav.Link>
              <Nav.Link href="#" className="me-3">
                About Us
              </Nav.Link>
              <Nav.Link href="#" className="me-3">
                Contact Us
              </Nav.Link>
            </Nav>

            {/* Login Button */}
            <Button
              variant="outline-light"
              onClick={() => setShowLogin(true)}
              className="me-2"
            >
              Login
            </Button>

            {/* Dark Mode Toggle */}
            <Button
              variant="outline-secondary"
              onClick={() => setDarkMode(!darkMode)}
            >
              <i
                className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`}
              ></i>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content - Switch Pages */}
      <main className="content">
        {currentPage === "home" ? (
          <HeroSection />
        ) : (
          <DeliverySolutions onBack={() => setCurrentPage("home")} />
        )}
      </main>

      {/* Footer */}
      {currentPage === "home" && (
        <footer className="footer">
          <div className="footer-top text-center">
            <h5>DriveX</h5>
            <p>Your trusted partner for seamless delivery solutions.</p>
          </div>
          <div className="footer-middle text-center">
            <h6>Connect with us</h6>
            <div className="social-icons">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
          <div className="footer-bottom text-center">
            <p>© {new Date().getFullYear()} DriveX. All Rights Reserved.</p>
          </div>
        </footer>
      )}

      {/* Login Modal */}
      <Login show={showLogin} handleClose={() => setShowLogin(false)} />
    </div>
  );
}

export default App;
