import React, { useState, useRef, useEffect } from 'react';

const JoinQuiz = () => {
  const [showModal, setShowModal] = useState(false);
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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quizCode = e.target.quizCode.value;
    
    // TODO: Implement join quiz functionality
    console.log('Joining quiz with code:', quizCode);
    
    // For now, just close the modal
    closeModal();
  };

  return (
    <>
      <section className="quiz-section join-quiz" id="join-quiz" ref={sectionRef}>
        <div className="quiz-content">
          <div className="quiz-text">
            <h2>Join a Quiz</h2>
            <p>
              Ready to test your knowledge? Join a quiz with a simple code and
              compete with friends, classmates, or colleagues in real-time.
              Experience interactive learning like never before!
            </p>
            <button className="quiz-btn" onClick={openModal}>
              Enter Quiz Code
            </button>
          </div>
          <div className="quiz-visual">
            <div className="quiz-circle">🎮</div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal" style={{ display: 'block' }} id="joinQuizModal">
          <div className="modal-content">
            <button className="close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h2>Join a Quiz</h2>
              <p>Enter the 6-digit code provided by your quiz host</p>
            </div>
            <div className="modal-body">
              <form className="join-quiz-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="join-quiz-input"
                  placeholder="Enter Code"
                  name="quizCode"
                  maxLength="6"
                  pattern="[A-Za-z0-9]{6}"
                  title="6-character alphanumeric code"
                  required
                />
                <button type="submit" className="join-quiz-btn">
                  Join Quiz
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinQuiz; 