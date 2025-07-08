import React, { useState } from 'react';

const SignupModal = ({ closeModal, switchModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }
    if (!/[@#$%]/.test(password)) {
      return "Password must contain at least one symbol (@, #, $, %)";
    }
    return "";
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const error = validatePassword(password);
    setPasswordError(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    }
    
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // TODO: Implement signup functionality
    console.log('Signup attempt:', { name, email, password });
    
    // For now, just close the modal
    closeModal();
  };

  return (
    <div className="modal" style={{ display: 'block' }} id="signupModal">
      <div className="modal-content">
        <div className="modal-form-section">
          <button className="close" onClick={closeModal}>&times;</button>
          <div className="modal-header">
            <h2>Create Account</h2>
            <p>Start creating and joining quizzes instantly.</p>
          </div>
          <div className="modal-body">
            <form id="signupForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="signupName">Full Name</label>
                <span className="input-icon">👤</span>
                <input 
                  type="text" 
                  id="signupName" 
                  name="name" 
                  required 
                  placeholder="Enter your full name" 
                />
                <div className="form-feedback" id="nameFeedback"></div>
              </div>
              <div className="form-group">
                <label htmlFor="signupEmail">Email Address</label>
                <span className="input-icon">📧</span>
                <input 
                  type="email" 
                  id="signupEmail" 
                  name="email" 
                  required 
                  placeholder="Enter your email address" 
                />
                <div className="form-feedback" id="emailFeedback"></div>
              </div>
              <div className="form-group">
                <label htmlFor="signupPassword">Password</label>
                <span className="input-icon">🔒</span>
                <input 
                  type={showPassword ? "text" : "password"}
                  id="signupPassword" 
                  name="password" 
                  required 
                  placeholder="Create a strong password" 
                  onChange={handlePasswordChange}
                />
                <button 
                  type="button" 
                  className="password-toggle" 
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
                {passwordError && (
                  <div className="form-feedback error">{passwordError}</div>
                )}
                <div className="password-requirements">
                  <small>Password must have: min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 symbol (@#$%)</small>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="signupConfirmPassword">Confirm Password</label>
                <span className="input-icon">🔒</span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="signupConfirmPassword"
                  name="confirmPassword"
                  required
                  placeholder="Confirm your password"
                />
                <button 
                  type="button" 
                  className="password-toggle" 
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
                <div className="form-feedback" id="confirmFeedback"></div>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" id="termsCheckbox" required />
                  I agree to the
                  <a href="#" style={{ color: '#667eea' }}> Terms of Service</a> and
                  <a href="#" style={{ color: '#667eea' }}> Privacy Policy</a>
                </label>
              </div>
              <button type="submit" className="form-submit">
                <span className="btn-text">Create Account</span>
                <span className="btn-loading" style={{ display: 'none' }}>Creating Account...</span>
              </button>
              <div className="form-switch">
                Already have an account?
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  switchModal();
                }}> Login here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal; 