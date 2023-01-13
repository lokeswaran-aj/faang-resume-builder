import React, { ReactNode } from "react";
import styles from "./../App.module.css";
import { signInWithGoogle } from "../firebase";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (
                <div className={styles.modalOverlay} onClick={props.toggle}>
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
            )}
        </>
    );
}
