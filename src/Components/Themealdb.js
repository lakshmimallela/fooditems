import React from "react";
import meal from '../Components/images/meal-icon.png';

import meals from'../Components/images/meal-icon6.png';
import me from'../Components/images/meal-icon5.png';
import mea from'../Components/images/meal-icon4.png';
import late from'../Components/images/meal.jpg';
import late1 from'../Components/images/meal1.jpg';
import late2 from'../Components/images/meal2.jpg';
import late3 from'../Components/images/meal3.jpg';
import late4 from'../Components/images/meal4.jpg';
import late5 from'../Components/images/meal5.jpg';
import late6 from'../Components/images/meal6.jpg';
import late7 from'../Components/images/meal8.jpg';
import chicken from'../Components/images/Chicken.png';
import Salmon from'../Components/images/Salmon.png';
import Beef from'../Components/images/Beef.png';
import Pork from '../Components/images/Pork.png';
import meal9 from'../Components/images/meal9.jpg';
import meal10 from'../Components/images/meal10.jpg';
import meal11 from'../Components/images/meal1.jpg';
import meal12 from'../Components/images/meal12.jpg';
import meal13 from'../Components/images/meal13.jpg';
import meal14 from'../Components/images/meal14.jpg';
import meal15 from'../Components/images/meal15.jpg';
import meal16 from'../Components/images/meal16.jpg';
import Brisk from'../Components/images/Beef Brisket.png';
import Must from'../Components/images/Mustard Seeds.png';
import Fries from'../Components/images/Fries.png';
import Jas from'../Components/images/Jasmine Rice.png';
import country from'../Components/images/country.png';
import country1 from'../Components/images/country1.png';
import country2 from'../Components/images/country2.png';
import country3 from'../Components/images/country3.png';
import country4 from'../Components/images/country4.png';
import country5 from'../Components/images/country5.png';
import country6 from'../Components/images/country6.png';
import country7 from'../Components/images/country7.png';
import country8 from'../Components/images/country8.png';
import country9 from'../Components/images/country9.png';
import country10 from'../Components/images/country1o.png';
import country11 from'../Components/images/country11.png';
import country12 from'../Components/images/country12.png';
import country13 from'../Components/images/country13.png';
import country14 from'../Components/images/country14.png';
import country15 from'../Components/images/country15.png';
import country16 from'../Components/images/country16.png';
import country17 from'../Components/images/country17.png';
import country18 from'../Components/images/country18.png';
import country19 from'../Components/images/country19.png';
import country20 from'../Components/images/country20.png';
import country21 from'../Components/images/country21.png';
import country22 from'../Components/images/country22.png';
import country23 from'../Components/images/country23.png';
import country24 from'../Components/images/country24.png';
import country25 from'../Components/images/country25.png';
import country26 from'../Components/images/26.png';
import country27 from'../Components/images/27.png';
import country28 from'../Components/images/28.png';
import country29 from'../Components/images/29.png';
import country30 from'../Components/images/30.png';
import country31 from'../Components/images/31.png';
import country32 from'../Components/images/32.png';
import country33 from'../Components/images/33.png';
import { Link } from "react-router-dom";

