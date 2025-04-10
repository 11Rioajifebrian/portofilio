import React, { useState, useEffect, useRef } from 'react';

function Home({ scrollToSection }) {
  const [text, setText] = useState('');
  const completeText = "Welcome to Rio Aji Febrian's Portfolio";
  const typingIntervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true; // true for typing forward, false for deleting
    
    const startTypingAnimation = () => {
      // Clear any existing intervals
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      
      typingIntervalRef.current = setInterval(() => {
        if (isTyping) {
          // Typing forward
          if (currentIndex <= completeText.length) {
            setText(completeText.substring(0, currentIndex));
            currentIndex++;
          } else {
            // Reached the end, prepare to delete
            clearInterval(typingIntervalRef.current);
            isTyping = false;
            
            // Pause at the end before starting to delete
            timeoutRef.current = setTimeout(() => {
              startDeletingAnimation();
            }, 2000);
          }
        }
      }, 100);
    };
    
    const startDeletingAnimation = () => {
      // Clear any existing intervals
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      
      typingIntervalRef.current = setInterval(() => {
        if (currentIndex > 0) {
          currentIndex--;
          setText(completeText.substring(0, currentIndex));
        } else {
          // Reached the beginning, prepare to type again
          clearInterval(typingIntervalRef.current);
          isTyping = true;
          
          // Pause at the beginning before starting to type
          timeoutRef.current = setTimeout(() => {
            startTypingAnimation();
          }, 1000);
        }
      }, 50); // Deleting is faster than typing
    };
    
    // Start the animation initially
    startTypingAnimation();
    
    // Clean up intervals and timeouts on unmount
    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
    },
    content: {
      maxWidth: '1400px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: '40px',
      paddingTop: '60px',
    },
    title: {
      fontSize: '72px',
      fontWeight: 'bold',
      margin: '0',
      lineHeight: '1.2',
      height: '180px', // Fixed height to prevent layout shift during animation
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    subtitle: {
      fontSize: '24px',
      color: '#d1d5db',
      maxWidth: '700px',
      lineHeight: '1.6',
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
      marginTop: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    primaryButton: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '8px',
      fontWeight: '500',
      fontSize: '18px',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#3b82f6',
      padding: '16px 32px',
      borderRadius: '8px',
      fontWeight: '500',
      fontSize: '18px',
      border: '2px solid #3b82f6',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
    },
    cursor: {
      borderRight: '4px solid #3b82f6',
      animation: 'blink 1s step-end infinite',
      height: '72px',
      marginLeft: '5px',
      display: 'inline-block',
    },
  };

  // Add global styles for keyframes
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes blink {
        0%, 100% { border-color: transparent; }
        50% { border-color: #3b82f6; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>
          <span dangerouslySetInnerHTML={{ 
            __html: text.replace("Rio Aji Febrian", "<span style='color: #3b82f6;'>Rio Aji Febrian</span>")
          }} />
          <span style={styles.cursor}></span>
        </h1>
        <p style={styles.subtitle}>
          I'm a Full Stack Developer passionate about creating beautiful, functional,
          and user-friendly web applications with modern technologies.
        </p>
        <div style={styles.buttonContainer}>
          <a 
            onClick={() => scrollToSection('about')} 
            style={styles.primaryButton}
            className="glow-button"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Explore Portfolio
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            style={styles.secondaryButton}
            className="glow-button"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;