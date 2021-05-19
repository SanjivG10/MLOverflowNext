import React, { useState } from "react";
import { useRouter } from "next/router";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/Header";
import Paper from "@material-ui/core/Paper";
import { DUMMY_COMMENTS, DUMMY_PAPER, DUMMY_RESOURCES } from "../../dummy";
import { ClassNameMap } from "@material-ui/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import PaperResources from "../../components/PaperResources";
import CommentForm from "../../components/Forms/CommentForm";
import CommentList from "../../components/CommentList";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

interface IProps {}
interface IPaper {
  title: string;
  authors: { name: string }[];
  abstract: string;
  publishedDate: string;
  link: string;
  model?: string;
  datasets?: string;
  meta?: string;
  tags?: { name: string }[];
  codes?: { language: string; link: string }[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 40,
    margin: 40,
  },
  container: {
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 36,
  },
  authors: {
    marginBottom: 20,
    textAlign: "center",
  },
  eachAuthor: {
    marginRight: 10,
    marginBottom: 10,
    fontStyle: "italic",
    color: "blue",
    "&:hover": {
      cursor: "pointer",
    },
  },
  abstract: {},
  beautify: {
    marginBottom: 20,
  },

  specialLabel: {
    marginTop: 10,
    display: "flex",
    borderBottom: "5px solid teal",
    width: "fit-content",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  meta: {},
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  date: {},
  link: {
    textDecoration: "none",
  },
  code: {
    textDecoration: "none",
  },
  datasets: {
    textDecoration: "none",
  },
  langIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  tags: {
    marginTop: 10,
    display: "flex",
    flexWrap: "wrap",
  },
  tag: {
    background: "#800000",
    color: "#fff",
    width: "fit-content",
    padding: 4,
    borderRadius: 4,
    "&:hover": {
      background: "#000",
      cursor: "pointer",
    },
    marginRight: 10,
    marginTop: 10,
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
  },
  detail: {
    display: "flex",
    flexDirection: "column",
  },
  pdf: {
    textDecoration: "none",
  },
  comments: {
    marginTop: 20,
    marginBottom: 20,
  },
  resourceType: {
    display: "flex",
    marginTop: 10,
  },
  eachResource: {
    marginRight: 10,
  },
  selectedResource: {
    background: "#000",
    color: "#fff",
    "&:hover": {
      background: "#000",
      color: "#fff",
    },
  },
  resourceLink: {
    marginTop: 10,
    width: "50%",
  },

  postLinkButton: {
    marginTop: 10,
  },
}));

const PaperPage: React.FC<IProps> = (props: IProps) => {
  const { query } = useRouter();
  const slug = query.slug;
  const classes = useStyles();
  const [resourceClicked, setResourceClicked] = useState(false);
  const [resource, setResource] = useState<string>("");
  const [resourceType, setResourceType] = useState<string>("");

  const data: IPaper = DUMMY_PAPER[0];

  const router = useRouter();

  return (
    <div className={classes.root}>
      <Header title={data.title} />
      <Paper className={classes.container}>
        <div className={classes.beautify}>
          <h2 className={classes.title}>{data.title}</h2>
        </div>
        <div className={classes.authors}>
          {data.authors.map((author) => {
            return (
              <span key={author.name} className={classes.eachAuthor}>
                {author.name}
              </span>
            );
          })}
        </div>
        <div className={classes.beautify}>
          {specialLabel("abstract", "ABSTRACT", classes)}
          <div className={classes.abstract}>{data.abstract}</div>
        </div>

        {data.tags && data.tags.length > 0 && (
          <div className={classes.beautify}>
            <div className={classes.tags}>
              {data.tags.map((tag: { name: string }) => {
                return (
                  <div
                    key={tag.name}
                    className={classes.tag}
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      router.push("/tag?key=" + tag.name);
                    }}
                  >
                    {tag.name}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Details</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.detail}>
            <div className={classes.beautify}>
              {specialLabel("clock", "PUBLISHED DATE", classes)}
              <div className={classes.date}>{data.publishedDate}</div>
            </div>

            <div className={classes.beautify}>
              {specialLabel("info", "META", classes)}
              <div className={classes.meta}>{data.meta}</div>
            </div>

            <div className={classes.beautify}>
              {specialLabel("link", "LINK", classes)}
              <a
                href={data.link}
                className={`${classes.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.link}
              </a>
            </div>

            {data.codes &&
              data.codes.length > 0 &&
              data.codes[0].link &&
              data.codes[0].language && (
                <div className={classes.beautify}>
                  {specialLabel("code", "CODE", classes)}
                  <a
                    href={data.codes[0].link}
                    className={classes.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.codes[0].link}
                  </a>
                  <img
                    alt=""
                    src={`/${data.codes[0].language}.svg`}
                    className={classes.langIcon}
                  />
                </div>
              )}

            {data.datasets && (
              <div className={classes.beautify}>
                {specialLabel("dataset", "DATASETS", classes)}
                <a
                  href={data.datasets}
                  className={`${classes.datasets}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.datasets}
                </a>
              </div>
            )}

            {data.link.startsWith("https://arxiv.org/abs/") && (
              <div className={classes.beautify}>
                {specialLabel("pdf", "PDF", classes)}
                <a
                  href={`https://arxiv.org/pdf/${data.link
                    .split("/")
                    .slice(-1)
                    .pop()}`}
                  className={`${classes.pdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`https://arxiv.org/pdf/${data.link
                    .split("/")
                    .slice(-1)
                    .pop()}`}
                </a>
              </div>
            )}
          </AccordionDetails>
        </Accordion>

        <PaperResources data={DUMMY_RESOURCES} />

        {!resourceClicked && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setResourceClicked(true)}
          >
            Add Resource
          </Button>
        )}

        {resourceClicked && (
          <>
            <div>
              <h2>Choose Resource Type</h2>
              <div className={classes.resourceType}>
                <Button
                  variant="outlined"
                  className={`${classes.eachResource} ${
                    resourceType === "A" ? classes.selectedResource : ""
                  } `}
                  onClick={() => setResourceType("A")}
                >
                  Audio
                </Button>
                <Button
                  variant="outlined"
                  className={`${classes.eachResource} ${
                    resourceType === "V" ? classes.selectedResource : ""
                  } `}
                  onClick={() => setResourceType("V")}
                >
                  Video
                </Button>
                <Button
                  variant="outlined"
                  className={`${classes.eachResource} ${
                    resourceType === "T" ? classes.selectedResource : ""
                  } `}
                  onClick={() => setResourceType("T")}
                >
                  Article
                </Button>
              </div>
              {resourceType !== "" && (
                <>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Resource Link"
                      className={classes.resourceLink}
                      variant="outlined"
                      value={resource}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setResource(e.target.value)
                      }
                    />
                  </div>

                  <Button
                    className={classes.postLinkButton}
                    variant="outlined"
                    color="primary"
                  >
                    Post Link
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </Paper>

      <div className={classes.comments}>
        <CommentForm />
        <CommentList comments={DUMMY_COMMENTS} />
      </div>
    </div>
  );
};

const specialLabel = (icon: string, label: string, classes: ClassNameMap) => {
  return (
    <div>
      <div className={classes.specialLabel}>
        <div>
          <img src={`/${icon}.svg`} alt="" className={classes.icon} />
        </div>
        <div className={classes.label}>{label}</div>
      </div>
    </div>
  );
};

export default PaperPage;
