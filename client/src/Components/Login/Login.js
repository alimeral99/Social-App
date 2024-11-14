import React from "react";
import "../Register/Register.css";

function Login() {
  return (
    <div className="register">
      <div className="form-container">
        <h1 className="form-header">Sociall App</h1>

        <p>Ask questions, They will answer your questions</p>
        <form>
          <div className="input-container">
            <label>Email</label>
            <input type="text" />
          </div>

          <div className="input-container">
            <label>Password</label>
            <input type="text" />
          </div>

          <div className="btn-container">
            <button className="btn-register">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
