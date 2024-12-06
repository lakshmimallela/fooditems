import React from "react";
import Home from "./Themealdb"
import Starbarry from "./starbarry";
import Footer from "./Footer"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SearchMoreitems from "./Searchitems";
import Navbar from "./Navbar";
const Direct = ({presentUser}) =>{
    return(
        <>
        <Router>
        <Navbar presentUser = {presentUser}/>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/Starbarry' element={<Starbarry/>}/>
             <Route path='/SearchMoreitems' element={<SearchMoreitems/>}/>
        </Routes>
       <Footer/>
      </Router>

        </>
    )
}
export default Direct