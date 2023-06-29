import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import cvpdf from '../download/Lucas_cv.pdf';
import { routesVariants } from '../animations/animations';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

export default function Contact() {
  const downloadTxtFile = () => {
    const link = document.createElement('a');
    link.download = 'curriculum.pdf';
    link.href = cvpdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      className="contact-page"
      variants={routesVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="contact">
        <div className="contact-title">
          <h2>Let&apos;s chat.</h2>
          <h2>Tell me about your projects.</h2>
          <p>Let&apos; create something together 🤟</p>
        </div>

        <div className="wrapper">
          <div className="email-box">
            <div className="box">
              <MdOutlineMailOutline />
            </div>
            <div>
              <p>Mail me at</p>
              <a href="mailto:lucasff15@hotmail.com">lucasff15@hotmail.com</a>
            </div>
          </div>
          <div>
            <button
              className="btn cvBtn"
              id="downloadBtn"
              value="Download"
              onClick={downloadTxtFile}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className="contact__form">
        <h3>Send me a message 🚀</h3>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Full name"
          />

          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            placeholder="Email address"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          />

          <button className="btn" type="submit">
            Send message
          </button>
        </form>
      </div>
    </motion.div>
  );
}
