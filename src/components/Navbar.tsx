import useModal from "../hooks/useModal";
import styles from "./../App.module.css";
import Modal from "./Modal";

type Props = {};

const Navbar = (props: Props) => {
    const { isOpen, toggle } = useModal();
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <p className={styles.logoText}>REFAANG</p>
                </div>
                <div className={styles.login}>
                    <button onClick={toggle} className={styles.loginButton}>
                        Login{" "}
                    </button>
                    <Modal isOpen={isOpen} toggle={toggle}>
                        <div>Yaay!!! Our Modal is rendered Properly.</div>
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default Navbar;
