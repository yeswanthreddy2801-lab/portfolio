import React from 'react';
import LoadingScreen from './components/shared/LoadingScreen';
import MouseFollower from './components/shared/MouseFollower';
import ScrollProgress from './components/shared/ScrollProgress';
import BackToTop from './components/shared/BackToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections (to be implemented)
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import GitHubStats from './components/sections/GitHubStats';
import CurrentlyLearning from './components/sections/CurrentlyLearning';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-background font-sans overflow-hidden">
      {/* Shared Elements */}
      <LoadingScreen />
      <MouseFollower />
      <ScrollProgress />
      <BackToTop />

      {/* Global Background Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <GitHubStats />
          <CurrentlyLearning />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
