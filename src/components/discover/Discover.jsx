import React, { useState } from 'react';
import styles from './discover.module.scss';
import { Link } from 'react-router-dom';
import tours from '../data/ToursData';
const Discover = () => {
  const [activeTab, setActiveTab] = useState('Popular');

  return (
    <div id="discover" className={styles.main}>
      <h1 className={styles.h1}>Discover</h1>
      <div className={styles.tab}>
        {Object.keys(tours).map((tab) => (
          <button
            key={tab}
            className={`${styles.tablinks} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.tabcontent}>
        {tours[activeTab].map((tour, index) => (
          <Link to="/tour"> 
          <div key={index} className={styles.card}>
            <img src={tour.img} alt={tour.name} className={styles.image} />
            <h2 className={styles.h2}>{tour.name}</h2>
          </div> 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;

