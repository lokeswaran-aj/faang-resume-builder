import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import CreateResume from "./pages/CreateResume";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className={styles.App}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="create/:company" element={<CreateResume />} />
            </Routes>
        </div>
    );
}

export default App;
