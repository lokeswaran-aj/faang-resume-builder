/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styles from "./../styles/Card.module.css";
interface Props {
    image: string;
    header: string;
}

const Card: React.FC<Props> = ({ image, header }) => {
    console.log(image);

    return (
        <div className={styles.cardContainer}>
            <h2 className={styles.cardHeader}>{header}</h2>
            <img src={image} alt="Card Image" className={styles.cardImage} />
        </div>
    );
};

export default Card;
