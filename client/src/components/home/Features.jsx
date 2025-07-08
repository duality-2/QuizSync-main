import React, { useEffect, useRef } from 'react';

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      featureCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="features section" id="features" ref={sectionRef}>
      <div className="section-container">
        <h2>Why Choose QuizSync?</h2>
        <div className="features-grid">
          <div className="feature-card feature-1">
            <div className="feature-box"></div>
            <div className="feature-icon">⚡</div>
            <h3>Real-time Sync</h3>
            <p>
              Experience seamless real-time synchronization across all devices. Every participant stays perfectly in sync with instant updates and live interactions.
            </p>
          </div>
          <div className="feature-card feature-2">
            <div className="feature-box"></div>
            <div className="feature-icon">🎨</div>
            <h3>Custom Themes</h3>
            <p>
              Create beautiful, personalized quizzes with our extensive theme library, custom colors, and advanced customization options for every occasion.
            </p>
          </div>
          <div className="feature-card feature-3">
            <div className="feature-box"></div>
            <div className="feature-icon">📊</div>
            <h3>Advanced Analytics</h3>
            <p>
              Get detailed insights and performance tracking to help you improve and engage your audience like never before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 