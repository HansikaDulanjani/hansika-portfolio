import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academic from './components/Academic';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import './App.css';
import Testimonials from './components/Testimonials';


function App() {
  const isAdminPage = window.location.pathname === '/admin';

  if (isAdminPage) {
    return <Admin />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academic />
        <Skills />
        <Projects />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;