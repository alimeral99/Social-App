import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <div className="form-container">
        <h1 className="form-header">Sociall App</h1>

        <p>Ask questions, They will answer your questions</p>
        <form>
          <div className="input-container">
            <label>Username</label>
            <input type="text" />
          </div>

          <div className="input-container">
            <label>Email</label>
            <input type="text" />
          </div>

          <div className="input-container">
            <label>Password</label>
            <input type="text" />
          </div>

          <div className="btn-container">
            <button className="btn-register">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
