import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CreateQuiz = () => {
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="quiz-section create-quiz" id="create-quiz" ref={sectionRef}>
      <div className="quiz-content">
        <div className="quiz-visual">
          <div className="quiz-circle">✏️</div>
        </div>
        <div className="quiz-text">
          <h2>Create Your Own Quiz</h2>
          <p>
            Become a quiz master! Create engaging quizzes with our intuitive
            tools. Add questions, customize themes, and share with your audience.
            Perfect for educators, trainers, and curious minds!
          </p>
          <Link to="/create" className="quiz-btn">
            Start Creating
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CreateQuiz; 