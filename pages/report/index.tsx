import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Header from "../../components/Header";
import { Button, Container } from "@material-ui/core";

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
  const classes = useStyles();
  return (
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
      />
      <Button color="primary" variant="outlined" className={classes.post}>
        POST
      </Button>
    </Container>
  );
};

export default ReportPage;
