import React, { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const WYSISWYG = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
     
      <div className="jr-card">
        <Editor
          editorStyle={{
            width: "100%",
            minHeight: 100,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "lightgray",
          }}
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          onEditorStateChange={(editorState) => setEditorState(editorState)}
        />
        <textarea
          style={{ width: "100%", height: 200 }}
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
  );
};

export default WYSISWYG;
