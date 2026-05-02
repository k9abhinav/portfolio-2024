import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const navLinks = document.querySelectorAll('.down-nav ul a');
    gsap.from(navLinks, {
      y: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.8,
      ease: 'none'
    });
  }, []);

  return (
    <div className="font-['gilroy'] bg-[#f8f7f4]">
      <Cursor />
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;