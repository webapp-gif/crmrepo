import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AuthForm.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${form.email}`);
  };

  return (
    <div className="auth-wrapper">
      <h1 className="auth-title">MutalFundsAdda</h1>
      <div className="auth-form-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Login to CRM</h2>
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
          <div className="auth-options">
            <label><input type="checkbox" /> Remember Me</label>
            <span className="forgot-link">Forgot Password?</span>
          </div>
          <button className="auth-button" type="submit">LOG IN</button>
          <div className="auth-link">
            Don’t have an account? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
