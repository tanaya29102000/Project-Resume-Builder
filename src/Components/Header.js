
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [showToolsCard, setShowToolsCard] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showCv, setShowCv] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const toggleToolsCard = () => {
    setShowToolsCard((prevState) => !prevState);
  };

  const toggleResumeCard = () => {
    setShowResume((prevState) => !prevState);
  };

  const toggleCvCard = () => {
    setShowCv((prevState) => !prevState);
  };

  const toggleCoverLetterCard = () => {
    setShowLetter((prevState) => !prevState);
  };

  const toggleBlogCard = () => {
    setShowBlog((prevState) => !prevState);
  };

  const toggleAboutCard = () => {
    setShowAbout((prevState) => !prevState);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-left">
        </div>
        <div className="nav-links">
          {/* Tools Dropdown */}
          <div className="nav-item">
            <span className="nav-link" onClick={toggleToolsCard}>
              Tools <span className="dropdown-icon">▼</span>
            </span>
            {showToolsCard && (
              <div className="tools-card">
                <div className="tool-item">
                  <img src="coverletter.png" alt="Resume Builder" />
                  <div>
                    <strong>Resume Builder</strong>
                    <p>Create a resume in 5 minutes. Get the job you want.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="Resume Checker" />
                  <div>
                    <strong>Resume Checker</strong>
                    <p>Get your resume checked and scored with one click.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="CV Maker" />
                  <div>
                    <strong>CV Maker</strong>
                    <p>Create a CV in 5 minutes. Get the job you want.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="Cover Letter Builder" />
                  <div>
                    <strong>Cover Letter Builder</strong>
                    <p>
                      Write a cover letter that convinces employers you're the
                      best.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Resume Dropdown */}
          <div className="nav-item">
            <span className="nav-link" onClick={toggleResumeCard}>
              Resume <span className="dropdown-icon">▼</span>
            </span>
            {showResume && (
              <div className="tools-card">
                <div className="tool-item">
                  <img src="coverletter.png" alt="Resume Builder" />
                  <div>
                    <strong>Resume Builder</strong>
                    <p>Create a resume in 5 minutes. Get the job you want.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="Resume Checker" />
                  <div>
                    <strong>Resume Checker</strong>
                    <p>Get your resume checked and scored with one click.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="CV Maker" />
                  <div>
                    <strong>CV Maker</strong>
                    <p>Create a CV in 5 minutes. Get the job you want.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="Cover Letter Builder" />
                  <div>
                    <strong>Cover Letter Builder</strong>
                    <p>
                      Write a cover letter that convinces employers you're the
                      best.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CV Dropdown */}
          <div className="nav-item">
            <span className="nav-link" onClick={toggleCvCard}>
              CV <span className="dropdown-icon">▼</span>
            </span>
            {showCv && (
              <div className="tools-card">
                <div className="tool-item">
                  <img src="coverletter.png" alt="CV Builder" />
                  <div>
                    <strong>CV Builder</strong>
                    <p>Create a CV in 5 minutes. Get the job you want.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="CV Examples" />
                  <div>
                    <strong>CV Examples</strong>
                    <p>See perfect CV samples that get jobs.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="CV Format" />
                  <div>
                    <strong>CV Format</strong>
                    <p>Pick the right format for your situation.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="How to write a CV" />
                  <div>
                    <strong>How to Write a CV</strong>
                    <p>Learn how to make a CV that gets interviews.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="CV Help" />
                  <div>
                    <strong>CV Help</strong>
                    <p>Improve your CV with help from expert guides.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Cover Letter Dropdown */}
          <div className="nav-item">
            <span className="nav-link" onClick={toggleCoverLetterCard}>
              Cover Letter <span className="dropdown-icon">▼</span>
            </span>
            {showLetter && (
              <div className="tools-card">
                <div className="tool-item">
                  <img src="coverletter.png" alt="Cover Letter Builder" />
                  <div>
                    <strong>Cover Letter Builder</strong>
                    <p>Create a cover letter in 5 minutes. Get the job you want.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="Cover Letter Templates" />
                  <div>
                    <strong>Cover Letter Templates</strong>
                    <p>Find the perfect cover letter template.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="Cover Letter Examples" />
                  <div>
                    <strong>Cover Letter Examples</strong>
                    <p>See perfect cover letter samples that get jobs.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="Cover Letter Format" />
                  <div>
                    <strong>Cover Letter Format</strong>
                    <p>Pick the right format for your situation.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="How to Write a Cover Letter" />
                  <div>
                    <strong>How to Write a Cover Letter</strong>
                    <p>Learn how to make a cover letter that gets interviews.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="Cover Letter Help" />
                  <div>
                    <strong>Cover Letter Help</strong>
                    <p>Boost your chances of having your resume read with our help.</p>
                  </div>
                </div>
                <button type="button"> Create Your Cover Letter Now</button>
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div className="nav-item">
            <span className="nav-link" onClick={toggleBlogCard}>
              Blog <span className="dropdown-icon">▼</span>
            </span>
            {showBlog && (
              <div className="tools-card">
                <div className="tool-item">
                  <img src="coverletter.png" alt="Latest Blog" />
                  <div>
                    <strong>Latest Blog</strong>
                    <p>Check out our latest blog posts on job hunting.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="Blog Categories" />
                  <div>
                    <strong>Blog Categories</strong>
                    <p>Explore various categories for your job search.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="Tips" />
                  <div>
                    <strong>Tips & Advice</strong>
                    <p>Get helpful tips and advice for your job search.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div className="nav-item">
            <span className="nav-link" onClick={toggleAboutCard}>
              About <span className="dropdown-icon">▼</span>
            </span>
            {showAbout && (
              <div className="tools-card">
                <div className="tool-item">
                  <img src="coverletter.png" alt="About Us" />
                  <div>
                    <strong>About Us</strong>
                    <p>Learn more about our mission and team.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="download (1).png" alt="Contact" />
                  <div>
                    <strong>Contact</strong>
                    <p>Get in touch with us for any inquiries.</p>
                  </div>
                </div>
              </div>
            )}
           
          </div>
        </div>
        <Link to="/login" className="account-button">
            My Account
          </Link>
      </nav>
    </header>
  );
};

export default Header;
