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
import { HOME_URL, PAPER_URL } from "../../hooks/constants";
import { getAuthHeadersFromCookie, useGet } from "../../hooks/requests";
import { GetServerSideProps } from "next";
import axios from "axios";
import { IPaper } from "../../components/Paper";
import { useRouter } from "next/router";
import { Filter } from "../../components/Filter";
import { getFilterURL, getNewQuery, isEmpty } from "../../helper";
import { PAPER_LIST_DESC, PAPER_LIST_TITLE } from "../../constants";
import OpenGraphTags from "../../components/OpenGraphTags";

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
  const router = useRouter();

  const [papersData, setPapersData] = useState(papers);

  const onPaperAddSuccess = (paper: IPaper) => {
    setPapersData({ ...papersData, results: [paper, ...papersData.results] });
  };

  const onClick = (filter?: string) => {
    if (filter) {
      const filterQuery = getFilterURL(filter);
      const newQueries = getNewQuery(router.query, filterQuery);
      let queries = "";
      for (const query in newQueries) {
        queries += "&" + query + "=" + newQueries[query];
      }
      router.push({ pathname: window.location.pathname, query: queries });
      setFilter(queries, filter);
    }
  };

  const codeOptions = [
    {
      name: "tensorflow",
      icon: "/tensorflow.svg",
      onClick: onClick,
    },
    {
      name: "pytorch",
      icon: "/pytorch.svg",
      onClick: onClick,
    },
    {
      name: "caffe",
      icon: "/caffe.svg",
      onClick: onClick,
    },
    {
      name: "scikit-learn",
      icon: "/scikit-learn.svg",
      onClick: onClick,
    },
    {
      name: "others",
      icon: "/others.svg",
      onClick: onClick,
    },
  ];

  const timeOptions = [
    {
      name: "latest",
      icon: "/latest.svg",
      onClick: onClick,
    },

    {
      name: "oldest",
      icon: "/clock.svg",
      onClick: onClick,
    },
  ];

  const filters = [
    {
      icon: "/code.svg",
      name: "CODE",
      options: codeOptions,
    },
    {
      icon: "/clock.svg",
      name: "TIME",
      options: timeOptions,
    },
  ];

  const setFilter = (queries: string, filter?: string) => {
    if (!filter) {
      return;
    }

    const getFilterData = async () => {
      const URL = PAPER_URL + "?" + queries;
      const [data, error] = await useGet(URL);
      if (!isEmpty(data)) {
        setPapersData(data);
      }
    };

    getFilterData();
  };

  const oGprops = {
    title: PAPER_LIST_TITLE,
    description: PAPER_LIST_DESC,
    ogTitle: PAPER_LIST_TITLE,
    image: "/logo_white.png",
    url: HOME_URL + "papers/",
  };

  return (
    <div>
      <OpenGraphTags {...oGprops} />
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

        <Filter filters={filters} />
        <PaperList original data={papersData} />
      </Container>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { order, language } = context.query;
  let _data = {};
  try {
    const { data } = await axios.get(
      PAPER_URL +
        `?order=${order ? order : ""}&language=${language ? language : ""}`,
      getAuthHeadersFromCookie(context)
    );
    _data = data;
  } catch (error) {
    console.log(error);
  }

  if (isEmpty(_data)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { papers: _data },
  };
};
export default PaperPage;
