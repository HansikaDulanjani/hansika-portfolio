import profilePic from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="bubbles">
        <span className="bubble"></span>
        <span className="bubble"></span>
        <span className="bubble"></span>
        <span className="bubble"></span>
        <span className="bubble"></span>
        <span className="bubble"></span>
      </div>

      <div className="hero-text">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Hansika Wijesinghe</h1>
        <h2 className="hero-title">Data Science Undergraduate</h2>
        <p className="hero-desc">
          Motivated Data Science undergraduate at SLIIT with a strong interest in data,
          business, and IT-related roles. Passionate about turning raw data into real insights
          through SQL, Python, and interactive dashboards.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-glow"></div>
        <img src={profilePic} alt="Hansika Wijesinghe" className="hero-image" />
      </div>
    </section>
  );
}