import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  HOME_URL,
  HOME_URL_OPEN_GRAPH,
  PUBLIC_MEDIA_URL,
  QUICKLINK_URL,
} from "../../hooks/constants";
import { useGet } from "../../hooks/requests";
import Spinner from "../../components/Spinner";
import QuickLinkList, {
  IQuickLink,
  IQuickLinkProps,
} from "../../components/QuickLinkList";
import QuickLinkForm from "../../components/Forms/QuickLinkForm";
import { SLOGAN, SLOGAN_DESC } from "../../constants";
import OpenGraphTags from "../../components/OpenGraphTags";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  })
);

const QuickLinksPage = () => {
  const [quickLinks, setQuickLinks] = useState<IQuickLinkProps | any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getQuickLinks = async () => {
      try {
        const [data] = await useGet(QUICKLINK_URL);
        setQuickLinks(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    getQuickLinks();
  }, []);

  const successSubmit = (quickLink: IQuickLink) => {
    const newData = {
      ...quickLinks,
      results: [quickLink, ...quickLinks.results],
    };
    setQuickLinks(newData);
  };

  const oGprops = {
    title: SLOGAN,
    description: SLOGAN_DESC,
    ogTitle: SLOGAN,
    image:
      "https://api.mloverflow.com/media/a76536e2-d488-49f5-b32d-f9f97f7b9dd4.JPG",
    url: HOME_URL_OPEN_GRAPH,
  };

  const classes = useStyles();
  return (
    <>
      <OpenGraphTags {...oGprops} />
      <div className={classes.container}>
        <QuickLinkForm successSubmit={successSubmit} />
        {loading ? <Spinner /> : <QuickLinkList quickLinks={quickLinks} />}
      </div>
    </>
  );
};

export default QuickLinksPage;
