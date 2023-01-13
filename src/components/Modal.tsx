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
                        <button
                            type="button"
                            className={styles.googleLoginButton}
                            onClick={signInWithGoogle}
                        >
                            Sign in with Google
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
