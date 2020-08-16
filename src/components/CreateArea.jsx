import React, { useState } from "react";

function CreateArea(props) {

  // setting initial state as an object with 2 keys
const [note, setNote] = useState({
  title: "",
  content: ""
})

// function that destrcutures the event, then sets state with prev state and spreads in the new note
function noteHandler(e){
  const {name, value} = e.target
  setNote(prevNote => {
  return {
    ...prevNote, [name] : value
  }
})
}

function submitNote(e){
  e.preventDefault
  props.addNote()
}

  return (
    <div>
      <form>
        <input name="title" onChange={noteHandler} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={noteHandler} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
