// Login.jsx

import { useState } from "react";
import "./Login.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const Login = () => {
  // State variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here using username and password state values
    console.log("Login clicked");
  };
  return (
    <div className="assu">
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form onSubmit={handleSubmit}>
        <h3> Login </h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

       <Link to="/Navbar">
        
        <button type="submit"><a href='/Home'>Log In</a></button>
        </Link> 
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
