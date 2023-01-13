import React from "react";
import styles from "./../styles/Ctemplates.module.css";
import Card from "./ResumeCard";
import amazonImage from "./../images/amazon.png";
import googleImage from "./../images/google.png";
import facebookImage from "./../images/facebook.png";
import slackImage from "./../images/slack.png";
import twitterImage from "./../images/twitter.png";
import netflixImage from "./../images/netflix.png";
type Props = {};

const chooseTemplates = (props: Props) => {
    return (
        <div className={styles.ctContainer}>
            <h1 className={styles.ctContainerHeading}>
                Create your resume. Let's start <br />
                with selecting a template
            </h1>
            <div className={styles.resumeRow}>
                <Card image={amazonImage} header={"Amazon"} />
                <Card image={googleImage} header={"Google"} />
                <Card image={facebookImage} header={"Facebook"} />
            </div>
            <div className={styles.resumeRow}>
                <Card image={slackImage} header={"Slack"} />
                <Card image={twitterImage} header={"Twitter"} />
                <Card image={netflixImage} header={"Netflix"} />
            </div>
        </div>
    );
};

export default chooseTemplates;
