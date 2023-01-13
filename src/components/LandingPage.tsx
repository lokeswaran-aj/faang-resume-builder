import styles from "./../App.module.css";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
type Props = {};

const LandingPage = (props: Props) => {
    const { isOpen, toggle } = useModal();
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
                        <button
                            onClick={toggle}
                            className={styles.createButton}
                        >
                            Create Now
                            <span className={styles.createArrow}>
                                <FaArrowRight />
                            </span>
                        </button>

                        <Modal isOpen={isOpen} toggle={toggle}>
                            <div>Yaay!!! Our Modal is rendered Properly.</div>
                        </Modal>
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
