import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import loginBg from '../assets/login_bg.png';

const LoginPage = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userid === 'admin' && password === '123456') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      setError('Invalid User ID or Password. For demo use admin / 123456');
    }
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h2 className="serif-heading">Welcome Back</h2>
            <p>Enter your details to access your account.</p>
          </div>
          
          <form className="login-form" onSubmit={handleLogin}>
            {error && <div style={{ color: '#ff6b6b', fontSize: '13px', backgroundColor: 'rgba(255, 107, 107, 0.1)', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>{error}</div>}
            
            <div className="form-group">
              <label htmlFor="userid">User ID</label>
              <input 
                type="text" 
                id="userid" 
                placeholder="Enter your User ID" 
                value={userid}
                onChange={(e) => setUserid(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            
            <button type="submit" className="btn-login">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
