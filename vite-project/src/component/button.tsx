import { ReactElement } from "react";

interface items{
text:string;
icon? :ReactElement;
varient:"primary" |"secondary";
onClick ? : ()=>void       //?
 
}

const varientClass ={
    "primary": "bg-blue-300 text-blue-400",
    "secondary":"bg-blue-500 text-white"
}


const defaultStyle ="flex rounded-md px-4 py-2 font-light  items-center m-4"

export function Button({text,icon,varient,onClick}:items){
return <button onClick = {onClick} className={varientClass[varient] +" "+defaultStyle }>
    {icon}
    {text}
</button>
}