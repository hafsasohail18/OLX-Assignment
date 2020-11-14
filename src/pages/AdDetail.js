import { ready } from 'jquery';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {Header, Logo} from "../components/Header";
import camera from '../ui/camera.png';



class Detail extends React.Component {

   
    render() {
        return(
            <div>
                
                <h1 style={{textAlign:"center",fontSize:"25px",fontWeight:"bold",color:"#002f34"}}>POST YOUR AD</h1>
  <br></br>
 <table className="detail-style">
     <tr>
         <td>
             <th style={{fontSize:"20px",fontWeight:"bold",color:"#002f34",paddingTop:"15px"}}>SELECTED CATEGORY</th>
        <p id="name"></p>
     </td>

     </tr>
     </table> 
     <table className="some-detail">
         <tr>
             <td>
              <h2 style={{fontSize:"20px",fontWeight:"bold",color:"#002f34",marginTop:"20px"}}>INCLUDE SOME DETAILS</h2>
              <p>Condition*</p>
              <div className="DIV">
              <button type="button" className="btn btn-light inline-style">New</button>
              <button type="button" className="btn btn-light inline-style">Used</button>
              </div>
              <br></br>
              <p>Ad title*</p>
              <input type="text" id="title" className="title-input"></input>
              <p style={{fontSize:"12px",color:"gray"}}>Mention the key features of your item (e.g. brand, model, age, type)</p>
              <p>Description*</p>
              <textarea rows="4" cols="50" className="des-input"></textarea>
              <p style={{fontSize:"12px",color:"gray"}}>A minimum length of 20 characters is required. Please edit the field.</p>
             </td>
         </tr>
     </table>
     <table className="price-style">
         <tr>
             <td>
                 <h2 style={{fontSize:"20px",fontWeight:"bold",color:"#002f34",marginTop:"20px"}}>SET A PRICE</h2>
                 <p style={{color:"gray"}}>Price*</p>
                 <label style={{position: "relative",left:"25px",borderRight:"2px solid gray",color:"gray"}}>Rs</label>
                 <input className="title-input" style={{textIndent:"25px"}}></input>
                 <br/><br/>
             </td>
         </tr>
     </table>
     <table  className="images-style">
         <tr>
             <td>
                 <h2 style={{fontSize:"20px",fontWeight:"bold",color:"#002f34",marginTop:"20px"}} > UPLOAD UP TO 12 PHOTOS</h2>
                 <img src={camera} alt="camera" style={{height:"50px",width:"50px",margin:"20px"}} />
                 <input type="file" id="actual-btn"/>
                 <p style={{color:"red",fontSize:"13px"}}>This field is mandatory</p>
             </td>
         </tr>
     </table>
     <table  className="location-style">
         <tr>
             <td>
                 <h2 style={{fontSize:"20px",fontWeight:"bold",color:"#002f34",marginTop:"20px"}} > CONFIRM YOUR LOCATION</h2>
                 <div className="loc-inline">
                 <h6 className="list">LIST</h6>
                 <h6 className="curr-loc">CURRENT LOCATION</h6>
                 </div>
                 <p>State*</p>
                 <form >
  <select className="my-select" >
    <option value="">Azad Kashmir</option>
    <option value="">Balochistan</option>
    <option value="">Islamabad Capital Territory</option>
    <option value="">Khyber Pakhtunkhwa</option>
    <option value="">Northern Areas</option>
    <option value="">Punjab</option>
    <option value="">Sindh</option>
  </select>
</form>

 <p>City*</p>
    <form>
  <select className="my-select">
    <option value="">Azad Kashmir</option>
    <option value="">Balochistan</option>
    <option value="">Islamabad Capital Territory</option>
    <option value="">Khyber Pakhtunkhwa</option>
    <option value="">Northern Areas</option>
    <option value="">Punjab</option>
    <option value="">Sindh</option>
  </select>
</form>
<p style={{color:"red",fontSize:"13px"}}>This field is mandatory</p>


             </td>
         </tr>
     </table>
     
     <table  className="review-style">
         <tr>
             <td>
                 <h2 style={{fontSize:"20px",fontWeight:"bold",color:"#002f34",marginTop:"20px"}} >REVIEW YOUR DETAILS </h2>
                 <img src={camera} alt="camera" style={{height:"50px",width:"50px",margin:"20px"}} />
                 <input type="file" id="actual-btn"/>
                 <p style={{color:"red",fontSize:"13px"}}>This field is mandatory</p>
             </td>
         </tr>
     </table>
     <table className="post-style">
         <tr>
            <td>
    <Button className="post-btn" style={{margin:"20px"}}>Post now</Button>
    </td>
    </tr>
    </table>
  </div>
  
        )
    }
}









class AdDetail extends React.Component {
    render() {
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <i class="fas fa-arrow-left"></i>
            <Logo></Logo>
            </nav>
            <br></br>
            <Detail></Detail>
            </div> 
        )
    }
}

export default AdDetail;