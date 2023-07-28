import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./createArea";

function App() {
    const [notes, setnotes]= useState([])
    function addnote(note){
        setnotes(prevNotes=>{
            return [...prevNotes, note]
        })

    }
    function deleteNote(id){
         setnotes(prevNotes =>{
   return prevNotes.filter((noteitem,index)=>{
return index !==id;
    })
})
    }
    return (<div>
        <Header />
        <CreateArea addnote={addnote}/>
        {notes.map((noteitem, index) =>{ return (<Note key={index} id={index} title={noteitem.title} content={noteitem.content} onDelete={deleteNote}
              />
              );
              })}
        <Footer />
    </div>);
}




export default App;