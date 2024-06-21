import React from "react";
import styles from "./tour.module.scss";
import mountain from '../styles/images/image.png';

const Tour = () => {
  return (
    <div className={styles.main}>
        <div>
            <img className={styles.main_image} src={mountain} alt="mountain" />
        </div>
        <div>
            <h1 className={styles.h1}> Mount Fuji </h1>
            <p className={styles.location}> Honshu, Japan</p>
            <h3 className={styles.h3}>Description</h3>
            <p className={styles.description}>Lorem ipsum dolor sit amet. Qui alias iure cum tenetur voluptatibus aut explicabo 
                culpa sit sequi quos et cumque velit non illum iure quo quod iusto. 
                Rem temporibus quia id praesentium error est animi voluptas vel quia voluptatem cum 
                repellat eius aut facilis dignissimos.
            </p>
            <div className={styles.reviews}>
                <h3 className={styles.h3}>Reviews</h3>
                <div className={styles.review}>
                    <img src="" alt="" className={styles.avatar} />
                    <h3 className={styles.name}>Anonymous</h3>
                    <p className={styles.text}>This was a very nice experience. We enjoyed it so much, recommend it so much!</p>
                </div>

            </div>

        </div>
    </div>
  );
}

export default Tour;