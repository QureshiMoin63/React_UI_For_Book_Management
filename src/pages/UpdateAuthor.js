import { useEffect, useState } from "react";
import Nav from "../components/Nav";

function UpdateAuthor(props)
{
    const [data,setData]=useState([])
    console.warn("props",props.match.params.id)
    useEffect(async ()=>{
        let result = await fetch("http://localhost:8080/authors/"+props.match.params.ID);
        result =await result.json();
        setData(result)
    })
    return(
        <div>
            <Nav />
            <div className="col-sm-6 offset-sm-3">
            <h1>Update Author</h1>
            <input type="text" defaultValue={data.name}/> <br /> <br />
            <input type="text" defaultValue={data.description}/> <br /> <br />

            <button>Update Author</button>
            </div>
        </div>
    )
}

export default UpdateAuthor


