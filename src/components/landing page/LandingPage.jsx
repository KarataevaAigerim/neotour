import React from 'react';
import character from '../styles/svg/Character.svg';
import green from '../styles/images/green.jpg';
import styles from './landingPage.module.scss';
import person from '../styles/images/illustration-hiker-tourists-hiking-hand-drawn-illustration-line-art-doodle-style_73637-1049.avif'


const LandingPage = () => {
    const scrollToDiscover = () => {
        const discoverSection = document.getElementById('discover');
        if (discoverSection) {
          discoverSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
  
    return (
      <div className={styles.main}>
        <div className={styles.text}>
            <h1 className={styles.h1}>Your world of joy</h1>
            <h3 className={styles.h3}>From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</h3>
            <button className={styles.btn} onClick={scrollToDiscover}>Let's Go!</button>
        </div>
        <div className={styles.img}>
        <img src= {character} alt="character" />
        </div>
      </div>
    );
  };
  
  export default LandingPage;

     