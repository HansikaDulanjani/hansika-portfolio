import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'feedback'),
      where('status', '==', 'approved'),
      orderBy('createdAt', 'desc')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTestimonials(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsubscribe();
  }, []);

  if (testimonials.length === 0) return null; // hide section if nothing approved yet

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">What People Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < t.rating ? 'star-active' : 'star-dim'} />
              ))}
            </div>
            <p className="testimonial-message">{t.message}</p>
            <p className="testimonial-name">{t.name}</p>
            {t.position && <p className="testimonial-position">{t.position}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}