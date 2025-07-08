import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import profileLogo from '../assets/images/profile-logo.jpg';
import LoginModal from './modals/LoginModal';
import SignupModal from './modals/SignupModal';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const openModal = (modalType) => {
    if (modalType === 'login') setShowLoginModal(true);
    else if (modalType === 'signup') setShowSignupModal(true);
  };

  const closeModal = (modalType) => {
    if (modalType === 'login') setShowLoginModal(false);
    else if (modalType === 'signup') setShowSignupModal(false);
  };

  const switchModal = (fromModal, toModal) => {
    closeModal(fromModal);
    openModal(toModal);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="QuizSync Logo" />
          <span className="logo-text hero-title-animated">QuizSync</span>
        </div>
        <div className="nav-links-group">
          <div className="nav-links">
            <a href="#join-quiz" onClick={(e) => {
              e.preventDefault();
              scrollToSection('join-quiz');
            }}>Join Quiz</a>
            <a href="#create-quiz" onClick={(e) => {
              e.preventDefault();
              scrollToSection('create-quiz');
            }}>Create Quiz</a>
            <div className="auth-buttons">
              <a href="#" className="btn-login" onClick={(e) => {
                e.preventDefault();
                openModal('login');
              }}>Login</a>
              <a href="#" className="btn-signup" onClick={(e) => {
                e.preventDefault();
                openModal('signup');
              }}>Sign Up</a>
            </div>
          </div>
          <button className="profile-btn" title="Profile">
            <img src={profileLogo} alt="Profile" />
          </button>
        </div>
      </nav>

      {showLoginModal && (
        <LoginModal 
          closeModal={() => closeModal('login')} 
          switchModal={() => switchModal('login', 'signup')} 
        />
      )}
      
      {showSignupModal && (
        <SignupModal 
          closeModal={() => closeModal('signup')} 
          switchModal={() => switchModal('signup', 'login')} 
        />
      )}
    </header>
  );
};

export default Navbar; 