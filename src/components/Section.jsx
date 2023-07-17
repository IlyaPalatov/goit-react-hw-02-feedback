import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Section;
