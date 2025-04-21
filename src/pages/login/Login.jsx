import React from "react";
import LanguageDropdown from "./Language";

function Login() {
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
                <form action="">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email-field"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="password-field"
                      aria-describedby="passwordHelp"
                    />
                    <div className="forgot-password text-end p-2">
                      Forgot Password?
                    </div>
                  </div>
                  <div className="sign-in-btn mb-3">
                    <button className="btn btn-primary w-100">Sign in</button>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    OR
                  </div>
                  <div className="google-sign-btn mb-3">
                    <button className="d-flex justify-content-space btn btn-outline-primary w-100">
                      <img src="images/google.svg" alt="google" />
                      <span className="ps-5">Sign in</span>
                    </button>
                  </div>
                  <div className="mb-3">
                    Don't have an account yet ? Sign up
                  </div>
                  <div className="demo-btn mb-3">
                    <button className="btn btn-outline-primary w-100">
                      Try Demo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
