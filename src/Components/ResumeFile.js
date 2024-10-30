// ResumeBuilder.js
import React from 'react';
import './ResumeFile.css';

const ResumeBuilder = () => {
  return (
    <div className="resume-builder-container">
      <div className="text-section">
        <h1>Try Our Easy-To-Use Resume Builder</h1>
        <p>
          Experience our intuitive resume builder and take a shortcut to your dream career. 
          Discover why thousands of job seekers and HR experts trust us. 
          Create your best resume quickly and easily today.
        </p>
        <button type="button" className="build-btn">Build Your Resume Now</button>
      </div>

      <div className="image-section">
        <img src="Resumebuild.png" alt="Resume Illustration" />
      </div>
    </div>
  );
};

export default ResumeBuilder;
