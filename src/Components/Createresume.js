import React from 'react';
import './Createresume.css';

const ResumeBuilder = () => {
  return (
    <>
      <div className="resume-builder-containerr">
        {/* Left Side - Text Section */}
        <div className="resume-text">
          <h1>Online Resume Builder: Make Your Resume Fast</h1>
          <p>Free to use. Developed by hiring professionals.</p>
          <p>
            Hassle-free resume maker that can help you land your dream job in any
            industry. Trusted by job seekers and HR experts. Build your resume
            quickly and easily today.
          </p>
          <div>
            <button type='button'>Create Your Resume Now</button>
          </div>
        </div>
        {/* Right Side - Image Section */}
        <div className="resume-image-container">
          <img src="resume2.png" alt="Resume Example" className="resume-image" />
        </div>
      </div>
      <section>
        <div className="resume-steps-row">
          <h2>Create Your Perfect Resume in 4 Easy Steps</h2>

          <div className="steps-container">
            <div className="step">
              <img
                src="imagestep (3).png"
                alt="Template Icon"
                className="step-icon"
              />
              <h3>Step 1: Pick a Template</h3>
              <p>
                Choose from 18 templates crafted by career professionals to help
                you land the interview.
              </p>
            </div>

            <div className="step">
              <img
                src="imagestep (4).png"
                alt="Content Icon"
                className="step-icon"
              />
              <h3>Step 2: Add Expert-Written Content</h3>
              <p>
                With just a few clicks, add tailored, job-specific content
                created by Certified Professional Resume Writers.
              </p>
            </div>

            <div className="step">
              <img
                src="imagestep (5).png"
                alt="Customize Icon"
                className="step-icon"
              />
              <h3>Step 3: Make It Yours</h3>
              <p>
                Adjust the colors, fonts, and layout with our user-friendly
                interface.
              </p>
            </div>

            <div className="step">
              <img
                src="imagestep (1).png"
                alt="Download Icon"
                className="step-icon"
              />
              <h3>Step 4: Download as PDF or DOC</h3>
              <p>
                Download your polished resume in the preferred file format. And
                now you’re ready to apply for your next job.
              </p>
            </div>
          </div>
          <br />
          <button type="button">Create Your Resume Now</button>
        </div>
      </section>
    </>
  );
};

export default ResumeBuilder;
