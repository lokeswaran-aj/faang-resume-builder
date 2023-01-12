import styles from "./../App.module.css";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
type Props = {};

const LandingPage = (props: Props) => {
    return (
        <div className={styles.landing}>
            <div className={styles.nav}>
                <Navbar />
            </div>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <h1 className={styles.mainText}>
                        Transform Your Career
                        <br />
                        with a Custom-Built
                        <br />
                        Resume
                    </h1>
                    <h4 className={styles.subText}>
                        Easily Create a Resume That
                        <br />
                        Impresses Employers
                    </h4>
                    <div className={styles.create}>
                        <button className={styles.createButton}>
                            Create Now
                            <span className={styles.createArrow}>
                                <FaArrowRight />
                            </span>
                        </button>
                    </div>
                </div>

                <div className={styles.slider}>
                    <div className={styles.slideTrack}>
                        <div className={styles.slide}>
                            <img
                                src={require("../images/amazon.png")}
                                width="400"
                                alt=""
                            />
                        </div>
                        <div className={styles.slide}>
                            <img
                                src={require("../images/google.png")}
                                width="400"
                                alt=""
                            />
                        </div>
                        <div className={styles.slide}>
                            <img
                                src={require("../images/facebook.png")}
                                width="400"
                                alt=""
                            />
                        </div>
                        <div className={styles.slide}>
                            <img
                                src={require("../images/slack.png")}
                                width="400"
                                alt=""
                            />
                        </div>
                        <div className={styles.slide}>
                            <img
                                src={require("../images/netflix.png")}
                                width="400"
                                alt=""
                            />
                        </div>
                        <div className={styles.slide}>
                            <img
                                src={require("../images/twitter.png")}
                                width="400"
                                alt=""
                            />
                        </div>
                        <div className={styles.slide}>
                            <img
                                src={require("../images/amazon.png")}
                                width="400"
                                alt=""
                            />
                        </div>
                        <div className={styles.slide}>
                            <img
                                src={require("../images/google.png")}
                                width="400"
                                alt=""
                            />
                        </div>
                        <div className={styles.slide}>
                            <img
                                src={require("../images/facebook.png")}
                                width="400"
                                alt=""
                            />
                        </div>
                        <div className={styles.slide}>
                            <img
                                src={require("../images/slack.png")}
                                width="400"
                                alt=""
                            />
                        </div>
                        <div className={styles.slide}>
                            <img
                                src={require("../images/netflix.png")}
                                width="400"
                                alt=""
                            />
                        </div>
                        <div className={styles.slide}>
                            <img
                                src={require("../images/twitter.png")}
                                width="400"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
