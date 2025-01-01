import axios from "axios";
import { Button } from "../component/button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn(){

    const userRef  = useRef<any>();
    const passwordRef = useRef<any>();
    const navigate = useNavigate();

    async function signin(){
const response =await axios.post("  http://localhost:3000/api/v1/signin" ,{
    username :userRef.current.value,
    password : passwordRef.current.value
 
})
const jwt = response.data.token;
localStorage.setItem(jwt ,"token");
navigate("/dashboard")
}
    return <div className="w-screen h-screen flex justify-center items-center bg-grey-200">
       
<div className=" bg-white rounded-md">
<div className="text-2xl text-grey-400 m-2">SignIn</div>
<Input1  refrence={userRef} placeholder="Username"></Input1>
<Input1  refrence={passwordRef} placeholder="password"></Input1>

<div className="flex justify-center">
        <Button text="Submit" varient="secondary" onClick={signin}></Button>
        </div>
        
</div>
    </div>
}



function Input1({ refrence,placeholder}:{refrence :any ;placeholder:string}){
    return <div>
        <input placeholder={placeholder} type="text"  className="px-4 py-4 m-2 bg-grey-200"  ref={refrence}></input>
    </div>
}