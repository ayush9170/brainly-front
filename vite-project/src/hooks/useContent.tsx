
import { useEffect, useState } from "react";
import axios from "axios";

export  async function useContent(){
    const [contents,setContent] = useState([]);
try{
    useEffect(()=>{
 axios.get("http://localhost:3000/api/v1/content",{
    headers :{ authorization: `Bearer ${localStorage.getItem("token")}`} 
}).then(
    (response)=>{ setContent(response.data.content)}
)
    },[])

}catch(e){
    console.log(e);
}

    return contents;
}