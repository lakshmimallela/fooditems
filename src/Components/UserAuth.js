import React, { useState } from "react";
import { auth,db } from "./Firebase";

const UserAuth = ()=>{
    setInterval(function(){
        var randomColor=Math.floor(Math.random()*1677215).toString(16)
        document.body.style.backgroundColor="#"+randomColor
    },10000)
    const[data,setData]=useState({
        email:"",
        password:"",
    })
    const{email,password}=data;

    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const SigUp = (e)=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((user)=>console.log(user))
        .then((err)=>console.log(err))
    }
    const SigIn = (e)=>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then((user)=>console.log(user))
        .then((err)=>console.log(err))
    }

    return(
        <div className="container">
            <div className="row ">
                <div className="col-5  mx-auto">
            
            <center>
                <form className="border border-1 p-3 mt-5">
                    <input type="email" name="email" className="form-control shadow-none" value={email} placeholder="Enter Email" onChange={changeHandler}/> <br/>
                    <input type="password" name="password"  className="form-control shadow-none" value={password} placeholder="Enter Password" onChange={changeHandler}/> <br/><br/>
                    <button onClick={SigIn} className="btn btn-primary ">SigIn</button>
                    <button onClick={SigUp} className="btn btn-success ms-3">SigUp</button>
                </form>

            </center>
            </div>
        </div>
        </div>
    )
}
export default UserAuth