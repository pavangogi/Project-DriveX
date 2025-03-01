import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

interface SignupProps {
  handleClose: () => void;
  toggleSignup: () => void;
}

const Signup: React.FC<SignupProps> = ({ toggleSignup }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "driver",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({ email: "", password: "" });
  const [serverResponse, setServerResponse] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password: string) =>
    /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let emailError = validateEmail(formData.email)
      ? ""
      : "Invalid email format";
    let passwordError = validatePassword(formData.password)
      ? ""
      : "Password must have at least 1 uppercase letter and 1 special symbol";

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError && formData.termsAccepted) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/signup",
          formData,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        setServerResponse(response.data);
        alert(response.data); // Display success message
        toggleSignup(); // Close modal
      } catch (error) {
        setServerResponse("Signup failed! Please try again.");
        console.error("Signup Error:", error);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          isInvalid={!!errors.password}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Role</Form.Label>
        <div>
          <Form.Check
            inline
            label="Driver"
            type="radio"
            name="role"
            value="driver"
            checked={formData.role === "driver"}
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="Traveller"
            type="radio"
            name="role"
            value="traveller"
            checked={formData.role === "traveller"}
            onChange={handleChange}
          />
        </div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>

      {serverResponse && <p className="text-center mt-3">{serverResponse}</p>}

      <p className="text-center mt-3">
        Already have an account?{" "}
        <Button variant="link" onClick={toggleSignup}>
          Login
        </Button>
      </p>
    </Form>
  );
};

export default Signup;
