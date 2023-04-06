import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);
  function addNote(note) {
    setnotes((prevVal) => {
      return [...prevVal, note];
    });
  }
  function deletenote(id) {
    //console.log("delete note");
    setnotes((prevVal) => {
      return prevVal.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deletenote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
