import React, { useState } from "react";

function CreateArea() {

const [note, setNote] = useState({
  title: "",
  content: ""
})

function noteHandler(e){
  const {name, value} = e.target
  setNote(prevNote => {
  return {
    ...prevNote, [name] : value
  }
})
}

  return (
    <div>
      <form>
        <input name="title" onChange={noteHandler} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={noteHandler} value={note.content} placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
