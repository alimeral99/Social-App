import React, { useState, useEffect } from "react";
import "./Register.css";

import { reset } from "../../Features/User/UserSlice";
import { registerUser } from "../../Features/User/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isSuccess, currentUser, isError, message } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (currentUser || isSuccess) {
      navigate("/login");
    }

    dispatch(reset());
  }, [currentUser, isSuccess, isError, navigate, dispatch]);

  const handleRegister = (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
    };

    dispatch(registerUser(userData));
  };

  return (
    <div className="register">
      <div className="form-container">
        <h1 className="form-header">Sociall App</h1>

        <p>Ask questions, They will answer your questions</p>
        <form onSubmit={handleRegister}>
          <div className="input-container">
            <label>Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
            />
          </div>
          <div className="btn-container">
            <button className="btn-register">Register</button>
          </div>
          <ToastContainer
            position={window.innerWidth < 728 ? "bottom-center" : "top-center"}
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
