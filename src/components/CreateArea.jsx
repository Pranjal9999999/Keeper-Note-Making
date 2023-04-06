import React, { useState } from "react";

function CreateArea(props) {
  const [curr_note, setnote] = useState({ title: "", content: "" });
  function updateNote(event) {
    const { name, value } = event.target;
    setnote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(curr_note);
    setnote({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={updateNote}
          value={curr_note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={updateNote}
          value={curr_note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
