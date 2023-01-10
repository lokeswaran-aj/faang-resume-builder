import styles from "../styles/Navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <p className={styles.logoText}>Refaang</p>
                </div>
                <div className={styles.login}>
                    <button className={styles.loginButton}>Login</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
