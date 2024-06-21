import React from 'react';
import character from '../styles/svg/Character.svg';
import styles from './landingPage.module.scss';


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
            <h1 className={styles.h1}>Winter Vacation Trips</h1>
            <h3 className={styles.h3}>Enjoy your winter vacations with warmth
                and amazing sightseeing on the mountains.
                Enjoy the best experience with us!</h3>
            <button className={styles.btn} onClick={scrollToDiscover}>Let's Go!</button>
        </div>
        <div className={styles.img}>
        <img src={character} alt="character" />
        </div>
      </div>
    );
  };
  
  export default LandingPage;

     