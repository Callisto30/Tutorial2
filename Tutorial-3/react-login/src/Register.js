import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation checks
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (!/^[A-Za-z]+$/.test(firstName)) {
      setErrorMessage("First Name should only contain letters.");
      return;
    }

    if (!/^[A-Za-z]+$/.test(lastName)) {
      setErrorMessage("Last Name should only contain letters.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password should be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Clear the error message if all validations pass
    setErrorMessage("");

    // Redirect to MyProfile component with entered information
    history.push(`/myprofile?firstName=${firstName}&lastName=${lastName}&email=${email}`);
    onRegister(); // Call the onRegister prop to notify the parent component
  };

  return (
    <section>
      <h1>Register</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
        />

        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;

