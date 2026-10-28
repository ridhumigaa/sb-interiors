import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react";
import "./Register.css";
export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "Residential Client",
    terms: false,
  });
  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  }
  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    if (form.password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }
    if (!form.terms) {
      setError("Please accept the terms to continue.");
      return;
    }
    // Demo only: no account is created or stored.
    // Connect this form to a secure backend before publishing registration.
    setError(
      "Your form is valid. Account creation will be enabled when the registration backend is connected."
    );
  }
  return (
    <main className="register-page">
      <section className="register-visual">
        <Link to="/" className="register-back">
          <ArrowLeft size={16} /> Back to home
        </Link>
        <img
          src="/sb-logo.jpeg"
          alt="SB Interiors"
          className="register-logo"
        />
        <div className="register-visual-copy">
          <span>YOUR SPACE. YOUR STORY.</span>
          <h1>Where beautiful<br />spaces begin.</h1>
          <p>
            Create an account to begin your journey
            towards a thoughtfully designed space.
          </p>
        </div>
        <span className="register-visual-footer">
          SB INTERIORS · THOUGHTFUL DESIGN
        </span>
      </section>
      <section className="register-form-section">
        <div className="register-form-wrap">
          <span className="register-kicker">WELCOME TO SB INTERIORS</span>
          <h2>Create your account.</h2>
          <p className="register-description">
            Tell us a little about yourself and let's
            bring your vision to life.
          </p>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="register-field">
              <label htmlFor="name">FULL NAME</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                value={form.name}
                onChange={updateField}
                required
              />
            </div>
            <div className="register-field">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={form.email}
                onChange={updateField}
                required
              />
            </div>
            <div className="register-field">
              <label htmlFor="phone">PHONE NUMBER</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                autoComplete="tel"
                value={form.phone}
                onChange={updateField}
                required
              />
            </div>
            <div className="register-field">
              <label htmlFor="accountType">I AM INTERESTED IN</label>
              <select
                id="accountType"
                name="accountType"
                value={form.accountType}
                onChange={updateField}
              >
                <option>Residential Client</option>
                <option>Commercial Client</option>
                <option>Business Partner</option>
              </select>
            </div>
            <div className="register-field">
              <label htmlFor="password">PASSWORD</label>
              <div className="password-input-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 8 characters"
                  autoComplete="new-password"
                  minLength={8}
                  value={form.password}
                  onChange={updateField}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>
            <div className="register-field">
              <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                autoComplete="new-password"
                value={form.confirmPassword}
                onChange={updateField}
                required
              />
            </div>
            <label className="register-terms">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={updateField}
              />
              <span>
                I agree to the terms of service and privacy policy.
              </span>
            </label>
            {error && (
              <p
                className="register-message"
                role="status"
              >
                {error}
              </p>
            )}
            <button type="submit" className="register-submit">
              CREATE ACCOUNT <ArrowRight size={17} />
            </button>
          </form>
          <p className="register-login">
            Already have an account?{" "}
            <Link to="/login">Sign in</Link>
          </p>
          <p className="register-footnote">
            YOUR JOURNEY TO BETTER SPACES STARTS HERE.
          </p>
        </div>
      </section>
    </main>
  );
}
