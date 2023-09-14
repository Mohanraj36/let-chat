import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const Login = () => {
  const [err, serErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      serErr(true);
    }
  };


  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ruby Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" autoComplete="off" />
          <button>Sign in</button>
          {err && <span>Somethig went wrong</span>}
        </form>
        <p>You Don't Have An Account? <Link to="/register"> Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
