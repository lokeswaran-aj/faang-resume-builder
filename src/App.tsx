import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";

function App() {
    return (
        <div className={styles.App}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
