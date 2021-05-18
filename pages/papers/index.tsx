import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import PaperForm from "../../components/Forms/PaperForm";
import Header from "../../components/Header";
import PaperList from "./../../components/PaperList";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) => ({
  postList: {},
}));

const PaperPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Header title="Papers" />
      <PaperForm />
      <Container className={classes.postList}>
        <PaperList original />
      </Container>
    </div>
  );
};

export default PaperPage;
