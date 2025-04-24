import React, { useState } from "react";
import LanguageDropdown from "./Language";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { validateLoginForm } from "../../utils/validationUtils";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validate = () => {
    const formData = { email, password };
    const newErrors = validateLoginForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/home");
      console.log("Form submitted with:", { email, password });
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 offset-lg-7">
            <div className="login-form">
              <div className="d-flex align-items-end justify-content-end p-0 m-0">
                <LanguageDropdown />
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <img src="images/logo.svg" alt="Logo" />
              </div>
              <div className="form-fields">
                <div className="form-top text-center">
                  <h4>Welcome Back</h4>
                  <p>Please enter your details to sign in</p>
                </div>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="email-field" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="email-field"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-2">
                    <label htmlFor="password" className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className="input-group-text"
                        id="eye-pswd"
                        onClick={togglePassword}
                        style={{ cursor: "pointer" }}
                      >
                        {!showPassword ? (
                          <IoEyeOff size={12} color="#BCBEC0" />
                        ) : (
                          <IoEye size={12} color="#BCBEC0" />
                        )}
                      </span>
                    </div>
                    {errors.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}

                    <div className="text-end py-3">
                      <Link
                        to="/forgot-password"
                        className="text-white text-decoration-none"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>

                  <div className="sign-in-btn mb-4">
                    <button type="submit" className="btn btn-primary w-100">
                      Sign in
                    </button>
                  </div>

                  <div className="d-flex align-items-center justify-content-center mb-4">
                    <hr className="w-25" />
                    <div className="px-2">OR</div>
                    <hr className="w-25" />
                  </div>

                  <div className="common-btn mb-4">
                    <button
                      type="button"
                      className="btn btn-outline-primary text-center w-100 position-relative"
                    >
                      <img
                        className="position-absolute start-0 ms-3"
                        src="images/google.svg"
                        alt="google"
                        width="20"
                        height="20"
                        style={{ top: "50%", transform: "translateY(-50%)" }}
                      />
                      <span className="w-100">Sign in</span>
                    </button>
                  </div>

                  <div className="mb-4 text-center">
                    Don't have an account yet?
                    <Link to="/SignUp" className="text-white ms-1">
                      Sign Up
                    </Link>
                  </div>

                  <div className="common-btn mb-4">
                    <Link className="btn btn-outline-primary w-100">
                      Try Demo
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
