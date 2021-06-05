import React, { useState, useEffect, useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MyModal from "./Modal";
import DeleteForm from "./Delete";
import { useDelete, useGet } from "../hooks/requests";
import { RESOURCE_URL } from "../hooks/constants";
import { isEmpty } from "../helper";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserContext } from "../pages/_app";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    maxHeight: 200,
    overflow: "auto",
  },
  url: {
    textDecoration: "none",
    wordBreak: "break-word",
  },
  eachResource: {
    display: "flex",
    marginBottom: 10,
    border: "1px solid #Faf8f9",
    alignItems: "center",
  },
  type: {
    background: "#800000",
    color: "#fff",
    padding: 4,
    width: "50px",
    textAlign: "center",
    borderRadius: 4,
    marginRight: 10,
  },
  delete: {
    width: "fit-content",
    marginLeft: 10,
  },
}));

interface Resource {
  type: string;
  link: string;
  id: number;
  isOwner: boolean;
}

interface IProps {
  data: {
    results: Resource[];
    links: {
      first: string;
      last: string;
      next: null | string;
      prev: null | string;
    };
    meta: {
      pagination: {
        page: number;
        pages: number;
        count: number;
      };
    };
  };
}

const PaperResources: React.FC<IProps> = ({ data }: IProps) => {
  const [open, setOpen] = useState(false);
  const [resources, setResources] = useState(data);

  const [idToDelete, setId] = useState<number | null>(null);

  const { state, dispatch } = useContext(UserContext);

  const classes = useStyles();

  useEffect(() => {
    if (data) {
      setResources(data);
    }
  }, [data]);

  const openModal = (id: number) => {
    setId(id);
    setOpen(true);
  };

  const deleteResource = async () => {
    setOpen(false);
    if (!idToDelete) {
      return;
    }
    const [_, error] = await useDelete(RESOURCE_URL + `${idToDelete}/`);
    if (!error) {
      const newResources = resources.results.filter(
        (resource) => resource.id !== idToDelete
      );
      setResources({ ...resources, results: newResources });
    }
  };

  const fetchMoreResources = async () => {
    if (resources.links.next) {
      const [newResources, error] = await useGet(resources.links.next);
      if (!isEmpty(newResources)) {
        setResources({
          ...newResources,
          results: [...resources.results, ...newResources.results],
        });
      }
    }
  };

  return (
    <div className={classes.container} id="scrollableDiv">
      <h3>Resources</h3>

      <InfiniteScroll
        dataLength={resources?.results?.length || 0}
        next={fetchMoreResources}
        hasMore={Boolean(resources.links.next) || false}
        loader={<Spinner />}
        scrollableTarget="scrollableDiv"
      >
        <>
          {resources?.results?.map((resource: Resource) => {
            return (
              <div className={classes.eachResource} key={resource.id}>
                <div className={classes.type}>
                  {resource.type === "video"
                    ? "Video"
                    : resource.type === "audio"
                    ? "Audio"
                    : "Article"}
                </div>
                <a
                  className={classes.url}
                  href={resource.link}
                  target="_blank"
                  rel="noreferer noopener"
                >
                  {resource.link}
                </a>
                {resource.isOwner && (
                  <Button
                    color="secondary"
                    className={classes.delete}
                    onClick={() => {
                      if (!state.loginStatus) {
                        dispatch({ type: "toggleModal", show: true });
                        return;
                      }
                      openModal(resource.id);
                    }}
                  >
                    DELETE
                  </Button>
                )}
              </div>
            );
          })}
        </>
      </InfiniteScroll>

      <MyModal show={open} setShow={setOpen}>
        <DeleteForm title="resource" onDelete={deleteResource} />
      </MyModal>
    </div>
  );
};

export default PaperResources;
