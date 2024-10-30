import React from 'react';
import "./Zety.css";

function Zety() {
  return (
    <div>
      <section className="zety-info">
        <div className="zety-layout">
          {/* Statistics Section - Left Side */}
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

          {/* Zety Description Section - Right Side */}
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
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <h3 className='title'>How Can We Help You?</h3>

      <section className="services">

  <div className="service-card">
    <img src="resumee.png" alt="Resume Builder" />
    <div className="service-info">
      <h4>Resume Builder</h4>
      <p>
        Zety’s resume builder will save you time and provide expert tips every step of the way. 
        Creating a resume has never been easier.
      </p>
    </div>
  </div>

  <div className="service-card">
    <img src="coverletter.png" alt="Cover Letter Builder" />
    <div className="service-info">
      <h4>Cover Letter Builder</h4>
      <p>
        Smoothly generate a job-winning cover letter with our drag-and-drop interface.
      </p>
    </div>
  </div>

  <div className="service-card">
    <img src="ats.png" alt="ATS-Friendly Templates" />
    <div className="service-info">
      <h4>ATS-Friendly Resume Templates</h4>
      <p>
        Grab recruiters’ attention with one of 18 professional resume templates designed by career experts.
      </p>
    </div>
  </div>

  <div className="service-card">
    <img src="free.png" alt="Career Advice" />
    <div className="service-info">
      <h4>Free Career Advice Resources</h4>
      <p>
        Shape your career with helpful guides and examples. Learn how to create job applications and more.
      </p>
    </div>
  </div>

  <div className="service-card">
    <img src="check.png" alt="Resume Check" />
    <div className="service-info">
      <h4>Resume Check</h4>
      <p>
        Score and check your resume in real-time with actionable tips to improve it.
      </p>
    </div>
  </div>

  <div className="service-card">
    <img src="content.png" alt="Content Suggestions" />
    <div className="service-info">
      <h4>Ready-Made Content Suggestions</h4>
      <p>
        Discover expert-crafted suggestions and create a professional application in minutes.
      </p>
    </div>
  </div>
</section>


    </div>
  );
}

export default Zety;
