import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Signup from "./Signup"; // Import Signup component

interface LoginProps {
  show: boolean;
  handleClose: () => void;
}

const Login: React.FC<LoginProps> = ({ show, handleClose }) => {
  const [showSignup, setShowSignup] = useState(false);

  // Reset to Login when the modal opens
  useEffect(() => {
    if (show) {
      setShowSignup(false);
    }
  }, [show]);

  // Toggle between Login & Signup
  const toggleSignup = () => setShowSignup((prev) => !prev);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{showSignup ? "Sign Up" : "Login"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showSignup ? (
          // Show Signup Form
          <Signup handleClose={handleClose} toggleSignup={toggleSignup} />
        ) : (
          // Show Login Form
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        {!showSignup && ( // Only show this if NOT in Signup mode
          <p className="text-center">
            Don't have an account?{" "}
            <Button variant="link" onClick={toggleSignup}>
              Sign Up
            </Button>
          </p>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
