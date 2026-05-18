import React, { useState } from "react";
import axios from "axios";
import './Delete.css'

function Delete(){
    const [number, setNumber] = useState("");

    function delPost(e){
        e.preventDefault();
        axios.delete("https://potterapi-fedeperin.vercel.app/en/books").then((res)=>alert(res.status)).catch((err)=>{console.log(err).alert("DELETE failed");});
    }
    return (
        <div className="delete">
            <h2>Delete a movie</h2>
            <form onSubmit={delPost}>
                <label>Number</label>
                <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
                <input type="submit" value="Delete" id="del-btn"/>
            </form>
        </div>
    );
}

export default Delete;