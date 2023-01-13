import styles from "./../App.module.css";
import { FaArrowRight } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import Navbar from "./Navbar";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
type Props = {};

const LandingPage = (props: Props) => {
    const [username, setUsername] = useState("");
    const { isOpen, toggle } = useModal();

    useEffect(() => {
        const unsubcrible = onAuthStateChanged(auth, (user) => {
            if (user?.displayName) {
                if (isOpen) {
                    toggle();
                }
                setUsername(user.displayName);
            } else {
                console.log("Signed Out");
            }
        });

        return unsubcrible;
    }, [isOpen, toggle, username]);

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
                        {auth.currentUser ? (
                            <>
                                <Link
                                    to={"/templates"}
                                    className={styles.ChooseTemplateLink}
                                >
                                    <button
                                        onClick={toggle}
                                        className={styles.createButton}
                                    >
                                        Choose a template
                                        <span className={styles.createArrow}>
                                            <HiTemplate />
                                        </span>
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={toggle}
                                    className={styles.createButton}
                                >
                                    Get Started
                                    <span className={styles.createArrow}>
                                        <FaArrowRight />
                                    </span>
                                </button>

                                <Modal isOpen={isOpen} toggle={toggle} />
                            </>
                        )}
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
