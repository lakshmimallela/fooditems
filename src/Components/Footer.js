import React from "react"
import bottom from'../Components/images/bottom logo.png';
import bottom1 from'../Components/images/bottom logo1.png';
import bottom2 from'../Components/images/bottom logo2.png';
import country from'../Components/images/country.png';
const Footer=()=>{
    return(
<>
<footer className="">
<div className="container pt-4">
  <div className="row">
    <div className="col-md-3 ">
      <div className="">
    <p className="flag">© 2024 TheMealDB <br/>
 Proudly built in the UK <a href="#" className="text-decoration-none"><img src={country}/></a></p>
  </div>
</div>
<div className="col-md-6">
  <div className="Socials">
    <p className="text-center">Socials:
      
      <a href="#" className="p-1 text-decoration-none">
      
      <i class="fa-brands fa-square-facebook" ></i>
      </a>
      <a href="#" className="p-1 text-decoration-none">
        <i className="fa-brands fa-square-twitter" ></i>
      </a>
      <a href="#" className="p-1 text-decoration-none">
        <i className="fa-brands fa-github-alt" ></i>
      </a>
    </p>
  </div>
  <div className="mx-auto text-center mt-4 mb-lg-5">
    <span>
      <a href="#" className=" text-decoration-none "><img src={bottom}/></a>
    </span>
    <span>
      <a href="#" className=" text-decoration-none"><img src={bottom1}/></a>
    </span>
    <span>
      <a href="#" className=" text-decoration-none"><img src={bottom2}/></a>
    </span>
  </div>
  </div> 
  <div className="  col-md-3 mt-4 mb-3 mt-lg-0 mt-md-0 ">
  <a href="#" className=" ending p-2 text-decoration-none ">About</a>
  <a href="#" className=" ending p-2 text-decoration-none ">Faq</a>
  <a href="#" className=" ending p-2 text-decoration-none ">Contact</a> 
  </div>
  </div>
  </div>

</footer>

</>
    )
}
export default Footer