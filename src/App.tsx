import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Templates from "./pages/Templates";

function App() {
    return (
        <div className={styles.App}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/templates" element={<Templates />} />
            </Routes>
        </div>
    );
}

export default App;
