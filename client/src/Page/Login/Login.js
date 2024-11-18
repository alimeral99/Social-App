import React, { useState, useEffect } from "react";
import "../Register/Register.css";

import { reset } from "../../Features/User/UserSlice";
import { loginUser } from "../../Features/User/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
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

    if (currentUser && isSuccess) {
      navigate("/home");
    }

    dispatch(reset());
  }, [currentUser, isSuccess, isError, navigate, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(loginUser(userData));
  };

  return (
    <div className="register">
      <div className="form-container">
        <h1 className="form-header">Sociall App</h1>

        <p>Ask questions, They will answer your questions</p>
        <form onSubmit={handleLogin}>
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
            <button className="btn-register">Login</button>
          </div>
          <ToastContainer
            position={window.innerWidth < 728 ? "bottom-center" : "top-center"}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
