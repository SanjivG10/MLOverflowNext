import React, { useContext, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Header from "../../components/Header";
import { Button, Container } from "@material-ui/core";
import { usePost } from "../../hooks/requests";
import { UserContext } from "../_app";
import { REPORT_URL } from "../../hooks/constants";
import { isEmpty } from "../../helper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    suggestionBox: {
      minWidth: 400,
      width: "100%",
      padding: 10,
      border: "2px solid #FAF8F9",
      marginBottom: 20,
      "&:focus": {
        outline: "none",
      },
    },
    alert: {
      marginTop: 20,
      marginBottom: 20,
      background: theme.palette.secondary.main,
      color: "white",
      padding: 10,
      borderRadius: 4,
      width: "100%",
    },
    post: {
      width: "fit-content",
    },
    number: {
      fontWeight: 900,
      fontSize: 18,
      color: "black",
    },
  })
);

interface IProps {}

const ReportPage = (props: IProps) => {
  const { state, dispatch } = useContext(UserContext);
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);

  const reportABug = async () => {
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }

    const [report] = await usePost(REPORT_URL, {
      text,
    });

    if (!isEmpty(report)) {
      setSuccess(true);
    }
  };

  const classes = useStyles();
  return success ? (
    <Container className={classes.main}>
      <Header title="THANK YOU" />
      <div className={classes.alert}>
        <div>Thank you for your report.</div>
      </div>
    </Container>
  ) : (
    <Container className={classes.main}>
      <Header title="Report a problem" />
      <div className={classes.alert}>
        <h2>Report a Problem/Suggestion</h2>
        <div>
          Thank you for reaching us out here! Your suggestions are valuable!
          Briefly mention the problem/suggestion within{" "}
          <span className={classes.number}>1000 </span> WORDS!
        </div>

        <p>@MLOVERFLOW TEAM</p>
      </div>

      <textarea
        rows={10}
        aria-label="minimum height"
        className={classes.suggestionBox}
        placeholder="Start typing ... "
        value={text}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setText(e.target.value);
        }}
      />
      <Button
        color="primary"
        variant="outlined"
        className={classes.post}
        onClick={reportABug}
      >
        POST
      </Button>
    </Container>
  );
};

export default ReportPage;
