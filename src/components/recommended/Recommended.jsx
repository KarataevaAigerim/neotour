import React from 'react';
import styles from './recommended.module.scss';
import { Link } from 'react-router-dom';
import trips from '../data/TripsData';

const Recommended = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Recommended</h1>
      <div className={styles.grid}>
        {trips.map((trip, index) => (
            <Link to="/tour">
            <div key={index} className={styles.card}>
                <img src={trip.img} alt={trip.name} className={styles.image} />
                <h3 className={styles.h3}>{trip.name}</h3>
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommended;