import axios from "axios";
import React,{useEffect,useState} from "react";
const Starbarry = ()=>{
    const[data, setData]=useState([]);
    useEffect (()=>{
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=Strawberries')
      .then(res=> setData(res.data.meals));
    })
return(
<div className="Strawberries body">
        {data.map(item=>(
        <div className="container mealsapi py-3">
          <div className="row text-white  ">
            <div className="col-5">
              <div className="flog">
                {/* <h5 className="headline"> <a className="text-decoration-none" href="#"> 
                   <img src={}/> </a> {item.strMeal}</h5> */} 
              </div>
            </div>
            <div className="col-7">
              <div>
                <h5 className="">Ingredients</h5>
             </div>
            </div>
                <div className="col-5 ">
                    <div className=" imgs">
                     <a href="#"> <img src={item.strMealThumb} className="w-100"/></a>
                    </div>
            <div className="mt-2">
              <a href="#" className="py-0 btn btn-light">FRUITY</a>
            </div>
            <div className="row">
              <div className="Arrow">
                {/* <a href="#"><img src={Arrow_Left}/></a>
                <a href="#"><img src={Arrow_Right}/></a> */}
              </div>
            </div>
                </div>
                <div className=" Ingredients col-7 vegeraion   ">
                  <div className="row text-center">
                    <div className="col-4 mx-auto img">
                      {/* <a href="#" className="text-decoration-none">
                      <img src={Strawberries} className="w-100"/>{item.strMeasure1} Strawberries
                      </a> */}
                    </div>
                    <div className=" col-4  img">
                    {/* <a href="#" className="text-decoration-none">
                      <img src={Suger} className="w-100"/>{item.strMeasure2} Sugar
                      </a> */}
                      
                    </div>
                    <div className="col-4 img">
                    {/* <a href="#" className="text-decoration-none">
                      <img src={Marnier} className="w-100"/>{item.strMeasure3} Marnier
                      </a> */}
                      
                    </div>
                    <div className="col-4  img">
                    {/* <a href="#" className="text-decoration-none">
                      <img src={Cream} className="w-100"/>{item.strMeasure4}Cream
                      </a> */}
                    </div>
                    <div className="col-4   img">
                    {/* <a href="#" className="text-decoration-none">
                      <img src={Sourcream} className="w-100"/>{item.strMeasure5} Sour Cream
                      </a> */}
                    </div>
                    </div>
                </div>
            </div>
            
            
            <div className="col-md-12 mx-auto">
              <div className="text-center">
                <h5 className="text-white">Instractions</h5>
                <p className="mt-4 text-white">
                {item.strInstructions}
                </p>
                
              </div>

            </div>
        </div>
        ))}


        
            
</div>
    )

}
export default Starbarry