import React from "react";
import styles from "./../styles/ResumePreview.module.css";

type Props = {
    image: string;
    toggle: () => void;
};

const ResumePreview: React.FC<Props> = ({ image, toggle }) => {
    return (
        <div className={styles.modalOverlay} onClick={toggle}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={styles.modalBox}
            >
                <img
                    src={image}
                    alt="resume popup"
                    className={styles.resumeImage}
                />
            </div>
        </div>
    );
};

export default ResumePreview;
