import { useEffect, useState } from "react";
import { auth } from "../firebase";
import useModal from "../hooks/useModal";
import styles from "./../App.module.css";
import Modal from "./Modal";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
    const [user, setUser] = useState<User | null>();
    const navigate = useNavigate();
    const { isOpen, toggle } = useModal();

    useEffect(() => {
        const unsubcrible = onAuthStateChanged(auth, (user) => {
            if (user) {
                if (isOpen) {
                    toggle();
                }
                setUser(user);
            } else {
                console.log("Signed Out");
            }
        });

        return unsubcrible;
    }, [isOpen, toggle]);
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate("/");
        } catch (error) {
            console.log("Logout Error:", error);
        }
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <p className={styles.logoText}>REFAANG</p>
                </div>
                <div className={styles.login}>
                    {user !== null ? (
                        <div className={styles.loggedInContainer}>
                            <div className={styles.username}>
                                {user && <p>{user.displayName}</p>}
                            </div>
                            <button
                                onClick={handleLogout}
                                className={styles.loginButton}
                            >
                                Logout{" "}
                            </button>
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={toggle}
                                className={styles.loginButton}
                            >
                                Login{" "}
                            </button>
                            <Modal isOpen={isOpen} toggle={toggle} />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
