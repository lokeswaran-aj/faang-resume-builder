import LandingPage from "../components/LandingPage";
import { useCallback, useEffect } from "react";
import trackPathForAnalytics from "./../trackPathForAnalytics";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
type Props = {};

const Home = (props: Props) => {
    const { pathname, search } = useLocation();

    const analytics = useCallback(() => {
        trackPathForAnalytics({
            path: pathname,
            search: search,
            title: pathname.split("/")[1],
        });
    }, [pathname, search]);

    useEffect(() => {
        analytics();
    }, [analytics]);
    return (
        <>
            <Navbar />
            <LandingPage />
        </>
    );
};

export default Home;
