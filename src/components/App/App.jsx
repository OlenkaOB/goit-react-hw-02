import { useState, useEffect } from 'react';
import './App.css';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Description from '../Description/Description';
import Notification from '../Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  useEffect(() => {
    const savedFeedback = localStorage.getItem('savedFeedback');
    if (savedFeedback) {
      savedFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  return (
    <>
      <div>
        <Description />
        <Options
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          totalFeedback={totalFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
};

export default App;
