// src/pages/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../services/firebase';
import styles from '../styles/LandingPage.module.css';

const LandingPage = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      setUser(user);
      navigate('/home');
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.typing}>
          Welcome to <span className={styles.highlight}>User Albums</span>
        </h1>
        <p>Discover users and their photo albums like never before!</p>
      </div>
      <button className={styles.glowButton} onClick={handleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default LandingPage;
