import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";

type Props = {};

const Home = (props: Props) => {
    return (
        <>
            <Navbar />
            <LandingPage />
        </>
    );
};

export default Home;
