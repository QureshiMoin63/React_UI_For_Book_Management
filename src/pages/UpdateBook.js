import Nav from "../components/Nav";
import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";

import {useState, useEffect} from 'react';

  function UpdateBook(props)
{
    const [data,setData]=useState([])
    console.warn("props",props.match.params.id)
    useEffect(async ()=>{
        let result = await fetch("http://localhost:8080/books/"+props.match.params.id);
        result = await result.json();
        setData(result)
    })
    return(
        <div>
            <Nav />
            <div className="col-sm-6 offset-sm-3">
            <h1>Update Book</h1>
            <input type="text" defaultValue={data.name}/><br/>
            <input type="text" defaultValue={data.description}/><br/>

            <button>Update Book</button>
            </div>
        </div>
    )
}

export default UpdateBook