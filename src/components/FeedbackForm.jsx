import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { FaStar } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name.trim() || !message.trim() || rating === 0) {
    setStatus('missing');
    return;
  }

  setStatus('sending');
  try {
    await addDoc(collection(db, 'feedback'), {
      name: name.trim(),
      position: position.trim(),
      rating,
      message: message.trim(),
      status: 'pending',
      createdAt: serverTimestamp(),
    });

    // Send email notification
    await emailjs.send(
      'service_ms25fx7',
      'template_1nrmhnd',
      {
        from_name: name.trim(),
        from_position: position.trim() || 'Not specified',
        rating: rating,
        message: message.trim(),
      },
      'MgGxkQ8AryTPH1u-5'
    );

    setStatus('success');
    setName('');
    setPosition('');
    setRating(0);
    setMessage('');
  } catch (err) {
    console.error(err);
    setStatus('error');
  }
};

  return (
    <div className="feedback-form-wrapper">
      <h3 className="feedback-form-title">Leave a Feedback</h3>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name <span className="required">*</span></label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label>Position / Company <span className="optional">(optional)</span></label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="e.g. HR Manager at XYZ"
          />
        </div>

        <div className="form-group">
          <label>Rating <span className="required">*</span></label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`star ${star <= (hoverRating || rating) ? 'star-active' : ''}`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Feedback <span className="required">*</span></label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your feedback..."
            rows={4}
          />
        </div>

        <button type="submit" className="btn-primary feedback-submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Submit Feedback'}
        </button>

        {status === 'missing' && (
          <p className="feedback-status feedback-error">Please fill in name, rating, and feedback.</p>
        )}
        {status === 'success' && (
          <p className="feedback-status feedback-success">Thank you! Your feedback is pending review.</p>
        )}
        {status === 'error' && (
          <p className="feedback-status feedback-error">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}