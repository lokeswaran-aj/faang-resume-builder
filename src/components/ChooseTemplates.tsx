/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./../styles/Ctemplates.module.css";
import amazonImage from "./../images/amazon.png";
import googleImage from "./../images/google.png";
import facebookImage from "./../images/facebook.png";
import slackImage from "./../images/slack.png";
import twitterImage from "./../images/twitter.png";
import netflixImage from "./../images/netflix.png";
import TemplateCard from "./TemplateCard";
type Props = {};

const chooseTemplates = (props: Props) => {
    return (
        <div className={styles.ctContainer}>
            <h1 className={styles.ctContainerHeading}>
                Create your resume. Let's start <br />
                with selecting a template
            </h1>
            <div className={styles.resumeRow}>
                <TemplateCard image={googleImage} header={"Google"} />
                <TemplateCard image={amazonImage} header={"Amazon"} />
                <TemplateCard image={facebookImage} header={"Facebook"} />
            </div>
            <div className={styles.resumeRow}>
                <TemplateCard image={twitterImage} header={"Twitter"} />
                <TemplateCard image={netflixImage} header={"Netflix"} />
                <TemplateCard image={slackImage} header={"Slack"} />
            </div>
        </div>
    );
};

export default chooseTemplates;
