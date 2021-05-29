import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import PaperForm from "../../components/Forms/PaperForm";
import Header from "../../components/Header";
import PaperList from "./../../components/PaperList";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PAPER_URL } from "../../hooks/constants";
import { getAuthHeadersFromCookie } from "../../hooks/requests";
import { GetServerSideProps } from "next";
import axios from "axios";
import { IPaper } from "../../components/Paper";

const useStyles = makeStyles((theme: Theme) => ({
  postList: {},
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    marginTop: 20,
  },
}));

const PaperPage = ({ papers }) => {
  const classes = useStyles();

  const [papersData, setPapersData] = useState(papers);

  const onPaperAddSuccess = (paper: IPaper) => {
    setPapersData({ ...papersData, results: [paper, ...papersData.results] });
  };

  return (
    <div>
      <Header title="Papers" />

      <Container className={classes.postList}>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Add New Paper</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PaperForm onSuccess={onPaperAddSuccess} />
          </AccordionDetails>
        </Accordion>
        <PaperList original data={papersData} />
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get(
    PAPER_URL,
    getAuthHeadersFromCookie(context)
  );

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { papers: data },
  };
};

export default PaperPage;
