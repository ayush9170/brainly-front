import { useRef } from "react";
import { Button } from "../component/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";





export  function SignUp(){
    const userRef  = useRef<any>();
    const passwordRef = useRef<any>();
    const navigate = useNavigate();

    async function signup(){
await axios.post("  http://localhost:3000/api/v1/signup" ,{
    username :userRef.current.value,
    password : passwordRef.current.value

})
navigate("/signin")
}


    return <div className="w-screen h-screen flex justify-center items-center bg-grey-200">
       
<div className=" bg-white rounded-md">
<div className="text-2xl text-grey-400 m-2">SignUp</div>
<Input1 refrence={userRef} placeholder="Username"></Input1>
<Input1  refrence= {passwordRef} placeholder="password"></Input1>

<div className="flex justify-center">
        <Button text="Submit" varient="secondary" onClick={signup}></Button>
        </div>
        
</div>
    </div>
}


function Input1({ refrence,placeholder}:{refrence :any ;placeholder:string}){
    return <div>
        <input placeholder={placeholder} type="text"  className="px-4 py-4 m-2 bg-grey-200"  ref={refrence}></input>
    </div>
}