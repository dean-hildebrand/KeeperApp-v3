import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  function addNote(note){
    
  }


  return (
    <div>
      <Header />
      <CreateArea 
        addNote={addNote}
      />
      <Note 
          key={1} 
          title="Deans note" 
          content="Deans content" />
      <Footer />
    </div>
  );
}

export default App;
