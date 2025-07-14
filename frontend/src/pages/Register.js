import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AuthForm.css";

function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered:\nUsername: ${form.username}\nEmail: ${form.email}`);
  };

  return (
    <div className="auth-wrapper">
      <h1 className="auth-title">MutalFundsAdda</h1>
      <div className="auth-form-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Register Account</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="auth-input"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="auth-input"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="auth-input"
            onChange={handleChange}
            required
          />
          <button className="auth-button" type="submit">REGISTER</button>
          <div className="auth-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
