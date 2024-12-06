import React,{useState} from "react";
import Data from './Searches.json';
const SearchMoreitems =()=>{
    const[search,setSearch] = useState("")
     return(
        <div className="body searchforitems">
            <div className="container">
                <div className="row">
                    <div className="col-5 m-auto">
                        <h3 className="text-white pt-2">Search for Meals Items</h3>
                        <input type="text" placeholder="Search Items..." className="w-100 my-3 bg-transparent shadow-none text-white fw-bold border-0 border-bottom ps-1" value={search}
                        onChange={(e)=>setSearch(e.target.value)}/>
                       
                           {Data
                .filter((name)=>name.title.includes(search))
                .map((loc)=>(
                    <p className="text-start fw-bold">{loc.title}</p>
                ))}

                    </div>
                </div>
            </div>
        </div>
     )
    }
export default SearchMoreitems


