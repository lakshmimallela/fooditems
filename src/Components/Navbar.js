import React from "react";
import { Link } from "react-router-dom";
import x from '../Components/images/logo-small.png';
import {auth} from "./Firebase";
const Navbar=({presentUser})=>{
    return(
        <>
       <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container mb-2">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
       </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
        <a className="  navbar-brand" href="#"> <img src={x} className=""/></a>         
          <ul className="navbar-nav ms-auto  homediv">
           <li className="nav-item mt-3 mb-2">
            <button className="btn "><Link className=" home nav-link btn text-white" to="/">Home</Link></button>
            </li>
           <li className="nav-item mt-3">
            <button className="btn"><a className="nav-link  text-white Api" href="#">API</a></button>
           </li>
            </ul>
      <form className="nav-item mt-2 ">
        <input className="search " type="search" placeholder="Search" aria-label="Search"/>
        </form>
        <form className=" mt-2">

        <button onClick={()=>auth.signOut()} className="btn btn-info btn-sm ">signOut</button>
        <span className="text-white"> {presentUser.email}</span>
        </form>
       
    </div>
  </div>
</nav>
      
        </>
    )
}
export default Navbar