const Home =()=>{
    return(
    <>
    <div className="body">
     
  
{/* ---------------------------nav---------------------------------------------------------------- */}
 
              <div className="container ">
                 <div className="row pt-5">
                    <div className="col-2 align-content-center">
                    <div>
                    <img src={meal} className="w-100"/>
                    </div>
                    </div>
                 <div className="col-8 text-center">
                   <div className=""> 
                <h1 className="text-white">Welcome to TheMealDB</h1>
                <h6 className="text-center text-white">Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                We also offer a<span className="api"> free recipe API</span> for anyone wanting to use it, with additional features for subscribers.</h6>
                <button className="btn btn-warning py-2 px-5 text-primary"><span className="pay">Pay</span> <span className="pal">Pal</span></button>
                <h6 className="text-center text-white p-2">Click button above to upgrade free API to premium for $3 <br/>Currently (54 supporters)</h6>
             </div>
            </div>
             <div className="col-2 align-content-center ">
            <div>
            <img src={meal} className="w-100"/>
            </div>
           </div>
            </div>
        </div>
{/* -------------------------body----------------------------------- */}
<div className="container">
  <div className="line"></div>
</div>
     <div className="container ">
        <div className="row ">
     <div className="col-md-3 mx-auto mt-2 mb-2 col-10">   
        <div class="input-group ">
          <input type="text" class="form-control shadow-none " placeholder="Search for a Meal...." aria-label="Username" aria-describedby="basic-addon1"/>
         <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
        <Link to ="/SearchMoreitems"> <button className="btn btn-info ms-1">Moreitems</button> </Link>
         </div>
        
      </div>
      <p className="text-center "><img src={meals}/> <span className="fw-bold "> Total Meals: </span> 303 
          <span className="fw-bold"><img src={mea}/>  Total Ingredients:</span> 575
          <span className="fw-bold"> <img src={me}/> Images:</span> 303
          
        </p>
     </div>
</div>
<div className="container">
  <div className="line"></div>
</div>
{/* --------------------------------------total meals------------------------------------- */}
<div className="container meals ">
<h5 className="text-center text-white p-2">Latest Meals</h5>
    <div className="row mt-2">
     <div className="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto total ">
             <img src={late} className=" w-100 "/>
             <p className="">15-minute chicken & halloumi burgers</p>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
            <img src={late1}  className=" w-100"/>
            <p className="text-center">Lamb Pilaf (Plov)</p>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
         <Link to="/Starbarry"><img src={late2}  className=" w-100"/>
            <p className="text-center">Strawberries Romanoff</p> </Link>
        </div>
        <div className="col-12  col-sm-12 col-md-3 col-lg-3 mx-auto total">
            <img src={late3}  className=" w-100"/>
            <p className="text-center">Potato Salad (Olivier Salad)</p>
        </div>
         </div>
         </div>
         <div className="container meals">
    <div className="row mb-5">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto total ">
             <img src={late4} className=" w-100"/>
             <p className="text-center">Blini Pancakes</p>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
            <img src={late5}  className=" w-100"/>
            <p className="text-center">Fish Soup (Ukha)</p>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
            <img src={late6}  className=" w-100"/>
            <p className="text-center">Beetroot Soup (Borscht)</p>
        </div>
        <div className="col-12  col-sm-12 col-md-3 col-lg-3 mx-auto total">
            <img src={late7}  className=" w-100"/>
            <p className="text-center">Cabbage Soup (Shchi)</p>
        </div>
         </div>
         </div>
         <div className="container">
  <div className="line"></div>
</div>
   {/* ----------------------------Latest meals---------------------------------- */}           
   <div className="container meals">
   <h5 className="text-center text-white p-2">Popular Ingredients</h5>
    <div className="row mt-3">
      <div className="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto total ">
             <img src={chicken} className=" w-100"/>
             <p className="text-center">chicken</p>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
            <img src={Salmon}  className=" w-100"/>
            <p className="text-center">Salmon</p>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
            <img src={Beef}  className=" w-100"/>
            <p className="text-center">Beef</p>
        </div>
        <div className="col-12  col-sm-12 col-md-3 col-lg-3 mx-auto total">
            <img src={Pork}  className=" w-100"/>
            <p className="text-center">Pork</p>
        </div>
         </div>
         </div>
         <div className="container">
  <div className="line"></div>
</div>
         {/*---------------------------------------popular-----------------  */}
         <div className="container meals">
       <div className="row mt-3">
      <h5 className="text-center text-white p-2">Random Meals</h5>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto total  ">
             <img src={meal9} className=" w-100"/>
             <p className="text-center">Chivito uruguayo</p>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
            <img src={meal10}  className=" w-100"/>
            <p className="text-center">English Breakfast</p>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
            <img src={meal11}  className=" w-100"/>
            <p className="text-center">Honey Yogurt Cheesecake</p>
        </div>
        <div className="col-12  col-sm-12 col-md-3 col-lg-3 mx-auto total">
            <img src={meal12}  className=" w-100"/>
            <p className="text-center">Beef Mechado</p>
        </div>
         </div>
         </div>
         <div className="container meals">
    <div className="row mb-3">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto total ">
             <img src={meal13} className=" w-100"/>
             <p className="text-center">Eggplant Adobo</p>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
            <img src={meal14}  className=" w-100"/>
            <p className="text-center">Duck Confit</p>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
            <img src={meal15}  className=" w-100"/>
            <p className="text-center">Squash linguine</p>
        </div>
        <div className="col-12  col-sm-12 col-md-3 col-lg-3 mx-auto total">
            <img src={meal16}  className=" w-100"/>
            <p className="text-center">Oxtail with broad beans</p>
        </div>
         </div>
         </div>
         <div className="container">
  <div className="line"></div>
</div>
         {/* -------------------------Random Ingredients---------------- */}
         <div className="container meals ">
         <h5 className="text-center text-white p-2">Random Ingredient</h5>
        <div className="row mt-3">
             <div className="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto total ">
             <img src={Brisk} className=" w-100"/>
             <p className="text-center">Beef Brisket</p>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
            <img src={Must}  className=" w-100"/>
            <p className="text-center">Mustard Seeds</p>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
            <img src={ Fries}  className=" w-100"/>
            <p className="text-center">Fries</p>
        </div>
        <div className="col-12  col-sm-12 col-md-3 col-lg-3 mx-auto total">
            <img src={Jas}  className=" w-100"/>
            <p className="text-center">Jasmine Rice </p>
        </div>
         </div>
         </div>
         <div className="container">
  <div className="line"></div>
</div>
         {/* --------------Browse Country------------------------------ */}
         <div className="container mt-2">
         <h5 className="text-center text-white ">Browse Country</h5>
          <div className="row">
            <div className="col-10 text-center   mx-auto">
            
            <a href="#" className="text-decoration-none"><img src={country}/></a>
            <a href="#" className="text-decoration-none"><img src={country1}/></a>
            <a href="#" className="text-decoration-none"><img src={country2}/></a>
            <a href="#" className="text-decoration-none"><img src={country3}/></a>
            <a href="#" className="text-decoration-none"><img src={country4}/></a>
            <a href="#" className="text-decoration-none"><img src={country5}/></a>
            <a href="#" className="text-decoration-none"><img src={country6}/></a>
            <a href="#" className="text-decoration-none"><img src={country7}/></a>
            <a href="#" className="text-decoration-none"><img src={country8}/></a>
            <a href="#" className="text-decoration-none"><img src={country9}/></a>
            <a href="#" className="text-decoration-none"><img src={country10}/></a>
            <a href="#" className="text-decoration-none"><img src={country11}/></a>
            <a href="#" className="text-decoration-none"><img src={country12}/></a>
            <a href="#" className="text-decoration-none"><img src={country13}/></a>
            <a href="#" className="text-decoration-none"><img src={country14}/></a>
            <a href="#" className="text-decoration-none"><img src={country15}/></a>
            <a href="#" className="text-decoration-none"><img src={country16}/></a>
           <a href="#" className="text-decoration-none"><img src={country17}/></a>
            <a href="#" className="text-decoration-none"><img src={country18}/></a>
            <a href="#" className="text-decoration-none"><img src={country19}/></a>
            <a href="#" className="text-decoration-none"><img src={country20}/></a>
            <a href="#" className="text-decoration-none"><img src={country21}/></a>
            <a href="#" className="text-decoration-none"><img src={country22}/></a>
            <a href="#" className="text-decoration-none"><img src={country23}/></a>
            <a href="#" className="text-decoration-none"><img src={country24}/></a>
            <a href="#" className="text-decoration-none"><img src={country25}/></a>
            <a href="#" className="text-decoration-none"><img src={country26}/></a>
            <a href="#" className="text-decoration-none"><img src={country27}/></a>
            <a href="#" className="text-decoration-none"><img src={country28}/></a>
            <a href="#" className="text-decoration-none"><img src={country29}/></a>
            <a href="#" className="text-decoration-none"><img src={country30}/></a>
            <a href="#" className="text-decoration-none"><img src={country31}/></a>
            <a href="#" className="text-decoration-none"><img src={country32}/></a>
            <a href="#" className="text-decoration-none"><img src={country33}/></a>
           
            </div>
             </div>
          
         </div>
         {/* -----------------Browse By Name---------------------- */}
         <div className=" browse conatiner">
                <h5 className="text-center text-white">Browse By Name</h5>
                <h5 className="text-center mt-3">
                  <span className="alpha ">A</span>     <span className="text-white ">/ </span>
                  <span className="alpha ">B</span>     <span className="text-white">/ </span>  
                  <span className="alpha  ">C</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">D</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">E</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">F</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">G</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">H</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">I</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">J</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">K</span>     <span className="text-white">/ </span> 
                  <span className="alpha ">L</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">M</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">N</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">O</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">P</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">Q</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">R</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">S</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">T</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">U</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">V</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">W</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">X</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">Y</span>     <span className="text-white">/ </span>  
                  <span className="alpha ">Z</span>    
                </h5>
                </div> 
  {/* -------------------footer------------------------- */}
    
     </div>
  </>


    )
}
export default Home
