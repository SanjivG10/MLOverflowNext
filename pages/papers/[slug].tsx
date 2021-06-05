import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../../components/Header";
import Paper from "@material-ui/core/Paper";
import { ClassNameMap } from "@material-ui/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import PaperResources from "../../components/PaperResources";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import {
  COMMENT_URL_PAPER,
  PAPER_URL,
  RESOURCE_URL,
} from "../../hooks/constants";
import {
  getAuthHeadersFromCookie,
  useDelete,
  usePost,
} from "../../hooks/requests";
import { GetServerSideProps } from "next";
import axios from "axios";
import MyModal from "../../components/Modal";
import CommentForm from "../../components/Forms/CommentForm";
import DeleteForm from "../../components/Delete";
import PaperForm from "../../components/Forms/PaperForm";
import { IPaper } from "../../components/Paper";
import { isEmpty } from "../../helper";
import CommentList from "../../components/CommentList";
import { IComment } from "../../components/Comment";
import { UserContext } from "../_app";

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
  edit: {
    marginTop: 10,
    marginBottom: 10,
  },
  editButton: {},
  deleteButton: {},

  commentContainer: {
    marginTop: 20,
  },
  commentList: {},
}));

const PaperPage: React.FC = ({ _data, _resources, _comments }) => {
  const classes = useStyles();
  const router = useRouter();
  const [resourceClicked, setResourceClicked] = useState(false);
  const [resource, setResource] = useState<string>("");
  const [resourceType, setResourceType] = useState<string>("");
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("edit");
  const [posting, isPosting] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState(_data);
  const [allResources, setAllResources] = useState(_resources);
  const [paperComments, setPaperComments] = useState(_comments);

  const { state, dispatch } = useContext(UserContext);

  const onDeleteSuccess = async () => {
    setShow(false);

    const [deletedPaper, error] = await useDelete(PAPER_URL + `${data.id}/`);
    if (!error) {
      router.push("/papers");
    }
  };

  const onEditSuccess = (paper: IPaper) => {
    setShow(false);
    setData(paper);
  };

  const editPaper = () => {
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }
    setMode("edit");
    setShow(true);
  };

  const deletePaper = () => {
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }
    setMode("delete");
    setShow(true);
  };

  const addResource = async () => {
    if (!state.loginStatus) {
      dispatch({ type: "toggleModal", show: true });
      return;
    }
    isPosting(true);
    const [newResource, error] = await usePost(
      RESOURCE_URL + `?paper=${data.id}`,
      {
        type: resourceType,
        link: resource,
      }
    );

    if (!isEmpty(newResource)) {
      setResource("");
      setResourceClicked(false);
      setResourceType("");
      setAllResources({
        ...allResources,
        results: [newResource, ...allResources.results],
      });
    }
    isPosting(false);
  };

  const onCommentSuccess = (comment: IComment) => {
    const commentResults = [comment, ...paperComments.results];
    const newPaperComments = { ...paperComments, results: commentResults };
    setPaperComments(newPaperComments);
  };

  return (
    <div className={classes.root}>
      <Header title={data.title} />
      <Paper className={classes.container}>
        <div className={classes.beautify}>
          <h2 className={classes.title}>{data.title}</h2>
        </div>
        <div className={classes.authors}>
          {data.authors.map((author: { name: string }) => {
            return (
              <Link href={`/authors/${author.name}`} key={author.name}>
                <span className={classes.eachAuthor}>{author.name}</span>
              </Link>
            );
          })}
        </div>
        {data.isOwner && (
          <div className={classes.edit}>
            <Button onClick={editPaper} className={classes.editButton}>
              Edit
            </Button>
            <Button onClick={deletePaper} className={classes.deleteButton}>
              Delete
            </Button>
          </div>
        )}
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
              <div className={classes.date}>{data.published_at}</div>
            </div>

            {data.meta && (
              <div className={classes.beautify}>
                {specialLabel("info", "META", classes)}
                <div className={classes.meta}>{data.meta}</div>
              </div>
            )}

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

            {data.dataset && (
              <div className={classes.beautify}>
                {specialLabel("dataset", "DATASETS", classes)}
                <a
                  href={data.dataset}
                  className={`${classes.datasets}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.dataset}
                </a>
              </div>
            )}

            {data.model && (
              <div className={classes.beautify}>
                {specialLabel("model", "MODEL", classes)}
                <a
                  href={data.dataset}
                  className={`${classes.datasets}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.model}
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

        <PaperResources data={allResources} />

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
                    resourceType === "audio" ? classes.selectedResource : ""
                  } `}
                  onClick={() => setResourceType("audio")}
                >
                  Audio
                </Button>
                <Button
                  variant="outlined"
                  className={`${classes.eachResource} ${
                    resourceType === "video" ? classes.selectedResource : ""
                  } `}
                  onClick={() => setResourceType("video")}
                >
                  Video
                </Button>
                <Button
                  variant="outlined"
                  className={`${classes.eachResource} ${
                    resourceType === "article" ? classes.selectedResource : ""
                  } `}
                  onClick={() => setResourceType("article")}
                >
                  Article
                </Button>
              </div>
              {resourceType !== "" && (
                <>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label={`${
                        resourceType ? resourceType : "resource"
                      }  link`}
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
                    onClick={addResource}
                    disabled={!resource || !resourceType}
                  >
                    Post Link
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </Paper>

      <MyModal show={show} setShow={setShow}>
        {mode === "delete" ? (
          <DeleteForm title="paper" onDelete={onDeleteSuccess} />
        ) : (
          <PaperForm data={data} onSuccess={onEditSuccess} />
        )}
      </MyModal>

      <div className={classes.commentContainer}>
        <CommentForm
          onSuccess={onCommentSuccess}
          feedId={data.id}
          paperComment
        />
      </div>

      <div className={classes.commentList}>
        <CommentList comments={paperComments} paper />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  let _data = {};
  let _resources = {};
  let _comments = {};

  try {
    let { data } = await axios.get(
      PAPER_URL + `${slug}/`,
      getAuthHeadersFromCookie(context)
    );
    _data = data;
    const { data: comments } = await axios.get(
      COMMENT_URL_PAPER + `?paper=${data.id}`,
      getAuthHeadersFromCookie(context)
    );
    _comments = comments;
    const { data: resources } = await axios.get(
      RESOURCE_URL + `?paper=${data.id}`,
      getAuthHeadersFromCookie(context)
    );

    _resources = resources;
  } catch (error) {}

  // const { data: comments } = await axios.get(
  //   COMMENT_URL + `?paper=${data.id}`,
  //   getAuthHeadersFromCookie(context)
  // );

  if (isEmpty(_data)) {
    return {
      redirect: {
        destination: "/papers",
        permanent: false,
      },
    };
  }

  return {
    props: { _data, _comments, _resources },
  };
};

export default PaperPage;
