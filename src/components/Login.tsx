import { useState, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import Signup from "./Signup"; // Import Signup component

interface LoginProps {
  show: boolean;
  handleClose: () => void;
}

const Login: React.FC<LoginProps> = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [showSignup, setShowSignup] = useState(false);

  // Reset when modal opens
  useEffect(() => {
    if (show) {
      setShowSignup(false);
      setMessage(null); // Clear message
    }
  }, [show]);

  // Toggle Signup/Login
  const toggleSignup = () => setShowSignup((prev) => !prev);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setMessage("✅ Login Successful!");
        setTimeout(() => {
          handleClose();
          setMessage(null);
        }, 2000);
      } else {
        setMessage("❌ Invalid email or password.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setMessage("❌ Error logging in. Please try again.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{showSignup ? "Sign Up" : "Login"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message && (
          <Alert variant={message.includes("✅") ? "success" : "danger"}>
            {message}
          </Alert>
        )}

        {showSignup ? (
          <Signup handleClose={handleClose} toggleSignup={toggleSignup} />
        ) : (
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
        {!showSignup && (
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
