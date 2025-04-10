// pages/About.jsx
import React from 'react';

function About() {
  const styles = {
    section: {
      padding: '100px 20px',
      width: '100%',
    },
    sectionContent: {
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
      gap: '60px',
      alignItems: 'center',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    greeting: {
      fontSize: '22px',
      color: '#60a5fa',
    },
    title: {
      fontSize: window.innerWidth < 768 ? '42px' : '60px',
      fontWeight: 'bold',
      margin: '0',
      lineHeight: '1.2',
    },
    titleBlue: {
      color: '#3b82f6',
    },
    role: {
      fontSize: window.innerWidth < 768 ? '24px' : '30px',
      color: '#d1d5db',
      margin: '12px 0',
    },
    description: {
      color: '#9ca3af',
      fontSize: '18px',
      lineHeight: '1.6',
    },
    detailsContainer: {
      marginTop: '10px',
    },
    detailsTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#d1d5db',
    },
    detailsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(2, 1fr)',
      gap: '20px 40px',
    },
    detailsItem: {
      marginBottom: '15px',
    },
    detailsLabel: {
      color: '#60a5fa',
      fontWeight: '500',
      marginBottom: '5px',
      display: 'block',
    },
    detailsValue: {
      color: '#d1d5db',
    },
    socialContainer: {
      display: 'flex',
      gap: '20px',
      marginTop: '32px',
      flexWrap: 'wrap',
    },
    socialIcon: {
      padding: '14px',
      backgroundColor: '#1f2937',
      borderRadius: '50%',
      color: '#9ca3af',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    profileImageContainer: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    },
    profileImage: {
      position: 'relative',
      width: window.innerWidth < 768 ? '280px' : '380px',
      height: window.innerWidth < 768 ? '280px' : '380px',
      margin: '0 auto',
    },
    profileGlow: {
      position: 'absolute',
      inset: '0',
      borderRadius: '50%',
      backgroundColor: '#3b82f6',
      filter: 'blur(50px)',
      opacity: '0.5',
    },
    profileGlowInner: {
      position: 'absolute',
      inset: '0',
      borderRadius: '50%',
      background: 'linear-gradient(to right, #60a5fa, #3b82f6)',
      filter: 'blur(20px)',
      opacity: '0.7',
    },
    profileCircle: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '6px solid #60a5fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1f2937',
      fontSize: '80px',
      fontWeight: 'bold',
    },
    floatingIcon: {
      position: 'absolute',
      padding: '16px',
      backgroundColor: '#1f2937',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
      color: '#3b82f6',
    },
    floatingIconTop: {
      top: '-30px',
      right: '-30px',
    },
    floatingIconBottom: {
      bottom: '-30px',
      left: '-30px',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.sectionContent}>
        <div style={styles.grid}>
          {/* Left content */}
          <div style={styles.content}>
            <p style={styles.greeting}>Hello, my name is</p>
            <h1 style={styles.title}>
              Rio Aji <span style={styles.titleBlue}>Febrian</span>
            </h1>
            <p style={styles.role}>
              I'm a <span style={styles.titleBlue}>Full Stack Developer</span>
            </p>
            <p style={styles.description}>
              Passionate about creating beautiful, functional, and user-friendly web applications with modern technologies.
              I specialize in building responsive, scalable, and efficient web solutions using the latest frameworks and tools.
            </p>
            <p style={styles.description}>
              With expertise in both frontend and backend development, I strive to deliver seamless user experiences while
              maintaining clean, maintainable code. I'm constantly learning and adapting to new technologies to stay at the
              forefront of web development.
            </p>

            <div style={styles.detailsContainer}>
              <h3 style={styles.detailsTitle}>Personal Details</h3>
              <div style={styles.detailsGrid}>
                <div style={styles.detailsItem}>
                  <span style={styles.detailsLabel}>Name:</span>
                  <span style={styles.detailsValue}>Rio Aji Febrian</span>
                </div>
                <div style={styles.detailsItem}>
                  <span style={styles.detailsLabel}>Email:</span>
                  <span style={styles.detailsValue}>rio.aji.febrian@example.com</span>
                </div>
                <div style={styles.detailsItem}>
                  <span style={styles.detailsLabel}>Phone:</span>
                  <span style={styles.detailsValue}>+62 123 456 7890</span>
                </div>
                <div style={styles.detailsItem}>
                  <span style={styles.detailsLabel}>Location:</span>
                  <span style={styles.detailsValue}>Jakarta, Indonesia</span>
                </div>
                <div style={styles.detailsItem}>
                  <span style={styles.detailsLabel}>Experience:</span>
                  <span style={styles.detailsValue}>5+ Years</span>
                </div>
                <div style={styles.detailsItem}>
                  <span style={styles.detailsLabel}>Languages:</span>
                  <span style={styles.detailsValue}>English, Indonesian</span>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div style={styles.socialContainer}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
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
          </div>

          {/* Right content - Profile image */}
          <div style={styles.profileImageContainer}>
            <div style={styles.profileImage}>
              {/* Glowing effect */}
              <div style={styles.profileGlow}></div>
              <div style={styles.profileGlowInner}></div>
              
              {/* Profile circle */}
              <div style={styles.profileCircle}>
                RAF
              </div>
              
              {/* Floating elements */}
              <div style={{...styles.floatingIcon, ...styles.floatingIconTop}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              
              <div style={{...styles.floatingIcon, ...styles.floatingIconBottom}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;