import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Paper, { IPaper } from "./Paper";
import { DUMMY_PAPER } from "./../dummy";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      marginTop: 40,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    mainLabel: {
      fontSize: 40,
      marginLeft: "auto",
      marginRight: "auto",
      width: "fit-content",
      "&:hover": {
        cursor: "pointer",
      },
    },
    moreButton: {
      width: "fit-content",
      marginLeft: "auto",
      marginRight: "auto",
    },
    seeMore: {
      fontSize: 16,
    },
  })
);

export default function PapersList({ original }: { original?: boolean }) {
  const classes = useStyles();
  const router = useRouter();

  const items = DUMMY_PAPER;

  return (
    <>
      {!original && (
        <Link href="/papers">
          <h1 className={classes.mainLabel}>Papers</h1>
        </Link>
      )}

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {items.map((item: IPaper) => {
          return (
            <div
              key={item.id}
              onClick={() => router.push(`/papers/${item.slug}`)}
            >
              <Paper {...item} />
            </div>
          );
        })}
      </List>

      {!original && (
        <Link href="/papers">
          <div className={classes.moreButton}>
            <Button color="secondary" className={classes.seeMore}>
              SEE MORE
            </Button>
          </div>
        </Link>
      )}
    </>
  );
}
