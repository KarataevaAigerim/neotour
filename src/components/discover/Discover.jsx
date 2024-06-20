import React, { useState } from 'react';
import styles from './discover.module.scss';
import image2 from '../styles/images/image2.png';
import image3 from '../styles/images/image3.png';
import image4 from '../styles/images/image4.png';

const Discover = () => {
  const [activeTab, setActiveTab] = useState('Popular');

  const tours = {
    Popular: [
      { img: image2, name: 'Northern Mountain' },
      { img: image3, name: 'Mount Fuji' },
      { img: image4, name: 'Racek House' },
    ],
    'Most Visited': [
      { img: image2, name: 'olala' },
      { img: image3, name: 'tralala' },
      { img: image4, name: 'hahaha' },
    ],
    Featured: [
      { img: image2, name: 'Bishkek' },
      { img: image3, name: 'Talas' },
      { img: image4, name: 'Osh' },
    ],
    Europe: [
      { img: image2, name: '1' },
      { img: image3, name: '2' },
      { img: image4, name: '3' },
    ],
    Asia: [
      { img: image2, name: 'Tokyo' },
      { img: image3, name: 'Bali' },
      { img: image4, name: 'Shanghai' },
    ],
  };

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
          <div key={index} className={styles.card}>
            <img src={tour.img} alt={tour.name} className={styles.image} />
            <h2 className={styles.h2}>{tour.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;