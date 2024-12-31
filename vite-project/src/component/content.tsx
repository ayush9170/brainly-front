import { Cross } from "../icons/cross";
import { Button } from "./button";


export function Open({open,setOpen}){

    return <div className="w-full h-screen p-0 fixed bg-gray-500 opacity-80 flex justify-center items-center">
<div className="opacity-100 rounded-lg  bg-white ">
    <span >
       <div className="flex justify-end p-2" onClick={()=>{setOpen(false)}}>
       <Cross></Cross>
       </div>
        <div>
            <Input placeholder={"title"}></Input>
            <Input placeholder={"Link"}></Input>
        </div>
        <div className="flex justify-center">
        <Button text="Submit" varient="secondary"></Button>
        </div>
        
    </span>
</div>
    </div>
}


function Input({onChange ,placeholder}:{onChange :()=>void}){
    return <div>
        <input placeholder={placeholder} type="text"  className="px-4 py-4 m-2" onChange={onChange}></input>
    </div>
}