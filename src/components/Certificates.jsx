import { useState } from 'react';
import aiml from '../assets/certificates/aiml.png';
import uom from '../assets/certificates/uom.png';
import tata from '../assets/certificates/tata.png';
import british from '../assets/certificates/british.png';
import webinar from '../assets/certificates/Webinar.jpg';
import hplife from '../assets/certificates/hplife.png';
import google from '../assets/certificates/google.png';
import intern from '../assets/certificates/intern.png';
import esoft1 from '../assets/certificates/esoft1.jpg';
import esoft2 from '../assets/certificates/esoft2.jpg';
import nenasala1 from '../assets/certificates/nenasala1.jpg';
import nenasala2 from '../assets/certificates/nenasala2.jpg';

export default function Certificates() {
  const [selected, setSelected] = useState(null);

const certificates = [
  { title: "Diploma in Information Technology (Page 1)", issuer: "ESOFT Metro Campus", img: esoft1 },
  { title: "Diploma in Information Technology (Page 2)", issuer: "ESOFT Metro Campus", img: esoft2 },
  { title: "Diploma in ICT (Page 1)", issuer: "Nenasala - Narammala", img: nenasala1 },
  { title: "Diploma in ICT (Page 2)", issuer: "Nenasala - Narammala", img: nenasala2 },
  { title: "Data Analytics Internship", issuer: "Codveda Technologies", img: intern },
  { title: "AI/ML Stage 1 (Foundation Course)", issuer: "SLIIT", img: aiml },
  { title: "Python for Beginners", issuer: "University of Moratuwa (CODL)", img: uom },
  { title: "Data Visualization Certificate", issuer: "TATA (Forage)", img: tata },
  { title: "Data Science Job Simulation", issuer: "British Airways (Forage)", img: british },
  { title: "AI and Business Transformation", issuer: "Webinar - SLTC", img: webinar },
  { title: "HP LIFE Certificate", issuer: "HP LIFE", img: hplife },
  { title: "Google Certificate", issuer: "Google", img: google },
];

  return (
    <section id="certificates" className="certificates">
      <h2 className="section-title">Certificates</h2>

      <div className="cert-grid">
        {certificates.map((cert, i) => (
          <div key={i} className="cert-card" onClick={() => setSelected(cert)}>
            <img src={cert.img} alt={cert.title} className="cert-thumb" />
            <div className="cert-overlay">
              <p className="cert-zoom-text">🔍 View</p>
            </div>
            <div className="cert-info">
              <p className="cert-title">{cert.title}</p>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="cert-modal" onClick={() => setSelected(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-close" onClick={() => setSelected(null)}>✕</button>
            <img src={selected.img} alt={selected.title} className="cert-modal-img" />
            <p className="cert-modal-title">{selected.title}</p>
            <p className="cert-modal-issuer">{selected.issuer}</p>
          </div>
        </div>
      )}
    </section>
  );
}