import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import FeedbackForm from './FeedbackForm';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-desc">
        I'm currently looking for internship opportunities in Data Science.
        Feel free to reach out — I'd love to connect!
      </p>

      <div className="contact-links">
        <a href="mailto:hansikadulanjani223@gmail.com" className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>hansikadulanjani223@gmail.com</span>
        </a>
        <a href="tel:+94714735904" className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+94 71 473 5904</span>
        </a>
        <a href="https://www.linkedin.com/in/hansika-wijesinghe/" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn Profile</span>
        </a>
        <a href="https://github.com/HansikaDulanjani" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaGithub className="contact-icon" />
          <span>GitHub Profile</span>
        </a>
      </div>
      <FeedbackForm />
    </section>
  );
}