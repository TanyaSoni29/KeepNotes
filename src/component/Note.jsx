import React from "react";

function Note(props) {
    function handelClick(){
        props.onDelete(props.id)
    }
    return (<div className="note">
<h1 className="h1">{props.title}</h1>
<p className="p">{props.content}</p>
<button onClick={handelClick}>Delete</button>
</div>);
}
export default Note;
