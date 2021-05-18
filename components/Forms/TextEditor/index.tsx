import React from "react";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import { colors, emojis } from "./constants";
import { EditorState } from "react-draft-wysiwyg";

interface IProps {
  editorState: EditorState;
  placeholder: string;
  onEditorStateChange: (newEditorState: any) => void;
  uploadCallback: (file: File) => void;
}
export default function TextEditor({
  editorState,
  placeholder,
  onEditorStateChange,
  uploadCallback,
}: IProps) {
  const toolbarConfig = {
    options: [
      "link",
      "list",
      "textAlign",
      "inline",
      "colorPicker",
      "embedded",
      "emoji",
      "image",
      "remove",
      "history",
    ],
    inline: {
      inDropdown: false,
      options: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "monospace",
        "superscript",
        "subscript",
      ],
    },
    blockType: {
      inDropdown: true,
      options: [
        "Normal",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "Blockquote",
        "Code",
      ],
    },
    list: {
      inDropdown: false,
    },
    textAlign: {
      inDropdown: false,
      options: ["left", "center", "right", "justify"],
    },
    colorPicker: {
      colors: colors,
    },
    link: {
      inDropdown: false,
      showOpenOptionOnHover: true,
      defaultTargetOption: "_self",
      options: ["link", "unlink"],
    },
    emoji: {
      emojis: emojis,
    },
    image: {
      uploadCallback,
      uploadEnabled: true,
      alignmentEnabled: true,
      previewImage: true,
      inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
      alt: { present: false, mandatory: false },
      defaultSize: {
        height: 500,
        width: 500,
      },
    },

    history: {
      inDropdown: false,
      options: ["undo", "redo"],
    },
  };

  return (
    <Editor
      toolbar={toolbarConfig}
      editorState={editorState}
      placeholder={placeholder}
      editorClassName="feedFormReact"
      wrapperClassName="wrapperFormReact"
      onEditorStateChange={onEditorStateChange}
      stripPastedStyles={true}
    />
  );
}
