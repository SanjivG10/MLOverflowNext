import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ValidationTextField from "./../ValidationTextField";

export type ITag = {
  name: string;
};

export interface ITags {
  placeholder: string;
  triggerKey?: string;
  length: number;
  maxNumber: number;
  clear?: string;
  setError: (err: string) => void;
  tags: ITag[];
  setTags: ([]) => void;
  label: string;
  disabled?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {},
  addedTagContainer: {
    display: "flex",
    marginTop: 10,
    marginBottom: 10,
    flexWrap: "wrap",
  },
  myInput: {
    marginBottom: 20,
  },

  eachTag: {
    marginRight: 10,
    marginTop: 5,
    background: "#800000",
    padding: 4,
    color: "#fff",
    borderRadius: 4,
    textAlign: "center",
    "&:hover": {
      background: "#000",
    },
  },
  length: {
    marginBottom: 10,
  },
}));

const TagsForm: React.FC<ITags> = (props: ITags) => {
  const {
    placeholder,
    triggerKey,
    length,
    maxNumber,
    clear,
    setError,
    tags,
    setTags,
    label,
    disabled,
  } = props;

  const [tag, setTag] = useState<ITag>({ name: "" });

  useEffect(() => {
    if (clear) {
      setTags([]);
    }
  }, [clear]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (tag.name == "" || tags.length === maxNumber) {
      return;
    }
    setError("");

    if (!triggerKey) {
      if (e.key === " ") {
        const element = tags.some(
          (eachTag: ITag) =>
            eachTag.name.trim() === tag.name.trim().toLowerCase()
        );
        if (element) {
          setError("tag already exists");
          return;
        }

        setTags([...tags, tag]);
        setTag({ name: "" });
      }
    } else {
      if (e.key === triggerKey) {
        let val = tag.name.replace(/\s+/g, " ");
        val = val.trim();
        const element = tags.some(
          (eachTag: ITag) =>
            eachTag.name.trim().toLowerCase() === val.trim().toLowerCase()
        );
        if (element) {
          setError("already exists");
          return;
        }

        const elemToPost = { name: tag.name.toLowerCase() };
        setTags([...tags, elemToPost]);
        setTag({ name: "" });
      }
    }
  };

  const handleRemoveItem = (name: string) => {
    const newTags = tags.filter((item) => item.name !== name);
    setTags(newTags);
    setError("");
  };

  const addTag = (value: string) => {
    value = value.replace(/\s+/g, " ");

    if (value.length <= length) {
      setTag({ name: value });
    }
  };

  const renderTags = () => {
    const results = [];
    let index = 0;
    for (const myTag of tags) {
      const element = myTag.name;
      results.push(
        <div
          key={element + index}
          className={classes.eachTag}
          onClick={() => handleRemoveItem(element)}
        >
          {element}
        </div>
      );
      index++;
    }
    return results;
  };

  const classes = useStyles();

  return (
    <div>
      <div className={classes.addedTagContainer}>{renderTags()}</div>
      <div className={classes.container}>
        <div>
          <ValidationTextField
            label={label}
            disabled={maxNumber === tags.length || disabled}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            error={tags.some((eachTag: ITag) => {
              return eachTag.name === tag.name.trim().toLowerCase();
            })}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              let val = e.target.value;
              if (!triggerKey) {
                val = val.trim();
              }
              addTag(val);
            }}
            value={tag?.name || ""}
            onPaste={(e: React.ClipboardEvent) => e.preventDefault()}
          />

          {tag.name && (
            <div className={classes.length}>
              {length - tag.name.length} remaining
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagsForm;
