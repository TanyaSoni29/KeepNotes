import React, { useState } from "react";

function CreateArea(props) {
    const [note, setnote] = useState({
        title:"",
        content:""
    });
    
    function handelChange(event){
        const {value,name }= event.target;
        setnote(prevNote =>{
            return {...prevNote,
            [name]: value}
        })
    }

    function submitNote(event){
        props.addnote(note);
        setnote({
            title:"",
        content:""
        })
        event.preventDefault();

    }
  return (
    <div>
      <form>
        <input onChange={handelChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handelChange} name="content" placeholder="Take a note..." rows="3"  value={note.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;