import React from 'react';
import styles from './recommended.module.scss';
import image from '../styles/images/image 5.png';

const trips = [
  { name: 'Trip 1', img: image },
  { name: 'Trip 2', img: image },
  { name: 'Trip 3', img: image },
  { name: 'Trip 4', img: image },
  { name: 'Trip 5', img: image },
  { name: 'Trip 6', img: image },
  { name: 'Trip 7', img: image },
  { name: 'Trip 8', img: image },
  { name: 'Trip 9', img: image },
  { name: 'Trip 10', img: image },
  { name: 'Trip 11', img: image },
  { name: 'Trip 12', img: image },
];

const Recommended = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Recommended</h1>
      <div className={styles.grid}>
        {trips.map((trip, index) => (
          <div key={index} className={styles.card}>
            <img src={trip.img} alt={trip.name} className={styles.image} />
            <h3 className={styles.h3}>{trip.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;