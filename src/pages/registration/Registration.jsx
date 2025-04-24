import React, { useState } from "react";
import LanguageDropdown from "../login/Language";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { validateRegistrationForm } from "../../utils/validationUtils";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [currency, setCurrency] = useState("USD");
  const [promoCode, setPromoCode] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validate = () => {
    const newErrors = validateRegistrationForm(formData);
    if (!agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/home");
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
                  <h4>Create an Account</h4>
                  <p>A few clicks away from creating your real account</p>
                </div>
                <form onSubmit={handleSubmit} noValidate>
                  {/* Full Name */}
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className={`form-control ${
                        errors.fullName ? "is-invalid" : ""
                      }`}
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback">{errors.fullName}</div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>

                  {/* Date of Birth */}
                  <div className="mb-3">
                    <label htmlFor="dob" className="form-label">
                      Date Of Birth <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      name="dob"
                      className="form-control"
                      id="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      placeholder="Date of Birth"
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                      />
                      <span
                        className="input-group-text"
                        onClick={togglePassword}
                        style={{}}
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
                  </div>

                  {/* Currency */}
                  <div className="mb-3">
                    <label className="form-label text-white">Currency</label>
                    <div className="d-xxl-flex">
                      <div className="d-flex mb-3">
                        <input
                          type="radio"
                          className="btn-check m-1"
                          name="currency"
                          id="usd"
                          value="USD"
                          checked={currency === "USD"}
                          onChange={(e) => setCurrency(e.target.value)}
                        />
                        <label
                          className="radio-btn btn btn-outline-primary"
                          htmlFor="usd"
                        >
                          USD
                        </label>
                        <input
                          type="radio"
                          className="btn-check "
                          name="currency"
                          id="eur"
                          value="EUR"
                          checked={currency === "EUR"}
                          onChange={(e) => setCurrency(e.target.value)}
                        />
                        <label
                          className="radio-btn btn btn-outline-primary"
                          htmlFor="eur"
                        >
                          EUR
                        </label>
                      </div>
                      <div className="w-100">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Promocode"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className={`form-check-input p-1 ${
                          errors.agreeTerms ? "is-invalid" : ""
                        }`}
                        type="checkbox"
                        id="terms"
                        checked={agreeTerms}
                        onChange={() => setAgreeTerms(!agreeTerms)}
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="terms"
                      >
                        By register you agree to our terms & conditions and
                        privacy notice.
                      </label>
                      {errors.agreeTerms && (
                        <div className="invalid-feedback d-block">
                          {errors.agreeTerms}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="sign-in-btn mb-4">
                    <button type="submit" className="btn btn-primary w-100">
                      Create Account
                    </button>
                  </div>

                  <div className="d-flex align-items-center justify-content-center mb-4">
                    <hr className="w-25" />
                    <div className="px-2">OR</div>
                    <hr className="w-25" />
                  </div>

                  <div className="mb-4 text-center">
                    Already have an account?
                    <Link to="/" className="text-white ms-1">
                      Sign In
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

export default Registration;
