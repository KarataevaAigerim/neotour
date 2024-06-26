import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './discover.module.scss';
import { Link } from 'react-router-dom';

const Discover = () => {
  const [activeTab, setActiveTab] = useState('Popular');
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = {
    Popular: 'popular',
    'Most Visited': 'most_visited',
    Featured: 'featured',
    Europe: 'europe',
    Asia: 'asia',
  };

  useEffect(() => {
    const fetchTours = async (category) => {
      setLoading(true);
      setError(null);
      try {
        let response;
        if (category === 'europe' || category === 'asia') {
          // Fetch all tours and filter by region
          response = await axios.get('https://muha-backender.org.kg/filtered-tours/');
          const filteredTours = response.data.filter(tour => tour.region.toLowerCase() === category);
          setTours(filteredTours);
        } else {
          // Fetch tours by category
          response = await axios.get(`https://muha-backender.org.kg/category-tour/${category}/`);
          setTours(response.data);
        }
      } catch (err) {
        setError('Error loading data');
      } finally {
        setLoading(false);
      }
    };

    fetchTours(categories[activeTab]);
  }, [activeTab]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div id="discover" className={styles.main}>
      <h1 className={styles.h1}>Discover</h1>
      <div className={styles.tab}>
        {Object.keys(categories).map((tab) => (
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
        {tours.slice(0, 3).map((tour, index) => (
          <Link to={`/tour/${tour.id}`} key={index}>
            <div className={styles.card}>
              <img src={tour.thumbnail} alt={tour.name} className={styles.image} />
              <h2 className={styles.h2}>{tour.name}</h2>
              <p>{tour.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;