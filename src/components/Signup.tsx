import { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface SignupProps {
  handleClose: () => void;
  toggleSignup: () => void;
}

const Signup: React.FC<SignupProps> = ({ handleClose, toggleSignup }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "driver",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({ email: "", password: "" });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Email validation
  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Password validation
  const validatePassword = (password: string) => {
    return /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password); // At least 1 uppercase & 1 symbol
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let emailError = validateEmail(formData.email)
      ? ""
      : "Enter a valid email (e.g., example@gmail.com)";
    let passwordError = validatePassword(formData.password)
      ? ""
      : "Password must have at least 1 uppercase letter and 1 special symbol";

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError && formData.termsAccepted) {
      alert("Signup successful!");
      handleClose(); // Close modal
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
