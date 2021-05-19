import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  url: {
    textDecoration: "none",
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
}));

interface Resource {
  type: string;
  url: string;
}

interface IProps {
  data: Resource[];
}

const PaperResources: React.FC<IProps> = (props: IProps) => {
  const resources = props.data;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3>Resources</h3>
      {resources.map((resource: Resource) => {
        return (
          <div className={classes.eachResource}>
            <div className={classes.type}>
              {resource.type === "V"
                ? "Video"
                : resource.type === "A"
                ? "Audio"
                : "Text"}
            </div>
            <a
              className={classes.url}
              href={resource.url}
              target="_blank"
              rel="noreferer noopener"
            >
              {resource.url}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default PaperResources;
