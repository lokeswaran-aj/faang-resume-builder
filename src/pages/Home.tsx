import LandingPage from "../components/LandingPage";
import { useCallback, useEffect } from "react";
import trackPathForAnalytics from "./../trackPathForAnalytics";
import { useLocation } from "react-router-dom";
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
            <LandingPage />
        </>
    );
};

export default Home;
