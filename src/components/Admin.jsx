import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { FaStar, FaCheck, FaTrash } from 'react-icons/fa';

const ADMIN_PASSWORD = "Hansi223"; 

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    if (!authenticated) return;

    const q = query(collection(db, 'feedback'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setFeedbacks(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => unsubscribe();
  }, [authenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const approve = async (id) => {
    await updateDoc(doc(db, 'feedback', id), { status: 'approved' });
  };

  const reject = async (id) => {
    await updateDoc(doc(db, 'feedback', id), { status: 'rejected' });
  };

  const remove = async (id) => {
    if (confirm('Delete this feedback permanently?')) {
      await deleteDoc(doc(db, 'feedback', id));
    }
  };

  if (!authenticated) {
    return (
      <div className="admin-login">
        <form onSubmit={handleLogin} className="admin-login-form">
          <h2>Admin Login</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <button type="submit" className="btn-primary">Login</button>
        </form>
      </div>
    );
  }

  const pending = feedbacks.filter((f) => f.status === 'pending');
  const others = feedbacks.filter((f) => f.status !== 'pending');

  return (
    <div className="admin-panel">
      <h2>Feedback Admin Panel</h2>

      <h3 className="admin-subtitle">Pending ({pending.length})</h3>
      <div className="admin-list">
        {pending.length === 0 && <p className="admin-empty">No pending feedback.</p>}
        {pending.map((f) => (
          <div key={f.id} className="admin-card">
            <div className="admin-card-header">
              <strong>{f.name}</strong> {f.position && <span className="admin-position">— {f.position}</span>}
              <span className="admin-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < f.rating ? 'star-active' : 'star-dim'} />
                ))}
              </span>
            </div>
            <p className="admin-message">{f.message}</p>
            <div className="admin-actions">
              <button onClick={() => approve(f.id)} className="admin-btn approve"><FaCheck /> Approve</button>
              <button onClick={() => reject(f.id)} className="admin-btn reject">Reject</button>
              <button onClick={() => remove(f.id)} className="admin-btn delete"><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="admin-subtitle">Reviewed</h3>
      <div className="admin-list">
        {others.map((f) => (
          <div key={f.id} className="admin-card admin-card-small">
            <div className="admin-card-header">
              <strong>{f.name}</strong>
              <span className={`admin-status-tag ${f.status}`}>{f.status}</span>
            </div>
            <p className="admin-message">{f.message}</p>
            <button onClick={() => remove(f.id)} className="admin-btn delete"><FaTrash /></button>
          </div>
        ))}
      </div>
    </div>
  );
}