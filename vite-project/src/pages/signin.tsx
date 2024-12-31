import { Button } from "../component/button";

export function SignIn(){
    return <div className="w-screen h-screen flex justify-center items-center bg-grey-200">
       
<div className=" bg-white rounded-md">
<div className="text-2xl text-grey-400 m-2">SignIn</div>
<Input1 placeholder="Username"></Input1>
<Input1 placeholder="password"></Input1>

<div className="flex justify-center">
        <Button text="Submit" varient="secondary"></Button>
        </div>
        
</div>
    </div>
}


function Input1({onChange ,placeholder}:{onChange :()=>void}){
    return <div>
        <input placeholder={placeholder} type="text"  className="px-4 py-4 m-2 bg-grey-200" onChange={onChange}></input>
    </div>
}