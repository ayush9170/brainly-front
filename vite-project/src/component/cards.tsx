
import { useEffect, useState } from "react";
import {Icon} from "../icons/shareIcon"

interface card{
    title:string;
    type:"youtube"|"linkedIn";
    link:string;
}

export function Card({title,type,link}:card){

    const [split ,setsplit ] =useState("");

    useEffect(()=>{
        if(type == "youtube")  setsplit(link.split("youtu.be/")[1]);
        else setsplit(link.split("activity-")[1].split("-")[0])
      
    },[link])
 
    return <div>
<div className="p-8 bg-white rounded-md border-gray-200 max-w-96 border m-4">
<div className="flex justify-between">
    <div className="flex items-center text-md">
    <div className="pr-2">
        <Icon></Icon>
        </div>
{title}
    </div>
    <div className="flex items-center">
        <div className="pr-2">
            <a href={link} target="_blank">
        <Icon></Icon>
        </a>
        </div>
<Icon></Icon>
    </div>
</div>

<div className="pt-4">
    {type ==="youtube" && <iframe className="w-full"  src={`https://www.youtube.com/embed/${split}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>}
{type==="linkedIn" && <iframe className="w-full" src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${split}?collapsed=1`}   title="Embedded post"></iframe>

}
</div>

</div>

    </div>
 
}

