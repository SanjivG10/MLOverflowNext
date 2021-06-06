import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Jumbotron from "./../components/Jumbotron";
import QuickLinks from "../components/QuickLinks";
import PaperList from "../components/PaperList";
import FeedsList from "../components/FeedList";
import { SLOGAN, SLOGAN_DESC } from "../constants";
import { fetcher } from "./../hooks/requests";
import {
  PAPER_URL_HOME,
  FEED_URL_HOME,
  TAGS_URL,
  QUOTE_URL,
  QUICKLINK_URL,
  HOME_URL,
} from "../hooks/constants";
import OpenGraphTags from "../components/OpenGraphTags";

const useStyles = makeStyles((theme) => ({
  homePageContainer: {
    margin: 10,
    padding: 10,
  },
  modalBody: {
    color: "#000",
    fontSize: 24,
  },
  label: {
    fontSize: 20,
  },
}));

const Index = ({
  feeds,
  papers,
  quote,
  tags,
  quickLinks,
}: {
  feeds: any;
  papers: any;
  quote: any;
  tags: any;
  quickLinks: any;
}) => {
  const classes = useStyles();

  const oGprops = {
    title: SLOGAN,
    description: SLOGAN_DESC,
    ogTitle: SLOGAN,
    image: "/home_page.JPG",
    url: HOME_URL,
  };

  return (
    <div className={classes.homePageContainer}>
      <OpenGraphTags {...oGprops} />

      <Container>
        <Jumbotron quote={quote} tags={tags} />
        <FeedsList home data={feeds} />
        <PaperList home data={papers} />
        <QuickLinks original={false} data={quickLinks} />
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  let papers: any = {};
  let quote = "";
  let feeds: any = {};
  let quickLinks: any = {};
  let tags: any = [];
  try {
    quote = await fetcher(QUOTE_URL).then((quoteResponse) => {
      return quoteResponse.quote;
    });
    feeds = await fetcher(FEED_URL_HOME);
    papers = await fetcher(PAPER_URL_HOME);
    tags = await fetcher(TAGS_URL).then((tagsResult) => tagsResult);
    quickLinks = await fetcher(QUICKLINK_URL);
  } catch (error) {
    console.log(error);
  }

  return {
    props: { quote, papers, feeds, tags, quickLinks },
    revalidate: 60 * 30,
  };
}

export default Index;
