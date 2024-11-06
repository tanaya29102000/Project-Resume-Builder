import React from "react";
import "./Footer.css";

const Footer =()=> {
  return (
      <div className="footer-container">
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
      </div>
  );
}

export default Footer;
