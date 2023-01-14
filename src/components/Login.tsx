import React, { FC } from "react";
import styles from "./../styles/Modal.module.css";
import { signInWithGoogle } from "../firebase";

type Props = {
    toggle: () => void;
};

const Login: FC<Props> = ({ toggle }) => {
    return (
        <div className={styles.modalOverlay} onClick={toggle}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={styles.modalBox}
            >
                <div className={styles.modalContent}>
                    <img
                        src={
                            "https://img.freepik.com/premium-vector/online-registration-sign-up-concept-with-man-character_268404-98.jpg"
                        }
                        alt=""
                    />
                    <h1>Welcome to Refaang!!</h1>
                    <p>Create a Resume That Stands Out</p>
                    <button
                        type="button"
                        className={styles.googleLoginButton}
                        onClick={signInWithGoogle}
                    >
                        <img
                            src={
                                "https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-HD-Quality.png"
                            }
                            alt="google"
                        />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
