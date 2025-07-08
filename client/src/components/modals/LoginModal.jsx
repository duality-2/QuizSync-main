import React, { useState } from 'react';

const LoginModal = ({ closeModal, switchModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    // TODO: Implement login functionality
    console.log('Login attempt:', { email, password });
    
    // For now, just close the modal
    closeModal();
  };

  return (
    <div className="modal" style={{ display: 'block' }} id="loginModal">
      <div className="modal-content">
        <div className="modal-illustration">
          <span>🔐</span>
          <div>Welcome Back!</div>
        </div>
        <div className="modal-form-section">
          <button className="close" onClick={closeModal}>&times;</button>
          <div className="modal-header">
            <h2>Login to QuizSync</h2>
            <p>Access your quizzes and results.</p>
          </div>
          <div className="modal-body">
            <form id="loginForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="loginEmail">Email Address</label>
                <span className="input-icon">📧</span>
                <input 
                  type="email" 
                  id="loginEmail" 
                  name="email" 
                  required 
                  placeholder="Enter your email" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <span className="input-icon">🔒</span>
                <input 
                  type={showPassword ? "text" : "password"}
                  id="loginPassword" 
                  name="password" 
                  required 
                  placeholder="Enter your password" 
                />
                <button 
                  type="button" 
                  className="password-toggle" 
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
              <button type="submit" className="form-submit">Login</button>
              <div className="form-switch">
                Don't have an account?
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  switchModal();
                }}>Sign up here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 