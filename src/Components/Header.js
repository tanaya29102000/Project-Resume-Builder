import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [showToolsCard, setShowToolsCard] = useState(false);

  const toggleToolsCard = () => {
    setShowToolsCard((prevState) => !prevState);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">
            <img
              src="logo1.png.webp"
              alt="Joblytic Logo"
              className="logo-image"
            />
          </Link>
        </div>
        <div className="nav-links">
          <div className="nav-item">
            <span className="nav-link" onClick={toggleToolsCard}>
              Tools <span className="dropdown-icon">▼</span>
            </span>
            {showToolsCard && (
              <div className="tools-card">
                <div className="tool-item">
                  <img src="resume-icon.png" alt="Resume Builder" />
                  <div>
                    <strong>Resume Builder</strong>
                    <p>Create a resume in 5 minutes. Get the job you want.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="checker-icon.png" alt="Resume Checker" />
                  <div>
                    <strong>Resume Checker</strong>
                    <p>Get your resume checked and scored with one click.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="cv-icon.png" alt="CV Maker" />
                  <div>
                    <strong>CV Maker</strong>
                    <p>Create a CV in 5 minutes. Get the job you want.</p>
                  </div>
                </div>
                <hr />
                <div className="tool-item">
                  <img src="cover-icon.png" alt="Cover Letter Builder" />
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

          <Link to="/resume" className="nav-link">
            Resume
          </Link>
          <span className="dropdown-icon">▼</span>
          <Link to="/cv" className="nav-link">
            CV
          </Link>
          <span className="dropdown-icon">▼</span>
          <Link to="/cover-letter" className="nav-link">
            Cover Letter
          </Link>
          <span className="dropdown-icon">▼</span>
          <Link to="/career" className="nav-link">
            Career Blog
          </Link>
          <span className="dropdown-icon">▼</span>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <span className="dropdown-icon">▼</span>
          <Link to="/login" className="account-button">
            My Account
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
