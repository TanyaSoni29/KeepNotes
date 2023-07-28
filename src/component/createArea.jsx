import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
    const [isExpanded, setisExpanded] =useState(false)
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
    function expand(){
        setisExpanded(true);
    }
  return (
    <div>
      <form className="create-note">
       {isExpanded && <input onChange={handelChange} name="title" placeholder="Title" value={note.title} />}
        <textarea onClick={expand} onChange={handelChange} name="content" placeholder="Take a note..." rows={isExpanded?3:1}  value={note.content}/>
        <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;