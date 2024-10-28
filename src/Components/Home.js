import React from "react";
import "./Home.css"; // Import the corresponding CSS file

const Home = () => {
  const handleResume = () => {
    alert("Resume Builder Clicked!"); // For example purposes, show an alert
  };

  return (
    <div>
      <header>
        <h1>Professional Resume & Cover Letter Tools</h1>
        <br />
        <p>For Any Job</p>
        <br />
        <p>
          Create a job-winning resume in minutes with our easy-to-use builder.
        </p>
        <button type="button" onClick={handleResume}>
          Try Our Resume Builder
        </button>
      </header>

      <section className="features-section">
        <div className="feature-card">
          <h2>
            <img src="tools.png" alt="Cutting Edge Career Tools" /> Cutting Edge
            Career Tools
          </h2>
          <p>
            Build a matching resume and cover letter with step-by-step guidance
            and expert tips.
          </p>
        </div>

        <div className="feature-card">
          <h2>
            <img src="light.png" alt="Extensive Experience" /> Extensive
            Experience
          </h2>
          <p>Use our vast industry expertise to land your dream job faster.</p>
        </div>

        <div className="feature-card">
          <h2>
            <img src="search.png" alt="Expert-Crafted Guides and Examples" />{" "}
            Expert-Crafted Guides and Examples
          </h2>
          <p>
            Grow your career with our expert blog cited by universities and top
            media outlets.
          </p>
        </div>
      </section>

      {/* Large Image Section */}
      <section>
        <div>
          <img
            src="image1.png"
            alt="Large representation"
            className="large-image"
          />
        </div>
      </section>

      {/* Zety Information Section */}
      <section className="zety-info">
        <div className="zety-layout">
          {/* Statistics Section */}
          <div className="statistics">
            <div className="statistic">
              <h3>41M+</h3>
              <p>Job applications created</p>
            </div>
            <div className="statistic">
              <h3>1400+</h3>
              <p>Free career guides</p>
            </div>
            <div className="statistic">
              <h3>40M+</h3>
              <p>Readers a year</p>
            </div>
            <div className="statistic">
              <h3>30+</h3>
              <p>Career Experts</p>
            </div>
            <div className="statistic">
              <h3>10+</h3>
              <p>Years in business</p>
            </div>
            <div className="statistic">
              <h3>1000+</h3>
              <p>Mentions by universities and media</p>
            </div>
          </div>

          {/* Zety Description Section */}
          <div className="zety-description">
            <h2>What is Jobltic?</h2>
            <p>
              Jobltic is an all-in-one career platform powered by some of the
              best career experts and a community of 40 million readers a year.
            </p>
            <p>
              We offer you the best online resume and cover letter builder, as
              well as free professional advice from career experts. We know how
              stressful the job search can be. That’s why we want to make it as
              easy and smooth as possible.
            </p>
            <p>
              We’ll not only help you build your resume but also teach you how
              to ace a job interview, negotiate your salary, and more. You can
              trust us on your professional journey.
            </p>
            <h3>How Can We Help You?</h3>
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="services">
        <div className="service-card">
          <h4>Resume Builder</h4>
          <p>
            Zety’s resume builder will save you time and provide expert tips
            every step of the way. Creating a resume has never been easier.
          </p>
        </div>
        <div className="service-card">
          <h4>Cover Letter Builder</h4>
          <p>
            Smoothly generate a job-winning cover letter with our drag-and-drop
            interface.
          </p>
        </div>
        <div className="service-card">
          <h4>ATS-Friendly Resume Templates</h4>
          <p>
            Grab recruiters’ attention with one of 18 professional resume
            templates designed by career experts.
          </p>
        </div>
        <div className="service-card">
          <h4>Free Career Advice Resources</h4>
          <p>
            Consciously shape your career with helpful guides and resume
            examples. Writing the perfect job application? Asking for a raise?
            Learn it all (and more) on our blog.
          </p>
        </div>
        <div className="service-card">
          <h4>Resume Check</h4>
          <p>
            Score and check your resume in real-time with our resume checker.
            Get actionable tips to improve your resume.
          </p>
        </div>
        <div className="service-card">
          <h4>Ready-Made Content Suggestions</h4>
          <p>
            Discover expert-crafted content suggestions and create a
            professional job application in minutes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
