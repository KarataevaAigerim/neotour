import React, { useEffect, useState } from 'react';
import styles from './recommended.module.scss';
import { Link } from 'react-router-dom';

const Recommended = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://muha-backender.org.kg/list-tours/');
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchTours();
  }, []);

  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Recommended</h1>
      <div className={styles.grid}>
        {tours.map((tour) => (
          <Link to={`/tour/${tour.id}`} key={tour.id}>
            <div className={styles.card}>
              <img src={tour.thumbnail} alt={tour.name} className={styles.image} />
              <h3 className={styles.h3}>{tour.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommended;