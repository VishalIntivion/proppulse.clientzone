import React from "react";
import Trading from "/images/trading-stock.svg";

function Login() {
  return (
    <div>
      <div className="login-page">
        <div className="form-container">
          <div className="login-form">
            <h5>Logo</h5>
            <h4>Welcome Back</h4>
            <p>Please enter your details to sign in</p>
            <form action="">
              <div>Email</div>
              <input type="text" placeholder="" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

{
  /* 
  <div className="">
      <form action="">
          <input type="text" />
      </form>
  </div> 
*/
}
