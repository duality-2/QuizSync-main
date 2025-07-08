import React from 'react';

const Hero = () => {
  const scrollToFeatures = (e) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="floating-elements">
        <div className="floating-quiz">🧠</div>
        <div className="floating-quiz">📝</div>
        <div className="floating-quiz">🎯</div>
      </div>

      <div className="hero-content">
        <div className="hero-title-main">QuizSync</div>
        <div className="hero-motivation animated-motivation">
          Empower Your Curiosity. Ignite Your Potential.
        </div>
        <div className="hero-goal animated-goal">
          Our goal: To make learning fun, interactive, and accessible for everyone—anywhere, anytime. Join a vibrant community, challenge yourself, and grow with every quiz!
        </div>
        <p className="hero-subtitle">
          The Ultimate Interactive Quiz Platform for Modern Learning
        </p>
        <a href="#features" className="cta-button" onClick={scrollToFeatures}>Explore Features</a>
      </div>
    </section>
  );
};

export default Hero; 