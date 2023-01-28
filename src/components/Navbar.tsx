import { useEffect, useState } from "react";
import { auth } from "../firebase";
import useModal from "../hooks/useModal";
import styles from "./../styles/Navbar.module.css";
import Modal from "./Modal";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

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
        <div className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to={"/"} className={styles.logoText}>
                        REFAANG
                    </Link>
                </div>
                <div className={styles.login}>
                    {user !== null && user !== undefined ? (
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
                            <Modal isOpen={isOpen} toggle={toggle}>
                                <Login toggle={toggle} />
                            </Modal>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
