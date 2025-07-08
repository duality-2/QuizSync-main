import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import JoinQuiz from '../components/home/JoinQuiz';
import CreateQuiz from '../components/home/CreateQuiz';

const HomePage = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="content-wrapper">
      <Hero />
      <Features />
      <JoinQuiz />
      <CreateQuiz />
    </div>
  );
};

export default HomePage; 