import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why is Zety the best website to prepare a job application?",
      answer: `Zety offers a feature-rich resume builder, cover letter generator, 
      CV maker, real-time score checker, and more, ensuring you have a professional application.`,
    },
    {
      question: "How do I use Zety Resume Builder effectively?",
      answer: `Select a template, upload your resume, or start fresh. Add contact details, job history, 
      skills, and education, and use the built-in tips to optimize your resume.`,
    },
    {
      question: "Is Zety really free?",
      answer: `Zety follows a "try before you buy" model with a 14-day free trial. Download options are available in paid plans starting from $1.95.`,
    },
    {
      question: "Is Zety safe to use?",
      answer: `Yes, Zety uses SSL encryption to secure your data and processes information according to privacy policies.`,
    },
    {
      question: "Can I contact Zety easily if I need help?",
      answer: `Yes, Zety offers customer support via email, phone, and a contact form on their website.`,
    },
    {
      question: "Are resumes made with Zety ATS-friendly?",
      answer: `All Zety templates are ATS-compliant, ensuring they are readable by Applicant Tracking Systems.`,
    },
    {
      question: "Should I download my resume in PDF or Word?",
      answer: `PDF is recommended for immediate use to maintain layout, while Word is better for future editing.`,
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions about<br></br>Website and Builder</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">{faq.question}</div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
