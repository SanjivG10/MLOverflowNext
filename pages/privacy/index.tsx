import React from "react";
import Header from "../../components/Header";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface IProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: 40,
    },
    arxivPolicy: {
      fontWeight: "bolder",
    },
    eachPara: {
      fontFamily: "monospace",
      borderBottom: "4px solid #FAF8F9",
      padding: 8,
    },
    heading: {
      textAlign: "center",
    },
  })
);

const PrivacyPage = (props: IProps) => {
  const classes = useStyles();

  return (
    <>
      <Header title="Privacy Policy" />
      <div className={classes.container}>
        <h1 className={classes.heading}>Privacy Policy</h1>
        <p className={classes.eachPara}>
          MLOverflow is a non-profit website made with sole intention of helping
          them upgrade their skills and let them be notified about the details
          related to Artifical Intelligence/Machine Learning.{" "}
          <h2>DISCLAIMER</h2> We are not affiliated with{" "}
          <span className={classes.arxivPolicy}>arxiv.org</span> or any other
          websites/organizations whose links are posted here , and intend to
          nocopyright , ingringe any laws or intend any sort of hate,
          discrimination directed against any people or organizations. Also,
          images posted here are not our originals
        </p>
        <h3>What info does this website capture?</h3>
        <ul>
          <li>
            your gmail account information which is <b>ONLY</b> used to
            authenticate and display picture (display picture to credit you for
            your feed posts!)
          </li>
          <li>By logging in, you accept this policy.</li>
        </ul>
        <h4>Copyright</h4>
        <p className={classes.eachPara}>
          The icons used in the website is solely the work from{" "}
          <span className={classes.arxivPolicy}>flaticon.com</span> and We claim
          no copyright of it.
        </p>
        <h4>CCPA Privacy Rights (Do Not Sell My Personal Information)</h4>
        <p className={classes.eachPara}>
          Under the CCPA, among other rights, California consumers have the
          right to: Request that a business that collects a consumer's personal
          data disclose the categories and specific pieces of personal data that
          a business has collected about consumers. Request that a business
          delete any personal data about the consumer that a business has
          collected. Request that a business that sells a consumer's personal
          data, not sell the consumer's personal data. If you make a request, We
          have one month to respond to you. If you would like to exercise any of
          these rights, please contact me.
        </p>
        <h4>GDPR Data Protection Rights</h4>
        <p className={classes.eachPara}>
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following: <br />
          <span className={classes.arxivPolicy}>The right to access </span>
          You have the right to request copies of your personal data. We may
          charge you a small fee for this service. <br />
          <span className={classes.arxivPolicy}>
            The right to rectification{" "}
          </span>
          You have the right to request that We correct any information you
          believe is inaccurate. You also have the right to request that We
          complete the information you believe is incomplete. <br />
          <span className={classes.arxivPolicy}>The right to erasure </span>
          You have the right to request that We erase your personal data, under
          certain conditions. <br />
          <span className={classes.arxivPolicy}>
            The right to restrict processing{" "}
          </span>
          You have the right to request that We restrict the processing of your
          personal data, under certain conditions. <br />
          <span className={classes.arxivPolicy}>
            The right to object to processing{" "}
          </span>
          You have the right to object to our processing of your personal data,
          under certain conditions. <br />
          <span className={classes.arxivPolicy}>
            The right to data portability{" "}
          </span>
          You have the right to request that We transfer the data that We have
          collected to another organization, or directly to you, under certain
          conditions. If you make a request, We have one month to respond to
          you. If you would like to exercise any of these rights, please contact
          me.
        </p>
        <h4>Children's Information</h4>
        <p className={classes.eachPara}>
          mloverflow.com does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best to
          promptly remove such information from our records.
        </p>
        <h4>Cookies/Local Storage</h4>
        <p className={classes.eachPara}>
          Like any other website, mloverflow.com uses 'cookies'. 'Localstorage'
          to be precise. These cookies are used to store information for
          session. Nothing else. We are not distributing your Google images or
          your account names to anyone. While other websites may use cookies to
          give you the best recommended contents, we have decided against that
          paradigm. For more general information on cookies, please read "What
          Are Cookies" from Cookie Consent.
        </p>
      </div>
    </>
  );
};

export default PrivacyPage;
