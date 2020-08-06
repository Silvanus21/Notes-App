import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(params) {
  const [text, setText] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function storeText(event) {
    const { value, name } = event.target;

    setText(preValue => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function OnButtonClick(event) {
    event.preventDefault();

    params.newNote(text);
    
    setText({
      title: "",
      content: ""
    });
  }

  return (
    <div className="formDiv">
      <form className="create-note">
        {isExpanded && (
          <input
            autoComplete="off"
            value={text.title}
            onChange={storeText}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expand}
          value={text.content}
          onChange={storeText}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={OnButtonClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
