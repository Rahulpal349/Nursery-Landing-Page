import React from 'react';
import './LoginPage.css';
import loginBg from '../assets/login_bg.png';

const LoginPage = () => {
  return (
    <div className="login-page" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h2 className="serif-heading">Welcome Back</h2>
            <p>Enter your details to access your account.</p>
          </div>
          
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            
            <button type="button" className="btn-login">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
