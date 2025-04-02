import { useRef, useState } from "react";
import { Cross } from "../icons/cross";
import { Button } from "./button";
import axios from "axios";


enum ContentType{
    Youtube = "youtube",
    LinkedIn ='linkedIn'
}


export function Open({open,setOpen}){

    const titleref  = useRef<HTMLInputElement>();
    const linkref = useRef<HTMLInputElement>();
    const [type,setType] = useState("")
   

    async function  addContent(){
 await axios.post("http://localhost:3000/api/v1/content" ,{
   link: linkref.current?.value,
   type :type,
   title :titleref.current?.value,

} ,{   headers :{ authorization: `Bearer ${localStorage.getItem("token")}`}}
)
setOpen(false);
}

    return <div className="w-full h-screen p-0 fixed bg-gray-500 opacity-80 flex justify-center items-center">
<div className="opacity-100 rounded-lg  bg-white ">
    <span >
       <div className="flex justify-end p-2" onClick={()=>{setOpen(false)}}>
       <Cross></Cross>
       </div>
        <div>
            <Input  refrence={titleref} placeholder={"title"}></Input>
            <Input  refrence={linkref} placeholder={"Link"}></Input>
        </div>
        <div className="flex justify-center text-purple-800"> 
        <h1>Type</h1>
        </div>
        <div className="flex">
            <Button text="Youtube" varient={type===ContentType.Youtube ? "secondary": "primary" } onClick={()=>{setType(ContentType.Youtube)}}></Button>
            <Button text="LinkedIn" varient={type===ContentType.LinkedIn ? "secondary": "primary" } onClick={()=>{setType(ContentType.LinkedIn)}}></Button>
            </div>
        <div className="flex justify-center">
        <Button text="Submit" varient="secondary" onClick={ addContent}></Button>
        </div>
        
    </span>
</div>
    </div>
}


function Input({ refrence,placeholder}:{refrence :any ;placeholder:string}){
    return <div>
        <input placeholder={placeholder} type="text"  className="px-4 py-4 m-2 bg-grey-200"  ref={refrence}></input>
    </div>
}