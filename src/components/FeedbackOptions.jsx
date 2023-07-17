import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback-options">
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className="feedback-button"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
