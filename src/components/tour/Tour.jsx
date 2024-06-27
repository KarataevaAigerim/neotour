import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import styles from "./tour.module.scss";
import pin from '../styles/svg/u_map-marker.svg';
import avatar from '../styles/images/avatar.png';
import InfoModal from "../info/InfoModal";

const Tour = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(`https://muha-backender.org.kg/retrieve-tour/${id}/`);
        setTour(response.data);
      } catch (err) {
        setError('Error loading tour details');
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
    window.scrollTo(0, 0); // Scroll to top
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!tour) return null;

  return (
    <div className={styles.main}>
      <div className={styles.main_image}>
        <img className={styles.main_image} src={tour.thumbnail} alt={tour.name} />
        <button><Link to="/">Back</Link></button>
      </div>
      <div className={styles.details}>
        <h1 className={styles.h1}>{tour.name}</h1>
        <div className={styles.location}>
          <img src={pin} alt="location pin" />
          <p className={styles.p}>{tour.location}</p>
        </div>
        <h3 className={styles.h3}>Description</h3>
        <p className={styles.description}>{tour.description}</p>
        <div className={styles.reviews}>
          <h3 className={styles.h3}>Reviews</h3>
          {tour.reviews.map((review, index) => (
            <div className={styles.review} key={index}>
              <div className={styles.user}>
                <img
                  src={review.reviewer_photo || avatar}
                  onError={(e) => { e.target.src = avatar; }} // Fallback to placeholder
                  alt={review.reviewer_name}
                  className={styles.avatar} />
                <h3 className={styles.name}>{review.reviewer_name}</h3>
              </div>
              <p className={styles.text}>{review.review_text}</p>
            </div>
          ))}
        </div>
        <InfoModal tourId={tour.id} tourName={tour.name} />
      </div>
    </div>
  );
};

export default Tour;