
import { useEffect, useState } from "react";
import axios from "axios";

export function useContent(){
    const [content,setContent] = useState([]);

    useEffect(()=>{
const response = axios.get("http://localhost:3000/api/v1/content",{
    headers :{ authorization: `Bearer ${localStorage.getItem("token")}` }
}).then(
    (response)=>{ setContent(response.data.content)}
)
    },[])

    return content;
}