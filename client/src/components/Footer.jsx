import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>QuizSync</h3>
          <p>
            Transform your learning experience with our innovative quiz
            platform. Join millions of users worldwide in creating and
            participating in engaging, interactive quizzes.
          </p>
          <div className="social-links">
            <a href="#" style={{"--i": 1}}><span>📘</span></a>
            <a href="#" style={{"--i": 2}}><span>🐦</span></a>
            <a href="#" style={{"--i": 3}}><span>📷</span></a>
            <a href="#" style={{"--i": 4}}><span>💼</span></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Features</h3>
          <ul>
            <li><Link to="/#features">Real-time Sync</Link></li>
            <li><Link to="/#features">Custom Themes</Link></li>
            <li><Link to="/#features">Advanced Analytics</Link></li>
            <li><Link to="/#features">Multi-device Support</Link></li>
            <li><Link to="/#features">Live Collaboration</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/#join-quiz">Join Quiz</Link></li>
            <li><Link to="/#create-quiz">Create Quiz</Link></li>
            <li><Link to="/#features">Features</Link></li>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/api-docs">API Documentation</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <span>📍</span>
            <span><strong>Address 1:</strong> Vivekanand Institute of Technology,
            Chembur Colony, Chembur (W), Mumbai</span>
          </div>
          <div className="contact-info">
            <span>📍</span>
            <span><strong>Address 2:</strong> GODJN Solutions Pvt Ltd, Pune</span>
          </div>
          <div className="contact-info">
            <span>📧</span>
            <span>support@quizsync.com</span>
          </div>
          <div className="contact-info">
            <span>📞</span>
            <span>+91 8425997049</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>Team Members</h3>
          <div className="contact-info">
            <span>👨‍💻</span>
            <span>d2024atharva.chaudhari@ves.ac.in</span>
          </div>
          <div className="contact-info">
            <span>👩‍💻</span>
            <span>2023.aarya.thorat@ves.ac.in</span>
          </div>
          <div className="contact-info">
            <span>👨‍💻</span>
            <span>2023.yash.bhurke@ves.ac.in</span>
          </div>
          <div className="contact-info">
            <span>👨‍💻</span>
            <span>2023.manas.r.patil@ves.ac.in</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} QuizSync. All rights reserved. | Privacy Policy | Terms of Service
        </p>
      </div>
    </footer>
  );
};

export default Footer; 