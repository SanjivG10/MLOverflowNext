import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/Header";
import PapersList from "../../components/PaperList";
import { Container } from "@material-ui/core";
import { useRouter } from "next/router";
import { fetcher } from "../../hooks/requests";
import { PAPER_URL } from "../../hooks/constants";
import { GetServerSideProps } from "next";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: 10,
    padding: 10,
  },
  label: {
    fontSize: 24,
    borderBottom: "1px solid teal",
    width: "fit-content",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  nothing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const AuthorPage = ({ papers }) => {
  const classes = useStyles();
  const { query } = useRouter();
  const { author } = query;

  return author ? (
    <div className={classes.container}>
      <Header title={author + " results"} />
      <Container>
        <div>
          <PapersList original data={papers} />
        </div>
      </Container>
    </div>
  ) : (
    <div className={classes.nothing}>
      <Header title="No results found" />
      <h3>No author specified</h3>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let papers = {};

  const { author } = ctx.query;

  const PAPER_SEARCH_URL = PAPER_URL + `?author=${author}`;

  try {
    papers = await fetcher(PAPER_SEARCH_URL);
  } catch (error) {}

  return { props: { papers } };
};

export default AuthorPage;
