import React, { useState } from "react";
import axios from "axios";
import './Modify.css'

function Modify(){
    const [newtitle, setNewTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [pages, setPages] = useState("");
    const [number, setNumber] = useState();

    function modifyPost(e){
        e.preventDefault();
        const formData = {"number":number,"newtitle":newtitle, "date":date, "description":description, "pages":pages}
        axios.put("https://potterapi-fedeperin.vercel.app/en/books", formData).then((res)=>alert(res.status)).catch((err)=>{console.log(err).alert("POST failed");});
    }
    return (
        <div className="modify">
            <h2>Modify a movie</h2>
            <form onSubmit={modifyPost}>
                <label>Number</label>
                <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
                <label>New Title</label>
                <input type="text" value={newtitle} onChange={(e)=>setNewTitle(e.target.value)}/>
                <label>Release date</label>
                <input type="text" value={date}  onChange={(e)=>setDate(e.target.value)}/>
                <label>Description</label>
                <input type="text" value={description}  onChange={(e)=>setDescription(e.target.value)}/>
                <label>Pages</label>
                <input type="number" value={pages}  onChange={(e)=>setPages(e.target.value)}/>
                <input type="submit" value="Modify" id="modify-btn"/>
            </form>
        </div>
    );
}

export default Modify;