import React from "react";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="card">
        <h2 className="title">Sign in with email</h2>

        <div className="inputBox">
          <img src="/mail.png" alt="mail" className="imgIcon left" />
          <input
            type="email"
            placeholder="Enter Email"
            className="input"
          />
        </div>

        <div className="inputBox">
          <img src="/lock.png" alt="lock" className="imgIcon left" />
          <input
            type="password"
            placeholder="Enter Password"
            className="input"
          />
          <img src="/eye.png" alt="eye" className="imgIcon right" />
        </div>

        <div className="forgot">Forgot password?</div>

        <button className="btn">Get Started</button>
      </div>
    </div>
  );
}

export default App;
