import React, { useEffect,useState } from "react";
import axios from "axios"
import './Home.css'

function Home(){
    const [data, setData] = useState([]);
    useEffect(()=>{
            axios.get("https://potterapi-fedeperin.vercel.app/en/books").then((res)=> res.data).then(d=>setData(d))
    },[data])
    return (
        <div>
            {
                data.map((obj)=>{
                    return (
                        <div className="home">
                            <h1>{obj.title}</h1>
                            <div>
                                <p>Description: {obj.description}</p>
                                <img src={obj.cover}/>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Home