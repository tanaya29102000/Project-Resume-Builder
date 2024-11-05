import React, { useState } from "react";
import { useEffect } from "react";
import "./Home.css"; // Import the corresponding CSS file
import ResumeFile from "./ResumeFile";
import FAQ from "./FAQ";
import ZetyFile from "./ZetyFile";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleResume = () => {
    navigate('/create-resume');
  };
  const hrDetails = [
    {
      img: "images.jpg",
      info: "Build professional resumes with Zety to stand out in the job market.",
    },
    {
      img: "images (1).jpg",
      info: "Zety’s resume templates are recommended by top HR experts.",
    },
    {
      img: "images.jpg",
      info: "Zety provides personalized career advice to boost your opportunities.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swap every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hrDetails.length);
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [hrDetails.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <header>
        <h1>Professional Resume & Cover Letter Tools</h1>
        <br />
        <p>For Any Job</p>
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

      <ZetyFile></ZetyFile>
      <section>
        <div className="cart-container">
          <h2 className="cart-title">HR Professionals Recommend Zety</h2>

          <div className="hr-images-section">
            <div className="hr-image">
              <img
                src={hrDetails[currentIndex].img}
                alt={`HR Recommendation ${currentIndex + 1}`}
              />
              <p className="image-info">{hrDetails[currentIndex].info}</p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="dots-container">
            {hrDetails.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="free-resources">
          <h2>Boost Your Career With Our Free Resources</h2>
          <p className="resources-intro">
            Need help with your resume or cover letter? Visit our career blog
            with over 1,400 insightful articles. Our expert advice is based on
            first-hand experience, in-depth job market research, and HR
            expertise.
          </p>
          <p className="resources-details">
            Each day, we analyze hiring trends, browse through workforce
            reports, and monitor job market forecasts to make sure you get all
            the information you need to land your dream job.
          </p>
          <p className="media-mention">
            Our work has been featured by reputable media outlets and top
            universities from around the globe. Here are some of our most
            valuable resources:
          </p>

          <ul className="resource-list">
            <li className="resource-item">
              <a href="#resume-tips">Resume Resources</a>
            </li>
            <li className="resource-item">
              <a href="#cover-letters">Cover Letter Resources</a>
            </li>
            <li className="resource-item">
              <a href="#job-search">Career Advice</a>
            </li>
          </ul>
        </div>
      </section>
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
          <br></br>
          <button type="button">Create Your Resume Now</button>
        </div>
        <ResumeFile></ResumeFile>
        <FAQ></FAQ>
        <footer className="footer-container">
          <div className="footer-content">
            <p>
              Zety is a career site fueled by the best career experts and a
              community of millions of readers yearly. We share knowledge, tips,
              and tools to help everyone find their dream job.
            </p>
            <div className="footer-contact">
              <p>
                <strong>Call us:</strong> 800-985-7561
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@zety.com">support@zety.com</a>
              </p>
            </div>
          </div>

          <div className="footer-links">
            <h4>Resume</h4>
            <ul>
              <li>Resume Builder</li>
              <li>Resume Templates</li>
              <li>Resume Examples</li>
              <li>Resume Format</li>
              <li>How to Write a Resume</li>
              <li>Resume Checker</li>
              <li>Resume Help</li>
              <li>Best Resume Templates</li>
            </ul>

            <h4>CV</h4>
            <ul>
              <li>CV Builder</li>
              <li>CV Templates</li>
              <li>CV Examples</li>
              <li>CV Format</li>
              <li>How to Write a CV</li>
              <li>CV Help</li>
            </ul>

            <h4>Cover Letter</h4>
            <ul>
              <li>Cover Letter Builder</li>
              <li>Cover Letter Templates</li>
              <li>Cover Letter Examples</li>
              <li>Cover Letter Format</li>
              <li>How to Write a Cover Letter</li>
              <li>Cover Letter Help</li>
            </ul>

            <h4>Support</h4>
            <ul>
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>Frequently Asked Questions</li>
              <li>Editorial Guidelines</li>
              <li>Media Mentions</li>
              <li>Accessibility</li>
              <li>Affiliates</li>
            </ul>

            <h4>Policies</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies & Tracking Policy</li>
              <li>Do Not Sell or Share My Personal Information</li>
            </ul>

            <h4>Choose Your Region</h4>
            <ul>
              <li>English (IN)</li>
              <li>English (UK)</li>
              <li>English (US)</li>
              <li>Deutsch</li>
              <li>Español</li>
              <li>Français (Canada)</li>
              <li>Français (France)</li>
              <li>Italiano</li>
              <li>Polski</li>
              <li>Português (Brasil)</li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p>© 2024 Works Limited. All Rights Reserved.</p>
            <p>National Career Development Association</p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Home;
