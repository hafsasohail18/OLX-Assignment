import React, { Component } from 'react';
import {Header, Logo} from "../components/Header";
import DropdownData from '../components/DropdownData';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { Link } from "react-router-dom";



class AdComponent extends Component {

    render(){
         return (
            <div>
                
                <h1 style={{textAlign:"center",fontSize:"25px",fontWeight:"bold"}}>POST YOUR AD</h1>
  <br></br>
                <table className="table-form">
                    <tr>
                       <th>CHOOSE A CATEGORY </th>
                    </tr>
                    <tr>
      
                    <td>

<div className="dropdown dropright dropdown-style">
<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Mobile
</button>
<div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
<Link to="/AdDetail" className="dropdown-item" >Tablets</Link>
<Link to="/AdDetail" className="dropdown-item" >Accessories</Link>
<Link to="/AdDetail" className="dropdown-item">Mobile Phones</Link>
</div>
</div>


      <div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Vehicles
  </button>
  <div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item">Cars</Link>
    <Link to="/AdDetail" className="dropdown-item" >Cars on Installments</Link>
    <Link to="/AdDetail" className="dropdown-item" >Cars Accessories</Link>
    <Link to="/AdDetail" className="dropdown-item" >Spare Parts</Link>
    <Link to="/AdDetail" className="dropdown-item" >Buses, Vans & Trucks</Link>
    <Link to="/AdDetail" className="dropdown-item" >Rickshaws</Link>
    <Link to="/AdDetail" className="dropdown-item" >Other Vehicles</Link>
    <Link to="/AdDetail" className="dropdown-item">Boats</Link>
    <Link to="/AdDetail" className="dropdown-item" >Tractors & Trailers</Link>
  </div>
</div>

<div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Property for Sale
  </button>
  <div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item">Land & Plots</Link>
    <Link to="/AdDetail" className="dropdown-item" >Houses</Link>
    <Link to="/AdDetail" className="dropdown-item">Apartments & Flats</Link>
    <Link to="/AdDetail" className="dropdown-item" >Shops - Offices - Commercial Spaces</Link>
    
  </div>
</div>


<div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Property for Rent
  </button>
  <div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item" >Houses</Link>
    <Link to="/AdDetail" className="dropdown-item" >Appartments & Flats</Link>
    <Link to="/AdDetail" className="dropdown-item">Portions & Floors</Link>
    <Link to="/AdDetail" className="dropdown-item" >Shops- Offices- Commercial Space</Link>
    <Link to="/AdDetail" className="dropdown-item">Rooms</Link>
    <Link to="/AdDetail" className="dropdown-item">Roommates & Paying Guests</Link>
    <Link to="/AdDetail" className="dropdown-item">Vacation Rentals- Guest Houses</Link>
    <Link to="/AdDetail" className="dropdown-item" >Land & Plots</Link>
    
  </div>
</div>

<div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Electronics & Home Appliances
  </button>
  <div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item" >Computers & Accessories</Link>
    <Link to="/AdDetail" className="dropdown-item">TV-Video-Audio</Link>
    <Link to="/AdDetail" className="dropdown-item">Cameras & Accessories</Link>
    <Link to="/AdDetail" className="dropdown-item" >Games & Entertainment</Link>
    <Link to="/AdDetail" className="dropdown-item">Other Home Appliances</Link>
    <Link to="/AdDetail" className="dropdown-item" >Generators,UPS & Power Solutions</Link>
    <Link to="/AdDetail" className="dropdown-item" >Kitchen Appliances</Link>
    <Link to="/AdDetail" className="dropdown-item" >AC & Coolers</Link>
    <Link to="/AdDetail" className="dropdown-item">Fridges & Freezers</Link>
  </div>
</div>
<div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Bikes
  </button>
  <div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item" >Motorcycles</Link>
    <Link to="/AdDetail" className="dropdown-item">Spare Parts</Link>
    <Link to="/AdDetail" className="dropdown-item" >Bicycles</Link>
    <Link to="/AdDetail" className="dropdown-item" >ATV & Quads</Link>
    <Link to="/AdDetail" className="dropdown-item" >Scooters</Link>
  </div>
</div>
<div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Business,Industrial & Agriculture
  </button>
  <div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item" >Business for Sale</Link>
    <Link to="/AdDetail" className="dropdown-item" >Food & Industrial</Link>
    <Link to="/AdDetail" className="dropdown-item" >Construction & Heavy Machinery</Link>
    <Link to="/AdDetail" className="dropdown-item" >Agriculture</Link>
    <Link to="/AdDetail" className="dropdown-item">Other Business & Industry</Link>
    <Link to="/AdDetail" className="dropdown-item">Medical & Pharma</Link>
  </div>
</div>
<div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Services
  </button>
  <div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item" >Educatiom & Classes</Link>
    <Link to="/AdDetail" className="dropdown-item">Travel & Visa</Link>
    < Link to="/AdDetail" className="dropdown-item">Car Rental</Link>
    <Link to="/AdDetail" className="dropdown-item" >Drivers & Taxi</Link>
    <Link to="/AdDetail" className="dropdown-item">Web Development</Link>
    <Link to="/AdDetail" className="dropdown-item" >Other Services</Link>
    <Link to="/AdDetail" className="dropdown-item" >Electronics & Computer Repair</Link>
    <Link to="/AdDetail" className="dropdown-item" >Event Services</Link>
    <Link to="/AdDetail" className="dropdown-item" >Health & Beauty</Link>
    <Link to="/AdDetail" className="dropdown-item" >Maids & Domestic Help</Link>
    <Link to="/AdDetail" className="dropdown-item" >Movers & Packers</Link>
    <Link to="/AdDetail" className="dropdown-item" >Home & Office Repair</Link>
    <Link to="/AdDetail" className="dropdown-item" >Catering & Restaurant</Link>
    <Link to="/AdDetail" className="dropdown-item" >Farm & fresh Food</Link>
  </div>
</div>
<div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Jobs
  </button>
  <div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item" >Online</Link>
    <Link to="/AdDetail" className="dropdown-item" >Marketing</Link>
    <Link to="/AdDetail" className="dropdown-item">Advertising & PR</Link>
    <Link to="/AdDetail" className="dropdown-item" >Education</Link>
    <Link to="/AdDetail" className="dropdown-item" >Custom Services</Link>
    <Link to="/AdDetail" className="dropdown-item" >Sales</Link>
    <Link to="/AdDetail" className="dropdown-item" >IT & Networking</Link>
    <Link to="/AdDetail" className="dropdown-item" >Hotels & Administration</Link>
    <Link to="/AdDetail" className="dropdown-item" >Clerical & Administration</Link>
    <Link to="/AdDetail" className="dropdown-item" >Human Resources</Link>
    <Link to="/AdDetail" className="dropdown-item">Accounting & Finance</Link>
    <Link to="/AdDetail" className="dropdown-item" >Manufacturing</Link>
    <Link to="/AdDetail" className="dropdown-item" >Medical</Link>
    <Link to="/AdDetail" className="dropdown-item" >Domestic Staff</Link>
    <Link to="/AdDetail" className="dropdown-item">Part Time</Link>
    <Link to="/AdDetail" className="dropdown-item" >Other Jobs</Link>
  </div>
</div>
<div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Animals
  </button>
  <div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item" >Fish & Aquariums</Link>
    <Link to="/AdDetail" className="dropdown-item" >Birds</Link>
    <Link to="/AdDetail" className="dropdown-item">Hens & Aseel</Link>
    <Link to="/AdDetail" className="dropdown-item">Cats</Link>
    <Link to="/AdDetail" className="dropdown-item" >Dogs</Link>
    <Link to="/AdDetail" className="dropdown-item" >Livestock</Link>
    <Link to="/AdDetail" className="dropdown-item">Horses</Link>
    <Link to="/AdDetail" className="dropdown-item" >Pet Food & Accessories</Link>
    <Link to="/AdDetail" className="dropdown-item" >Other Animals</Link>
  </div>
</div>
<div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Furniture & Home Decor
  </button>
  <div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item" >Sofa & Chairs</Link>
    <Link to="/AdDetail" className="dropdown-item" >Beds & Wardrobes</Link>
    <Link to="/AdDetail" className="dropdown-item" >Home Decoration</Link>
    <Link to="/AdDetail" className="dropdown-item" >Tables & Dining</Link>
    <Link to="/AdDetail" className="dropdown-item" >Garden & Outdoor</Link>
    <Link to="/AdDetail" className="dropdown-item" >Painting & Mirrors</Link>
    <Link to="/AdDetail" className="dropdown-item" >Rugs & Carpets</Link>
    <Link to="/AdDetail" className="dropdown-item" >Curtains & Blinds</Link>
    <Link to="/AdDetail" className="dropdown-item" >Office Furniture</Link>
    <Link to="/AdDetail" className="dropdown-item" >Other Household Items</Link>
  </div>
</div>
<div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Fashion & Beauty
  </button>
  <div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item" >Accessories</Link>
    <Link to="/AdDetail" className="dropdown-item" >Clothes</Link>
    <Link to="/AdDetail" className="dropdown-item" >Footwear</Link>
    <Link to="/AdDetail" className="dropdown-item" >Jewellery</Link>
    <Link to="/AdDetail" className="dropdown-item" >make Up</Link>
    <Link to="/AdDetail" className="dropdown-item" >Skin & Hair</Link>
    <Link to="/AdDetail" className="dropdown-item" >Watches</Link>
    <Link to="/AdDetail" className="dropdown-item">Wedding</Link>
    <Link to="/AdDetail" className="dropdown-item" >Lawn & Pret</Link>
    <Link to="/AdDetail" className="dropdown-item" >Couture</Link>
    <Link to="/AdDetail" className="dropdown-item" >Other Fashion</Link>
  </div>
</div>
<div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Books, Sports & Hobbies
  </button>
  <div className="dropdown-menu menu-style" aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item" >Books & Magazines</Link>
    <Link to="/AdDetail" className="dropdown-item">Musical Instruments</Link>
    <Link to="/AdDetail" className="dropdown-item" >Sports Equipment</Link>
    <Link to="/AdDetail" className="dropdown-item">Gym & Fitness</Link>
    <Link to="/AdDetail" className="dropdown-item" >Other Hobbies</Link>
  </div>
</div>
<div className="dropdown dropright dropdown-style">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Kids
  </button>
  <div className="dropdown-menu menu-style " aria-labelledby="dropdownMenuButton">
    <Link to="/AdDetail" className="dropdown-item" href="#">Kids Furniture</Link>
    <Link to="/AdDetail" className="dropdown-item" href="#">Toys</Link>
    <Link to="/AdDetail" className="dropdown-item" href="#">Prams & Walkers</Link>
    <Link to="/AdDetail" className="dropdown-item" href="#">Swings & Slides</Link>
    <Link to="/AdDetail" className="dropdown-item" href="#">Kids Bikes</Link>
    <Link to="/AdDetail" className="dropdown-item" href="#">Kids Accessories</Link>
  </div>
</div>

</td>



                    </tr>
                </table>
            </div>
           
        )
    }
}




    
        


              
                  
              {/*{
     DropdownData.map((val,ind) => {
         return <a href='#' key={ind}
         options= {val.options}
         ></a>
     })
} */}



 
{/* {DropdownData.map((val,ind) => {
         return <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
         <a className="dropdown-item" key={ind} href="#">{val.options}</a>;
         </div>
       })} */}


        


class PostAd extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <i class="fas fa-arrow-left"></i>
            <Logo></Logo>
            </nav>
            <br></br>
            <AdComponent></AdComponent>
            </div>
        );
    }
}

export default PostAd;