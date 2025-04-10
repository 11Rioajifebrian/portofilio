import React, { useState, useEffect, useRef } from 'react';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);

  // Apply global styles to ensure full-screen display
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.body.style.backgroundColor = '#111827';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    document.documentElement.style.width = '100%';
    document.body.style.width = '100%';
    document.body.style.color = 'white';
    document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';
    
    // Add animation styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
      
      @keyframes fullBeam {
        0% {
          left: -30%;
        }
        100% {
          left: 100%;
        }
      }
      
      .animate-spin {
        animation: spin 4s linear infinite;
      }
      
      .animate-shimmer {
        background: linear-gradient(
          90deg,
          transparent,
          rgba(59, 130, 246, 0.5),
          transparent
        );
        background-size: 200% 100%;
        animation: shimmer 3s infinite;
      }
      
      .full-beam {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: rgba(59, 130, 246, 0.2);
        overflow: hidden;
      }
      
      .full-beam::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -30%;
        width: 30%;
        height: 100%;
        background: linear-gradient(90deg, 
          rgba(59, 130, 246, 0), 
          rgba(59, 130, 246, 0.6), 
          rgba(96, 165, 250, 0.8), 
          rgba(59, 130, 246, 0.6), 
          rgba(59, 130, 246, 0)
        );
        animation: fullBeam 2s infinite;
        animation-timing-function: linear;
      }
      
      .glow-button {
        position: relative;
        overflow: hidden;
        z-index: 1;
      }
      
      .glow-button::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background-image: conic-gradient(transparent, transparent, transparent, rgba(59, 130, 246, 0.5));
        animation: spin 3s linear infinite;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .glow-button:hover::before {
        opacity: 1;
      }
      
      .glow-card {
        position: relative;
        overflow: hidden;
        z-index: 1;
      }
      
      .glow-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background-image: conic-gradient(transparent, transparent, transparent, rgba(59, 130, 246, 0.3));
        animation: spin 4s linear infinite;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .glow-card:hover::before {
        opacity: 1;
      }
      
      /* Navbar item hover effect */
      .nav-item {
        padding: 8px 12px;
        border-radius: 6px;
        transition: all 0.3s ease;
      }
      
      .nav-item:hover {
        text-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
        background-color: rgba(59, 130, 246, 0.1);
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
      }
      
      /* Mouse follow animation */
      .mouse-animation {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
      }
      
      .mouse-follower {
        position: absolute;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, rgba(59, 130, 246, 0) 70%);
        transform: translate(-50%, -50%);
        transition: transform 0.3s ease-out, width 0.5s ease, height 0.5s ease;
        will-change: transform;
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.body.style.backgroundColor = '';
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
      document.documentElement.style.width = '';
      document.body.style.width = '';
      document.body.style.color = '';
      document.body.style.fontFamily = '';
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update follower position
  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
    }
  }, [mousePosition]);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');
      
      const scrollPosition = window.scrollY + 100; // Adding offset for better detection
      
      if (homeSection && scrollPosition < aboutSection.offsetTop) {
        setActiveSection('home');
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop && scrollPosition < skillsSection.offsetTop) {
        setActiveSection('about');
      } else if (skillsSection && scrollPosition >= skillsSection.offsetTop && scrollPosition < projectsSection.offsetTop) {
        setActiveSection('skills');
      } else if (projectsSection && scrollPosition >= projectsSection.offsetTop && scrollPosition < contactSection.offsetTop) {
        setActiveSection('projects');
      } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveSection('contact');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  const styles = {
    header: {
      position: 'fixed',
      width: '100%',
      backgroundColor: 'rgba(17, 24, 39, 0.95)',
      padding: '16px 0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      zIndex: 10,
      left: 0,
      top: 0,
    },
    headerContent: {
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    logoBlue: {
      color: '#3b82f6',
    },
    nav: {
      display: 'flex',
      gap: '10px', // Reduced gap to account for padding
    },
    navItem: {
      cursor: 'pointer',
      color: '#9ca3af',
      transition: 'color 0.3s ease',
      fontSize: '18px',
      textDecoration: 'none',
    },
    navItemActive: {
      color: '#3b82f6',
      fontWeight: '500',
    },
    mobileMenuButton: {
      fontSize: '28px',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
    },
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '100%',
      backgroundColor: '#111827',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    footer: {
      backgroundColor: '#111827',
      padding: '40px 20px',
      borderTop: '1px solid #374151',
    },
    footerContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
    },
    footerSocial: {
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    socialIcon: {
      padding: '14px',
      backgroundColor: 'transparent',
      borderRadius: '50%',
      color: '#9ca3af',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    copyright: {
      color: '#9ca3af',
      fontSize: '16px',
      textAlign: 'center',
    },
    content: {
      width: '100%',
      position: 'relative',
      zIndex: 1,
    }
  };

  return (
    <>
      {/* Mouse follower animation */}
      <div className="mouse-animation">
        <div 
          className="mouse-follower" 
          ref={animationRef}
        ></div>
      </div>

      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div 
            style={styles.logo} 
            onClick={() => scrollToSection('home')}
            className="glow-button"
          >
            <span style={styles.logoBlue}>Rio</span> Aji Febrian
          </div>
          
          {isMobile ? (
            <button 
              style={styles.mobileMenuButton} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="glow-button"
            >
              ☰
            </button>
          ) : (
            <nav style={styles.nav}>
              <a 
                onClick={() => scrollToSection('about')}
                style={activeSection === 'about' ? {...styles.navItem, ...styles.navItemActive} : styles.navItem}
                className="nav-item glow-button"
              >
                About
              </a>
              <a 
                onClick={() => scrollToSection('skills')}
                style={activeSection === 'skills' ? {...styles.navItem, ...styles.navItemActive} : styles.navItem}
                className="nav-item glow-button"
              >
                Skills
              </a>
              <a 
                onClick={() => scrollToSection('projects')}
                style={activeSection === 'projects' ? {...styles.navItem, ...styles.navItemActive} : styles.navItem}
                className="nav-item glow-button"
              >
                Projects
              </a>
              <a 
                onClick={() => scrollToSection('contact')}
                style={activeSection === 'contact' ? {...styles.navItem, ...styles.navItemActive} : styles.navItem}
                className="nav-item glow-button"
              >
                Contact
              </a>
            </nav>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div style={styles.mobileMenu}>
            <a 
              onClick={() => scrollToSection('about')}
              style={activeSection === 'about' ? {...styles.navItem, ...styles.navItemActive} : styles.navItem}
              className="nav-item glow-button"
            >
              About
            </a>
            <a 
              onClick={() => scrollToSection('skills')}
              style={activeSection === 'skills' ? {...styles.navItem, ...styles.navItemActive} : styles.navItem}
              className="nav-item glow-button"
            >
              Skills
            </a>
            <a 
              onClick={() => scrollToSection('projects')}
              style={activeSection === 'projects' ? {...styles.navItem, ...styles.navItemActive} : styles.navItem}
              className="nav-item glow-button"
            >
              Projects
            </a>
            <a 
              onClick={() => scrollToSection('contact')}
              style={activeSection === 'contact' ? {...styles.navItem, ...styles.navItemActive} : styles.navItem}
              className="nav-item glow-button"
            >
              Contact
            </a>
          </div>
        )}
        
        {/* Beam animation at the bottom of navbar - now with full width travel */}
        <div className="full-beam"></div>
      </header>

      <main style={styles.content}>
        <section id="home">
          <Home scrollToSection={scrollToSection} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSocial}>
            <a 
              href="https://github.com/11Rioajifebrian" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialIcon}
              className="glow-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialIcon}
              className="glow-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialIcon}
              className="glow-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialIcon}
              className="glow-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://t.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialIcon}
              className="glow-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2L11 22l-8-9 18.5-11z"></path>
                <path d="M2 13l9 9 2-18-9 9z"></path>
              </svg>
            </a>
          </div>
          
          <p style={styles.copyright}>
            © 2025 Rio Aji Febrian. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;