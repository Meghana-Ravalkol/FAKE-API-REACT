import React, { useState } from "react";
import axios from "axios";
import './Add.css'

function Add(){
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [pages, setPages] = useState("");

    function addPost(e){
        e.preventDefault();
        const formData = {"title":title, "date":date, "description":description, "pages":pages}
        axios.post("https://potterapi-fedeperin.vercel.app/en/books", formData).then((res)=>alert(res.status)).catch((err)=>{console.log(err).alert("POST failed");});
    }
    return (
        <div className="add">
            <h2>Add a new movie</h2>
            <form onSubmit={addPost}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Release date</label>
                <input type="text" value={date}  onChange={(e)=>setDate(e.target.value)}/>
                <label>Description</label>
                <input type="text" value={description}  onChange={(e)=>setDescription(e.target.value)}/>
                <label>Pages</label>
                <input type="number" value={pages}  onChange={(e)=>setPages(e.target.value)}/>
                <input type="submit" value="Add" id="add-btn"/>
            </form>
        </div>
    );
}

export default Add;