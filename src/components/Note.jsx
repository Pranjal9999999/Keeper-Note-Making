import React from "react";

function Note(props) {
  function handelClick(event) {
    props.deleteNote(props.id);
    event.preventDefault();
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handelClick}>DELETE</button>
    </div>
  );
}

export default Note;
